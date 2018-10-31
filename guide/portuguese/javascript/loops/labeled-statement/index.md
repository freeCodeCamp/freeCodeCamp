---
title: Labeled Statement
localeTitle: Declaração rotulada
---
## Declaração rotulada

A **declaração rotulada** é usada com as instruções `break` e `continue` e serve para identificar a instrução à qual as instruções `break` e `continue` aplicam.

### Sintaxe

\`\` \`javascript nome do rótulo: afirmações
```
### Usage 
 Without the use of a `labeled` statement the `break` statement can only break out of a loop or a `switch` statement. Using a `labeled` statement allows `break` to jump out of any code block. 
 #### Example 
```

javascript foo: { console.log ("This prints:"); quebrar foo; console.log ("Isso nunca será impresso"); } console.log ("Porque a execução salta para aqui!") / \* saída Isso imprime: Porque a execução salta para cá! \* /
```
When used with a `continue` statement the `labeled` statement allows you to skip a loop iteration, the advantage comes from being able to jump out from an inner loop to an outer one when you have nested loop statements. Without the use of a `labeled` statement you could only jump out of the existing loop iteration to the `next iteration of the same loop.` 
 #### Example 
```

javascript // sem instrução rotulada, quando j == i loop interno pula para a próxima iteração teste de funcionamento() { para (var i = 0; i <3; i ++) { console.log ("i =" + i); para (var j = 0; j <3; j ++) { if (j === i) { continuar; } console.log ("j =" + j); } } }

/ \* saída i = 0 (note que j = 0 está faltando) j = 1 j = 2 eu = 1 j = 0 (note que j = 1 está faltando) j = 2 i = 2 j = 0 j = 1 (note que j = 2 está faltando) \* /

// usando uma instrução rotulada, podemos pular para o loop externo (i) teste de funcionamento() { outer: para (var i = 0; i <3; i ++) { console.log ("i =" + i); para (var j = 0; j <3; j ++) { if (j === i) { continue exterior; } console.log ("j =" + j); } } }

/ \* i = 0 (j registrado somente quando menor que i) eu = 1 j = 0 i = 2 j = 0 j = 1 \* / \`\` \`

### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)