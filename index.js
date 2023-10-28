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
const btnSeven2 = document.getElementById("newSeven");
const btnEight2 = document.getElementById("newEight");
const btnNine2 = document.getElementById("newNine");
const btnFour2 = document.getElementById("newFour");
const btnFive2 = document.getElementById("newFive");
const btnSix2 = document.getElementById("newSix");
const btnOne2 = document.getElementById("newOne");
const btnTwo2 = document.getElementById("newTwo");
const btnThree2 = document.getElementById("newThree");
const btnZero2 = document.getElementById("newZero");
const btnMultiplicar = document.getElementById("multiplicar");
const multiplicarPlus = document.getElementById("multiplicarPlus");
const btnDividir = document.getElementById("dividir");
const dividirPlus = document.getElementById("dividirPlus");
const btnRestar = document.getElementById("restar");
const restarPlus = document.getElementById("restarPlus");
const btnResult = document.getElementById("result");
const btnResultPLus = document.getElementById("resultPlus");
const btnC = document.getElementById("botonC");

function numeroAOperar1() {
  let numero1String = num1.innerText;
  let numero1Number = parseInt(numero1String);
  let numero2String = num2.innerText;
  let numero2Number = parseInt(numero2String);
  let numeroOperador = numOperator.innerText;
  if (numeroOperador === "+") {
    num2.textContent = "";
    num1.textContent = numero1Number + numero2Number;
    numOperator.textContent = "";
  } else if (numeroOperador === "-") {
    num2.textContent = "";
    num1.textContent = numero1Number - numero2Number;
    numOperator.textContent = "";
  } else if (numeroOperador === "*") {
    num2.textContent = "";
    num1.textContent = numero1Number * numero2Number;
    numOperator.textContent = "";
  } else {
    num2.textContent = "";
    num1.textContent = numero1Number / numero2Number;
    numOperator.textContent = "";
  }
}

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
btnMultiplicar.addEventListener("click", showMultiplicar);
btnDividir.addEventListener("click", showDividir);
btnRestar.addEventListener("click", showRestar);
btnResult.addEventListener("click", numeroAOperar1);
btnC.addEventListener("click", deteleDisplayText);

function deteleDisplayText() {
  num1.textContent = "";
  num2.textContent = "";
  numOperator.textContent = "";
  btnSeven2.removeEventListener("click", añadirPSevenTwo);
  btnEight2.removeEventListener("click", añadirPEightTwo);
  btnNine2.removeEventListener("click", añadirPNineTwo);
  btnFour2.removeEventListener("click", añadirPFourTwo);
  btnFive2.removeEventListener("click", añadirPFiveTwo);
  btnSix2.removeEventListener("click", añadirPSixTwo);
  btnOne2.removeEventListener("click", añadirPOneTwo);
  btnTwo2.removeEventListener("click", añadirPTwoTwo);
  btnThree2.removeEventListener("click", añadirPThreeTwo);
  btnZero2.removeEventListener("click", añadirPZeroTwo);

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
  btnMultiplicar.addEventListener("click", showMultiplicar);
  btnDividir.addEventListener("click", showDividir);
  btnRestar.addEventListener("click", showRestar);
}

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

function añadirPSevenTwo() {
  const numberText = document.createTextNode("7");
  num2.appendChild(numberText);
}

function añadirPEightTwo() {
  const numberText = document.createTextNode("8");
  num2.appendChild(numberText);
}

function añadirPNineTwo() {
  const numberText = document.createTextNode("9");
  num2.appendChild(numberText);
}

function añadirPFiveTwo() {
  const numberText = document.createTextNode("5");
  num2.appendChild(numberText);
}

function añadirPSixTwo() {
  const numberText = document.createTextNode("6");
  num2.appendChild(numberText);
}

function añadirPFourTwo() {
  const numberText = document.createTextNode("4");
  num2.appendChild(numberText);
}

function añadirPThreeTwo() {
  const numberText = document.createTextNode("3");
  num2.appendChild(numberText);
}

function añadirPTwoTwo() {
  const numberText = document.createTextNode("2");
  num2.appendChild(numberText);
}
function añadirPOneTwo() {
  const numberText = document.createTextNode("1");
  num2.appendChild(numberText);
}

