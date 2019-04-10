---
title: Understanding Undefined Value returned from a Function
localeTitle: Entendendo o valor indefinido retornado de uma função
---
## Entendendo o valor indefinido retornado de uma função

Uma função sem instrução de `return` , possui uma saída `undefined` . Então, se você tentar igualar uma variável à saída de uma função sem instrução de `return` , essa variável será igual a `undefined` .

Vá em frente e defina `addFive()` assim…

```javascript
function addFive() { 
  sum += 5; 
 } 
```

Como você pode ver, `sum` é adicionada por 5 sem problemas, mas como não há instrução de retorno, há uma saída `undefined` .

```javascript
var result = addFive(); // This is undefined 

```