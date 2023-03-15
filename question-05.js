function inverte(p) {
    let saida = "";
    
    for (let i = p.length-1; i >= 0; i--) {
      saida += p[i];
    }
    
    return saida;
  }
  
  console.log(inverte("teste"));