---
id: 594810f028c0303b75339ad5
title: Combinator Y
challengeType: 1
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

En estricta <a href="https://www.freecodecamp.org/news/the-principles-of-functional-programming/" target="_blank" rel="noopener noreferrer nofollow">functional programming</a> y el cálculo lambda, funciones (expresiones lambda) no tiene estados y son solo permitidos a referirse a argumentos que encierran funciones. Estas reglas excluyen la definición de una función recursiva donde una función es asociada con el estado de una variable y estos estados de variables son usados en el cuerpo de la función.

El combinador Y es pos sí mismo una función sin estado que, cuando se aplica a otra función, devuelve una versión recursiva de la función. El combinador Y es el más simple de la clase de tales funciones, llamados combinadores de punto fijo.

# --instructions--

Define la función Y combinador sin estado y la usa para computar los factoriales. La función `factorial(N)` ya se te fue dada.

# --hints--

Y debe devolver una función.

```js
assert.equal(typeof Y((f) => (n) => n), 'function');
```

factorial(1) debe devolver 1.

```js
assert.equal(factorial(1), 1);
```

factorial(2) debe devolver 2.

```js
assert.equal(factorial(2), 2);
```

factorial(3) debe devolver 6.

```js
assert.equal(factorial(3), 6);
```

factorial(4) debe devolver 24.

```js
assert.equal(factorial(4), 24);
```

factorial(10) debe devolver 3628800.

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
