---
id: 5900f48d1000cf542c50ffa0
title: 'Завдання 289: цикли Ейлера'
challengeType: 1
forumTopicId: 301940
dashedName: problem-289-eulerian-cycles
---

# --description--

Нехай $C(x,y)$ буде колом, що проходить через точки ($x$, $y$), ($x$, $y + 1$), ($x + 1$, $y$) та ($x + 1$, $y + 1$).

Нехай $E(m,n)$, де $m$ та $n$ є натуральними числами, буде конфігурацією, яка складається з $m·n$ кіл: { $C(x,y)$: $0 ≤ x &lt; m$, $0 ≤ y &lt; n$, $x$ та $y$ є цілими числами }

Цикл Ейлера на $E(m,n)$ є закритим шляхом, який проходить через кожну дугу один раз. На $E(m,n)$ можливо багато таких шляхів, однак нас цікавлять лише ті, які не є самоперетинними: неперетинні шляхи просто торкаються до себе, але ніколи не перетинають.

На зображенні нижче показано $E(3,3)$ і наведено приклад неперетинного шляху Ейлера.

<img class="img-responsive center-block" alt="цикл Ейлера E(3, 3) та неперетинний шлях Ейлера" src="https://cdn.freecodecamp.org/curriculum/project-euler/eulerian-cycles.gif" style="background-color: white; padding: 10px;" />

Нехай $L(m,n)$ буде кількістю неперетинних шляхів Ейлера на $E(m,n)$. Наприклад, $L(1,2) = 2$, $L(2,2) = 37$ та $L(3,3) = 104290$.

Знайдіть $L(6,10)\bmod {10}^{10}$.

# --hints--

`eulerianCycles()` має повернути `6567944538`.

```js
assert.strictEqual(eulerianCycles(), 6567944538);
```

# --seed--

## --seed-contents--

```js
function eulerianCycles() {

  return true;
}

eulerianCycles();
```

# --solutions--

```js
// solution required
```
