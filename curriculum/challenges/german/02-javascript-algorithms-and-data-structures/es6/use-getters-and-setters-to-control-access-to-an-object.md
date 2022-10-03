---
id: 587d7b8c367417b2b2512b54
title: Verwende Getter und Setter, um den Zugriff auf ein Objekt zu kontrollieren
challengeType: 1
forumTopicId: 301220
dashedName: use-getters-and-setters-to-control-access-to-an-object
---

# --description--

Du kannst Werte von einem Objekt erhalten und den Wert einer Eigenschaft innerhalb eines Objekts festlegen.

Diese werden klassischerweise <dfn>Getter</dfn> und <dfn>Setter</dfn> genannt.

Getter-Funktionen dienen dazu, den Wert einer privaten Variablen eines Objekts an den Benutzer zurückzugeben (zu holen), ohne dass der Benutzer direkt auf die private Variable zugreift.

Setter-Funktionen dienen dazu, den Wert der privaten Variablen eines Objekts auf der Grundlage des Wertes zu ändern (zu setzen), der der Setter-Funktion übergeben wurde. Diese Änderung kann Berechnungen beinhalten oder sogar den vorherigen Wert komplett überschreiben.

```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
```

Die Konsole würde die Strings `anonymous` und `newAuthor` anzeigen.

Beachte die Syntax, mit der die Getter und Setter aufgerufen werden. Sie sehen nicht einmal wie Funktionen aus. Getter und Setter sind wichtig, weil sie interne Implementierungsdetails verbergen.

**Beachte:** Es ist Konvention, dem Namen einer privaten Variable einen Unterstrich (`_`) voranzustellen. Diese Praxis allein macht eine Variable jedoch nicht privat.

# --instructions--

Verwende das Schlüsselwort `class`, um eine Klasse `Thermostat` zu erstellen. Der `constructor` akzeptiert eine Fahrenheit-Temperatur.

Erstelle in der Klasse einen `getter`, um die Temperatur in Celsius zu erhalten und einen `setter`, um die Temperatur in Celsius zu setzen.

Denke daran, dass `C = 5/9 * (F - 32)` und `F = C * 9.0 / 5 + 32`, wobei `F` der Wert der Temperatur in Fahrenheit und `C` der Wert der gleichen Temperatur in Celsius ist.

**Beachte:** Wenn du dies implementierst, verfolgst du die Temperatur innerhalb der Klasse in einer Skala, entweder Fahrenheit oder Celsius.

Das ist die Macht eines Getters und eines Setters. Du erstellst eine API für einen anderen Nutzer, der das richtige Ergebnis erhalten kann, unabhängig davon, welches du verfolgst.

Mit anderen Worten: Du abstrahierst die Implementierungsdetails vom Benutzer.

# --hints--

`Thermostat` sollte eine `class` mit einer definierten `constructor`-Methode sein.

```js
assert(
  typeof Thermostat === 'function' &&
    typeof Thermostat.constructor === 'function'
);
```

Das Schlüsselwort `class` sollte verwendet werden.

```js
assert(code.match(/class/g));
```

`Thermostat` sollte instanziiert werden können.

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return typeof t === 'object';
  })()
);
```

Wenn du mit einem Fahrenheit-Wert instanziiert wirst, sollte `Thermostat` die richtige Temperatur (`temperature`) einstellen.

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return t.temperature === 50;
  })()
);
```

Es sollte ein `getter` definiert werden.

```js
assert(
  (() => {
    const desc = Object.getOwnPropertyDescriptor(
      Thermostat.prototype,
      'temperature'
    );
    return !!desc && typeof desc.get === 'function';
  })()
);
```

Es sollte ein `setter` definiert werden.

```js
assert(
  (() => {
    const desc = Object.getOwnPropertyDescriptor(
      Thermostat.prototype,
      'temperature'
    );
    return !!desc && typeof desc.set === 'function';
  })()
);
```

Der Aufruf des `setter` mit einem Celsius-Wert sollte die Temperatur (`temperature`) einstellen.

```js
assert(
  (() => {
    const t = new Thermostat(32);
    t.temperature = 26;
    const u = new Thermostat(32);
    u.temperature = 50;
    return t.temperature === 26 && u.temperature === 50;
  })()
);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

# --solutions--

```js
class Thermostat {
  constructor(fahrenheit) {
    this._tempInCelsius = 5/9 * (fahrenheit - 32);
  }
  get temperature(){
    return this._tempInCelsius;
  }
  set temperature(newTemp){
    this._tempInCelsius = newTemp;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```
