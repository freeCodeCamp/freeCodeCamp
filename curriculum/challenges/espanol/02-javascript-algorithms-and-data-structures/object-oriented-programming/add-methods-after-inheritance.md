---
id: 587d7db1367417b2b2512b87
title: Añade métodos después de la herencia
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

Una función constructor que hereda su objeto `prototype` de una función constructor "supertype" puede seguir teniendo sus propios métodos además de los heredados.

Por ejemplo, `Bird` es un constructor que hereda su `prototype` de `Animal`:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

Además de lo que se hereda de `Animal`, se quiere añadir un comportamiento que sea exclusivo de los objetos `Bird`. Aquí, `Bird` obtendrá una función `fly()`. Las funciones se añaden al `prototype` de `Bird's` del mismo modo que cualquier función constructor:

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

Ahora las instancias de `Bird` tendrán métodos tanto `eat()` como `fly()`:

```js
let duck = new Bird();
duck.eat();
duck.fly();
```

`duck.eat()` mostrará la cadena `nom nom nom` en consola, y `duck.fly()` mostrará la cadena `I'm flying!`.

# --instructions--

Añade el código necesario para que el objeto `Dog` herede de `Animal` y el constructor `prototype` de `Dog` sea establecido en `Dog`. A continuación agrega el método `bark()` al objeto `Dog`, para que `beagle` pueda "comer" `eat()` y "ladrar" `bark()`. El método `bark()` debe imprimir `Woof!` por consola.

# --hints--

`Animal` no debe responder al método `bark()`.

```js
assert(typeof Animal.prototype.bark == 'undefined');
```

`Dog` debe heredar el método `eat()` de `Animal`.

```js
assert(typeof Dog.prototype.eat == 'function');
```

El prototipo `Dog` debe tener un método `bark()`.

```js
assert('bark' in Dog.prototype);
```

`beagle` debe ser una instancia de (`instanceof`) `Animal`.

```js
assert(beagle instanceof Animal);
```

El constructor para `beagle` debe establecerse en `Dog`.

```js
assert(beagle.constructor === Dog);
```

`beagle.eat()` debe imprimir la cadena `nom nom nom`

```js
capture();
beagle.eat();
uncapture();
assert(logOutput == 'nom nom nom');
```

`beagle.bark()` debe imprimir la cadena `Woof!`

```js
capture();
beagle.bark();
uncapture();
assert(logOutput == 'Woof!');
```

# --seed--

## --before-user-code--

```js
var logOutput = "";
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        logOutput = message;
        if(nativeLog.apply) {
          nativeLog.apply(originalConsole, arguments);
        } else {
          var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
          nativeLog(nativeMsg);
        }
    };
}

function uncapture() {
  console.log = originalConsole.log;
}

capture();
```

## --after-user-code--

```js
uncapture();
(function() { return logOutput || "console.log never called"; })();
```

## --seed-contents--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line




// Only change code above this line

let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};
let beagle = new Dog();

beagle.eat();
beagle.bark();
```
