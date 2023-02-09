/* function calculadora() {
  const primerNumero = parseInt(prompt("Ingrese primer numero"));
  const segundoNumero = parseInt(prompt("Ingrese segundo numero"));
  const operacion = prompt("Ingrese operacion");
  switch (operacion.ToLowerCase()) {
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

while (entrada.ToLowerCase() != "no") {
  calculadora();

  entrada = prompt("Desea realizar otra operacion?");
} else {
  entrada = prompt("Desea realizar otra operacion?");
}
 */

function calculadora(primerNumero, segundoNumero, operacion) {
  let resultado = 0;
  switch (operacion) {
    case "+":
      resultado = primerNumero + segundoNumero;
      break;
    case "-":
      resultado = primerNumero - segundoNumero;
      break;
    case "/":
      resultado = primerNumero / segundoNumero;
      break;
    case "*":
      resultado = primerNumero * segundoNumero;
      break;
    default:
      console.log("Ingreso algo erroneo");
      break;
  }

  return resultado;
}

let entrada = prompt("Desea realizar una operacion?");

class historial{
  constructor(op,res){
    this.op = op;
    this.res = res;
  }
}
const arrHistorial = [];

while (entrada != "esc") {
  if (entrada != "no"){
    const primerNumero = parseInt(prompt("Ingrese primer numero"));
    const segundoNumero = parseInt(prompt("Ingrese segundo numero"));
    const operacion = prompt("Ingrese la operacion. suma = + ; resta = - ; dividir = / ; multiplicar = *");
    const resultado = calculadora(primerNumero, segundoNumero, operacion.toLowerCase());
    console.log(resultado);
    const oper = primerNumero + operacion + segundoNumero;
    const historia = new historial(oper, resultado)
    arrHistorial.push(historia)
     
  entrada = prompt("Desea realizar otra operacion?");
  }  else{
    entrada2 = prompt("Desea ver el historial de operaciones? ESC para salir");
      if(entrada2 != "esc"){
        arrHistorial.forEach((el) => {
          console.log(el.op + "=" + el.res)
        })
      }  else{
        entrada = "esc";
      }
    } 
   
} 

