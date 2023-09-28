const cid = document.querySelector('#cid')
const botao = document.querySelector('#botao')
const data = document.getElementById('data')
const hora = document.getElementById('hora')
const temper = document.getElementById('temp')
const ama = document.getElementById('num')


botao.addEventListener('click',function(e) {

    let soma = data+ hora + temper+ ama 

let search = cid.value.replace ('','-');

const options = {
    method:'get',
    mode:'cors',
    cache:"default"
}

fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=f2b7f386 &city_name${search} ${soma}`, options)
.then(function (response) {
    response.json()



    .then (function (data){
        console.log(data);
        document.getElementById('res').innerHTML='' ,data
    })
    
})

.catch(function(e){
    console.log('Error:' + e.message);

})

})

