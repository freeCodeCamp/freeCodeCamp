---
id: 587d7b8a367417b2b2512b4d
title: Verwende die Destrukturierungszuweisung, um ein Objekt als Parameter einer Funktion zu übergeben
challengeType: 1
forumTopicId: 301217
dashedName: use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
---

# --description--

In manchen Fällen kannst du das Objekt in einem Funktionsargument selbst destrukturieren.

Schau dir den folgenden Code an:

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```

Dadurch wird das Objekt, das an die Funktion gesendet wird, effektiv destrukturiert. Dies kann auch an Ort und Stelle geschehen:

```js
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

Wenn `profileData` an die obige Funktion übergeben wird, werden die Werte aus dem Funktionsparameter für die Verwendung innerhalb der Funktion destrukturiert.

# --instructions--

Verwende die Destrukturierungszuweisung innerhalb des Arguments der Funktion `half`, um nur `max` und `min` innerhalb der Funktion zu senden.

# --hints--

`stats` sollte ein `object` sein.

```js
assert(typeof stats === 'object');
```

`half(stats)` sollte `28.015` sein

```js
assert(half(stats) === 28.015);
```

Es sollte eine Destrukturierung vorgenommen werden.

```js
assert(__helpers.removeWhiteSpace(code).match(/half=\({\w+,\w+}\)/));
```

Es sollten destrukturierte Parameter verwendet werden.

```js
assert(!code.match(/stats\.max|stats\.min/));
```

# --seed--

## --seed-contents--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line
```

# --solutions--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ( {max, min} ) => (max + min) / 2.0;
```
