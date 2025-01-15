const fs = require('fs');

// Função para processar o faturamento mensal
function faturamento() {
    // Carrega o conteúdo do arquivo JSON
    const dadosJSON = fs.readFileSync('./src/data/dados.json', 'utf8');
    const faturamentoMensal = JSON.parse(dadosJSON);

    // Filtra dias com faturamento > 0
    const diasComFaturamento = faturamentoMensal.filter((dia) => dia.valor > 0);

    // Calcula o menor e o maior valor de faturamento
    const menorFaturamento = Math.min(...diasComFaturamento.map((dia) => dia.valor));
    const maiorFaturamento = Math.max(...diasComFaturamento.map((dia) => dia.valor));

    // Calcula a média mensal
    const somaFaturamento = diasComFaturamento.reduce((total, dia) => total + dia.valor, 0);
    const mediaMensal = somaFaturamento / diasComFaturamento.length;

    // Calcula o número de dias com faturamento acima da média
    const diasAcimaDaMedia = diasComFaturamento.filter((dia) => dia.valor > mediaMensal).length;

    // Exibe os resultados
    console.log("Resultados:");
    console.log(`Menor valor de faturamento: R$ ${menorFaturamento.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

module.exports = faturamento;
