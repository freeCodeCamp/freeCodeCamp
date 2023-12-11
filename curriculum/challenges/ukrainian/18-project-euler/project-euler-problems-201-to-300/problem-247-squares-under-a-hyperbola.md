---
id: 5900f4641000cf542c50ff76
title: 'Завдання 247: квадрати під гіперболою'
challengeType: 1
forumTopicId: 301894
dashedName: problem-247-squares-under-a-hyperbola
---

# --description--

Розглянемо область, обмежену $1 ≤ x$ та $0 ≤ y ≤ \frac{1}{x}$.

Нехай $S_1$ буде найбільшим квадратом, який може поміститися під кривою.

Нехай $S_2$ буде найбільшим квадратом, який поміщається на площі, яка залишилась, і так далі.

Нехай індексом $S_n$ буде пара чисел (зліва, знизу), що вказує на кількість квадратів зліва від $S_n$ та кількість квадратів знизу від $S_n$.

<img class="img-responsive center-block" alt="рисунок з квадратами під гіперболою" src="https://cdn.freecodecamp.org/curriculum/project-euler/squares-under-a-hyperbola.gif" style="background-color: white; padding: 10px;" />

На рисунку зображено декілька таких квадратів, позначених числами.

$S_2$ має один квадрат зліва та жодного знизу, тому індексом $S_2$ є (1, 0).

Можна побачити, що індексом $S_{32}$ є (1,1), як й індексом $S_{50}$.

50 є найбільшим $n$, за якого індексом $S_n$ є (1, 1).

Яке найбільше $n$, за якого індексом $S_n$ є (3, 3)?

# --hints--

`squaresUnderAHyperbola()` має повернути `782252`.

```js
assert.strictEqual(squaresUnderAHyperbola(), 782252);
```

# --seed--

## --seed-contents--

```js
function squaresUnderAHyperbola() {

  return true;
}

squaresUnderAHyperbola();
```

# --solutions--

```js
// solution required
```
