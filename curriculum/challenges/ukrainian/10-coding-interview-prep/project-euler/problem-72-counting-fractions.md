---
id: 5900f3b41000cf542c50fec7
title: 'Завдання 72: Підрахунок дробів'
challengeType: 1
forumTopicId: 302185
dashedName: problem-72-counting-fractions
---

# --description--

Розглянемо дріб $\frac{n}{d}$, де `n` та `d` є додатними цілими числами. Якщо `n` &lt; `d` та найбільший спільний дільник ${HCF}(n, d) = 1$, то це називається нескоротним правильним дробом.

Якщо перерахуємо нескоротні правильні дроби для `d` ≤ 8 у порядку зростання, то отримаємо:

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \frac{3}{8}, \frac{2}{5}, \frac{3}{7}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

Бачимо, що кількість елементів становить `21`.

Скільки елементів нескоротних правильних дробів буде при `d` ≤ `limit`?

# --hints--

`countingFractions(8)` має повернути число.

```js
assert(typeof countingFractions(8) === 'number');
```

`countingFractions(8)` має повернути `21`.

```js
assert.strictEqual(countingFractions(8), 21);
```

`countingFractions(20000)` має повернути `121590395`.

```js
assert.strictEqual(countingFractions(20000), 121590395);
```

`countingFractions(500000)` має повернути `75991039675`.

```js
assert.strictEqual(countingFractions(500000), 75991039675);
```

`countingFractions(1000000)` має повернути `303963552391`.

```js
assert.strictEqual(countingFractions(1000000), 303963552391);
```

# --seed--

## --seed-contents--

```js
function countingFractions(limit) {

  return true;
}

countingFractions(8);
```

# --solutions--

```js
function countingFractions(limit) {
  const phi = {};
  let count = 0;

  for (let i = 2; i <= limit; i++) {
    if (!phi[i]) {
      phi[i] = i;
    }
    if (phi[i] === i) {
      for (let j = i; j <= limit; j += i) {
        if (!phi[j]) {
          phi[j] = j;
        }
        phi[j] = (phi[j] / i) * (i - 1);
      }
    }
    count += phi[i];
  }

  return count;
}
```
