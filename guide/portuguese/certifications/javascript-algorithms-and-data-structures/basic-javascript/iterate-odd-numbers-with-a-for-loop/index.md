---
title: Iterate Odd Numbers With a For Loop
localeTitle: Iterar números ímpares com um loop for
---
## Iterar números ímpares com um loop for

Aqui está o exemplo:

```javascript
var ourArray = []; 
 
 for (var i = 0; i < 10; i += 2) { 
  ourArray.push(i); 
 } 
 
 // Setup 
 var myArray = []; 
 
 // Only change code below this line. 
```

Aqui está uma solução: Depois da string `// Only change code below this line.` nós adicionamos `for` loop. Você precisa copiar o loop do topo:

`javascript for (var i = 0; i < 10; i += 2) { ourArray.push(i); }` E mude a `initialization` `var i = 0` para `var i = 1` , também você precisa alterar o nome da matriz `ourArray` para `myArray` :

`javascript for (var i = 1; i < 10; i += 2) { myArray.push(i); }`

Aqui está uma solução completa:

\`\` \`javascript var ourArray = \[\];

para (var i = 0; i <10; i + = 2) { ourArray.push (i); }

// Configuração var myArray = \[\];

// Apenas mude o código abaixo desta linha.

para (var i = 1; i <10; i + = 2) { myArray.push (i); } \`\` \`