---
id: 56104e9e514f539506016a5c
title: Ungerade Zahlen mit einer For-Schleife iterieren
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
dashedName: iterate-odd-numbers-with-a-for-loop
---

# --description--

For-Schleifen müssen nicht eine nach der anderen durchlaufen. Indem wir unsere `final-expression` (abschießenden Ausdruck) ändern, können wir mit geraden Zahlen zählen.

Wir beginnen bei `i = 0` und machen eine Schleife, solange `i < 10`. Wir werden `i` in jeder Schleife mit `i += 2` um 2 erhöhen.

```js
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

`ourArray` wird nun `[0, 2, 4, 6, 8]` enthalten. Ändern wir unsere `initialization`, damit wir mit ungeraden Zahlen zählen können.

# --instructions--

Füge die ungeraden Zahlen von 1 bis 9 in `myArray` ein und verwende dazu eine `for`-Schleife.

# --hints--

Du solltest dafür eine `for`-Schleife verwenden.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` sollte gleich `[1, 3, 5, 7, 9]` sein.

```js
assert.deepEqual(myArray, [1, 3, 5, 7, 9]);
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
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```
