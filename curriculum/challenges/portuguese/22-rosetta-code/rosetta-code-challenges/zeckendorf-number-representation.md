---
id: 594810f028c0303b75339ad6
title: Representação do número de Zeckendorf
challengeType: 1
forumTopicId: 302346
dashedName: zeckendorf-number-representation
---

# --description--

Assim como os números podem ser representados em uma notação posicional como somas de múltiplos das potências de dez (decimal) ou de dois (binário), todos os números inteiros positivos podem ser representados como a soma de um ou zero vezes os diferentes membros da série Fibonacci. Lembre-se de que os primeiros seis números de Fibonacci distintos são: `1, 2, 3, 5, 8, 13`.

O número decimal onze pode ser escrito como `0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1` ou `010100` na notação posicional, onde as colunas representam a multiplicação por um determinado membro da sequência. Zeros à esquerda são descartados para que o número 11 decimal se torne `10100`. Porém, 10100 não é a única maneira de representar 11 nos números de Fibonacci. `0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1` ou 010011 também representaria o 11 decimal. Para um número de Zeckendorf verdadeiro, há a restrição adicional de que *não sejam usados dois números de Fibonacci consecutivos*, o que leva à antiga solução única.

# --instructions--

Escreva uma função que gere e retorne a representação do número de Zeckendorf de `n`.

# --hints--

`zeckendorf` deve ser uma função.

```js
assert.equal(typeof zeckendorf, 'function');
```

`zeckendorf(0)` deve retornar `0`.

```js
assert.equal(zeckendorf(0), 0);

```

`zeckendorf(1)` deve retornar `1`.

```js
assert.equal(zeckendorf(1), 1);
```

`zeckendorf(2)` deve retornar `10`.

```js
assert.equal(zeckendorf(2), 10);
```

`zeckendorf(3)` deve retornar `100`.

```js
assert.equal(zeckendorf(3), 100);
```

`zeckendorf(4)` deve retornar `101`.

```js
assert.equal(zeckendorf(4), 101);
```

`zeckendorf(5)` deve retornar `1000`.

```js
assert.equal(zeckendorf(5), 1000);
```

`zeckendorf(6)` deve retornar `1001`.

```js
assert.equal(zeckendorf(6), 1001);
```

`zeckendorf(7)` deve retornar `1010`.

```js
assert.equal(zeckendorf(7), 1010);
```

`zeckendorf(8)` deve retornar `10000`.

```js
assert.equal(zeckendorf(8), 10000);
```

`zeckendorf(9)` deve retornar `10001`.

```js
assert.equal(zeckendorf(9), 10001);
```

`zeckendorf(10)` deve retornar `10010`.

```js
assert.equal(zeckendorf(10), 10010);
```

`zeckendorf(11)` deve retornar `10100`.

```js
assert.equal(zeckendorf(11), 10100);
```

`zeckendorf(12)` deve retornar `10101`.

```js
assert.equal(zeckendorf(12), 10101);
```

`zeckendorf(13)` deve retornar `100000`.

```js
assert.equal(zeckendorf(13), 100000);
```

`zeckendorf(14)` deve retornar `100001`.

```js
assert.equal(zeckendorf(14), 100001);
```

`zeckendorf(15)` deve retornar `100010`.

```js
assert.equal(zeckendorf(15), 100010);
```

`zeckendorf(16)` deve retornar `100100`.

```js
assert.equal(zeckendorf(16), 100100);
```

`zeckendorf(17)` deve retornar `100101`.

```js
assert.equal(zeckendorf(17), 100101);
```

`zeckendorf(18)` deve retornar `101000`.

```js
assert.equal(zeckendorf(18), 101000);
```

`zeckendorf(19)` deve retornar `101001`.

```js
assert.equal(zeckendorf(19), 101001);
```

`zeckendorf(20)` deve retornar `101010`.

```js
assert.equal(zeckendorf(20), 101010);
```

# --seed--

## --seed-contents--

```js
function zeckendorf(n) {

}
```

# --solutions--

```js
// zeckendorf :: Int -> Int
function zeckendorf(n) {
  const f = (m, x) => (m < x ? [m, 0] : [m - x, 1]);
  return parseInt((n === 0 ? ([0]) :
    mapAccumL(f, n, reverse(
      tail(fibUntil(n))
    ))[1]).join(''));
}

// fibUntil :: Int -> [Int]
let fibUntil = n => {
  const xs = [];
  until(
      ([a]) => a > n,
      ([a, b]) => (xs.push(a), [b, a + b]), [1, 1]
  );
  return xs;
};

let mapAccumL = (f, acc, xs) => (
  xs.reduce((a, x) => {
    const pair = f(a[0], x);

    return [pair[0], a[1].concat(pair[1])];
  }, [acc, []])
);

let until = (p, f, x) => {
  let v = x;
  while (!p(v)) v = f(v);
  return v;
};

const tail = xs => (
   xs.length ? xs.slice(1) : undefined
);

const reverse = xs => xs.slice(0).reverse();
```
