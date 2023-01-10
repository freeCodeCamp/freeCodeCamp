---
id: 594810f028c0303b75339acd
title: 'Clasificación de números abundante, deficiente y perfecta'
challengeType: 1
forumTopicId: 302221
dashedName: abundant-deficient-and-perfect-number-classifications
---

# --description--

Estos definen tres clasificaciones de enteros positivos basadas en sus divisores apropiados.

Sea $P(n)$ la suma de los divisores apropiados de `n` donde los divisores apropiados son todos enteros positivos `n` distintos de `n` en sí mismo.

Si `P(n) < n` entonces `n` se clasifica como `deficient`

Si `P(n) === n` entonces `n` se clasifica como `perfect`

Si `P(n) > n` entonces `n` se clasifica como `abundant`

**Ejemplo**: `6` tiene los divisores apropiados `1`, `2`, y `3`. `1 + 2 + 3 = 6`, así que `6` está clasificado como un número perfecto.

# --instructions--

Implementar una función que calcule cuántos enteros de `1` a `num` (incluido) están en cada una de las tres clases. Muestra el resultado como una matriz en el siguiente formato `[deficient, perfect, abundant]`.

# --hints--

`getDPA` debe ser una función.

```js
assert(typeof getDPA === 'function');
```

`getDPA(5000)` debe devolver una matriz.

```js
assert(Array.isArray(getDPA(5000)));
```

`getDPA(5000)` la matriz de retorno debe tener una longitud de `3`.

```js
assert(getDPA(5000).length === 3);
```

`getDPA(5000)` debe devolver `[3758, 3, 1239]`.

```js
assert.deepEqual(getDPA(5000), [3758, 3, 1239]);
```

`getDPA(10000)` debe devolver `[7508, 4, 2488]`.

```js
assert.deepEqual(getDPA(10000), [7508, 4, 2488]);
```

`getDPA(20000)` debe devolver `[15043, 4, 4953]`.

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
