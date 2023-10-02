---
id: 5900f4b71000cf542c50ffca
title: 'Задача 331: Перехресні перевертання'
challengeType: 1
forumTopicId: 301989
dashedName: problem-331-cross-flips
---

# --description--

N×N дисків розміщують на квадратній гральній дошці. Кожен диск має чорну і білу сторону.

З кожним ходом ви можете обрати диск та перевернути всі диски у тому ж рядку і в тому ж стовпці, у якому знаходиться цей диск, тобто перевертаються $2 × N - 1$ дисків. Гра закінчується, коли всі диски перевернуті білою стороною догори. У наступному прикладі продемонстровано гру на дошці 5×5.

<img class="img-responsive center-block" alt="анімація показує гру на панелі 5x5" src="https://cdn.freecodecamp.org/curriculum/project-euler/cross-flips.gif" style="background-color: white; padding: 10px;" />

Можна довести, що для завершення гри потрібно зробити мінімум 3 ходи.

Нижній лівий диск на $N×N$ дошці має координати (0, 0); нижній правий диск має координати ($N - 1$,$0$), а верхній лівий диск має координати ($0$,$N - 1$).

Let $C_N$ be the following configuration of a board with $N × N$ disks: A disk at ($x$, $y$) satisfying $N - 1 \le \sqrt{x^2 + y^2} \lt N$, shows its black side; otherwise, it shows its white side. $C_5$ показано вище.

Нехай $T(N)$ буде мінімальною кількістю ходів для завершення гри, починаючи з конфігурації $C_N$ або 0, якщо конфігурація $C_N$ нерозв'язна. Ми продемонстрували, що $T(5) = 3$. Показано також, що $T(10) = 29$ and $T(1\\,000) = 395\\,253$.

Знайдіть $\displaystyle \sum_{i = 3}^{31} T(2^i - i)$.

# --hints--

`crossFlips()`повинно вийти`467178235146843500`.

```js
assert.strictEqual(crossFlips(), 467178235146843500);
```

# --seed--

## --seed-contents--

```js
function crossFlips() {

  return true;
}

crossFlips();
```

# --solutions--

```js
// solution required
```
