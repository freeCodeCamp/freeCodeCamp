---
id: 5900f4641000cf542c50ff76
title: 'Завдання 247: Квадрати під гіперболою'
challengeType: 1
forumTopicId: 301894
dashedName: problem-247-squares-under-a-hyperbola
---

# --description--

Розглянемо область, обмежену $1 ≤ x$ та $0 ≤ y ≤ \frac{1}{x}$.

Нехай $S_1$ буде найбільшим квадратом, який може поміститися під кривою.

Нехай $S_2$ буде найбільшим квадратом, як може поміститися на площі що залишилася, і так далі.

Нехай індексом $S_n$ буде парна чисел (зліва, знизу), що вказує на кількість квадратів злів від $S_n$ та числом квадратів знизу від $S_n$.

<img class="img-responsive center-block" alt="діаграма з квадратами під гіперболою" src="https://cdn.freecodecamp.org/curriculum/project-euler/squares-under-a-hyperbola.gif" style="background-color: white; padding: 10px;" />

На діаграмі зображено декілька квадратів, позначених числами.

$S_2$ має один квадрат зліва та жодного знизу, тому індекс $S_2$ — (1, 0).

Можна побачити, що індекс $S_{32}$ (1,1), також й індекс $S_{50}$.

50 — це найбільше $n$, для котрого індекс $S_n$ (1, 1).

Яке найбільше $n$, для котрого індекс $S_n$ (3, 3)?

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
