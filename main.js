const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const btn3 = document.querySelector("#btnCalcular3");
const result = document.querySelector("#result");
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", calcular2);
btn3.addEventListener("click", calcular);

function calcular() {
  const sumaInputs = input1.value + input2.value;
  result.innerText = "Resultado: " + sumaInputs;
}

function calcular2(event) {
  event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  result.innerText = "Resultado: " + sumaInputs;
}
