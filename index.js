function calculadora() {
  const primerNumero = parseInt(prompt("Ingrese primer numero"));
  const segundoNumero = parseInt(prompt("Ingrese segundo numero"));
  const operacion = prompt("Ingrese operacion");
  switch (operacion) {
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
