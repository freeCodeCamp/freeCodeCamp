---
title: Use an Array to Store a Collection of Data
localeTitle: Use uma matriz para armazenar uma coleção de dados
---
## Use uma matriz para armazenar uma coleção de dados

### Método:

*   No JS, os Arrays são uma das estruturas de dados mais usadas. Diferentemente de outras linguagens As matrizes no JS podem armazenar diferentes tipos de dados e também podem alterar seu tamanho em tempo de execução e, portanto, também são chamadas de "Dynamic Arrays". Eles também são 0 indexados.
*   Os arrays podem ser inicializados de diferentes maneiras:

1.  Literais de matriz
2.  Construtores de matriz

*   Neste desafio, vamos nos concentrar em literais de matriz. Para inicializar uma matriz, simplesmente `let arr = [];`
*   Podemos adicionar valores a este array acessando seu índice, exemplo: `javascript let arr = []; arr[0] = "hello"; console.log(arr); // ["hello"]`
*   Podemos também inicializar os valores no array quando o declaramos, exemplo: `javascript let arr = [1, 2, 3, "John"];`
*   Neste desafio você precisa criar um array com pelo menos 5 elementos e pelo menos uma string, um número e um booleano.

### Solução:

```js
 let yourArray = ["a", 2, true, "c", null, {name: "john"}]; 
```

### Recursos

Mais leituras sobre matrizes no [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) .