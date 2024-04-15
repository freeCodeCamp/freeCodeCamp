---
id: 5900f5191000cf542c51002b
title: 'Завдання 428: намисто кіл'
challengeType: 1
forumTopicId: 302098
dashedName: problem-428-necklace-of-circles
---

# --description--

Нехай $a$, $b$ та $c$ будуть додатними числами.

Нехай $W$, $X$, $Y$, $Z$ будуть чотирма колінеарними точками, де $|WX| = a$, $|XY| = b$, $|YZ| = c$ та $|WZ| = a + b + c$.

Нехай $C_{\text{in}}$ буде колом з діаметром $XY$.

Нехай $C_{\text{out}}$ буде колом з діаметром $WZ$.

Трійку ($a$, $b$, $c$) називають *трійкою намиста*, якщо можна розмістити $k ≥ 3$ окремих кіл $C_1, C_2, \ldots, C_k$, за яких:

- $C_i$ не має спільних внутрішніх точок з $C_j$ за умови $1 ≤ i$, $j ≤ k$ та $i ≠ j$,
- $C_i$ дотикається $C_{\text{in}}$ та $C_{\text{out}}$ за умови $1 ≤ i ≤ k$,
- $C_i$ дотикається $C_{i + 1}$ за умови $1 ≤ i &lt; k$, та
- $C_k$ дотикається $C_1$.

Наприклад, (5, 5, 5) та (4, 3, 21) є трійками намиста, а (2, 2, 5) — ні.

<img class="img-responsive center-block" alt="візуальний приклад трійки намиста" src="https://cdn.freecodecamp.org/curriculum/project-euler/necklace-of-circles.png" style="background-color: white; padding: 10px;" />

Нехай $T(n)$ буде кількістю трійок намиста $(a, b, c)$, де $a$, $b$ та $c$ є натуральними числами і $b ≤ n$. Наприклад, $T(1) = 9$, $T(20) = 732$ та $T(3\\,000) = 438\\,106$.

Знайдіть $T(1\\,000\\,000\\,000)$.

# --hints--

`necklace(1000000000)` має повернути `747215561862`.

```js
assert.strictEqual(necklace(1000000000), 747215561862);
```

# --seed--

## --seed-contents--

```js
function necklace(n) {

  return true;
}

necklace(1000000000)
```

# --solutions--

```js
// solution required
```
