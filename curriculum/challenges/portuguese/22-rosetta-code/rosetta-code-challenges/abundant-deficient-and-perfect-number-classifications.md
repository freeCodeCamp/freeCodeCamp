---
id: 594810f028c0303b75339acd
title: 'Classificações de números abundantes, deficientes e perfeitos'
challengeType: 1
forumTopicId: 302221
dashedName: abundant-deficient-and-perfect-number-classifications
---

# --description--

Estas classificações definem três categorias de inteiros positivos com base nos seus divisores.

Vamos considerar que $P(n)$ é a soma dos divisores apropriados de `n`, onde todos os divisores adequados são inteiros positivos `n` diferentes de `n`.

Se `P(n) < n`, `n` é classificado como `deficient`

Se `P(n) === n`, `n` é classificado como `perfect`

Se `P(n) > n`, `n` é classificado como `abundant`

**Exemplo**: `6` tem divisores adequados em `1`, `2`e `3`. `1 + 2 + 3 = 6`, então `6` é classificado como um número perfeito.

# --instructions--

Implementar uma função que calcule quantos números inteiros de `1` a `num` (inclusive) estão em cada uma das três classes. Exiba o resultado como um array no seguinte formato: `[deficient, perfect, abundant]`.

# --hints--

`getDPA` deve ser uma função.

```js
assert(typeof getDPA === 'function');
```

`getDPA(5000)` deve retornar um array.

```js
assert(Array.isArray(getDPA(5000)));
```

O array de retorno de `getDPA(5000)` deve ter tamanho `3`.

```js
assert(getDPA(5000).length === 3);
```

`getDPA(5000)` deve retornar `[3758, 3, 1239]`.

```js
assert.deepEqual(getDPA(5000), [3758, 3, 1239]);
```

`getDPA(10000)` deve retornar `[7508, 4, 2488]`.

```js
assert.deepEqual(getDPA(10000), [7508, 4, 2488]);
```

`getDPA(20000)` deve retornar `[15043, 4, 4953]`.

```js
assert.deepEqual(getDPA(20000), [15043, 4, 4953]);
```

# --seed--

## --seed-contents--

```js
function getDPA(num) {

}
```

# --solutions--

```js
function getDPA(num) {
  const dpa = [1, 0, 0];
  for (let n = 2; n <= num; n += 1) {
    let ds = 1;
    const e = Math.sqrt(n);
    for (let d = 2; d < e; d += 1) {
      if (n % d === 0) {
        ds += d + (n / d);
      }
    }
    if (n % e === 0) {
      ds += e;
    }
    dpa[ds < n ? 0 : ds === n ? 1 : 2] += 1;
  }
  return dpa;
}
```
