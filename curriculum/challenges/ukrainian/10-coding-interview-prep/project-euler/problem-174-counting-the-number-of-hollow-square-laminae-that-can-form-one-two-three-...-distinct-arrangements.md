---
id: 5900f41a1000cf542c50ff2d
title: >-
  Завдання 174: Підрахунок кількості квадратних рамок, які можуть утворювати одну, дві, три, ... різні композиції
challengeType: 1
forumTopicId: 301809
dashedName: >-
  problem-174-counting-the-number-of-hollow-square-laminae-that-can-form-one-two-three-----distinct-arrangements
---

# --description--

Нехай квадратна рамка — квадратний контур з квадратним «отвором», у якому вертикальні та горизонтальні сторони — симетричні.

З восьми плиток можна сформувати рамку лише одним способом: квадрат 3x3 з отвором 1x1 посередині. Однак з тридцяти двох плиток можна сформувати дві окремі рамки.

<img class="img-responsive center-block" alt="дві квадратні рамки з отворами 2х2 та 7х7" src="https://cdn.freecodecamp.org/curriculum/project-euler/using-up-to-one-million-tiles-how-many-different-hollow-square-laminae-can-be-formed.gif" style="background-color: white; padding: 10px;" />

Якщо $t$ — кількість використаних плиток, то $t = 8$ є типом $L(1)$, а $t= 32$ є типом $L(2)$.

Нехай $N(n)$ — це число $t ≤ 1000000$ таке, що $t$ є типом $L(n)$; наприклад, $N(15) = 832$.

Знайдіть $\сума N(n)$ для $1 ≤ n ≤ 10$?

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
