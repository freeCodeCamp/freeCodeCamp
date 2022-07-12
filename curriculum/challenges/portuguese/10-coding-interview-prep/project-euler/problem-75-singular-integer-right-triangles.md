---
id: 5900f3b71000cf542c50feca
title: 'Problema 75: Triângulos retângulos de lados inteiros e singulares'
challengeType: 1
forumTopicId: 302188
dashedName: problem-75-singular-integer-right-triangles
---

# --description--

12 cm parece ser o menor comprimento de linha que pode ser determinado para formar um triângulo com ângulo reto inteiro exatamente de uma maneira, mas há muitos outros exemplos.

<div style='margin-left: 4em;'>
  <strong>12 cm:</strong> (3,4,5)<br>
  <strong>24 cm:</strong> (6,8,10)<br>
  <strong>30 cm:</strong> (5,12,13)<br>
  <strong>36 cm:</strong> (9,12,15)<br>
  <strong>40 cm:</strong> (8,15,17)<br>
  <strong>48 cm:</strong> (12,16,20)<br><br>
</div>

Por outro lado, alguns comprimentos de linha, como 20 cm, não podem ser dobrados de modo a formar um triângulo retângulo com lados inteiros singulares, enquanto outros comprimentos permitem que se encontre mais de uma solução. Por exemplo, usar 120 cm torna possível formar exatamente três triângulos retângulos com lados inteiros singulares.

<div style='margin-left: 4em;'>
  <strong>120 cm:</strong> (30,40,50), (20,48,52), (24,45,51)<br><br>
</div>

Considerando que L é o comprimento do fio, para quantos valores de L ≤ `n` é possível formar exatamente um triângulo retângulo de lados inteiros e singulares?

# --hints--

`singularIntRightTriangles(48)` deve retornar um número.

```js
assert(typeof singularIntRightTriangles(48) === 'number');
```

`singularIntRightTriangles(48)` deve retornar `6`.

```js
assert.strictEqual(singularIntRightTriangles(48), 6);
```

`singularIntRightTriangles(700000)` deve retornar `75783`.

```js
assert.strictEqual(singularIntRightTriangles(700000), 75783);
```

`singularIntRightTriangles(1000000)` deve retornar `107876`.

```js
assert.strictEqual(singularIntRightTriangles(1000000), 107876);
```

`singularIntRightTriangles(1500000)` deve retornar `161667`.

```js
assert.strictEqual(singularIntRightTriangles(1500000), 161667);
```

# --seed--

## --seed-contents--

```js
function singularIntRightTriangles(n) {

  return true;
}

singularIntRightTriangles(48);
```

# --solutions--

```js
function singularIntRightTriangles(limit) {
  function euclidFormula(m, n) {
    return [m ** 2 - n ** 2, 2 * m * n, m ** 2 + n ** 2];
  }

  function gcd(numberA, numberB) {
    if (numberB === 0) {
      return numberA;
    }
    return gcd(numberB, numberA % numberB);
  }

  function notBothOdd(numberA, numberB) {
    return (numberA + numberB) % 2 === 1;
  }

  function areCoprime(numberA, numberB) {
    return gcd(numberA, numberB) === 1;
  }

  const trianglesWithPerimeter = new Array(limit + 1).fill(0);
  const mLimit = Math.sqrt(limit / 2);

  for (let m = 2; m < mLimit; m++) {
    for (let n = 1; n < m; n++) {
      if (notBothOdd(m, n) && areCoprime(m, n)) {
        const [sideA, sideB, sideC] = euclidFormula(m, n);
        const perimeter = sideA + sideB + sideC;
        let curPerimeter = perimeter;
        while (curPerimeter <= limit) {
          trianglesWithPerimeter[curPerimeter]++;
          curPerimeter += perimeter;
        }
      }
    }
  }
  return trianglesWithPerimeter.filter(trianglesCount => trianglesCount === 1)
    .length;
}
```
