function factorial(n) {
    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado = resultado * i;
    }

    return resultado;
}

// Ejemplo
let numero = 5;
let resultado = factorial(numero);

console.log("El factorial de " + numero + " es: " + resultado);