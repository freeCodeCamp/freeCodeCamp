---
id: 5900f3b31000cf542c50fec6
title: 'Завдання 71: упорядковані дроби'
challengeType: 1
forumTopicId: 302184
dashedName: problem-71-ordered-fractions
---

# --description--

Розглянемо дріб $\frac{n}{d}$, де `n` та `d` є натуральними числами. Якщо `n` &lt; `d` та найбільший спільний дільник ${{НСД}(n, d)} = 1$, то це називається скоротним правильним дробом.

Якщо перерахувати скоротні правильні дроби за умови `d` ≤ 8 у порядку зростання, то отримаємо:

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \frac{3}{8}, \frac{\textbf2}{\textbf5}, \frac{3}{7}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

Можна побачити, що $\frac{2}{5}$ — це дріб одразу зліва від $\frac{3}{7}$.

Знайдіть чисельник дробу зліва від $\frac{3}{7}$, перерахувавши скоротні правильні дроби за умови `d` ≤ `limit` у порядку зростання.

# --hints--

`orderedFractions(8)` має повернути число.

```js
assert(typeof orderedFractions(8) === 'number');
```

`orderedFractions(8)` має повернути `2`.

```js
assert.strictEqual(orderedFractions(8), 2);
```

`orderedFractions(10)` має повернути `2`.

```js
assert.strictEqual(orderedFractions(10), 2);
```

`orderedFractions(9994)` має повернути `4283`.

```js
assert.strictEqual(orderedFractions(9994), 4283);
```

`orderedFractions(500000)` має повернути `214283`.

```js
assert.strictEqual(orderedFractions(500000), 214283);
```

`orderedFractions(1000000)` має повернути `428570`.

```js
assert.strictEqual(orderedFractions(1000000), 428570);
```

# --seed--

## --seed-contents--

```js
function orderedFractions(limit) {

  return true;
}

orderedFractions(8);
```

# --solutions--

```js
function orderedFractions(limit) {
  const fractions = [];
  const fractionValues = {};
  const highBoundary = 3 / 7;
  let lowBoundary = 2 / 7;

  for (let denominator = limit; denominator > 2; denominator--) {
    let numerator = Math.floor((3 * denominator - 1) / 7);
    let value = numerator / denominator;
    if (value > highBoundary || value < lowBoundary) {
      continue;
    }
    fractionValues[value] = [numerator, denominator];
    fractions.push(value);
    lowBoundary = value;
  }

  fractions.sort();
  return fractionValues[fractions[fractions.length - 1]][0];
}
```
