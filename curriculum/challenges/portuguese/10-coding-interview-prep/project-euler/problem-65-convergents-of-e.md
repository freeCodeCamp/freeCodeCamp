---
id: 5900f3ad1000cf542c50fec0
title: 'Problema 65: Convergentes de e'
challengeType: 1
forumTopicId: 302177
dashedName: problem-65-convergents-of-e
---

# --description--

A raiz quadrada de 2 pode ser escrita como uma fração contínua e infinita.

$\\sqrt{2} = 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + ...}}}}$

Uma fração contínua e infinita pode ser representada por $\\sqrt{2} = \[1; (2)]$. Essa representação indica que 2 se repete *ad infinitum*. Da mesma forma, $\\sqrt{23} = \[4; (1, 3, 1, 8)]$. Acontece que a sequência de valores parciais de frações contínuas de raízes quadradas fornece as melhores aproximações racionais. Considere as convergências de $\\sqrt{2}$.

$1 + \\dfrac{1}{2} = \\dfrac{3}{2}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2}} = \\dfrac{7}{5}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2}}} = \\dfrac{17}{12}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2}}}} = \\dfrac{41}{29}$

Assim, a sequência dos primeiros dez convergentes onde $\\sqrt{2}$ são:

$1, \\dfrac{3}{2}, \\dfrac{7}{5}, \\dfrac{17}{12}, \\dfrac{41}{29}, \\dfrac{99}{70}, \\dfrac{239}{169}, \\dfrac{577}{408}, \\dfrac{1393}{985}, \\dfrac{3363}{2378}, ...$

O que é mais surpreendente é a constante matemática, $e = \[2; 1, 2, 1, 1, 4, 1, 1, 6, 1, ... , 1, 2k, 1, ...]$. Os primeiros dez termos na sequência de convergentes para `e` são:

$2, 3, \\dfrac{8}{3}, \\dfrac{11}{4}, \\dfrac{19}{7}, \\dfrac{87}{32}, \\dfrac{106}{39}, \\dfrac{193}{71}, \\dfrac{1264}{465}, \\dfrac{1457}{536}, ...$

A soma de algarismos no numerador do 10<sup>o</sup> convergente é $1 + 4 + 5 + 7 = 17$.

Calcule a soma dos algarismos no numerador do `n`<sup>o</sup> convergente da fração contínua para `e`.

# --hints--

`convergentsOfE(10)` deve retornar um número.

```js
assert(typeof convergentsOfE(10) === 'number');
```

`convergentsOfE(10)` deve retornar `17`.

```js
assert.strictEqual(convergentsOfE(10), 17);
```

`convergentsOfE(30)` deve retornar `53`.

```js
assert.strictEqual(convergentsOfE(30), 53);
```

`convergentsOfE(50)` deve retornar `91`.

```js
assert.strictEqual(convergentsOfE(50), 91);
```

`convergentsOfE(70)` deve retornar `169`.

```js
assert.strictEqual(convergentsOfE(70), 169);
```

`convergentsOfE(100)` deve retornar `272`.

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
