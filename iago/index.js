// "https://api.hgbrasil.com/weather?format=json-cors&key=sua_chave&city_name=Concatena_com_a_variavel, options";

const botao = document.querySelector("#buscar");

botao.addEventListener("click", function (e) {
  // cep.addEventListener("blur", function (e) {

  //   let search = cep.value.replace("-", "");

  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(
    `https://api.hgbrasil.com/weather?format=json-cors&key=11ce0614&city_name=Ponta Grossa,PR`,
    options
  )
    .then(function (response) {
      response
        .json()

        .then(function (data) {
          console.log(data);

          for (clima in data) {
            document.getElementById("cidade").value = data["city"];

            // document.getElementById("data").value = data["data"];
            // document.getElementById("temperatura").value = data["temperatura"];
            // document.getElementById("condicao_tempo").value =
            //   data["condicao_tempo"];
            // document.getElementById("horario_amanhecer").value =
            //   data["horacio_amanhecer"];
            // document.getElementById("horario_entardecer").value =
            //   data["horario_entardecer"];

            console.log(data.results);
          }
        });
    })

    .catch(function (e) {
      console.log("error: " + e.message);
    });
});
