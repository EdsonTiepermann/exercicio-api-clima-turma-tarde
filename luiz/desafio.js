const cid = document.querySelector('#city_name')
const data = document.querySelector('#date')
const tmp = document.querySelector('#description')
const temperatura = document.querySelector('#temp')
const hora = document.querySelector('#time')
const botao = document.querySelector('#botao')

const showData = function (result) {
    // o for in para tratarmos um objeto, o for in pega o resultado (result)
    // e inserer na variável campo
    for (const campo in result) {
        //nesse if é verificado dinamicamente se todos os campos da api
        // eu utilizo nos inputs
        if (document.querySelector('#' + campo)) {
            //pegamos dinamicamnete o elemneto dos inputs e passamos o 
            // value dinamicamnete, dizendo que o result é um array e passando
            // a variável campo como posição
            document.querySelector('#' + campo).value = result[campo]
            //console.log(campo);
        }
    }
}

botao.addEventListener('click',function(e) {

    

let search = cid.value

const options = {
    method:'get',
    mode:'cors',
    cache:"default"
}

fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=f2b7f386 &city_name=${search}`, options)
.then(function (response) {
    response.json()



    .then(function (data){
        console.log(data);
        showData(data)
    
})

.catch(function(e){
    console.log('Error:' + e.message);

})

})
})