const dadosIniciais = {
    "data":
    {
        "id": 1,
        "nome": "Leanne",
        "sobrenome": "Graham",
        "cep": "51346587",
        "anonimato": "Sim",
        "email": "Sincere@april.biz",
        "celular": "1-770-736-8031",
        "senha": "Leanne",

    },
};
const usertest = '{"id": 1,"tipo": 1, "nome": "Matheus","sobrenome": "Augusto","foto": "null","cep": "51346587","email": "Sincere@april.biz","celular": "31 992221287","senha": "teste123","status": 2}';

function setName() {
    $("#sidebar_username").html(user.nome + ' ' + user.sobrenome);
}