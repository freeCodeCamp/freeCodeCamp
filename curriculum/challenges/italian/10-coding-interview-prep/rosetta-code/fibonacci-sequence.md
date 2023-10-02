---
id: 597f24c1dda4e70f53c79c81
title: Sequenza di Fibonacci
challengeType: 1
forumTopicId: 302268
dashedName: fibonacci-sequence
---

# --description--

Scrivi una funzione che genera il <code>n<sup>simo</sup></code> numero di Fibonacci.

Il <code>n<sup>simo</sup></code> numero di Fibonacci è dato da:

<code>F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub></code>

Il primi due numeri della serie sono 0 e 1.

Quindi, la serie è: 0, 1, 1, 2, 3, 5, 8, 13...

# --hints--

`fibonacci` dovrebbe essere una funzione.

```js
assert(typeof fibonacci === 'function');
```

`fibonacci(2)` dovrebbe restituire un numero.

```js
assert(typeof fibonacci(2) == 'number');
```

`fibonacci(3)` dovrebbe restituire 2.

```js
assert.equal(fibonacci(3), 2);
```

`fibonacci(5)` dovrebbe restituire 5.

```js
assert.equal(fibonacci(5), 5);
```

`fibonacci(10)` dovrebbe restituire 55.

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
