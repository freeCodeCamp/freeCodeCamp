---
title: Object Keys
localeTitle: Llaves de objeto
---
El método `Object.keys()` devuelve una matriz de las propias propiedades enumerables de un objeto dado, en el mismo orden que el proporcionado por un bucle `for...in` (la diferencia es que un bucle `for-in` enumera las propiedades en la cadena del prototipo como bien).

## Sintaxis
```
Object.keys(obj) 
```

### Parámetros

**obj**

El objeto cuyas enumerables propiedades propias deben ser devueltas.

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) | [Enlace MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff688127%28v=vs.94%29.aspx)

## Descripción

`Object.keys()` devuelve una matriz cuyos elementos son cadenas correspondientes a las propiedades enumerables que se encuentran directamente sobre el objeto. El orden de las propiedades es el mismo que el dado en forma de bucle sobre las propiedades del objeto manualmente.

## Ejemplos
```
var arr = ['a', 'b', 'c']; 
 console.log(Object.keys(arr)); // console: ['0', '1', '2'] 
 
 // array like object 
 var obj = { 0: 'a', 1: 'b', 2: 'c' }; 
 console.log(Object.keys(obj)); // console: ['0', '1', '2'] 
 
 // array like object with random key ordering 
 var an_obj = { 100: 'a', 2: 'b', 7: 'c' }; 
 console.log(Object.keys(an_obj)); // console: ['2', '7', '100'] 
 
 // getFoo is property which isn't enumerable 
 var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } }); 
 my_obj.foo = 1; 
 
 console.log(Object.keys(my_obj)); // console: ['foo'] 
 
 // Create a constructor function. 
 function Pasta(grain, width, shape) { 
    this.grain = grain; 
    this.width = width; 
    this.shape = shape; 
 
    // Define a method. 
    this.toString = function () { 
        return (this.grain + ", " + this.width + ", " + this.shape); 
    } 
 } 
 
 // Create an object. 
 var spaghetti = new Pasta("wheat", 0.2, "circle"); 
 
 // Put the enumerable properties and methods of the object in an array. 
 var arr = Object.keys(spaghetti); 
 document.write (arr); 
 
 // Output: 
 // grain,width,shape,toString 

```