const readline = require('readline');

function executarComando() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Qual módulo deseja executar? (soma, fibonacci, inverteString, faturamento, percentual): ', (modulo) => {
        console.log('');
        if (modulo === 'soma') {
            const soma = require('../src/modules/soma');
            soma();
        } else if (modulo === 'fibonacci') {
            const fibonacci = require('../src//modules/fibonacci');
            fibonacci();
        } else if (modulo === 'inverteString') {
            const inverteString = require('../src/modules/inverteString');
            inverteString();
        } else if (modulo === 'faturamento') {
            const faturamento = require('../src/modules/faturamento');
            faturamento();
        } else if (modulo === 'percentual') {
            const percentual = require('../src/modules/percentual');
            percentual();
        } else {
            console.log('Módulo inválido.');
        }

        rl.close();
    });
}

executarComando();
