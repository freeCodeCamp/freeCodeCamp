---
id: 597f24c1dda4e70f53c79c81
title: Sequência de Fibonacci
challengeType: 1
forumTopicId: 302268
dashedName: fibonacci-sequence
---

# --description--

Escreva uma função para gerar o <code>n<sup>th</sup></code> (enésimo) número de Fibonacci.

O <code>n<sup>th</sup></code> (enésimo) número de Fibonacci é dado por:

<code>F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub></code>

Os dois primeiros termos da série são 0 e 1.

Portanto, a série é: 0, 1, 1, 2, 3, 5, 8, 13...

# --hints--

`fibonacci` deve ser uma função.

```js
assert(typeof fibonacci === 'function');
```

`fibonacci(2)` deve retornar um número.

```js
assert(typeof fibonacci(2) == 'number');
```

`fibonacci(3)` deve retornar 2.

```js
assert.equal(fibonacci(3), 2);
```

`fibonacci(5)` deve retornar 5.

```js
assert.equal(fibonacci(5), 5);
```

`fibonacci(10)` deve retornar 55.

```js
assert.equal(fibonacci(10), 55);
```

# --seed--

## --seed-contents--

```js
function fibonacci(n) {

}
```

# --solutions--

```js
function fibonacci(n) {
  let a = 0, b = 1, t;
  while (--n >= 0) {
    t = a;
    a = b;
    b += t;
  }
  return a;
}
```
