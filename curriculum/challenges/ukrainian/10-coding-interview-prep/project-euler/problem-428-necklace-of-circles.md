---
id: 5900f5191000cf542c51002b
title: 'Завдання 428: Намисто кіл'
challengeType: 1
forumTopicId: 302098
dashedName: problem-428-necklace-of-circles
---

# --description--

Припустимо $a$, $b$ та $c$ — додатні числа.

Тоді $W$, $X$, $Y$, $Z$ будуть чотирма колінеарними точками, де $|WX| = a$, $|XY| = b$, $|YZ| = c$ та $|WZ| = a + b + c$.

Нехай $C_{\text{in}}$ — це коло з діаметром $XY$.

Нехай $C_{\text{out}}$ — коло із діаметром $WZ$.

Триплетом ($a$, $b$, $c$) називають *триплет намиста* — коли $k ≥ 3$ окремі кола $C_1, C_2, \ldots, C_k$ можна розмістити наступним чином:

- $C_i$ немає спільних внутрішніх точок з будь-яким $C_j$ для $1 ≤ i$, $j ≤ k$ та $i ≠ j$,
- $C_i$ дотичне і до $C_{\text{in}}$, і до $C_{\text{out}}$ для $1 ≤ i ≤ k$,
- $C_i$ дотичне до $C_{i + 1}$ для $1 ≤ i &lt; k$, та
- $C_k$ дотикається до $C_1$.

До прикладу, (5, 5, 5) та (4, 3, 2) — триплети намиста, тоді ж як (2, 2, 5), як можна бачити, — ні.

<img class="img-responsive center-block" alt="візуальний приклад триплету намиста" src="https://cdn.freecodecamp.org/curriculum/project-euler/necklace-of-circles.png" style="background-color: white; padding: 10px;" />

Нехай $T(n)$ — це кількість триплетів намиста $(a, b, c)$ таких, як $a$, $b$ та $c$ — додатні цілі числа, а $b ≤ n$. Наприклад, $T(1) = 9$, $T(20) = 732$ та $T(3\\,000) = 438\\,106$.

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
