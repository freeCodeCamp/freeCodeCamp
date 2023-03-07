---
id: a5229172f011153519423690
title: Somar todos os números ímpares de Fibonacci
challengeType: 1
forumTopicId: 16084
dashedName: sum-all-odd-fibonacci-numbers
---

# --description--

Dado um `num` inteiro e positivo, retorne a soma de todos os números ímpares Fibonacci menores que ou iguais a `num`.

Os dois primeiros números na sequência de Fibonacci são 0 e 1. Todo número adicional na sequência é a soma dos dois números anteriores. Os sete primeiros números da sequência de Fibonacci são 0, 1, 1, 2, 3, 5 e 8.

Por exemplo, `sumFibs(10)` deve retornar `10` porque todos os números ímpares de Fibonacci menores ou iguais a `10` são 1, 1, 3 e 5.

# --hints--

`sumFibs(1)` deve retornar um número.

```js
assert(typeof sumFibs(1) === 'number');
```

`sumFibs(1000)` deve retornar 1785.

```js
assert(sumFibs(1000) === 1785);
```

`sumFibs(4000000)` deve retornar 4613732.

```js
assert(sumFibs(4000000) === 4613732);
```

`sumFibs(4)` deve retornar 5.

```js
assert(sumFibs(4) === 5);
```

`sumFibs(75024)` deve retornar 60696.

```js
assert(sumFibs(75024) === 60696);
```

`sumFibs(75025)` deve retornar 135721.

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
