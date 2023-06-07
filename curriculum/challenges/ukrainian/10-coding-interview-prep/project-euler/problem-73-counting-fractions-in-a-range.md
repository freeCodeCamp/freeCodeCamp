---
id: 5900f3b61000cf542c50fec8
title: 'Завдання 73: Підрахунок дробів в межах діапазону'
challengeType: 1
forumTopicId: 302186
dashedName: problem-73-counting-fractions-in-a-range
---

# --description--

Розглянемо дріб $\frac{n}{d}$, де `n` та `d` є додатними цілими числами. Якщо `n` &lt; `d` та найбільший спільний дільник ${HCF}(n, d) = 1$, то це називається нескоротним правильним дробом.

Якщо ми перерахуємо набір знижених правильних дробів для `d` ≤ 8 у порядку зростання розміру, то ми отримаємо:

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \mathbf{\frac{3}{8}, \frac{2}{5}, \frac{3}{7}}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

Можна побачити, що є `3` дроби між $\frac{1}{3}$ та $\frac{1}{2}$.

Як багато дробів лежить між $\frac{1}{3}$ та $\frac{1}{2}$ у відсортованому наборі зі нескоротних правильних дробів для `d` ≤ `limit`?

# --hints--

`countingFractionsInARange(8)` повинен повертатися як число.

```js
assert(typeof countingFractionsInARange(8) === 'number');
```

`countingFractionsInARange(8)` повинен повертатися як `3`.

```js
assert.strictEqual(countingFractionsInARange(8), 3);
```

`countingFractionsInARange(1000)` повинен повертатися як `50695`.

```js
assert.strictEqual(countingFractionsInARange(1000), 50695);
```

`countingFractionsInARange(6000)` повинен повертатися як `1823861`.

```js
assert.strictEqual(countingFractionsInARange(6000), 1823861);
```

`countingFractionsInARange(12000)` повинен повертатися як `7295372`.

```js
assert.strictEqual(countingFractionsInARange(12000), 7295372);
```

# --seed--

## --seed-contents--

```js
function countingFractionsInARange(limit) {

  return true;
}

countingFractionsInARange(8);
```

# --solutions--

```js
function countingFractionsInARange(limit) {
  let result = 0;
  const stack = [[3, 2]];
  while (stack.length > 0) {
    const [startDenominator, endDenominator] = stack.pop();
    const curDenominator = startDenominator + endDenominator;
    if (curDenominator <= limit) {
      result++;
      stack.push([startDenominator, curDenominator]);
      stack.push([curDenominator, endDenominator]);
    }
  }
  return result;
}
```
