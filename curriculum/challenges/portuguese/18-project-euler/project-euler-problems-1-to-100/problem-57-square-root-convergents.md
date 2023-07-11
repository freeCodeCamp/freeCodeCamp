---
id: 5900f3a51000cf542c50feb8
title: 'Problema 57: Convergentes da raiz quadrada'
challengeType: 1
forumTopicId: 302168
dashedName: problem-57-square-root-convergents
---

# --description--

É possível mostrar que a raiz quadrada de dois pode ser expressa como uma fração que se repete infinitamente.

<div style='text-align: center;'>$\sqrt 2 =1+ \frac 1 {2+ \frac 1 {2 +\frac 1 {2+ \dots}}}$</div>

Entrando em detalhes, as primeiras quatro iterações são:

$1 + \\frac 1 2 = \\frac 32 = 1.5$

$1 + \\frac 1 {2 + \\frac 1 2} = \\frac 7 5 = 1.4$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 2}} = \\frac {17}{12} = 1.41666 \\dots$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 {2+\\frac 1 2}}} = \\frac {41}{29} = 1.41379 \\dots$

As três próximas iterações são $\\frac {99}{70}$, $\\frac {239}{169}$ e $\\frac {577}{408}$. Mas a oitava iteração, $\\frac {1393}{985}$, é o primeiro exemplo em que o número de algarismos no numerador excede o número de algarismos no denominador.

Nas primeiras `n` iterações, quantas frações contém um numerador com mais algarismos que o denominador?

# --hints--

`squareRootConvergents(10)` deve retornar um número.

```js
assert(typeof squareRootConvergents(10) === 'number');
```

`squareRootConvergents(10)` deve retornar 1.

```js
assert.strictEqual(squareRootConvergents(10), 1);
```

`squareRootConvergents(100)` deve retornar 15.

```js
assert.strictEqual(squareRootConvergents(100), 15);
```

`squareRootConvergents(1000)` deve retornar 153.

```js
assert.strictEqual(squareRootConvergents(1000), 153);
```

# --seed--

## --seed-contents--

```js
function squareRootConvergents(n) {

  return true;
}

squareRootConvergents(1000);
```

# --solutions--

```js
function squareRootConvergents(n) {
  function countDigits(number) {
    let counter = 0;
    while (number > 0) {
      counter++;
      number = number / 10n;
    }
    return counter;
  }

  // Use BigInt as integer won't handle all cases
  let numerator = 3n;
  let denominator = 2n;
  let moreDigitsInNumerator = 0;

  for (let i = 2; i <= n; i++) {
    [numerator, denominator] = [
      numerator + 2n * denominator,
      denominator + numerator
    ];

    if (countDigits(numerator) > countDigits(denominator)) {
      moreDigitsInNumerator++;
    }
  }
  return moreDigitsInNumerator;
}
```
