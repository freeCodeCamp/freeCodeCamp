---
id: ae9defd7acaf69703ab432ea
title: Encontrar o menor múltiplo comum
challengeType: 1
forumTopicId: 16075
dashedName: smallest-common-multiple
---

# --description--

Encontre o menor múltiplo comum dos parâmetros fornecidos que podem ser divididos sem resto por ambos, bem como por todos os números sequenciais no intervalo entre esses parâmetros.

O intervalo será um array de dois números que não estará necessariamente em ordem numérica.

Por exemplo, se forem dados 1 e 3, encontre o menor múltiplo comum de 1 e 3 que também é divisível por todos os números *entre* 1 e 3. A resposta aqui seria 6.

# --hints--

`smallestCommons([1, 5])` deve retornar um número.

```js
assert.deepEqual(typeof smallestCommons([1, 5]), 'number');
```

`smallestCommons([1, 5])` deve retornar 60.

```js
assert.deepEqual(smallestCommons([1, 5]), 60);
```

`smallestCommons([5, 1])` deve retornar 60.

```js
assert.deepEqual(smallestCommons([5, 1]), 60);
```

`smallestCommons([2, 10])` deve retornar 2520.

```js
assert.deepEqual(smallestCommons([2, 10]), 2520);
```

`smallestCommons([1, 13])` deve retornar 360360.

```js
assert.deepEqual(smallestCommons([1, 13]), 360360);
```

`smallestCommons([23, 18])` retornará 6056820.

```js
assert.deepEqual(smallestCommons([23, 18]), 6056820);
```

# --seed--

## --seed-contents--

```js
function smallestCommons(arr) {
  return arr;
}

smallestCommons([1,5]);
```

# --solutions--

```js
function gcd(a, b) {
    while (b !== 0) {
        a = [b, b = a % b][0];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort(function(a,b) {return a-b;});
  var rng = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    rng.push(i);
  }
  return rng.reduce(lcm);
}
```
