---
title: Use Destructuring Assignment to Assign Variables from Objects
localeTitle: Use Destructuring Assignment para atribuir variáveis ​​de objetos
---
## Use Destructuring Assignment para atribuir variáveis ​​de objetos

# Este desafio requer alguma intuição sobre objetos de string em javascript.

Quando você cria um objeto de string, ele é baseado no seguinte [protótipo de string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype) .

Assim, cada string possui uma propriedade length; genericString = {comprimento: 13}. (Esta é a única propriedade adotada do String.prototype.)

# Reatribuir propriedades usando desconstrução.

```javascript
var basicOjb = {x: 40}; 
 //To reassign 'get the value of the x property of basicObj and place its value into bigX' in ES6: 
 const { x: bigX } = basicOjb; 
 consle.log(bigX) // ans = 40 
```

Coloque o valor da propriedade length de 'str' em len.