function añadirPZeroTwo() {
  const numberText = document.createTextNode("0");
  num2.appendChild(numberText);
}

function showAddition() {
  const numberText = document.createTextNode("+");
  numOperator.appendChild(numberText);
  btnSuma.removeEventListener("click", showAddition);
  btnSeven.removeEventListener("click", añadirPSeven);
  btnEight.removeEventListener("click", añadirPEight);
  btnNine.removeEventListener("click", añadirPNine);
  btnFour.removeEventListener("click", añadirPFour);
  btnFive.removeEventListener("click", añadirPFive);
  btnSix.removeEventListener("click", añadirPSix);
  btnOne.removeEventListener("click", añadirPOne);
  btnTwo.removeEventListener("click", añadirPTwo);
  btnThree.removeEventListener("click", añadirPThree);
  btnZero.removeEventListener("click", añadirPZero);
  btnSeven2.addEventListener("click", añadirPSevenTwo);
  btnEight2.addEventListener("click", añadirPEightTwo);
  btnNine2.addEventListener("click", añadirPNineTwo);
  btnFour2.addEventListener("click", añadirPFourTwo);
  btnFive2.addEventListener("click", añadirPFiveTwo);
  btnSix2.addEventListener("click", añadirPSixTwo);
  btnOne2.addEventListener("click", añadirPOneTwo);
  btnTwo2.addEventListener("click", añadirPTwoTwo);
  btnThree2.addEventListener("click", añadirPThreeTwo);
  btnZero2.addEventListener("click", añadirPZeroTwo);
}

function showMultiplicar() {
  const numberText = document.createTextNode("*");
  numOperator.appendChild(numberText);
  btnMultiplicar.removeEventListener("click", showMultiplicar);
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
  btnSeven2.addEventListener("click", añadirPSevenTwo);
  btnEight2.addEventListener("click", añadirPEightTwo);
  btnNine2.addEventListener("click", añadirPNineTwo);
  btnFour2.addEventListener("click", añadirPFourTwo);
  btnFive2.addEventListener("click", añadirPFiveTwo);
  btnSix2.addEventListener("click", añadirPSixTwo);
  btnOne2.addEventListener("click", añadirPOneTwo);
  btnTwo2.addEventListener("click", añadirPTwoTwo);
  btnThree2.addEventListener("click", añadirPThreeTwo);
  btnZero2.addEventListener("click", añadirPZeroTwo);
}

function showDividir() {
  const numberText = document.createTextNode("/");
  numOperator.appendChild(numberText);
  btnDividir.removeEventListener("click", showDividir);
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
  btnSeven2.addEventListener("click", añadirPSevenTwo);
  btnEight2.addEventListener("click", añadirPEightTwo);
  btnNine2.addEventListener("click", añadirPNineTwo);
  btnFour2.addEventListener("click", añadirPFourTwo);
  btnFive2.addEventListener("click", añadirPFiveTwo);
  btnSix2.addEventListener("click", añadirPSixTwo);
  btnOne2.addEventListener("click", añadirPOneTwo);
  btnTwo2.addEventListener("click", añadirPTwoTwo);
  btnThree2.addEventListener("click", añadirPThreeTwo);
  btnZero2.addEventListener("click", añadirPZeroTwo);
}

function showRestar() {
  const numberText = document.createTextNode("-");
  numOperator.appendChild(numberText);
  btnRestar.removeEventListener("click", showRestar);
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
  btnSeven2.addEventListener("click", añadirPSevenTwo);
  btnEight2.addEventListener("click", añadirPEightTwo);
  btnNine2.addEventListener("click", añadirPNineTwo);
  btnFour2.addEventListener("click", añadirPFourTwo);
  btnFive2.addEventListener("click", añadirPFiveTwo);
  btnSix2.addEventListener("click", añadirPSixTwo);
  btnOne2.addEventListener("click", añadirPOneTwo);
  btnTwo2.addEventListener("click", añadirPTwoTwo);
  btnThree2.addEventListener("click", añadirPThreeTwo);
  btnZero2.addEventListener("click", añadirPZeroTwo);
}

function resultado() {}
