---
id: 587d7b8b367417b2b2512b53
title: Verwende die Klassensyntax, um eine Konstruktorfunktion zu definieren
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ES6 bietet eine neue Syntax zum Erstellen von Objekten, die das Schlüsselwort <dfn>class</dfn> verwendet.

In ES5 kann ein Objekt erzeugt werden, indem eine `constructor`-Funktion definiert und das `new`-Schlüsselwort zur Objekt-Instanziierung verwendet wird.

In ES6 verfügt eine `class`-Deklaration über eine `constructor`-Methode, welche über das `new`-Schlüsselwort aufgerufen wird. Wenn die Methode `constructor` nicht explizit definiert ist, wird sie implizit ohne Argumente definiert.

```js
// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
```

Es ist zu beachten, dass das `class`-Schlüsselwort eine neue Funktion deklariert, zu der ein Konstruktor hinzugefügt wird. Dieser Konstruktor wird aufgerufen, wenn `new` aufgerufen wird, um ein neues Objekt zu erstellen.

**Beachte:** UpperCamelCase sollte per Konvention für ES6-Klassennamen verwendet werden, wie in `SpaceShuttle` oben verwendet.

Die `constructor`-Methode ist eine spezielle Methode zur Erstellung und Initialisierung eines Objekts, das mit einer Klasse erstellt wurde. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.

# --instructions--

Verwende das `class`-Schlüsselwort und schreibe einen `constructor`, um die `Vegetable`-Klasse zu erstellen.

Mit der `Vegetable`-Klasse kannst du ein Gemüseobjekt mit einer `name`-Eigenschaft erstellen, die an den `constructor` übergeben wird.

# --hints--

`Vegetable` sollte eine `class` mit einer definierten `constructor`-Methode sein.

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

Das `class`-Schlüsselwort sollte verwendet werden.

```js
assert(code.match(/class/g));
```

`Vegetable` sollte instanziiert werden können.

```js
assert(() => {
  const a = new Vegetable('apple');
  return typeof a === 'object';
});
```

`carrot.name` sollte `carrot` zurückgeben.

```js
assert(carrot.name == 'carrot');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
```

# --solutions--

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
```
