---
id: 587d7b8b367417b2b2512b53
title: Verwende die Klassensyntax, um eine Konstruktorfunktion zu definieren
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ES6 bietet eine neue Syntax zum Erstellen von Objekten, die das Schlüsselwort <dfn>class</dfn> verwendet.

Es ist zu beachten, dass die Syntax `class` nur eine Syntax ist und keine vollwertige klassenbasierte Implementierung eines objektorientierten Paradigmas, anders als in Sprachen wie Java, Python, Ruby usw.

In ES5 definieren wir normalerweise eine Funktion `constructor` und verwenden das Schlüsselwort `new`, um ein Objekt zu instanziieren.

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

Die Syntax `class` ersetzt einfach die Erstellung der Funktion `constructor`:

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

Es ist zu beachten, dass das Schlüsselwort `class` eine neue Funktion deklariert, zu der ein Konstruktor hinzugefügt wird. Dieser Konstruktor wird aufgerufen, wenn `new` aufgerufen wird, um ein neues Objekt zu erstellen.

**Beachte:** Für ES6-Klassennamen sollte per Konvention Großbuchstaben verwendet werden, wie in `SpaceShuttle` oben verwendet.

Die Methode `constructor` ist eine spezielle Methode zur Erstellung und Initialisierung eines Objekts, das mit einer Klasse erstellt wurde. Mehr darüber erfährst du im Abschnitt Objektorientierte Programmierung der Zertifizierung JavaScript Algorithmen und Datenstrukturen.

# --instructions--

Verwende das Schlüsselwort `class` und schreibe einen `constructor`, um die Klasse `Vegetable` zu erstellen.

Mit der Klasse `Vegetable` kannst du ein Gemüseobjekt mit einer Eigenschaft `name` erstellen, die an den `constructor` übergeben wird.

# --hints--

`Vegetable` sollte eine `class` mit einer definierten Methode `constructor` sein.

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

Das Schlüsselwort `class` sollte verwendet werden.

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
