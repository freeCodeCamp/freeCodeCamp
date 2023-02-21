---
id: a5229172f011153519423690
title: Suma todos los números impares de Fibonacci
challengeType: 1
forumTopicId: 16084
dashedName: sum-all-odd-fibonacci-numbers
---

# --description--

Dado un entero positivo `num`, devuelve la suma de todos los números impares de Fibonacci que son menores o iguales a `num`.

The first two numbers in the Fibonacci sequence are 0 and 1. Cada número adicional en la secuencia es la suma de los dos números anteriores. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

Por ejemplo, `sumFibs(10)` debe devolver `10` porque todos los números impares de Fibonacci menores o iguales a `10` son 1, 1, 3 y 5.

# --hints--

`sumFibs(1)` debe devolver un número.

```js
assert(typeof sumFibs(1) === 'number');
```

`sumFibs(1000)` debe devolver 1785.

```js
assert(sumFibs(1000) === 1785);
```

`sumFibs(4000000)` debe devolver 4613732.

```js
assert(sumFibs(4000000) === 4613732);
```

`sumFibs(4)` debe devolver 5.

```js
assert(sumFibs(4) === 5);
```

`sumFibs(75024)` debe devolver 60696.

```js
assert(sumFibs(75024) === 60696);
```

`sumFibs(75025)` debe devolver 135721.

```js
assert(sumFibs(75025) === 135721);
```

# --seed--

## --seed-contents--

```js
function sumFibs(num) {
  return num;
}

sumFibs(4);
```

# --solutions--

```js
function sumFibs(num) {
  var a = 1;
  var b = 1;
  var s = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      s += a;
    }
    a = [b, b=b+a][0];
  }
  return s;
}
```
