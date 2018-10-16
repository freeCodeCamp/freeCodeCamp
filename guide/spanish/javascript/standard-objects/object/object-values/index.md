---
title: Object Values
localeTitle: Valores de objeto
---
El método `Object.values()` devuelve una matriz de los valores de propiedad enumerables propios de un objeto dado, en el mismo orden que el proporcionado por un ciclo for ... in (la diferencia es que un ciclo for-in enumera las propiedades en la cadena del prototipo ).

## Sintaxis
```
Object.values(obj) 
```

### Parámetros

**obj**

El objeto cuyas enumerables propiedades propias deben ser devueltas.

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

## Descripción

`Object.values()` devuelve una matriz cuyos elementos son los valores de propiedad enumerables que se encuentran en el objeto. El orden de las propiedades es el mismo que el dado en forma de bucle sobre los valores de propiedad del objeto manualmente. En otras palabras, un objeto tiene pares clave: valor, y este método devuelve todos los _valores_ de ese objeto en un objeto similar a una matriz.

Consulte [Object.keys](https://guide.freecodecamp.org/javascript/standard-objects/object/object-keys/) , que devuelve todas las _claves_ de ese objeto en un objeto similar a una matriz.

## Ejemplos
```
var obj = { foo: 'bar', baz: 42 }; 
 console.log(Object.values(obj)); // ['bar', 42] 
 
 // array like object 
 var obj = { 0: 'a', 1: 'b', 2: 'c' }; 
 console.log(Object.values(obj)); // ['a', 'b', 'c'] 
 
 // array like object with random key ordering 
 var an_obj = { 100: 'a', 2: 'b', 7: 'c' }; 
 console.log(Object.values(an_obj)); // ['b', 'c', 'a'] 
 
 // getFoo is property which isn't enumerable 
 var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } }); 
 my_obj.foo = 'bar'; 
 console.log(Object.values(my_obj)); // ['bar'] 
 
 // non-object argument will be coerced to an object 
 console.log(Object.values('foo')); // ['f', 'o', 'o'] 
```

\* _no funciona en Internet Explorer_