
const cidade = document.querySelector('#cidade');
const botao = document.querySelector('#buscar')

const showData = function (result) {
    for (const campo in result) {
        if (document.querySelector('#'+ campo )) {
            document.querySelector('#' + campo).value = result[campo]
        }
    }
}

botao.addEventListener('click', function(e) {
    let search = cidade.value;

    const Options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default' 
    }

    fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=8b8cfbf8&city_name=${search}`, Options)
    .then(function(response) {
        response.json()
        .then(function(data) {
            console.log(data.results);
            //showData(data.results);
        })
    })
})