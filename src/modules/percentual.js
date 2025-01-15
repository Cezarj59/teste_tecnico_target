// Dados do faturamento por estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};

function percentual() {
// Calcula o total do faturamento
    const total = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

// Calcula e exibe o percentual de cada estado
    console.log("Percentual de representação por estado:");
    for (const [estado, valor] of Object.entries(faturamento)) {
        const percentual = (valor / total) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    }
}

module.exports = percentual;