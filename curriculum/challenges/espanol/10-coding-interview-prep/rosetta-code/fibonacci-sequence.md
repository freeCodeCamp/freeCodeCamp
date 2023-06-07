---
id: 597f24c1dda4e70f53c79c81
title: Secuencia Fibonacci
challengeType: 1
forumTopicId: 302268
dashedName: fibonacci-sequence
---

# --description--

Escriba una función para generar el <code>n<sup>th</sup></code> número de Fibonacci.

El <code>n<sup>th</sup></code> número de Fibonacci viene dado por:

<code>F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub></code>

Los dos primeros términos de la serie son 0 y 1.

Por lo tanto, la serie es: 0, 1, 1, 2, 3, 5, 8, 13...

# --hints--

`fibonacci` debe ser una función.

```js
assert(typeof fibonacci === 'function');
```

`fibonacci(2)` debería devolver un número.

```js
assert(typeof fibonacci(2) == 'number');
```

`fibonacci(3)` debería devolver 2.

```js
assert.equal(fibonacci(3), 2);
```

`fibonacci(5)` debería devolver 5.

```js
assert.equal(fibonacci(5), 5);
```

`fibonacci(10)` debería devolver 55.

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
