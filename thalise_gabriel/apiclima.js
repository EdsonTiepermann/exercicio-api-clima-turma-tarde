        const cidade = document.querySelector('#city_name');

        //Pagamos o elemento do input button buscar
        const botao = document.querySelector('#buscar');
        
        //funcao para verificar e alimentar os campos
        const showData = function(result){
            //o for in para tratarmos um objeto, o for in pega o resultado (result)
            //e insere na variavel campo
            for(const campo in result) {
                console.log(campo)
                //nesse if verifico dinamicamente se todos os campos da api
                //eu utilizo nos iguais
                if (document.querySelector('#' + campo)){
                    //Pegamos dinamicamente o elemento dos imputs e passamos o
                    //value dinamicamente, dizendo q o resultado é um arrayy e passando 
                    //a variavel campo como posição
                    document.querySelector('#' + campo).value = result[campo]
                    //console.log(campo);
                }
            }
        }

        //Evento criado para realizar o envio da requisição
        //o (e) é a captura do evento 
        botao.addEventListener('click',function(e)
    {
        //cep.addEventListener('blur',function(e)){
            //replace função para substituir um carater
            let search = cidade.value;
        
            //crio o objeto com as prioridades do envio para o ajax
            const options = {
                method:'GET',
                mode:'cors',
                cache:'default'
        
            }
            //buscar - acessa a url de onde será acessado, nesse caso a api 
            //o  viaCEPT
            //passa por parametro o cep em questao, e passa os
            // paramtreos necessarios, como por exemplo op CORS
            //serve para dizer que esta trabalhando com servidores
            //diferentes, como se fosse uma permissao de acesso
            fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=7d4793ad&city_name=${search}/json/`, options)
        
            //quando utilizamos o fetch ele retorna uma promessa,
            //ele é assincrono, entao fazemos as verificaçoes abaixo
            //entao faça algo, nesse caso cria uma funçao onde prgo o
            //"response" a resposta, no formato jso
            .then(function(response) {
                response.json()

                //o json tbem retorna uma promessa, então precisamos
                //verificar se deu certo
                .then(function(data) {
                    showData(data)
                    console.log(data)
                })
            })
        
            //se der errado faz outra coisa
            .catch(function(e) {
                console.log('Error: ' + e.message);
            })
            //console.log(search);
    })