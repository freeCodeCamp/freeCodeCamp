---
title: Finders Keepers
localeTitle: Achado não é roubado
---
## Explicação do Problema

Precisamos devolver o elemento de uma matriz que passa uma função. Tanto a `function` quanto o `array` são passados ​​para a função `findElement(arr, func)` .

## Sugestão: 1

Olhando através da matriz pode ser feito com um loop `for` .

> _tente resolver o problema agora_

## Dica: 2

`num` é passado para a função. Vamos precisar configurá-lo para os elementos que queremos verificar com a função.

> _tente resolver o problema agora_

## Dica: 3

Não se esqueça, se nenhum dos números da matriz passar no teste, ele deve retornar `undefined` .

> _tente resolver o problema agora_

## Solução Básica

```javascript
function findElement(arr, func) { 
  let num = 0; 
 
  for(var i = 0; i < arr.length; i++) { 
    num = arr[i]; 
    if (func(num)) { 
      return num; 
    } 
  } 
 
  return undefined; 
 } 
```

## Explicação do código

*   Desafio nos pede para olhar através da matriz. Isso é feito usando um loop `for` .
*   A variável `num` está sendo passada para a função, então a configuramos para cada índice em nossa matriz.
*   A função pré-definida já verifica cada número para nós, portanto, se é "verdade", retornamos esse num.
*   Se nenhum dos números no array passar no teste da função, retornamos indefinidos.