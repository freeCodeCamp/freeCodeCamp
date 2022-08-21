---
id: 587d7dae367417b2b2512b7b
title: Eigene Eigenschaften verstehen
challengeType: 1
forumTopicId: 301326
dashedName: understand-own-properties
---

# --description--

Im folgenden Beispiel definiert der Konstruktor `Bird` zwei Eigenschaften: `name` und `numLegs`:

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` und `numLegs` werden <dfn>eigene Eigenschaften</dfn> genannt, weil sie direkt im Instanzobjekt definiert sind. Das bedeutet, dass `duck` und `canary` jeweils eine eigene Kopie dieser Eigenschaften besitzen. Tatsächlich hat jede Instanz von `Bird` ihre eigene Kopie dieser Eigenschaften. Der folgende Code fügt alle eigenen Eigenschaften von `duck` zu dem Array `ownProps` hinzu:

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
```

Die Konsole würde den Wert `["name", "numLegs"]` anzeigen.

# --instructions--

Füge die eigenen Eigenschaften von `canary` dem Array `ownProps` hinzu.

# --hints--

`ownProps` sollte die Werte `numLegs` und `name` enthalten.

```js
assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
```

Du solltest diese Aufgabe lösen, ohne die eingebaute Methode `Object.keys()` zu verwenden.

```js
assert(!/Object(\.keys|\[(['"`])keys\2\])/.test(code));
```

Du solltest diese Aufgabe lösen, ohne das Array `ownProps` fest zu kodieren.

```js
assert(
  !/\[\s*(?:'|")(?:name|numLegs)|(?:push|concat)\(\s*(?:'|")(?:name|numLegs)/.test(
    code
  )
);
```

# --seed--

## --seed-contents--

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
```

# --solutions--

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
function getOwnProps (obj) {
  const props = [];

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      props.push(prop);
    }
  }

  return props;
}

const ownProps = getOwnProps(canary);
```
