---
id: 5900f4e41000cf542c50fff5
title: 'Завдання 375: мінімум підпослідовностей'
challengeType: 1
forumTopicId: 302037
dashedName: problem-375-minimum-of-subsequences
---

# --description--

Нехай $S_n$ буде послідовністю цілих чисел, створеною за допомогою наступного генератора псевдовипадкових чисел:

$$\begin{align}         S_0 & = 290\\,797 \\\\
  S_{n + 1} & = {S_n}^2\bmod 50\\,515\\,093 \end{align}$$

Нехай $A(i, j)$ буде мінімумом чисел $S_i, S_{i + 1}, \ldots, S_j$ за умови $i ≤ j$. Нехай $M(N) = \sum A(i, j)$ за умови $1 ≤ i ≤ j ≤ N$.

Можна довести, що $M(10) = 432\\,256\\,955$ та $M(10\\,000) = 3\\,264\\,567\\,774\\,119$.

Знайдіть $M(2\\,000\\,000\\,000)$.

# --hints--

`minimumOfSubsequences()` має повернути `7435327983715286000`.

```js
assert.strictEqual(minimumOfSubsequences(), 7435327983715286000);
```

# --seed--

## --seed-contents--

```js
function minimumOfSubsequences() {

  return true;
}

minimumOfSubsequences();
```

# --solutions--

```js
// solution required
```
