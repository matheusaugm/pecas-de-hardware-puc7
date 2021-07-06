    onload=()=>{
        cadastro.onsubmit=(evento)=>{
        let usar =
        localStorage.setItem('cadastro',titulo2.value);
        if(cadastro==null){
            console.log(erro);
        }
        localStorage.setItem('cadastro2',descrição.value);
        if(cadastro==null){
            console.log(erro);
        }
        localStorage.setItem('cadastroseletor1',computer__type.value);
        if(cadastro==null){
            console.log(erro);
        }
        localStorage.setItem('cadastroseletor2',computer___type.value);
        if(cadastro==null){
            console.log(erro);
        }
        localStorage.setItem('Valor',Valor.value);
        if(cadastro==null){
            console.log(erro);
        }
        localStorage.setItem('Localização',Localização.value);
        if(cadastro==null){
            console.log(erro);
        }
        localStorage.setItem('foto',foto.value);
        if(cadastro==null){
            console.log(erro);
        }
        evento.preventDefault();
    };
    computer__type.onchange=()=>console.log('change',computer__type.value);
        computer__type.oninput=()=>console.log('input',computer__type.value);
        titulo2.onchange =()=>console.log('change',titulo2.value);
            descrição.onchange =()=>console.log('change',descrição.value);
                titulo2.oninput =()=>console.log('input',titulo2.value);
                        descrição.oninput =()=>console.log('input',descrição.value);
                        Localização.onchange=()=>console.log('change', Localização.value);
                        Localização.oninput =()=>console.log('input',Localização.value);
                        computer___type.onchange=()=>console.log('change', computer___type.value);
                        computer___type.oninput =()=>console.log('input',computer___type.value);
                        Valor.onchange=()=>console.log('change', Valor.value);
                        Valor.oninput=()=>console.log('input', Valor.value);
                        foto.onchange=()=>console.log('change', foto.value);
                        foto.oninput=()=>console.log('input', foto.value);
                        
};
