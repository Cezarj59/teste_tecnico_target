const readline = require('readline');

function inverteString() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Digite uma string para ser invertida: ', (input) => {
        let charArray = input.split('');

        for (let i = 0, j = charArray.length - 1; i < j; i++, j--) {
            let temporario = charArray[i];
            charArray[i] = charArray[j];
            charArray[j] = temporario;
        }

        let output = charArray.join('');
        console.log('A string invertida é: ' + output);

        rl.close();
    });
}
module.exports = inverteString;
