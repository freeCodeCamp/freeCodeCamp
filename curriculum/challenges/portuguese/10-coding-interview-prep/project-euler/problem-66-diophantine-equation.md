---
id: 5900f3ae1000cf542c50fec1
title: 'Problema 66: Equação Diofantina'
challengeType: 1
forumTopicId: 302178
dashedName: problem-66-diophantine-equation
---

# --description--

Considere a fórmula da equação Diofantina:

<div style='text-align: center;'>x<sup>2</sup> – Dy<sup>2</sup> = 1</div>

Por exemplo, quando D = 13, a solução mínima de x é 649<sup>2</sup> - 13×180<sup>2</sup> = 1.

Podemos partir do princípio de que não há soluções para números inteiros positivos quando D é o resultado de um número elevado ao quadrado.

Ao encontrar soluções mínimas de x onde D = {2, 3, 5, 6, 7}, obtemos o seguinte:

<div style='margin-left: 2em;'>
  3<sup>2</sup> – 2×2<sup>2</sup> = 1<br>
  2<sup>2</sup> – 3×1<sup>2</sup> = 1<br>
  <strong><span style='color: red;'>9</span></strong><sup>2</sup> – 5×4<sup>2</sup> = 1<br>
  5<sup>2</sup> – 6×2<sup>2</sup> = 1<br>
  8<sup>2</sup> – 7×3<sup>2</sup> = 1<br>
</div>

Portanto, considerando soluções mínimas de `x` onde D ≤ 7, o maior `x` é obtido quando D = 5.

Calcule o valor de D ≤ `n` em soluções mínimas de `x` para as quais o maior valor de `x` é obtido.

# --hints--

`diophantineEquation(7)` deve retornar um número.

```js
assert(typeof diophantineEquation(7) === 'number');
```

`diophantineEquation(7)` deve retornar `5`.

```js
assert.strictEqual(diophantineEquation(7), 5);
```

`diophantineEquation(100)` deve retornar `61`.

```js
assert.strictEqual(diophantineEquation(100), 61);
```

`diophantineEquation(409)` deve retornar `409`.

```js
assert.strictEqual(diophantineEquation(409), 409);
```

`diophantineEquation(500)` deve retornar `421`.

```js
assert.strictEqual(diophantineEquation(500), 421);
```

`diophantineEquation(1000)` deve retornar `661`.

```js
assert.strictEqual(diophantineEquation(1000), 661);
```

# --seed--

## --seed-contents--

```js
function diophantineEquation(n) {

  return true;
}

diophantineEquation(7);
```

# --solutions--

```js
function diophantineEquation(n) {
  // Based on https://www.mathblog.dk/project-euler-66-diophantine-equation/
  function isSolution(D, numerator, denominator) {
    return numerator * numerator - BigInt(D) * denominator * denominator === 1n;
  }

  let result = 0;
  let biggestX = 0;

  for (let D = 2; D <= n; D++) {
    let boundary = Math.floor(Math.sqrt(D));
    if (boundary ** 2 === D) {
      continue;
    }

    let m = 0n;
    let d = 1n;
    let a = BigInt(boundary);

    let [numerator, prevNumerator] = [a, 1n];

    let [denominator, prevDenominator] = [1n, 0n];

    while (!isSolution(D, numerator, denominator)) {
      m = d * a - m;
      d = (BigInt(D) - m * m) / d;
      a = (BigInt(boundary) + m) / d;

      [numerator, prevNumerator] = [a * numerator + prevNumerator, numerator];
      [denominator, prevDenominator] = [
        a * denominator + prevDenominator,
        denominator
      ];
    }

    if (numerator > biggestX) {
      biggestX = numerator;
      result = D;
    }
  }
  return result;
}
```
