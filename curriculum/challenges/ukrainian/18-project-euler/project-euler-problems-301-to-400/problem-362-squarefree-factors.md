---
id: 5900f4d61000cf542c50ffe9
title: 'Завдання 362: безквадратні множники'
challengeType: 1
forumTopicId: 302023
dashedName: problem-362-squarefree-factors
---

# --description--

Розглянемо число 54.

Число 54 можна розкласти на один чи більше множників (більше ніж 1) сімома різними способами:

$$54, 2 × 27, 3 × 18, 6 × 9, 3 × 3 × 6, 2 × 3 × 9 \text{ та } 2 × 3 × 3 × 3$$

Якщо за умови всі множники мають бути безквадратними, то залишається лише два способи: $3 × 3 × 6$ та $2 × 3 × 3 × 3$.

Назвемо $Fsf(n)$ кількістю способів розкласти $n$ на один чи більше множників (більше ніж 1), тому $Fsf(54) = 2$.

Нехай $S(n)$ буде $\sum Fsf(k)$ за умови, що значення $k$ становить від 2 до n.

$S(100) = 193$.

Знайдіть $S(10\\,000\\,000\\,000)$.

# --hints--

`squarefreeFactors()` має повернути `457895958010`.

```js
assert.strictEqual(squarefreeFactors(), 457895958010);
```

# --seed--

## --seed-contents--

```js
function squarefreeFactors() {

  return true;
}

squarefreeFactors();
```

# --solutions--

```js
// solution required
```
