---
id: 594810f028c0303b75339ad5
title: Combinatore Y
challengeType: 5
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

In rigorosa [proframmazione funzionale](https://www.freecodecamp.org/news/the-principles-of-functional-programming/ "news: the principles of functional programming") e [calcolo lambda](https://en.wikipedia.org/wiki/lambda calculus "wp: lambda calculus"), le funzioni (espressioni lambda) non hanno stato e sono autorizzate solo a fare riferimento a argomenti di funzioni di chiusura. Questo esclude la definizione abituale di una funzione ricorsiva in cui una funzione è associata allo stato di una variabile e lo stato di questa variabile è usato nel corpo della funzione. Il combinatore [Y](https://mvanier.livejournal.com/2897.html) è di per sé una funzione apolide che, se applicata ad un'altra funzione senza stato, restituisce una versione ricorsiva della funzione. Il combinatore Y è il più semplice della classe di tali funzioni, chiamati [combinatori a punto fisso](https://en.wikipedia.org/wiki/Fixed-point combinator "wp: fixed-point combinator").

# --instructions--

Definire la funzione di combinatore Y senza stato e usarla per calcolare il [fattoriale](https://en.wikipedia.org/wiki/Factorial "wp: factorial"). La funzione `factorial(N)` ti viene data. **Vedi anche:**

<ul>
  <li><a href="https://vimeo.com/45140590" target="_blank">Jim Weirich: Adventures in Functional Programming</a>.</li>
</ul>

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
