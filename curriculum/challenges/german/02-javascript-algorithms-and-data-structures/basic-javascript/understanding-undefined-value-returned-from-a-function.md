---
id: 598e8944f009e646fc236146
title: Undefinierte Werte, die von einer Funktion zurückgegeben werden, verstehen
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
dashedName: understanding-undefined-value-returned-from-a-function
---

# --description--

Eine Funktion kann die `return`-Anweisung enthalten, muss sie aber nicht. In dem Fall, dass die Funktion keine `return`-Anweisung hat, wenn du sie aufrufst, verarbeitet die Funktion den inneren Code, aber der zurückgegebene Wert ist `undefined`.

**Beispiel**

```js
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
```

`addSum` ist eine Funktion ohne eine `return`-Anweisung. Die Funktion wird die globale `sum` Variable ändern, aber der zurückgegebene Wert der Funktion ist `undefined`.

# --instructions--

Erstelle eine Funktion `addFive` ohne jegliche Argumente. Diese Funktion addiert 5 zur `sum` Variable, aber ihr zurückgegebener Wert ist `undefined`.

# --hints--

`addFive` sollte eine Funktion sein.

```js
assert(typeof addFive === 'function');
```

Wenn beide Funktionen ausgeführt wurden, sollte `sum` gleich `8` sein.

```js
assert(sum === 8);
```

Der Rückgabewert von `addFive` sollte `undefined` sein.

```js
assert(addFive() === undefined);
```

Innerhalb der `addFive` Funktion, solltest du `5` zur `sum` Variable hinzufügen.

```js
assert(
  __helpers.removeWhiteSpace(addFive.toString()).match(/sum=sum\+5|sum\+=5/)
);
```

# --seed--

## --seed-contents--

```js
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();
```

# --solutions--

```js
let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();
```
