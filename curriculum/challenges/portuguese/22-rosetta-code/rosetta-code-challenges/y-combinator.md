---
id: 594810f028c0303b75339ad5
title: Combinador Y
challengeType: 1
forumTopicId: 302345
dashedName: y-combinator
---

# --description--

Em <a href="https://www.freecodecamp.org/news/the-principles-of-functional-programming/" target="_blank" rel="noopener noreferrer nofollow">programação funcional</a> estrita e em cálculo de lambda, as funções (expressões lambda) não têm estado e é permitido apenas se referir a argumentos de funções encapsuladas. Isso exclui a definição habitual de uma função recursiva, na qual uma função é associada ao estado de uma variável e o estado dessa variável é usado no corpo da função.

O combinador Y é uma função sem estado que, ao ser aplicada a outra função sem estado, retorna uma versão recursiva da função. O combinador Y é a classe mais simples de tais funções, chamadas de combinadores de pontos fixos.

# --instructions--

Defina a função do combinador Y sem estado e use-a para calcular os fatores. A função de fatorial, `factorial(N)`, você já tem.

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
