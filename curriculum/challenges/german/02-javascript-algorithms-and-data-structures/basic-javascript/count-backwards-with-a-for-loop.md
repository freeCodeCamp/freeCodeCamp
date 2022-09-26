---
id: 56105e7b514f539506016a5e
title: Rückwärts zählen mit einer for-Schleife
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
dashedName: count-backwards-with-a-for-loop
---

# --description--

Eine for-Schleife kann auch rückwärts zählen, solange wir die richtigen Bedingungen definieren können.

Um jede Iteration um zwei zu dekrementieren, müssen wir unsere Initialisierung, die Bedingung und den abschließenden Ausdruck ändern.

Wir beginnen bei `i = 10` und machen eine Schleife, solange `i > 0`. Wir werden `i` in jeder Schleife mit `i -= 2` um 2 dekrementieren.

```js
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

`ourArray` wird jetzt `[10, 8, 6, 4, 2]` enthalten. Ändern wir unseren Initialisierungs- und Abschlussausdruck so, dass wir in Zweierschritten rückwärts zählen können, um ein Array mit absteigenden ungeraden Zahlen zu erstellen.

# --instructions--

Füge die ungeraden Zahlen von 9 bis 1 in `myArray` ein und verwende dazu eine `for`-Schleife.

# --hints--

Du solltest dafür eine `for`-Schleife verwenden.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

Du solltest die Array-Methode `push` verwenden.

```js
assert(code.match(/myArray.push/));
```

`myArray` sollte gleich `[9, 7, 5, 3, 1]` sein.

```js
assert.deepEqual(myArray, [9, 7, 5, 3, 1]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```
