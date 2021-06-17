//
//
// Disciplina: Trabalho Interdisciplinar - Aplicações Web
// Professor: Rommel Vieira Carneiro (rommelcarneiro@gmail.com)
//
// Código LoginApp utilizado como exemplo para alunos de primeiro período 
// Obtem os dados doo
let login = document.getElementById('txt_login');
let nome = document.getElementById('txt_nome');
let sobrenome = document.getElementById('txt_sobrenome');
let email = document.getElementById('txt_email');
let senha = document.getElementById('txt_senha');
let senha2 = document.getElementById('txt_senha2');
let genre = document.getElementById('select_genre');
let date = document.getElementById('birth_date');
let phone = document.getElementById('txt_phone');
let cep = document.getElementById('txt_cep');


function salvaLogin(event) {
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault();
    
    // Obtem os dados do formulário
    let loginValue = login.value.trim();
    let nomeValue = nome.value.trim();
    let sobrenomeValue = sobrenome.value.trim();
    let emailValue = email.value.trim();
    let senhaValue = senha.value.trim();
    let senha2Value = senha2.value.trim();
    let genreValue = genre.value.trim();
    let dateValue = date.value.trim();
    let phoneValue = phone.value.trim();
    let cepValue = cep.value.trim();

    if (nomeValue == '') {
        alert("Nome invalido.");
        return
    }

    if (sobrenomeValue == '') {
        alert("Sobrenome invalido.");
        return
    }

    

    if (genreValue == '') {
        alert("Favor escolher um genero.");
        return
    }

    if (dateValue == '') {
        alert("Favor escolher uma data valida");
        return
    }

    if (phoneValue.length < 8) {
        alert("Celular invalido.");
        return
    }

    if (cepValue < 6) {
        alert("Cep invalido.");
        return
    }

  

    if (loginValue == '') {
        alert("Login invalido.");
        return
    }

    if (emailValue == '') {
        alert("Email invalido.");
        return
    }

    else if (!isEmail(emailValue)) {
        alert("Email escrito errado");
        return
    }

    if (senhaValue.length < 5) {
        alert("Senha invalida");
        return
    }

    if (senhaValue != senha2Value) {
        alert('As senhas informadas não conferem.');
        return
    }

    // Adiciona o usuário no banco de dados

    addUser(nomeValue, sobrenomeValue, loginValue, senhaValue, emailValue, genreValue, dateValue, phoneValue, cepValue);
    alert('Usuário salvo com sucesso.');
}

function isEmail(email) {
    return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(email)
}


// Associar salvamento ao botao
document.getElementById('btn_salvar').addEventListener('click', salvaLogin);

// Página inicial de Login
const LOGIN_URL = "index.html";

// Objeto para o banco de dados de usuários baseado em JSON
var db_usuario = {};

// Objeto para o usuário corrente
var usuarioCorrente = {};

// função para gerar códigos randômicos a serem utilizados como código de usuário
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


// Dados de usuários para serem utilizados como carga inicial
const dadosIniciais = {
    usuarios: [
        {
            "id": generateUUID(),
            "login": "admin",
            "senha": "123",
            "nome": "Administrador do Sistema",
            "sobrenome": "",
            "email": "admin@abc.com",
            "preco": "",
            "genero": "",
            "data": "",
            "telefone": "",
            "cep": "",
            "sobre": "",
            "sobretrab": ""
        },
        { "id": generateUUID(), "login": "user", "senha": "123", "nome": "Usuario Comum", "email": "user@abc.com" },
    ]
};


// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initLoginApp() {
    // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
    }

    // PARTE 2 - INICIALIZA BANCO DE DADOS DE USUÁRIOS
    // Obtem a string JSON com os dados de usuários a partir do localStorage
    var usuariosJSON = localStorage.getItem('db_usuariospecas');

    // Verifica se existem dados já armazenados no localStorage
    if (!usuariosJSON) {  // Se NÃO há dados no localStorage

        // Informa sobre localStorage vazio e e que serão carregados os dados iniciais
        alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');

        // Copia os dados iniciais para o banco de dados 
        db_usuariospecas = dadosIniciais;

        // Salva os dados iniciais no local Storage convertendo-os para string antes
        localStorage.setItem('db_usuarios', JSON.stringify(dadosIniciais));
    }
    else {  // Se há dados no localStorage

        // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
        db_usuariospecas = JSON.parse(usuariosJSON);
    }
};

function addUser(nome, sobrenome, login, senha, email, genre, date, phone, cep) {

    // Cria um objeto de usuario para o novo usuario 
    let newId = generateUUID();
    let usuario = {
        "id": newId,
        "login": login,
        "senha": senha,
        "nome": nome,
        "sobrenome": sobrenome,
        "email": email,
        "genero": genre,
        "data": date,
        "telefone": phone,
        "cep": cep,
    };

    // Inclui o novo usuario no banco de dados baseado em JSON
    db_usuariospecas.usuarios.push(usuario);

    // Salva o novo banco de dados com o novo usuário no localStorage
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuariospecas));
}

// Inicializa as estruturas utilizadas pelo LoginApp
initLoginApp();