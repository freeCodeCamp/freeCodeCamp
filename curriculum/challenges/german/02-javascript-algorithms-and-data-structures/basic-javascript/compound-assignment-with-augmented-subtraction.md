---
id: 56533eb9ac21ba0edf2244b0
title: Kombination von Zuordnung und Subtraktion
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2Qv7AV'
forumTopicId: 16660
dashedName: compound-assignment-with-augmented-subtraction
---

# --description--

Ähnlich dem Operator `+=`, subtrahiert `-=` eine Zahl von einer Variablen.

```js
myVar = myVar - 5;
```

subtrahiert `5` von `myVar`. Dies kann wie folgt umgeschrieben werden:

```js
myVar -= 5;
```

# --instructions--

Ändere die Zuweisungen für `a`, `b` und `c` so, dass sie den Operator `-=` verwenden.

# --hints--

`a` sollte gleich `5` sein.

```js
assert(a === 5);
```

`b` sollte gleich `-6` sein.

```js
assert(b === -6);
```

`c` sollte gleich `2` sein.

```js
assert(c === 2);
```

Du solltest den Operator `-=` für jede Variable verwenden.

```js
assert(code.match(/-=/g).length === 3);
```

Du solltest den Code oberhalb des vorgegebenen Kommentars nicht verändern.

```js
assert(
  /let a = 11;/.test(code) && /let b = 9;/.test(code) && /let c = 3;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;
```

# --solutions--

```js
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;
```
