---
title: Delete Properties from a JavaScript Object
localeTitle: Eliminar propiedades de un objeto de JavaScript
---
También podemos eliminar propiedades de objetos como este:
```
delete ourDog.bark; 
```

El **operador de eliminación** elimina una propiedad de un objeto.

## Sintaxis

`delete expression` donde la expresión debe evaluar una referencia de propiedad, por ejemplo:
```
delete object.property 
 delete object['property'] 
```

## Parámetros

**objeto**  
El nombre de un objeto, o una expresión que evalúa a un objeto.

**propiedad**  
La propiedad para eliminar.

## Ejemplo

```js
var person = {name:'Jay', age:'52'}; 
 delete person['age']; 
 
 console.log(person); //{name:'Jay'} 
```

## Valor de retorno

Se lanza en modo estricto si la propiedad es una propiedad no configurable propia (devuelve falso en no estricto). Devuelve true en todos los demás casos.

[Lee mas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)