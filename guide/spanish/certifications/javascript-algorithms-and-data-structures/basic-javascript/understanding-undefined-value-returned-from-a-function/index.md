---
title: Understanding Undefined Value returned from a Function
localeTitle: Entendiendo el valor indefinido devuelto por una función
---
## Entendiendo el valor indefinido devuelto por una función

Una función sin declaración de `return` , tiene una salida `undefined` . Por lo tanto, si intenta igualar una variable a la salida de una función sin declaración de `return` , esa variable será igual a `undefined` .

Adelante, define `addFive()` así ...

```javascript
function addFive() { 
  sum += 5; 
 } 
```

Como puede ver, la `sum` se agrega por 5 sin problemas, pero como no hay una declaración de retorno, hay un resultado `undefined` .

```javascript
var result = addFive(); // This is undefined 

```