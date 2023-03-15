const estados = [
    { nome: 'SP', vendas: 67836.43 },
    { nome: 'RJ', vendas: 36678.66 },
    { nome: 'MG', vendas: 29229.88 },
    { nome: 'ES', vendas: 27165.48 },
    { nome: 'Outros', vendas: 19849.53 },
];

const totalVendas = estados.reduce((total, estado) => total + estado.vendas, 0);

const percentuais = {};
for (let estado of estados) {
    percentuais[estado.nome] = (estado.vendas / totalVendas) * 100;
    console.log(`Estado ${estado.nome} vendeu ${percentuais[estado.nome].toFixed(2)}%\n`)
}