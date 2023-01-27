---
id: 587d78b2367417b2b2512b0f
title: Entfernen von Elementen aus einem Array mit pop() und shift()
challengeType: 1
forumTopicId: 301165
dashedName: remove-items-from-an-array-with-pop-and-shift
---

# --description--

Sowohl `push()` und `unshift()` verfügen über entsprechende Methoden, welche nahezu funktionale Gegensätze sind: `pop()` und `shift()`. Wie du vielleicht schon erraten hast, *entfernt* `pop()` ein Element vom Ende des Arrays anstatt es hinzuzufügen, während `shift()` ein Element vom Anfang entfernt. Der Hauptunterschied zwischen `pop()` und `shift()` und ihre Cousinen `push()` und `unshift()` ist, dass keine Methode Parameter benötigt und jede nur einen Array erlaubt, dass dieser von einem einzelnen Element gleichzeitig verändert werden kann.

Schauen wir uns das mal an:

```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
```

`greetings` hätte den Wert `['whats up?', 'hello']`.

```js
greetings.shift();
```

`greetings` hätte den Wert `['hello']`.

Wir können den Wert eines entfernten Elements auch mit einer der folgenden Methoden ausgeben:

```js
let popped = greetings.pop();
```

`greetings` hätte den Wert `[]` und `popped` hätte den Wert `hello`.

# --instructions--

Wir haben die Funktion `popShift` definiert, die ein Array als Argument nimmt und ein neues Array ausgibt. Verändere die Funktion, indem du `pop()` und `shift()` verwendest, um das erste und das letzte Element des Argumentationsarrays zu entfernen, und weise die entfernten Elemente zu deren passenden Variablen, sodass das ausgegebene Array deren Werte enthält.

# --hints--

`popShift(["challenge", "is", "not", "complete"])` soll `["challenge", "complete"]` ausgeben

```js
assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), [
  'challenge',
  'complete'
]);
```

Die Funktion `popShift` soll die Methode `pop()` verwenden

```js
assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1);
```

Die Funktion`popShift` soll die Methode `shift()` verwenden

```js
assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1);
```

# --seed--

## --seed-contents--

```js
function popShift(arr) {
  let popped; // Change this line
  let shifted; // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

# --solutions--

```js
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}
```
