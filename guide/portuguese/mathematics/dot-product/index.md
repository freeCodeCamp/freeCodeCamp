---
title: Dot Product
localeTitle: Produto pontual
---
## Produto pontual

Um produto escalar é uma maneira de multiplicar dois vetores para obter um único número. Produtos pontuais são comuns em física e álgebra linear.

Você pode escrever o produto escalar de dois vetores **a** e **b** como **a** · **b** .

Dois vetores devem ter o mesmo comprimento para ter um produto escalar.

Para encontrar o produto escalar, multiplique o `nth` elemento no primeiro vetor pelo `nth` elemento do segundo vetor. Faça isso para todos os elementos. Em seguida, encontre a soma de todos esses produtos. Essa soma é o produto escalar!

### Propriedades de Dot Products

O produto escalar de dois vetores também pode ser expresso como `a · b = ||a|| * ||b|| * cos(theta)` . Nesta fórmula, `||a||` é a magnitude do vetor **a** , e `theta` é o ângulo entre os dois vetores.

Dois vetores ortogonais (também conhecidos como perpendiculares) sempre terão um produto escalar de 0.

### Exemplo trabalhado

Por exemplo, digamos que você tenha os vetores **a** e **b** . Seja `a = (1 2 3 4)` `b = (-1 0 1 2)` .

O produto pontual seria `(1)(-1) + (2)(0) + (3)(1) + (4)(2) = -1 + 0 + 3 + 8 = 12` . Então, neste caso, você diria que **a** · **b** = 12.

### Exemplo de código

Aqui está uma função de exemplo em JavaScript. Ele retorna o produto escalar de dois argumentos vetoriais:

```javascript
/** 
 * @param {array} a - A vector/array of numbers 
 * @param {array} b - A vector/array of numbers with the same length as a 
 * @returns {number} - The dot product of a and b 
 */ 
 function dotProduct(a, b) { 
  // Check if the lengths are the same - if not, there can't be a dot product 
  if (a.length !== b.length) { 
    throw "vector lengths must be equal"; 
  } 
 
  // Create a variable to store the sum as we calculate it 
  let product = 0; 
 
  // Loop through the vectors, calculate products, and add them to the total 
  for (let i = 0; i < a.length; i++) { 
    // You may want to ensure that a[i] and b[i] are both finite numbers 
    product += a[i] * b[i]; 
  } 
 
  return product; 
 } 
```

### Mais Informações:

[Vetores](../vectors/index.md)