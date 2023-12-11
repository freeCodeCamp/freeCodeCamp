---
id: 5900f3871000cf542c50fe9a
title: 'Завдання 27: квадратичні прості числа'
challengeType: 1
forumTopicId: 301919
dashedName: problem-27-quadratic-primes
---

# --description--

Ейлер вивів визначну квадратичну формулу:

<div style='margin-left: 4em;'>$n^2 + n + 41$</div>

Виявилося, що згідно з цією формулою можна отримати 40 простих чисел, послідовно підставляючи значення $0 \\le n \\le 39$. Однак, якщо $n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41$ ділиться на 41 без остачі та, очевидно, якщо $n = 41, 41^2 + 41 + 41$ ділиться на 41 без остачі.

Згодом було знайдено чудову формулу $n^2 - 79n + 1601$, за допомогою якої можна знайти 80 простих чисел для послідовних значень $0 \\le n \\le 79$. Добуток коефіцієнтів −79 та 1601 дорівнює −126479.

Розглянемо квадратичну форму:

<div style='margin-left: 4em;'>
  $n^2 + an + b$, де $|a| < range$ та $|b| \le range$<br>
  де $|n|$ є модулем/абсолютним значенням $n$<br>
  Наприклад, $|11| = 11$ та $|-4| = 4$<br>
</div>

Знайдіть добуток коефіцієнтів $a$ та $b$ для квадратичного виразу, який згенерує максимальну кількість простих чисел для послідовних значень $n$, починаючи з $n = 0$.

# --hints--

`quadraticPrimes(200)` має повернути число.

```js
assert(typeof quadraticPrimes(200) === 'number');
```

`quadraticPrimes(200)` має повернути -4925.

```js
assert(quadraticPrimes(200) == -4925);
```

`quadraticPrimes(500)` має повернути -18901.

```js
assert(quadraticPrimes(500) == -18901);
```

`quadraticPrimes(800)` має повернути -43835.

```js
assert(quadraticPrimes(800) == -43835);
```

`quadraticPrimes(1000)` має повернути -59231.

```js
assert(quadraticPrimes(1000) == -59231);
```

# --seed--

## --seed-contents--

```js
function quadraticPrimes(range) {

  return range;
}

quadraticPrimes(1000);
```

# --solutions--

```js
// solution required
```
