---
title: this reference
localeTitle: esta referencia
---
## `this` referencia

En JavaScript, cada función tiene `this` referencia creada automáticamente cuando la declara. Esta referencia es bastante similar a `this` referencia en otros lenguajes basados ​​en clases como Java o C # (JavaScript es un lenguaje basado en prototipos y no tiene un concepto de "clase"): _apunta al objeto que está llamando a la función_ (este objeto a veces llamado como _contexto_ ). Sin embargo, en JavaScript, _`this` referencia dentro de las funciones puede vincularse a diferentes objetos dependiendo de dónde se llame la función_ . Aquí hay 5 reglas básicas para `this` enlace en JavaScript:

### Regla 1

Cuando se llama a una función en el ámbito global, `this` referencia está vinculada por defecto al **objeto global** ( `window` en el navegador o `global` en Node.js). Por ejemplo:

```javascript
function foo() { 
  this.a = 2; 
 } 
 
 foo(); 
 console.log(a); // 2 
```

Nota: Si se declara la `foo()` función anterior en modo estricto, a continuación, se llama a esta función en el ámbito global, `this` será `undefined` y asignación `this.a = 2` tirará `Uncaught TypeError` excepción.

### Regla 2

Examinemos el siguiente ejemplo:

```javascript
function foo() { 
  this.a = 2; 
 } 
 
 var obj = { 
  foo: foo 
 }; 
 
 obj.foo(); 
 console.log(obj.a); // 2 
```

Claramente, en el fragmento de código anterior, la función `foo()` se llama con _context_ es el objeto `obj` y `this` referencia ahora está vinculada a `obj` . Entonces, cuando se llama a una función con un objeto de contexto, `this` referencia se vinculará a este objeto.

### Regla 3

`.call` , `.apply` y `.bind` pueden usarse en el sitio de la llamada para enlazar explícitamente `this` . Usar `.bind(this)` es algo que puede ver en muchos componentes de React.

```javascript
var foo = function() { 
  console.log(this.bar) 
 } 
 
 foo.call({ bar: 1 }) // 1 
```

Aquí hay un ejemplo rápido de cómo se usa cada uno para unir `this` :

*   `.call()` : `fn.call(thisObj, fnParam1, fnParam2)`
*   `.apply()` : `fn.apply(thisObj, [fnParam1, fnParam2])`
*   `.bind()` : `const newFn = fn.bind(thisObj, fnParam1, fnParam2)`

### Regla 4

```javascript
function Point2D(x, y) { 
  this.x = x; 
  this.y = y; 
 } 
 
 var p1 = new Point2D(1, 2); 
 console.log(p1.x); // 1 
 console.log(p1.y); // 2 
```

Lo que debe notar es la función `Point2D` llamada con una `new` palabra clave, y `this` referencia está vinculada al objeto `p1` . Entonces, cuando se llama a una función con una `new` palabra clave, se creará un nuevo objeto y `this` referencia se vinculará a este objeto.

Nota: al llamar a una función con una `new` palabra clave, también la llamamos _función constructora_ .

### Regla 5

JavaScript determina el valor de `this` en tiempo de ejecución, según el contexto actual. Entonces, `this` veces puede apuntar a algo distinto de lo que esperas.

Considere este ejemplo de una clase Cat con un método llamado `makeSound()` , siguiendo el patrón en la Regla 4 (arriba) con una función constructora y la `new` palabra clave.

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.makeSound(); // Fat Daddy says: Mrrooowww 
```

Ahora tratemos de darle al gato una manera de `annoy()` personas repitiendo su sonido 100 veces, una vez cada medio segundo.

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
    this.annoy = function() { 
        var count = 0, max = 100; 
        var t = setInterval(function() { 
            this.makeSound(); // <-- this line fails with `this.makeSound is not a function` 
            count++; 
            if (count === max) { 
                clearTimeout(t); 
            } 
        }, 500); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.annoy(); 
```

Eso no funciona porque dentro de la `setInterval` llamada `setInterval` hemos creado un nuevo contexto con alcance global, por lo que `this` ya no apunta a nuestra instancia de Kitty. En un navegador web, `this` apuntará al objeto Window, que no tiene un método `makeSound()` .

Un par de maneras de hacerlo funcionar:

1) Antes de crear el nuevo contexto, asigne `this` a una variable local llamada `me` , o `self` , o como se llame, y use esa variable dentro de la devolución de llamada.

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
    this.annoy = function() { 
        var count = 0, max = 100; 
        var self = this; 
        var t = setInterval(function() { 
            self.makeSound(); 
            count++; 
            if (count === max) { 
                clearTimeout(t); 
            } 
        }, 500); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.annoy(); 
```

2) Con ES6 puede evitar la asignación de `this` a una variable local mediante el uso de una función de flecha, que se une `this` con el contexto del código que rodea donde se define.

```javascript
var Cat = function(name, sound) { 
    this.name = name; 
    this.sound = sound; 
    this.makeSound = function() { 
        console.log( this.name + ' says: ' + this.sound ); 
    }; 
    this.annoy = function() { 
        var count = 0, max = 100; 
        var t = setInterval(() => { 
            this.makeSound(); 
            count++; 
            if (count === max) { 
                clearTimeout(t); 
            } 
        }, 500); 
    }; 
 } 
 var kitty = new Cat('Fat Daddy', 'Mrrooowww'); 
 kitty.annoy(); 
```

### Otros recursos

*   [javascriptissexy.com](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
*   [No sabes js](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md)