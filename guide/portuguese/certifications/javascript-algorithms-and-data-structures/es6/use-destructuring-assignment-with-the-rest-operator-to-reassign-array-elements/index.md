---
title: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
localeTitle: Use Destructuring Assignment com o Operador Descanso para Reatribuir Elementos da Matriz
---
## Use Destructuring Assignment com o Operador Descanso para Reatribuir Elementos da Matriz

Lembre-se de que o operador rest permite números variáveis ​​de argumentos. Nesse desafio, você precisa se livrar dos dois primeiros elementos de um array.

## Sugestão 1:

Atribuir os dois primeiros elementos a duas variáveis ​​aleatórias.

## Dica 2:

Defina a parte restante da matriz para `...arr` .

\=======

## Sugestão 1

Use a desestruturação para criar a variável `arr` .

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [arr] = list; // change this 
  // change code above this line 
  return arr; 
 } 
```

## Sugestão 2

Espalhe o parâmetro `list` em `arr` .

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [...arr] = list; // change this 
  // change code above this line 
  return arr; 
 } 
```

## Dica 3

Exclua os dois primeiros elementos da matriz `arr` com `,,` .

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [,,...arr] = list; // change this 
  // change code above this line 
  return arr; 
 } 
```

## Alerta de Spoiler - Solução à frente!

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [a, b, ...arr] = list; 
  // change code above this line 
  return arr; 
 } 

```