//Pegamos o elemento do input cep
const cidade = document.querySelector('#cid');

//Pegamos o elemento do input button buscar
const buscar = document.querySelector('#buscar');

//evento criado para realizar o envio da requisição o (e) [e a captura do evento
buscar.addEventListener('click', function(e) {
    
    // cep.addEventlistener('blur, function name(params) {
    let search = cid.value.replace('-','');

    //crio o objeto com as propriedades do envio para o AJAX

    const options ={
        method: 'get',
        mode: 'cors',
        cache: 'default'
    }

    //buscar - acessa a url de onde sera acessado, nesse caso a API viaCEPT,
    //passa por parameto o cep em questao, e passa os parametros necessarios, como por exemplo op CORS, serve para dizer que esta trabalhando com os servidores diferentes, como se fosse uma permissao de acesso
    fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=dbf823dc&city_name=Concatena_com_a_variavel, options`)

    //quando utilizamos o fetch ele retorna uma promessa, ele e assincrono, entao fazemos as verificacoes avaixo
    //entáo faca algo, nesse caso crio uma funcao onde pego o "response" a resposta, no formato json
    .then(function(response) {
        response.json()

        //o json tambem retorna uma promessa, entao precisamos verificar se der certo nesse caso retorna os dados para nos
        .then(function(data) {
            console.log(data);
        })
    })

//se der errado faz outra coisa
.catch(function(e) {
    console.log('Error: ' + e.message);
    //console.log(search);

})

})