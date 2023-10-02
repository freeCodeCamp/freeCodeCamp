---
id: 5900f4a51000cf542c50ffb7
title: 'Задача 312: Циклічні шляхи на графах Серпінського'
challengeType: 1
forumTopicId: 301968
dashedName: problem-312-cyclic-paths-on-sierpiski-graphs
---

# --description--

- Граф Серпінського порядку-1 ($S_1$) – це рівносторонній трикутник.
- $S_{n + 1}$ отримується від $S_n$ шляхом розташування трьох копій $S_n$ таким чином, що кожна пара копій має один спільний кут.

<img class="img-responsive center-block" alt="Графи Серпінського від порядку-1 до порядку-5" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-1.gif" style="background-color: white; padding: 10px;" />

Нехай $C(n)$ буде кількістю циклів, які проходять через всі вершини $S_n$ лише один раз. Наприклад, $C(3) = 8$, тому що вісім таких циклів можна змалювати на $S_3$, як це показано нижче:

<img class="img-responsive center-block" alt="вісім циклів, що проходять через усі вершини S_3 лише один раз" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-2.gif" style="background-color: white; padding: 10px;" />

Також можна перевірити, що:

$$\begin{align}   & C(1) = C(2) = 1 \\\\
  & C(5) = 71\\,328\\,803\\,586\\,048 \\\\   & C(10 000)\bmod {10}^8 = 37\\,652\\,224 \\\\
  & C(10 000)\bmod {13}^8 = 617\\,720\\,485 \\\\ \end{align}$$

Знайдіть $C(C(C(10\\,000)))\bmod {13}^8$.

# --hints--

`pathsOnSierpinskiGraphs()` має повертати до `324681947`.

```js
assert.strictEqual(pathsOnSierpinskiGraphs(), 324681947);
```

# --seed--

## --seed-contents--

```js
function pathsOnSierpinskiGraphs() {

  return true;
}

pathsOnSierpinskiGraphs();
```

# --solutions--

```js
// solution required
```
