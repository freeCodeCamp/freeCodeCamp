---
title: Array.prototype.values
localeTitle: Array.prototype.values
---
## Array.prototype.values

El método de `values` devuelve un nuevo objeto `Array Iterator` que contiene los valores para cada índice en la matriz.

### Sintaxis

```javascript
arr.values() 
```

### Devoluciones

Un nuevo objeto ittertator `array` .

### Ejemplo

```javascript
let friends = ["Rachel", "Monica", "Chandler", "Phoebe", "Joey", "Ross"] 
 
 for (let friend of friends) { 
  console.log(friend) 
 } 
 
 // Rachel 
 // Monica 
 // Chandler 
 // Phoebe 
 // Joey 
 // Ross 
```

#### Más información:

[Documentación MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values)