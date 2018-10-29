---
title: Implement map on a Prototype
localeTitle: Implementar mapa en un prototipo
---
## Implementar mapa en un prototipo

Para resolver ESTE desafío usando la palabra clave esta es una clave.

Nos dará acceso al objeto que estamos llamando myMap.

Desde allí podemos usar el bucle forEach o for para agregar elementos a una matriz vacía ya declarada a medida que modificamos cada elemento con el método de devolución de llamada dado.

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

### Enlaces útiles

[esta. Javascript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)  
[esta. Javascript W3Schools](https://www.w3schools.com/js/js_this.asp)