
const cidade = document.querySelector('#cidade');
const botao = document.querySelector('#buscar')

botao.addEventListener('click', function (e){

    let search = cidade.value.replace('-', '');

    const Options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default' 
    }

    fetch('https://api.hgbrasil.com/weather?format=json-cors&key=sua_chave&city_name=Concatena_com_a_variavel, options', Options)

    .then(function (response){
        response.json()

        .then(function (data) {
            console.log(data);
        })


    })

    /*.catch(function (e){
        console.log('ERROR ' + e.message);
    })*/
    

})

 
