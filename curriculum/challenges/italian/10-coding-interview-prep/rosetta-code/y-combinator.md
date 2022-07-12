---
id: 594810f028c0303b75339ad5
title: Combinatore Y
challengeType: 1
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

In <a href="https://www.freecodecamp.org/news/the-principles-of-functional-programming/" target="_blank" rel="noopener noreferrer nofollow">programmazione funzionale</a> stretta e calcolo lambda, le funzioni (espressioni lambda) non hanno uno stato e possono solo fare riferimento agli argomenti di funzioni che le racchiudono. Questo esclude la definizione abituale di una funzione ricorsiva in cui una funzione è associata allo stato di una variabile e lo stato di questa variabile è usato nel corpo della funzione.

Il combinatore Y è esso stesso una funzione senza stato che, quando applicata ad altre funzioni senza stato, restituisce una versione ricorsiva della funzione. Il combinatore Y è la più semplice delle classi di queste funzioni, chiamate combinatori a punto fisso.

# --instructions--

Definisci la funzione combinatore senza stato Y e usala per calcolare i fattoriali. La funzione `factorial(N)` ti è già stata fornita.

# --hints--

Y dovrebbe restituire una funzione.

```js
assert.equal(typeof Y((f) => (n) => n), 'function');
```

factorial(1) dovrebbe restituire 1.

```js
assert.equal(factorial(1), 1);
```

factorial(2) dovrebbe restituire 2.

```js
assert.equal(factorial(2), 2);
```

factorial(3) dovrebbe restituire 6.

```js
assert.equal(factorial(3), 6);
```

factorial(4) dovrebbe restituire 24.

```js
assert.equal(factorial(4), 24);
```

factorial(10) dovrebbe restituire 3628800.

```js
assert.equal(factorial(10), 3628800);
```

# --seed--

## --after-user-code--

```js
var factorial = Y(f => n => (n > 1 ? n * f(n - 1) : 1));
```

## --seed-contents--

```js
function Y(f) {
  return function() {

  };
}

var factorial = Y(function(f) {
  return function (n) {
    return n > 1 ? n * f(n - 1) : 1;
  };
});
```

# --solutions--

```js
var Y = f => (x => x(x))(y => f(x => y(y)(x)));
```
