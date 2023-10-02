---
id: 56533eb9ac21ba0edf2244b1
title: Kombination von Zuordnung und Multiplikation
challengeType: 1
videoUrl: 'https://scrimba.com/c/c83vrfa'
forumTopicId: 16662
dashedName: compound-assignment-with-augmented-multiplication
---

# --description--

Der Operator `*=` multipliziert eine Variable mit einer Zahl.

```js
myVar = myVar * 5;
```

multipliziert `myVar` mit `5`. Dies kann wie folgt umgeschrieben werden:

```js
myVar *= 5;
```

# --instructions--

Ändere die Zuweisungen für `a`, `b` und `c` so, dass sie den Operator `*=` verwenden.

# --hints--

`a` sollte gleich `25` sein.

```js
assert(a === 25);
```

`b` sollte gleich `36` sein.

```js
assert(b === 36);
```

`c` sollte gleich `46` sein.

```js
assert(c === 46);
```

Du solltest den Operator `*=` für jede Variable verwenden.

```js
assert(code.match(/\*=/g).length === 3);
```

Du solltest den Code oberhalb des vorgegebenen Kommentars nicht verändern.

```js
assert(
  /let a = 5;/.test(code) &&
    /let b = 12;/.test(code) &&
    /let c = 4\.6;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a = a * 5;
b = 3 * b;
c = c * 10;
```

# --solutions--

```js
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```
