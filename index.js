/* function calculadora() {
  const primerNumero = parseInt(prompt("Ingrese primer numero"));
  const segundoNumero = parseInt(prompt("Ingrese segundo numero"));
  const operacion = prompt("Ingrese operacion");
  switch (operacion.tolovercase()) {
    case "suma":
      console.log(primerNumero + segundoNumero);
      break;
    case "resta":
      console.log(primerNumero - segundoNumero);
      break;
    case "multiplicar":
      console.log(primerNumero * segundoNumero);
      break;
    case "dividir":
      console.log(primerNumero / segundoNumero);
      break;
    default:
      console.log("ingreso algo erroneo");
      break;
  }
}

let entrada = prompt("Desea realizar una operacion?");

while (entrada != "no") {
  calculadora();

  entrada = prompt("Desea realizar otra operacion?");
}
 */

/* document.querySelector("#calcular2").addEventListener("click", () => {
  const n1 = parseInt(document.querySelector("#numero1").value);
  const n2 = parseInt(document.querySelector("#numero2").value);
  const op2 = document.querySelector("#op").value;
  let r;
  let historial;
  if (op2 == "+") {
    r = n1 + n2;
    historial = "" + n1 + "" + op2 + "" + n2 + "=" + r + "";
  } else if (op2 == "-") {
    r = n1 - n2;
    historial = "" + n1 + "" + op2 + "" + n2 + "=" + r + "";
  } else if (op2 == "*") {
    r = n1 * n2;
    historial = "" + n1 + "" + op2 + "" + n2 + "=" + r + "";
  } else if (op2 == "/") {
    r = n1 / n2;
    historial = "" + n1 + "" + op2 + "" + n2 + "=" + r + "";
  }
  document.querySelector("#r2").innerHTML = historial;
}); */
/* 
let resultado;
let hTabla;
let hist;

function calcular() {
  let num1 = document.getElementById(numero1);
  let num2 = document.getElementById(numero2);
  let operacion = document.querySelector("#op").value;

  numero1 = parseInt(num1);
  numero2 = parseInt(num2);
  switch (operacion) {
    case "+":
      resultado = numero1 + numero2;
      hist =
        "" + numero1 + "" + operacion + "" + numero2 + "=" + resultado + "";
      calcular2.value = hist;
      break;

    case "-":
      resultado = numero1 - numero2;
      hist =
        "" + numero1 + "" + operacion + "" + numero2 + "=" + resultado + "";
      calcular2.value = hist;
      break;

    case "*":
      resultado = numero1 * numero2;
      hist =
        "" + numero1 + "" + operacion + "" + numero2 + "=" + resultado + "";
      calcular2.value = hist;
      break;

    case "/":
      resultado = numero1 / numero2;
      hist =
        "" + numero1 + "" + operacion + "" + numero2 + "=" + resultado + "";
      calcular2.value = hist;
      break;

    default:
      break;
  }
  guardarHistorial();
}

function guardarHistorial() {
  calc = {};
  calculo = document.getElementsByName("calcular");

  for (i in calculo) {
    his = calculo[i];
    calc[his.id] = his.value;
  }

  hTabla.push(calc);

  localStorage.setItem("h", JSON.stringify(hTabla));
  obtenerHistorial();
  showResultInDisplay();
}

function obtenerHistorial() {
  for (i = 0; i < hTabla.length; i++) {
    let fila = hTabla[i];

    tr = document.createElement("tr");
    vln = document.getElementById("resp").value;
  }
}

document.querySelector("#calcular2").addEventListener("click", () => {
  calcular();
});

function showResultInDisplay() {
  let result = resultado;
  document.getElementById("resp").textContent = `${resultado}`;
}

 */
/* let hist;
let primerNumero = document.getElementById(numero1).value;
let segundoNumero = document.getElementById(numero2);
let operacion = document.querySelector("#op").value;
let resultado = 0;
const arrHistorial = [];

function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
    case "+":
      resultado = primerNumero + segundoNumero;
      hist =
        "" +
        primerNumero +
        "" +
        operacion +
        "" +
        segundoNumero +
        " = " +
        resultado +
        "";
      resp.value = hist;
      break;
    case "-":
      resultado = primerNumero - segundoNumero;
      hist =
        "" +
        primerNumero +
        "" +
        operacion +
        "" +
        segundoNumero +
        " = " +
        resultado +
        "";
      resp.value = hist;
      break;
    case "/":
      resultado = primerNumero / segundoNumero;
      hist =
        "" +
        primerNumero +
        "" +
        operacion +
        "" +
        segundoNumero +
        " = " +
        resultado +
        "";
      resp.value = hist;
      break;
    case "*":
      resultado = primerNumero * segundoNumero;
      hist = primerNumero + operacion + segundoNumero;
      const historia = hist + "=" + resultado;
      arrHistorial.push(historia);
      resp.value = hist + "=" + resultado;
      break;
    default:
      break;
  }
}

console.log(hist);
console.log(arrHistorial);
console.log(primerNumero);
class historial {
  constructor(op, res) {
    this.op = op;
    this.res = res;
  }
}

document.querySelector("#calcular2").addEventListener("click", () => {
  calculadora(primerNumero, segundoNumero, operacion);
  document.querySelector("#resp").innerHTML = calculadora(
    primerNumero,
    segundoNumero,
    operacion
  );
}); */

