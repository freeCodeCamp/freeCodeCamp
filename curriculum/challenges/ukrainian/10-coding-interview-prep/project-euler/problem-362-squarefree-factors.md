---
id: 5900f4d61000cf542c50ffe9
title: 'Задача 362: Безквадратні числа'
challengeType: 1
forumTopicId: 302023
dashedName: problem-362-squarefree-factors
---

# --description--

Розглянемо число 54.

Число 54 може бути розкладене 7 різними способами на один чи більше факторів, більших ніж 1:

$$54, 2 × 27, 3 × 18, 6 × 9, 3 × 3 × 6, 2 × 3 × 9 \text{ and } 2 × 3 × 3 × 3$$

Якщо нам потрібно, щоб всі фактори були безквадратними, залишаються лише два способи: $3 × 3 × 6$ and $2 × 3 × 3 × 3$.

Давайте викличемо $Fsf(n)$ кількість шляхів $n$, щоб можна було розкласти на один чи більше безквадратних факторів, які більше 1, отже $Fsf(54) = 2$.

Нехай $S(n)$ буде $\сумою Fsf(k)$ for $k = 2$ to $n$.

$S(100) = 193$.

Знайдіть $S(10\\,000\\,000\\,000)$.

# --hints--

`squarefreeFactors()` має повертати `457895958010`.

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
