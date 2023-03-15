const vendas = require('./vendas.json');

//O menor valor de faturamento ocorrido em um dia do mês;
function menorVenda() {
	let menorValor = vendas[0].valor;
  
	for (let i = 1; i < vendas.length; i++) {
	  let valor = vendas[i].valor;
  
	  if (valor > 0 && valor < menorValor) {
		menorValor = valor;
	  }
	}
  
	return menorValor;
}
  
//O menor valor de faturamento ocorrido em um dia do mês;
function maiorVenda() {  
let maiorValor = vendas[0].valor;

for (let i = 1; i < vendas.length; i++) {
	let valor = vendas[i].valor;

	if (valor > maiorValor) {
		maiorValor = valor;
	}
}

return maiorValor;
}

//Número de dias no mês em que o valor de faturamento diário foi superior à média mensal;
function media() {

	let mediaParcial = vendas[0].valor;
	let numVendasAcimaZero = 1;
	
	for (let i = 1; i < vendas.length; i++) {
	  let valor = vendas[i].valor;
	  
	  if (valor > 0) {
		mediaParcial = (mediaParcial + valor) / (numVendasAcimaZero + 1);
		numVendasAcimaZero++;
	  }
	}
	
	return mediaParcial;
}
  
function diasVendasAcimaMedia() {

	const valorMedio = media();
	let dias = 1;

	for (let i = 0; i < vendas.length; i++) {
		if (vendas[i].valor > valorMedio && vendas[i].valor > 0) {
		dias++;
		}
	}

	return dias;
}

console.log(`
	menor valor de venda: ${menorVenda()}\n
	maior  valor de venda: ${maiorVenda()}\n
	dias com o faturamento acima da médoa mensal: ${diasVendasAcimaMedia()}
`);