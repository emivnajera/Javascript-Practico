console.log("Hola Mundo");

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafo = document.querySelector(".parrafo");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(h1);

console.log(input.value);

console.log({
  h1,
  p,
  parrafo,
  pid,
  input,
});

h1.innerHTML = "Emiliano Velasquez <br> Najera </br>";
console.log(h1.getAttribute("pantalla"));
h1.classList.add("rojo");

input.value = "456";

const img = document.createElement("img");

img.setAttribute("src", "https://images2.alphacoders.com/711/711450.jpg");

pid.innerHTML = "";
pid.append(img);
