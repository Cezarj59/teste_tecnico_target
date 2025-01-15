const readline = require('readline');

function fibonacci() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Digite um número para verificar se ele pertence à sequência de Fibonacci: ', (numero) => {
        // Lógica para verificar se o número pertence à sequência de Fibonacci
        let a = 0;
        let b = 1;
        let fibonacci = 0;

        while (fibonacci < numero) {
            fibonacci = a + b;
            a = b;
            b = fibonacci;
        }

        if (fibonacci == numero) {
            console.log(numero + " pertence à sequência de Fibonacci.");
        } else {
            console.log(numero + " não pertence à sequência de Fibonacci.");
        }

        rl.close();
    });
}
module.exports = fibonacci;
