function fibonacci(x) {
    let a = 0, b = 1;
    let y = x + 1;
    
    for (let i = 0; i < y; i++) {
      let cd = a;
      a = b;
      b = cd + b;
    }
  
    if (x == a) {
      return `número ${x} pertence a sequência`;
    }
    
    return `número ${x} não pertence a sequência`;
}


console.log(fibonacci(13));  