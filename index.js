const btnSeven = document.getElementById("btnSeven");
const btnEight = document.getElementById("btnEight");
const btnNine = document.getElementById("btnNine");
const btnFour = document.getElementById("btnFour");
const btnFive = document.getElementById("btnFive");
const btnSix = document.getElementById("btnSix");
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnZero = document.getElementById("btnZero");
const rectangleResult = document.querySelector(".rectangleResult");
const num1 = document.getElementById("num1");
const btnSuma = document.getElementById("suma");
const sumaPlus = document.getElementById("sumaPlus");
const num2 = document.getElementById("num2");

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

function showAddition() {
  // const showSumaDisplay = btnSuma.textContent
  // console.log(showSumaDisplay)
  numOperator.appendChild(btnSuma);
  const duplicar = btnSuma.cloneNode(true);
  sumaPlus.appendChild(duplicar);
 

}

