const cep = document.querySelector('#cep');

const botao = document.querySelector('#buscar');

botao.addEventListener('click', function(e) {

    let search = cep.ariaValueMax.replace('-', '');

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'

        fetch('https://api.hgbrasil.com/geoip', options)

        .then(function(response) {
            response.json()
            .then(function(data) {
                console.log(data);
            })
        })

        .catch(function(e) {
            console.log('error: ' + e.message);
        })
    }
    })