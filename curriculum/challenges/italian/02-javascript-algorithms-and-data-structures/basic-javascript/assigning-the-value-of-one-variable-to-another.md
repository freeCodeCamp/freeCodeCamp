---
id: 5ee127a03c3b35dd45426493
title: Assegnare il valore di una variabile ad un'altra
challengeType: 1
videoUrl: ''
forumTopicId: 418265
dashedName: assigning-the-value-of-one-variable-to-another
---

# --description--

Dopo che un valore è stato assegnato a una variabile utilizzando l'operatore di <dfn>assegnazione</dfn>, è possibile assegnare il valore di quella variabile ad un'altra utilizzando lo stesso operatore.

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

Questo codice dichiara una variabile `myVar` senza valore, quindi le assegna il valore `5`. Successivamente, una variabile denominata `myNum` viene dichiarata senza un valore. Per finire, il contenuto di `myVar` (che è `5`) viene assegnato alla variabile `myNum`. `myVar` ora ha il valore `5`.

# --instructions--

Assegna il contenuto di `a` alla variabile `b`.

# --hints--

Non dovresti modificare il codice sopra il commento specificato.

```js
assert(/var a;/.test(code) && /a = 7;/.test(code) && /var b;/.test(code));
```

`b` dovrebbe avere un valore di `7`.

```js
assert(typeof b === 'number' && b === 7);
```

`a` dovrebbe essere assegnato a `b` con `=`.

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
