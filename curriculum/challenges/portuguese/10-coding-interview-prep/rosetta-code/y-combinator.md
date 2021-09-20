---
id: 594810f028c0303b75339ad5
title: Combinador Y
challengeType: 5
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

Em [programação funcional](https://en.wikipedia.org/wiki/Functional programming "wp: functional programming") estrita e em [cálculo de lambda](https://en.wikipedia.org/wiki/lambda calculus "wp: lambda calculus"), funções (expressões lambda) não têm estado e é permitido apenas se referir a argumentos de funções encapsuladas. Isso exclui a definição habitual de uma função recursiva, na qual uma função é associada ao estado de uma variável e o estado dessa variável é usado no corpo da função. O [combinador Y](https://mvanier.livejournal.com/2897.html) é uma função sem estado que, ao ser aplicada a outra função sem estado, retorna uma versão recursiva da função. O combinador Y é a mais simples dessas classes de funções, chamada de [combinador de ponto fixo](https://en.wikipedia.org/wiki/Fixed-point combinator "wp: fixed-point combinator").

# --instructions--

Defina a função de combinador Y sem estado e use-a para calcular o [fatorial](https://en.wikipedia.org/wiki/Factorial "wp: factorial"). A função de fatorial, `factorial(N)`, você já tem. **Consulte também:**

<ul>
  <li><a href="https://vimeo.com/45140590" target="_blank">Jim Weirich: Adventures in Functional Programming</a>.</li>
</ul>

# --hints--

Y deve retornar uma função.

```js
assert.equal(typeof Y((f) => (n) => n), 'function');
```

factorial(1) deve retornar 1.

```js
assert.equal(factorial(1), 1);
```

factorial(2) deve retornar 2.

```js
assert.equal(factorial(2), 2);
```

factorial(3) deve retornar 6.

```js
assert.equal(factorial(3), 6);
```

factorial(4) deve retornar 24.

```js
assert.equal(factorial(4), 24);
```

factorial(10) deve retornar 3628800.

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
