---
title: Sum square difference
localeTitle: Soma diferença quadrada
---
## Problema 6: Soma da diferença quadrada

### Método:

*   A soma dos primeiros n números naturais pode ser calculada usando esta fórmula:
    
*   ![soma de n números](https://wikimedia.org/api/rest_v1/media/math/render/svg/99476e25466549387c585cb4de44e90f6cbe4cf2)
    
*   A soma dos quadrados de n números naturais pode ser calculada usando esta fórmula:
    
*   ![soma de n quadrados](https://wikimedia.org/api/rest_v1/media/math/render/svg/ae043bef33d41161541238bdbf4feca9f5e179dd)
    
*   Podemos calcular os valores usando a fórmula acima e subtraí-los para obter o resultado.
    

### Solução:

```js
function sumSquareDifference(n) { 
  const sumOfN = (n*(n+1))/2; 
  const sumOfNSquare = (n*(n+1)*(2*n+1))/6; 
 
  //** is exponentaial operator added in ES7, it's equivalent to Math.pow(num, 2)` 
  return (sumOfN ** 2) - sumOfNSquare; 
 } 
```

*   [Executar código](https://repl.it/@ezioda004/Problem-6-Sum-square-difference)

### Referências:

*   [Soma dos n números - Wikipedia](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF)
*   [Soma de n números quadrados - Wikipedia](https://en.wikipedia.org/wiki/Square_pyramidal_number)