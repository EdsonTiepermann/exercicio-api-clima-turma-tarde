
const cidade = document.querySelector('#cidade');
const botao = document.querySelector('#buscar')

const showData = function (result) {


    for (const campo in result) {


        if (document.querySelector('#'+ campo )) {


            document.querySelector('#' + campo).value = result[campo]
        }
    }
}

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
            showData(data);
        })


    })

    .catch(function (e){
        console.log('ERROR ' + e.message);
    })
    

})

 
