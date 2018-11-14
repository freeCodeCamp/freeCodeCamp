---
title: Copy an Array with the Spread Operator
localeTitle: Copiar uma matriz com o operador de propagação
---
## Copiar uma matriz com o operador de propagação

*   A dica final no exemplo diz para você usar um método recentemente aprendido.
*   O operador de spread copia todos os elementos em um novo objeto vazio.

\`\` \`javascript while (num> = 1) { newArr = \[… arr\] num--; }
```
- The code above will copy all of the elements into `newArr` but will also reinitialise `newArr` with every new iteration of the while loop. 
 - A new variable should first be initialised using the spread operator - `let obj = [...arr];` - then this variable should be added to the `newArr` for every iteration of the while loop. 
 
 ## Solution: 
```

javascript função copyMachine (arr, num) { deixe newArr = \[\]; while (num> = 1) { // muda o código abaixo desta linha newArr.push (\[… arr\]); // muda o código acima desta linha num--; } return newArr; }

// altere o código aqui para testar casos diferentes: console.log (copyMachine (\[verdadeiro, falso, verdadeiro\], 2)); \`\` \`