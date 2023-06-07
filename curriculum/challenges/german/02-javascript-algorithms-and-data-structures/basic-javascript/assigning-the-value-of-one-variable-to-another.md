---
id: 5ee127a03c3b35dd45426493
title: Den Wert einer Variablen einer anderen zuweisen
challengeType: 1
videoUrl: ''
forumTopicId: 418265
dashedName: assigning-the-value-of-one-variable-to-another
---

# --description--

Nachdem einer Variablen mit dem <dfn>Zuweisungsoperator</dfn> ein Wert zugewiesen wurde, kannst du den Wert dieser Variablen mit dem <dfn>Zuweisungsoperator</dfn> einer anderen Variablen zuweisen.

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

Im obigen Beispiel wird eine Variable `myVar` ohne Wert deklariert und ihr dann der Wert `5` zugewiesen. Als nächstes wird eine Variable mit dem Namen `myNum` ohne Wert deklariert. Dann wird der Inhalt von `myVar` (der `5` ist) der Variablen `myNum` zugewiesen. Jetzt hat `myNum` auch den Wert von `5`.

# --instructions--

Weise der Variablen `b` den Inhalt von `a` zu.

# --hints--

Du solltest den Code oberhalb des vorgegebenen Kommentars nicht ändern.

```js
assert(/var a;/.test(code) && /a = 7;/.test(code) && /var b;/.test(code));
```

`b` sollte einen Wert von `7` besitzen.

```js
assert(typeof b === 'number' && b === 7);
```

`a` sollte `b` mit `=` zugewiesen werden.

```js
assert(/b\s*=\s*a\s*/g.test(code));
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
}
```

## --after-user-code--

```js
(function(a, b) {
  return 'a = ' + a + ', b = ' + b;
})(a, b);
```

## --seed-contents--

```js
// Setup
var a;
a = 7;
var b;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
var b;
b = a;
```
