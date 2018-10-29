---
title: Implement map on a Prototype
localeTitle: Implementar mapa em um protótipo
---
## Implementar mapa em um protótipo

Para resolver este desafio usando a palavra-chave, esta é uma chave.

Isso nos dará acesso ao objeto que estamos chamando de myMap.

A partir daí, podemos usar o loop forEach ou for para adicionar elementos ao array vazio já declarado à medida que modificamos cada elemento com o método de retorno de chamada fornecido.

```javascript
// the global Array 
 var s = [23, 65, 98, 5]; 
 
 Array.prototype.myMap = function(callback){ 
  var newArray = []; 
  // Add your code below this line 
  this.forEach(a => newArray.push(callback(a))); 
  // Add your code above this line 
  return newArray; 
 
 }; 
 
 var new_s = s.myMap(function(item){ 
  return item * 2; 
 }); 
```

### Links Úteis

[isto. Javascript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)  
[isto. Javascript W3Schools](https://www.w3schools.com/js/js_this.asp)