---
id: 5900f4e41000cf542c50fff5
title: 'Задача 375: Мінімальна кількість підпослідовностей'
challengeType: 1
forumTopicId: 302037
dashedName: problem-375-minimum-of-subsequences
---

# --description--

Нехай $S_n$ буде цілочисельною послідовністю, створеною за допомогою такого генератора псевдовипадкових чисел:

$$\begin{align}         S_0 & = 290\\,797 \\\\
  S_{n + 1} & = {S_n}^2\bmod 50\\,515\\,093 \end{align}$$

Нехай $A(i, j)$ буде мінімальним з чисел $S_i, S_{i + 1}, \ldots, S_j$ for $i ≤ j$. Нехай $M(N) = \sum A(i, j)$ для $1 ≤ i ≤ j ≤ N$.

Ми можемо перевірити, що $M(10) = 432\\,256\\,955$ and $M(10\\,000) = 3\\,264\\,567\\,774\\,119$.

Знайдіть $M(2\\,000\\,000\\,000)$.

# --hints--

`minimumOfSubsequences()` повинен повернути ` 7435327983715286000`.

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