/* while (entrada != "esc") {
  if (entrada != "no") {
    const primerNumero = document.getElementById("numero1");
    const segundoNumero = document.getElementById("numero2");
    const operacion = prompt(
      "Ingrese la operacion. suma = + ; resta = - ; dividir = / ; multiplicar = *"
    );
    const resultado = calculadora(
      primerNumero,
      segundoNumero,
      operacion.toLowerCase()
    );
    console.log(resultado);
    const oper = primerNumero + operacion + segundoNumero;
    const historia = new historial(oper, resultado);
    arrHistorial.push(historia);
    entrada = prompt("Desea realizar otra operacion?");
  } else {
    entrada2 = prompt("Desea ver el historial de operaciones? ESC para salir");
    if (entrada2 != "esc") {
      arrHistorial.forEach((el) => {
        console.log(el.op + "=" + el.res);
      });
    } else {
      entrada = "esc";
    }
  }
} */

let resultado = 0;
let operacion1;
let historial = [];
let boton = document.getElementById("calcular2");
boton.addEventListener("click", calculadora());

function calculadora() {
  let primerNumero1 = document.getElementById(numero1).value;
  let segundoNumero2 = document.getElementById(numero2).value;
  let operacion = document.querySelector("#op").value;

  let primerNumero = parseInt(primerNumero1);
  let segundoNumero = parseInt(segundoNumero2);

  switch (operacion) {
    case "+":
      resultado = primerNumero + segundoNumero;
      operacion1 = primerNumero + operacion + segundoNumero + "=" + resultado;
      break;
    case "-":
      resultado = primerNumero - segundoNumero;
      operacion1 = primerNumero + operacion + segundoNumero;
      break;
    case "/":
      resultado = primerNumero / segundoNumero;
      operacion1 = primerNumero + operacion + segundoNumero;
      break;
    case "*":
      resultado = primerNumero * segundoNumero;
      operacion1 = primerNumero + operacion + segundoNumero;
      break;
    default:
      break;
  }
  guardarResultado();
}

/* console.log(operacion1);
class historial {
  constructor(op, res) {
    this.op = op;
    this.res = res;
  }
}
const arrHistorial = []; */

function guardarResultado() {
  calc = {};
  calculo = document.getElementById("op");

  for (i in calculo) {
    cl = calculo[i];
    calc[cl.id] = cl.value;
  }
  historial.push(calc);
  localStorage.setItem("historial", JSON.stringify(historial));
}

function mostrarHistorial() {
  for (i = 0; i < historial.length; i++) {
    const element = historial[i];
  }
}

/* document.querySelector("#calcular2").addEventListener("click", () => {
  calculadora(primerNumero, segundoNumero, operacion);
  document.querySelector("#resp").innerHTML = calculadora(
    primerNumero,
    segundoNumero,
    operacion
  );
}); */

/* while (entrada != "esc") {
  if (entrada != "no") {
    const primerNumero = parseInt(prompt("Ingrese primer numero"));
    const segundoNumero = parseInt(prompt("Ingrese segundo numero"));
    const operacion = prompt(
      "Ingrese la operacion. suma = + ; resta = - ; dividir = / ; multiplicar = *"
    );
    const resultado = calculadora(
      primerNumero,
      segundoNumero,
      operacion.toLowerCase()
    );
    console.log(resultado);
    const opera = primerNumero + operacion + segundoNumero;
    const historia = new historial(opesr, resultado);
    arrHistorial.push(historia);
    entrada = prompt("Desea realizar otra operacion?");
  } else {
    entrada2 = prompt("Desea ver el historial de operaciones? ESC para salir");
    if (entrada2 != "esc") {
      arrHistorial.forEach((el) => {
        console.log(el.op + "=" + el.res);
      });
    } else {
      entrada = "esc";
    }
  }
} */
