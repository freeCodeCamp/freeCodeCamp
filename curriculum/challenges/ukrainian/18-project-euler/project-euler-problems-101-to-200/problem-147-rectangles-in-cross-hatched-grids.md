---
id: 5900f3ff1000cf542c50ff12
title: 'Завдання 147: прямокутники у замальованих сітках'
challengeType: 1
forumTopicId: 301776
dashedName: problem-147-rectangles-in-cross-hatched-grids
---

# --description--

У сітці 3х2 всього може бути розташовано 37 різних прямокутників, як зазначено на ескізі.

<img class="img-responsive center-block" alt="способи розміщення різних прямокутників в сітці з перехресним штрихуванням розміром 3x2" src="https://cdn.freecodecamp.org/curriculum/project-euler/rectangles-in-cross-hatched-grids.png" style="background-color: white; padding: 10px;" />

5 сіток менші за 3х2, при цьому враховано горизонтальні та вертикальні виміри: 1x1, 2x1, 3x1, 1x2 та 2x2. Якщо кожна з них замальована, то в менших сітках можна розмістити певну кількість прямокутників:

$$\begin{array}{|c|c|} \hline 1 \times 1 & 1  \\\\ \hline 2 \times 1 & 4  \\\\ \hline 3 \times 1 & 8  \\\\ \hline 1 \times 2 & 4  \\\\ \hline 2 \times 2 & 18 \\\\ \hline \end{array}$$

Додаючи їх до 37 прямокутників з сітки розміром 3x2, загалом можна розмістити 72 різних прямокутники у сітках розміром 3x2 і менших.

Скільки різних прямокутників можна розмістити в межах сіток розміром 47x43 і менших?

# --hints--

`crossHatchedRectangles()` має повернути `846910284`.

```js
assert.strictEqual(crossHatchedRectangles(), 846910284);
```

# --seed--

## --seed-contents--

```js
function crossHatchedRectangles() {

  return true;
}

crossHatchedRectangles();
```

# --solutions--

```js
// solution required
```
