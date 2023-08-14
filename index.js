const btnSeven = document.querySelector(".btnSeven");
const btnEight = document.querySelector(".btnEight");
const btnNine = document.querySelector(".btnNine");
const btnFour = document.querySelector(".btnFour");
const btnFive = document.querySelector(".btnFive");
const btnSix = document.querySelector(".btnSix");
const btnOne = document.querySelector(".btnOne");
const btnTwo = document.querySelector(".btnTwo");
const btnThree = document.querySelector(".btnThree");
const btnZero = document.querySelector(".btnZero");
const rectangleResult = document.querySelector(".rectangleResult");
const num1 = document.getElementById("num1");
const btnSuma = document.getElementById("suma");
const sumaPlus = document.getElementById("sumaPlus");
const num2 = document.getElementById("num2");
const borrar = document.querySelector(".borrar");
const btnSeven2 = document.getElementById("prueba")
const btnMultiplicar = document.getElementById("multiplicar")
const multiplicarPlus = document.getElementById("multiplicarPlus")

//usar map

const numerosDisplay = [
  btnSeven,
  btnEight,
  btnNine,
  btnFour,
  btnSix,
  btnOne,
  btnTwo,
  btnThree,
  btnZero,
];
console.log(numerosDisplay);

btnSeven.addEventListener("click", añadirPSeven);
btnEight.addEventListener("click", añadirPEight);
btnNine.addEventListener("click", añadirPNine);
btnFour.addEventListener("click", añadirPFour);
btnFive.addEventListener("click", añadirPFive);
btnSix.addEventListener("click", añadirPSix);
btnOne.addEventListener("click", añadirPOne);
btnTwo.addEventListener("click", añadirPTwo);
btnThree.addEventListener("click", añadirPThree);
btnZero.addEventListener("click", añadirPZero);
btnSuma.addEventListener("click", showAddition);
btnMultiplicar.addEventListener("click",showMultiplicar)

//cuando el usuario clickee, se creara un P con el numero, que se guardo anteriormente en una variable
function añadirPSeven() {
  const numberText = document.createTextNode("7");
  num1.appendChild(numberText);
}
function añadirPEight() {
  const numberText = document.createTextNode("8");
  num1.appendChild(numberText);
}
function añadirPNine() {
  const numberText = document.createTextNode("9");
  num1.appendChild(numberText);
}
function añadirPFour() {
  const numberText = document.createTextNode("4");
  num1.appendChild(numberText);
}
function añadirPFive() {
  const numberText = document.createTextNode("5");
  num1.appendChild(numberText);
}
function añadirPSix() {
  const numberText = document.createTextNode("6");
  num1.appendChild(numberText);
}
function añadirPOne() {
  const numberText = document.createTextNode("1");
  num1.appendChild(numberText);
}
function añadirPTwo() {
  const numberText = document.createTextNode("2");
  num1.appendChild(numberText);
}
function añadirPThree() {
  const numberText = document.createTextNode("3");
  num1.appendChild(numberText);
}
function añadirPZero() {
  const numberText = document.createTextNode("0");
  num1.appendChild(numberText);
}

 function añadirPSevenTwo(){
  const numberText = document.createTextNode("7");
  num2.appendChild(numberText);
 }



function showAddition() {
  // const showSumaDisplay = btnSuma.textContent
  // console.log(showSumaDisplay)
  numOperator.appendChild(btnSuma);
  const duplicar = btnSuma.cloneNode(true);
  sumaPlus.appendChild(duplicar);

  btnSeven.removeEventListener("click", añadirPSeven);
  btnEight.removeEventListener("click", añadirPEight);
  btnNine.removeEventListener("click", añadirPNine);
  btnFour.removeEventListener("click", añadirPFour);
  btnFive.removeEventListener("click", añadirPFive);
  btnSix.removeEventListener("click", añadirPSix);
  btnOne.removeEventListener("click", añadirPOne);
  btnTwo.removeEventListener("click", añadirPTwo);
  btnThree.removeEventListener("click", añadirPThree);
  btnZero.removeEventListener("click", añadirPSeven);
  btnSeven2.addEventListener("click",añadirPSevenTwo)


}

function showMultiplicar(){
  numOperator.appendChild(btnMultiplicar);
  const duplicar = btnMultiplicar.cloneNode(true);
  multiplicarPlus.appendChild(duplicar);
  btnSeven.removeEventListener("click", añadirPSeven);
  btnEight.removeEventListener("click", añadirPEight);
  btnNine.removeEventListener("click", añadirPNine);
  btnFour.removeEventListener("click", añadirPFour);
  btnFive.removeEventListener("click", añadirPFive);
  btnSix.removeEventListener("click", añadirPSix);
  btnOne.removeEventListener("click", añadirPOne);
  btnTwo.removeEventListener("click", añadirPTwo);
  btnThree.removeEventListener("click", añadirPThree);
  btnZero.removeEventListener("click", añadirPSeven);
  btnSeven2.addEventListener("click",añadirPSevenTwo)

}

