const cidadeInput = document.querySelector('#cidade');

        //Pagamos o elemento do input button buscar
        const botao = document.querySelector('#buscar');
        
        //Evento criado para realizar o envio da requisição
        //o (e) é a captura do evento 
        botao.addEventListener('click',function(e)
    {
        //cep.addEventListener('blur',function(e)){
            //replace função para substituir um carater
            let cidade = cidadeInput.value.repalce('-','');
        
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
            fetch('https://api.hgbrasil.com/weather?format=json-cors&key=7d4793ad&city_name=${cidade}', options)
        
            //quando utilizamos o fetch ele retorna uma promessa,
            //ele é assincrono, entao fazemos as verificaçoes abaixo
            //entao faça algo, nesse caso cria uma funçao onde prgo o
            //"response" a resposta, no formato jso
            .then(function(response) {
                response.json();
                return response.json
            })
                //o json tbem retorna uma promessa, então precisamos
                //verificar se deu certo
                then(function(data) {
                    document.querySelector('#cidade-dados').textContent = data.results.city_name;
                    document.querySelector('#data-dados').textContent = data.results.date;
                    document.querySelector('#hora-dados').textContent = data.results.time;
                    document.querySelector('#temperatura-dados').textContent = '${data.results.temp}ºC';
                    document.querySelector('#condicao-dados').textContent = data.results.description;
                    document.querySelector('#amanhecer-dados').textContent = data.results.sunrise;
                    document.querySelector('#entardecer-dados').textContent = data.results.sunset;
                })
        
            //se der errado faz outra coisa
            .catch(function(e) {
                console.log('Error: ' + e.message);
            })
            //console.log(search);
    })