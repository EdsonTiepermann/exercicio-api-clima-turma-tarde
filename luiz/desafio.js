const cid = document.getElementById('cid')
const botao = document.getElementById('botao')
// const Data = document.getElementById('data')
// const hora = document.getElementById('hora')
// const temper = document.getElementById('temp')
// const ha = document.getElementById('num')


botao.addEventListener('click', function () {

    
})
let search = cid.value.replace ('', '-');

const options = {
    method:'get',
    mode:'cors',
    method:'defaut'
}

fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=f2b7f386&city_name=${search}`, options)
.then(function (response) {
    response.json()
    .then (function (data){
        console.log(data);
    })
    
})

.catch(function(e){
    console.log('Error:' + e.message);

})
