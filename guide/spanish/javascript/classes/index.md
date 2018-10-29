---
title: Classes
localeTitle: Las clases
---
## Las clases

JavaScript no tiene el concepto de clases inherentemente.

Pero podríamos simular las funcionalidades de una clase aprovechando la naturaleza prototípica de JavaScript.

Este artículo asume que usted tiene una comprensión básica de los [prototipos](/src/pages/javascript/prototypes/index.md) .

En aras de la claridad, asumamos que queremos crear una clase que pueda hacer lo siguiente

```javascript
var p = new Person('James','Bond'); // create a new instance of Person class 
    p.log() // Output: 'I am James Bond' // Accessing a function in the class 
    // Using setters and getters 
    p.profession = 'spy' 
    p.profession // output: James bond is a spy 
```

### Usando la palabra clave de clase

Como en cualquier otro lenguaje de programación, ahora puede utilizar la palabra clave de `class` para crear una clase.

Esto no se admite en navegadores antiguos y se introdujo en ECMAScript 2015.

```javascript
class Person { 
    constructor(firstName, lastName) { 
        this._firstName = firstName; 
        this._lastName = lastName; 
    } 
 
    log() { 
        console.log('I am', this._firstName, this._lastName); 
    } 
 
    // setters 
    set profession(val) { 
        this._profession = val; 
    } 
    // getters 
    get profession() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 
 } 
```

  
  

`class` es solo un azúcar sintáctico sobre el modelo de herencia existente basado en un prototipo de JavaScript.

En general, los programadores usan las siguientes formas para crear una clase en JavaScript.

### Usando métodos añadidos a los prototipos:

Aquí, todos los métodos se añaden al prototipo.

```javascript
function Person(firstName, lastName) { 
    this._firstName = firstName; 
    this._lastName = lastName; 
 } 
 
 Person.prototype.log = function() { 
    console.log('I am', this._firstName, this._lastName); 
 } 
 
 // This line adds getters and setters for the profession object. Note that in general you could just write your own get and set functions like the 'log' method above. 
 // Since in this example we are trying the mimic the class above, we try to use the getters and setters property provided by JavaScript 
 Object.defineProperty(Person.prototype, 'profession', { 
    set: function(val) { 
        this._profession = val; 
    }, 
    get: function() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 }) 
```

También puede escribir métodos de prototipo sobre la función `Person` como se muestra a continuación

```javascript
Person.prototype = { 
    log: function() { 
        console.log('I am ', this._firstName, this._lastName); 
    } 
    set profession(val) { 
        this._profession = val; 
    } 
 
    get profession() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 
 } 
```

### Usando métodos añadidos internamente

Aquí los métodos se añaden internamente en lugar de prototipo.

```javascript
function Person(firstName, lastName) { 
    this._firstName = firstName; 
    this._lastName = lastName; 
 
    this.log = function() { 
        console.log('I am ', this._firstName, this._lastName); 
    } 
 
    Object.defineProperty(this, 'profession', { 
        set: function(val) { 
            this._profession = val; 
        }, 
        get: function() { 
            console.log(this._firstName, this._lastName, 'is a', this._profession); 
        } 
    }) 
 } 
```

### Ocultar detalles en clases con símbolos.

La mayoría de las veces, algunas propiedades y métodos deben estar ocultos para evitar el acceso desde fuera de la función. Con las clases, para obtener esta funcionalidad, una forma de hacerlo es mediante el uso de símbolos. Symbol es un nuevo tipo incorporado de JavaScript, que puede invocarse para dar un nuevo valor de símbolo. Cada símbolo es único y se puede usar como clave en un objeto. Por lo tanto, un caso de uso de símbolos es que puede agregar algo a un objeto que quizás no posea, y es posible que no desee colisionar con ninguna otra clave de objeto, por lo que crear una nueva y agregar una propiedad a ese objeto utilizando el símbolo es lo más seguro. . Además, cuando el valor del símbolo se agrega a un objeto; Nadie más sabrá cómo conseguirlo.

```javascript
class Person { 
    constructor(firstName, lastName) { 
        this._firstName = firstName; 
        this._lastName = lastName; 
    } 
 
    log() { 
        console.log('I am', this._firstName, this._lastName); 
    } 
 
    // setters 
    set profession(val) { 
        this._profession = val; 
    } 
    // getters 
    get profession() { 
        console.log(this._firstName, this._lastName, 'is a', this._profession); 
    } 
 // With the above code, even though we can access the properties outside the function to change their content what if we don't want that. 
 // Symbols come to rescue. 
 let s_firstname  = new Symbol(); 
 
 class Person { 
    constructor(firstName, lastName) { 
        this[s_firstName] = firstName; 
        this._lastName = lastName; 
    } 
 
    log() { 
        console.log('I am', this._firstName, this._lastName); 
    } 
 
    // setters 
    set profession(val) { 
        this._profession = val; 
    } 
    // getters 
    get profession() { 
        console.log(this[s_firstName], this._lastName, 'is a', this._profession); 
    } 
```

#### Más información: