---
id: 5900f41a1000cf542c50ff2d
title: >-
  Завдання 174: підрахунок квадратних кладок, які можуть утворити одну, дві, три, ... різні композиції
challengeType: 1
forumTopicId: 301809
dashedName: >-
  problem-174-counting-the-number-of-hollow-square-laminae-that-can-form-one-two-three-----distinct-arrangements
---

# --description--

Нехай квадратна кладка є квадратним контуром з квадратним «отвором», у якому вертикальні та горизонтальні сторони симетричні.

З восьми плиток можна сформувати кладку лише одним способом: квадрат 3×3 з отвором 1×1 посередині. Однак з тридцяти двох плиток можна сформувати дві окремі кладки.

<img class="img-responsive center-block" alt="дві квадратні кладки з отворами 2х2 та 7х7" src="https://cdn.freecodecamp.org/curriculum/project-euler/using-up-to-one-million-tiles-how-many-different-hollow-square-laminae-can-be-formed.gif" style="background-color: white; padding: 10px;" />

Якщо $t$ позначає кількість використаних плиток, то $t = 8$ має тип $L(1)$ та $t = 32$ має тип $L(2)$.

Нехай $N(n)$ буде числом $t ≤ 1000000$, за якого $t$ є типом $L(n)$. Наприклад, $N(15) = 832$.

Чому дорівнює $\sum N(n)$ за умови $1 ≤ n ≤ 10$?

# --hints--

`hollowSquareLaminaeDistinctArrangements()` має повернути `209566`.

```js
assert.strictEqual(hollowSquareLaminaeDistinctArrangements(), 209566);
```

# --seed--

## --seed-contents--

```js
function hollowSquareLaminaeDistinctArrangements() {

  return true;
}

hollowSquareLaminaeDistinctArrangements();
```

# --solutions--

```js
// solution required
```
