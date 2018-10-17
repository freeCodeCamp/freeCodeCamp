---
title: Use Destructuring Assignment to Assign Variables from Objects
localeTitle: Usar asignación de destrucción para asignar variables de objetos
---
## Usar asignación de destrucción para asignar variables de objetos

# Este desafío requiere cierta intuición sobre los objetos de cadena en javascript.

Cuando creas un objeto de cadena, se basa en el siguiente [prototipo de cadena](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype) .

Por lo tanto, cada cadena tiene una propiedad de longitud; genericString = {longitud: 13}. (Esta es la única propiedad adoptada del String.prototype.)

# Reasignar propiedades usando deconstrucción.

```javascript
var basicOjb = {x: 40}; 
 //To reassign 'get the value of the x property of basicObj and place its value into bigX' in ES6: 
 const { x: bigX } = basicOjb; 
 consle.log(bigX) // ans = 40 
```

Coloque el valor de la propiedad de longitud de 'str' en len.