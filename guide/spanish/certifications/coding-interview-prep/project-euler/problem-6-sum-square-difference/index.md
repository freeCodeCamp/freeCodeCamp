---
title: Sum square difference
localeTitle: Suma suma cuadrada
---
## Problema 6: suma de la diferencia cuadrada

### Método:

*   La suma de los primeros n números naturales se puede calcular utilizando esta fórmula:
    
*   ![suma de n numeros](https://wikimedia.org/api/rest_v1/media/math/render/svg/99476e25466549387c585cb4de44e90f6cbe4cf2)
    
*   La suma de cuadrados de n números naturales se puede calcular utilizando esta fórmula:
    
*   ![suma de n cuadrados](https://wikimedia.org/api/rest_v1/media/math/render/svg/ae043bef33d41161541238bdbf4feca9f5e179dd)
    
*   Podemos calcular los valores utilizando la fórmula anterior y restarlos para obtener el resultado.
    

### Solución:

```js
function sumSquareDifference(n) { 
  const sumOfN = (n*(n+1))/2; 
  const sumOfNSquare = (n*(n+1)*(2*n+1))/6; 
 
  //** is exponentaial operator added in ES7, it's equivalent to Math.pow(num, 2)` 
  return (sumOfN ** 2) - sumOfNSquare; 
 } 
```

*   [Ejecutar código](https://repl.it/@ezioda004/Problem-6-Sum-square-difference)

### Referencias:

*   [Suma de n números - Wikipedia](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF)
*   [Suma de n números cuadrados - Wikipedia](https://en.wikipedia.org/wiki/Square_pyramidal_number)