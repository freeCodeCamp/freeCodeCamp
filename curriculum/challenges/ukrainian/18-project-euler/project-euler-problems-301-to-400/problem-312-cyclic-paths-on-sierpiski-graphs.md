---
id: 5900f4a51000cf542c50ffb7
title: 'Завдання 312: циклічні шляхи на графах Серпінського'
challengeType: 1
forumTopicId: 301968
dashedName: problem-312-cyclic-paths-on-sierpiski-graphs
---

# --description--

- Граф Серпінського 1-го порядку ($S_1$) є рівностороннім трикутником.
- $S_{n + 1}$ можна отримати від $S_n$, розташувавши три копії $S_n$ так, щоб кожна пара копій мала один спільний кут.

<img class="img-responsive center-block" alt="графи Серпінського від 1-го порядку до 5-го порядку" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-1.gif" style="background-color: white; padding: 10px;" />

Нехай $C(n)$ буде кількістю циклів, які проходять через всі вершини $S_n$ лише один раз. Наприклад, $C(3) = 8$, оскільки вісім таких циклів можна намалювати на $S_3$, як показано нижче:

<img class="img-responsive center-block" alt="вісім циклів, що проходять через усі вершини S_3 лише один раз" src="https://cdn.freecodecamp.org/curriculum/project-euler/cyclic-paths-on-sierpinski-graphs-2.gif" style="background-color: white; padding: 10px;" />

Також можна довести, що:

$$\begin{align}   & C(1) = C(2) = 1 \\\\
  & C(5) = 71\\,328\\,803\\,586\\,048 \\\\   & C(10 000)\bmod {10}^8 = 37\\,652\\,224 \\\\
  & C(10 000)\bmod {13}^8 = 617\\,720\\,485 \\\\ \end{align}$$

Знайдіть $C(C(C(10\\,000)))\bmod {13}^8$.

# --hints--

`pathsOnSierpinskiGraphs()` має повернути `324681947`.

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
