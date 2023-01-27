---
id: 587d7db1367417b2b2512b87
title: Aggiungere dei metodi a quelli ereditati
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

Una funzione costruttore che eredita il suo oggetto `prototype` da una funzione costruttore di supertipo può avere i propri metodi in aggiunta ai quelli ereditati.

Per esempio, `Bird` è un costruttore che eredita il suo `prototype` da `Animal`:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

In aggiunta a quello che è ereditato da `Animal`, vuoi aggiungere un comportamento che sia unico per gli oggetti `Bird`. Qui, `Bird` riceverà una funzione `fly()`. Le funzioni vengono aggiunte al `prototype` di `Bird` allo stesso modo di qualsiasi funzione del costruttore:

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

Ora le istanze di `Bird` avranno entrambi i metodi `eat()` e `fly()`:

```js
let duck = new Bird();
duck.eat();
duck.fly();
```

`duck.eat()` visualizzerà nella console la stringa `nom nom nom` e `duck.fly()` mostrerà la stringa `I'm flying!`.

# --instructions--

Aggiungi tutto il codice necessario in modo che l'oggetto `Dog` erediti da `Animal` e il costruttore del `prototype` di `Dog` sia impostato su `Dog`. Aggiungi quindi un metodo `bark()` all'oggetto `Dog` in modo che `beagle` possegga sia il metodo `eat()` che `bark()`. Il metodo `bark()` dovrebbe visualizzare `Woof!` nella console.

# --hints--

`Animal` non dovrebbe rispondere al metodo `bark()`.

```js
assert(typeof Animal.prototype.bark == 'undefined');
```

`Dog` dovrebbe ereditare il metodo `eat()` da `Animal`.

```js
assert(typeof Dog.prototype.eat == 'function');
```

Il prototipo di `Dog` dovrebbe avere un metodo `bark()`.

```js
assert('bark' in Dog.prototype);
```

`beagle` dovrebbe essere una `instanceof` di `Animal`.

```js
assert(beagle instanceof Animal);
```

Il costruttore di `beagle` dovrebbe essere impostato su `Dog`.

```js
assert(beagle.constructor === Dog);
```

`beagle.eat()` dovrebbe visualizzare nella console la stringa `nom nom nom`

```js
capture();
beagle.eat();
uncapture();
assert(logOutput == 'nom nom nom');
```

`beagle.bark()` dovrebbe visualizzare nella console la stringa `Woof!`

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
