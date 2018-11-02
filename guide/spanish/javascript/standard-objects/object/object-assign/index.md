---
title: Object Assign
localeTitle: Asignar objeto
---
## Asignar objeto

Esto es un talón. [Ayuda a nuestra comunidad a expandirla](https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/standard-objects/object/object-assign/index.md) .

[Esta guía rápida de estilo ayudará a asegurar que su solicitud de extracción sea aceptada](https://github.com/freecodecamp/guides/blob/master/README.md) .

El método `Object.assign()` se usa para 1) agregar propiedades y valores a un objeto existente, 2) hacer una nueva copia de un objeto existente, o 3) combinar varios objetos existentes en un solo objeto. El método `Object.assign()` requiere un targetObject como parámetro y puede aceptar un número ilimitado de sourceObjects como parámetros adicionales.

Es importante tener en cuenta que el parámetro targetObject siempre se modificará. Si ese parámetro apunta a un objeto existente, ese objeto será modificado y copiado. Sin embargo, si desea crear una copia de un objeto sin modificar ese objeto original, puede pasar un objeto vacío `{}` como primer parámetro (o targetObject) y el objeto que se copiará como segundo parámetro (o sourceObject).

Si los objetos pasados ​​como parámetros en `Object.assign()` comparten las mismas propiedades (o claves), los valores de propiedad que vienen más adelante en la lista de parámetros sobrescribirán los que vinieron antes.

**Sintaxis**

```javascript
Object.assign(targetObject, ...sourceObject) 
```

**Valor de retorno**

`Object.assign()` devuelve el targetObject.

**Ejemplos**

_Modificando y Copiando targetObject_

```javascript
let obj = {name: 'Dave', age: 30}; 
 
 let objCopy = Object.assign(obj, {coder: true}); 
 
 console.log(obj); // returns { name: 'Dave', age: 30, coder: true } 
 console.log(objCopy); // returns { name: 'Dave', age: 30, coder: true } 
```

_Copiando targetObject sin modificación_

```javascript
let obj = {name: 'Dave', age: 30}; 
 
 let objCopy = Object.assign({}, obj, {coder: true}); 
 
 console.log(obj); // returns { name: 'Dave', age: 30 } 
 console.log(objCopy); // returns { name: 'Dave', age: 30, coder: true } 
```

_Objetos con las mismas propiedades_

```javascript
let obj = {name: 'Dave', age: 30, favoriteColor: 'blue'}; 
 
 let objCopy = Object.assign({}, obj, {coder: true, favoriteColor: 'red'}); 
 
 console.log(obj); // returns { name: 'Dave', age: 30, favoriteColor: 'blue' } 
 console.log(objCopy); // { name: 'Dave', age: 30, favoriteColor: 'red', coder: true } 
```

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  
[Introducción a Object.assign en ES6 (Video)](https://youtu.be/vM7Tif98Dlo)