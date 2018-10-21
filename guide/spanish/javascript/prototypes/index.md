---
title: Prototypes
localeTitle: Prototipos
---
## Prototipos

JavaScript es un lenguaje basado en prototipos, por lo tanto, comprender el objeto prototipo es uno de los conceptos más importantes que los profesionales de JavaScript deben conocer. Este artículo le dará una breve descripción del objeto Prototype a través de varios ejemplos. Antes de leer este artículo, deberá tener una comprensión básica de [`this` referencia en JavaScript](/src/pages/javascript/this-reference/index.md) .

### Objeto prototipo

Para mayor claridad, examinemos el siguiente ejemplo:

```javascript
function Point2D(x, y) { 
  this.x = x; 
  this.y = y; 
 } 
```

A `Point2D` que se declara la función `Point2D` , se `Point2D` una propiedad predeterminada llamada `prototype` (tenga en cuenta que, en JavaScript, una función también es un objeto). El `prototype` la propiedad es un objeto que contiene un `constructor` propiedad y su valor es `Point2D` función: `Point2D.prototype.constructor = Point2D` . Y cuando llama a `Point2D` con una `new` palabra clave, _los objetos recién creados heredarán todas las propiedades de_ `Point2D.prototype` . Para verificar esto, puede agregar un método llamado `move` a `Point2D.prototype` siguiente manera:

```javascript
Point2D.prototype.move = function(dx, dy) { 
  this.x += dx; 
  this.y += dy; 
 } 
 
 var p1 = new Point2D(1, 2); 
 p1.move(3, 4); 
 console.log(p1.x); // 4 
 console.log(p1.y); // 6 
```

El **prototipo** `Point2D.prototype` se llama **objeto prototipo** o **prototipo** del objeto `p1` y para cualquier otro objeto creado con la `new Point2D(...)` . Puede agregar más propiedades al objeto `Point2D.prototype` como desee. El patrón común es declarar métodos a `Point2D.prototype` y otras propiedades se declararán en la función de constructor.

Los objetos incorporados en JavaScript se construyen de manera similar. Por ejemplo:

*   El prototipo de los objetos creados con la `new Object()` sintaxis de `new Object()` o `{}` es `Object.prototype` .
*   El prototipo de los arreglos creados con la `new Array()` sintaxis `new Array()` o `[]` es `Array.prototype` .
*   Y así sucesivamente con otros objetos incorporados como `Date` y `RegExp` .

`Object.prototype` es heredado por todos los objetos y no tiene prototipo (su prototipo es `null` ).

### Cadena prototipo

El mecanismo de la cadena de prototipos es simple: cuando accede a una propiedad `p` en el objeto `obj` , el motor de JavaScript buscará esta propiedad dentro del objeto `obj` . Si el motor no puede buscar, continúa buscando en el prototipo del objeto `obj` y así sucesivamente hasta llegar a `Object.prototype` . Si después de que la búsqueda haya finalizado y no se haya encontrado nada, el resultado quedará `undefined` . Por ejemplo:

```javascript
var obj1 = { 
  a: 1, 
  b: 2 
 }; 
 
 var obj2 = Object.create(obj1); 
 obj2.a = 2; 
 
 console.log(obj2.a); // 2 
 console.log(obj2.b); // 2 
 console.log(obj2.c); // undefined 
```

En el fragmento de `var obj2 = Object.create(obj1)` anterior, la declaración `var obj2 = Object.create(obj1)` creará `obj2` objeto `obj2` con un objeto prototipo `obj1` . En otras palabras, `obj1` convierte en el prototipo de `obj2` lugar de `Object.prototype` de forma predeterminada. Como puede ver, `b` no es una propiedad de `obj2` , aún puede acceder a través de la cadena de prototipos. Sin embargo, para la propiedad `c` , obtiene `undefined` valor `undefined` porque no se puede encontrar en `obj1` y `Object.prototype` .

### Las clases

En ES2016, ahora podemos usar la palabra clave de `Class` , así como los métodos mencionados anteriormente para manipular el `prototype` . La `Class` JavaScript atrae a desarrolladores de orígenes OOP, pero esencialmente hace lo mismo que arriba.

```javascript
class Rectangle { 
  constructor(height, width) { 
    this.height = height 
    this.width = width 
  } 
 
  get area() { 
    return this.calcArea() 
  } 
 
  calcArea() { 
    return this.height * this.width 
  } 
 } 
 
 const square = new Rectangle(10, 10) 
 
 console.log(square.area) // 100 
```

Esto es básicamente lo mismo que:

```javascript
function Rectangle(height, width) { 
  this.height = height 
  this.width = width 
 } 
 
 Rectangle.prototype.calcArea = function calcArea() { 
  return this.height * this.width 
 } 
```

Los métodos `getter` y `setter` en las clases vinculan una propiedad Object a una función a la que se llamará cuando se busque esa propiedad. Es solo azúcar sintáctica para ayudar a que sea más fácil _buscar_ o _establecer_ propiedades.

**Otras lecturas:**

*   [MDN: prototipos de objetos](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)