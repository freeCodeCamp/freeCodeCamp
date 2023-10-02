---
id: 5900f3ad1000cf542c50fec0
title: 'Problema 65: convergenti di e'
challengeType: 1
forumTopicId: 302177
dashedName: problem-65-convergents-of-e
---

# --description--

La radice quadrata di 2 può essere scritta come una frazione continuata infinita.

$\\sqrt{2} = 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + ...}}}}$

La frazione continuata infinita può essere scritta, $\\sqrt{2} = \[1; (2)]$ indica che 2 ripete *ad infinitum*. In modo simile, $\\sqrt{23} = \[4; (1, 3, 1, 8)]$. La sequenza di valori parziali di frazioni continuati delle radici quadrate provvede l'approssimazione razionale migliore. Consideriamo le convergenze con $\\sqrt{2}$.

$1 + \\dfrac{1}{2} = \\dfrac{3}{2}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2}} = \\dfrac{7}{5}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2}}} = \\dfrac{17}{12}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2}}}} = \\dfrac{41}{29}$

Quindi la sequenza delle prime dieci convergenze per $\\sqrt{2}$ sono:

$1, \\dfrac{3}{2}, \\dfrac{7}{5}, \\dfrac{17}{12}, \\dfrac{41}{29}, \\dfrac{99}{70}, \\dfrac{239}{169}, \\dfrac{577}{408}, \\dfrac{1393}{985}, \\dfrac{3363}{2378}, ...$

La cosa sorprendente è che la più importante costante matematica, $e = \[2; 1, 2, 1, 1, 4, 1, 1, 6, 1, ... , 1, 2k, 1, ...]$. I primi dieci termini della sequenza convergente di `e` sono:

$2, 3, \\dfrac{8}{3}, \\dfrac{11}{4}, \\dfrac{19}{7}, \\dfrac{87}{32}, \\dfrac{106}{39}, \\dfrac{193}{71}, \\dfrac{1264}{465}, \\dfrac{1457}{536}, ...$

La somma delle digite del numeratore del 10<sup>o</sup> convergente è $1 + 4 + 5 + 7 = 17$.

Trova la somma delle cifre nel numeratore per il `n`<sup>o</sup> convergente della frazione continuata di `e`.

# --hints--

`convergentsOfE(10)` dovrebbe restituire un numero.

```js
assert(typeof convergentsOfE(10) === 'number');
```

`convergentsOfE(10)` dovrebbe restituire `17`.

```js
assert.strictEqual(convergentsOfE(10), 17);
```

`convergentsOfE(30)` dovrebbe restituire `53`.

```js
assert.strictEqual(convergentsOfE(30), 53);
```

`convergentsOfE(50)` dovrebbe restituire `91`.

```js
assert.strictEqual(convergentsOfE(50), 91);
```

`convergentsOfE(70)` dovrebbe restituire `169`.

```js
assert.strictEqual(convergentsOfE(70), 169);
```

`convergentsOfE(100)` dovrebbe restituire `272`.

```js
assert.strictEqual(convergentsOfE(100), 272);
```

# --seed--

## --seed-contents--

```js
function convergentsOfE(n) {

  return true;
}

convergentsOfE(10);
```

# --solutions--

```js
function convergentsOfE(n) {
  function sumDigits(num) {
    let sum = 0n;
    while (num > 0) {
      sum += num % 10n;
      num = num / 10n;
    }
    return parseInt(sum);
  }

  // BigInt is needed for high convergents
  let convergents = [
    [2n, 1n],
    [3n, 1n]
  ];
  const multipliers = [1n, 1n, 2n];
  for (let i = 2; i < n; i++) {
    const [secondLastConvergent, lastConvergent] = convergents;
    const [secondLastNumerator, secondLastDenominator] = secondLastConvergent;
    const [lastNumerator, lastDenominator] = lastConvergent;
    const curMultiplier = multipliers[i % 3];

    const numerator = secondLastNumerator + curMultiplier * lastNumerator;
    const denominator = secondLastDenominator + curMultiplier * lastDenominator;

    convergents = [lastConvergent, [numerator, denominator]]
    if (i % 3 === 2) {
      multipliers[2] += 2n;
    }
  }
  return sumDigits(convergents[1][0]);
}
```
