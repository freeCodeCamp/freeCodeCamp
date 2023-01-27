---
id: 56533eb9ac21ba0edf2244aa
title: Nicht initialisierte Variablen verstehen
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBa2JAL'
forumTopicId: 18335
dashedName: understanding-uninitialized-variables
---

# --description--

Wenn JavaScript-Variablen deklariert werden, haben sie einen Anfangswert von `undefined`. Wenn du eine mathematische Operation mit `undefined`-Variablen durchführst, ist das Ergebnis `NaN`, was <dfn>"Not a Number"</dfn> (keine Zahl) bedeutet. Verkettest du den String einer `undefined`-Variablen, erhältst du den <dfn>String</dfn> `undefined`.

# --instructions--

Initialisiere die drei Variablen `a`, `b` und `c` mit `5`, `10` bzw. `"I am a"`, damit sie nicht `undefined` sind.

# --hints--

`a` sollte eine definierte Variable mit einem letztlichen Wert von `6` sein.

```js
assert(typeof a === 'number' && a === 6);
```

`b` sollte eine definierte Variable mit einem letztlichen Wert von `15` sein.

```js
assert(typeof b === 'number' && b === 15);
```

`c` sollte nicht `undefined` beinhalten und sollte letztlich auf den Wert `I am a String!` gesetzt sein

```js
assert(!/undefined/.test(c) && c === 'I am a String!');
```

Du solltest den Code unterhalb des vorgegebenen Kommentars nicht ändern.

```js
assert(
  /a = a \+ 1;/.test(code) &&
    /b = b \+ 5;/.test(code) &&
    /c = c \+ " String!";/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = '" + c + "'"; })(a,b,c);
```

## --seed-contents--

```js
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```

# --solutions--

```js
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
```
