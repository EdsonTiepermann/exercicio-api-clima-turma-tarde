// "https://api.hgbrasil.com/weather?format=json-cors&key=sua_chave&city_name=Concatena_com_a_variavel, options";

const botao = document.querySelector("#buscar");

const cidade = document.querySelector("#city");

botao.addEventListener("click", function (e) {
  // botao.addEventListener("blur", function (e) {

  let search = city.value;

  console.log(search);

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(
    `https://api.hgbrasil.com/weather?format=json-cors&key=11ce0614&city_name=${search}`,
    options
  )
    .then(function (response) {
      response
        .json()

        .then(function (data) {
          console.log(data.results);

          for (const campo in data.results) {
            // console.log(campo);

            if (document.querySelector("#" + campo)) {
              // console.log(data.results[campo]);
              document.querySelector("#" + campo).value = data.results[campo];
            }
            // document.getElementById("temperatura").value = data["temperatura"];
            // document.getElementById("condicao_tempo").value =
            //   data["condicao_tempo"];
            // document.getElementById("horario_amanhecer").value =
            //   data["horacio_amanhecer"];
            // document.getElementById("horario_entardecer").value =
            //   data["horario_entardecer"];
          }
          // console.log(data.results);
        });
    })

    .catch(function (e) {
      console.log("error: " + e.message);
    });
});
