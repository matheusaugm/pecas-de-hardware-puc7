onload = () =>{
    //Parte do código que registra as perguntas, by: Gabriel
    formGroupExampleInput.value=localStorage.getItem('cadastro');
    pergunta.onsubmit = (evento)=>{
        localStorage.setItem('cadastro',formGroupExampleInput.value);
        evento.preventDefault();
        
        //Parte do código que registra a pergunta, by: Carlos
        let printar = document.getElementById("perg_feitas");
        $(printar).append(`<p>${formGroupExampleInput.value}</p>`);
            
        evento.preventDefault();
    };

};