---
id: 5900f3ad1000cf542c50fec0
title: 'Завдання 65: Наближення е'
challengeType: 1
forumTopicId: 302177
dashedName: problem-65-convergents-of-e
---

# --description--

Квадратний корінь з 2 можна записати як нескінченний неперервний дріб.

$\\sqrt{2} = 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + ...}}}}$

Нескінченний неперервний дріб можна записати як $\\sqrt{2} = \[1; (2)]$ вказує на те, що 2 повторюється *до нескінченності*. Подібним чином $\\sqrt{23} = \[4; (1, 3, 1, 8)]$. Виявляється, що послідовність часткових значень неперервних дробів для квадратних коренів надає найкраще раціональне наближення. Давайте розглянемо наближення для $\\sqrt{2}$.

$1 + \\dfrac{1}{2} = \\dfrac{3}{2}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2}} = \\dfrac{7}{5}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2}}} = \\dfrac{17}{12}\\\\ 1 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2 + \\dfrac{1}{2}}}} = \\dfrac{41}{29}$

Отже, послідовністю перших десяти наближень для $\\sqrt{2}$ є:

$1, \\dfrac{3}{2}, \\dfrac{7}{5}, \\dfrac{17}{12}, \\dfrac{41}{29}, \\dfrac{99}{70}, \\dfrac{239}{169}, \\dfrac{577}{408}, \\dfrac{1393}{985}, \\dfrac{3363}{2378}, ...$

Найдивовижніше те, що важлива математична константа $e = \[2; 1, 2, 1, 1, 1, 1, 1, 1, 6, 1, . . , 1, 2k, 1, ...]$. Першими десятьма значеннями у послідовності наближень для `e` є:

$2, 3, \\dfrac{8}{3}, \\dfrac{11}{4}, \\dfrac{19}{7}, \\dfrac{87}{32}, \\dfrac{106}{39}, \\dfrac{193}{71}, \\dfrac{1264}{465}, \\dfrac{1457}{536}, ...$

Сума цифр у чисельнику 10<sup>-го</sup> наближення - $1 + 4 + 5 + 7 = 17$.

Знайдіть суму цифр у чисельнику `n`<sup>-го</sup> наближення неперервного дробу для `e`.

# --hints--

`convergentsOfE(10)` має повернути число.

```js
assert(typeof convergentsOfE(10) === 'number');
```

`convergentsOfE(10)` має повернути `17`.

```js
assert.strictEqual(convergentsOfE(10), 17);
```

`convergentsOfE(30)` має повернути `53`.

```js
assert.strictEqual(convergentsOfE(30), 53);
```

`convergentsOfE(50)` має повернути `91`.

```js
assert.strictEqual(convergentsOfE(50), 91);
```

`convergentsOfE(70)` має повернути `169`.

```js
assert.strictEqual(convergentsOfE(70), 169);
```

`convergentsOfE(100)` має повернути `272`.

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
