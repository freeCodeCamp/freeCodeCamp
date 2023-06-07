---
id: 5900f3871000cf542c50fe9a
title: 'Завдання 27: Квадратичні прості числа'
challengeType: 1
forumTopicId: 301919
dashedName: problem-27-quadratic-primes
---

# --description--

Математик Ейлер відкрив виняткову квадратичну формулу:

<div style='margin-left: 4em;'>$n^2 + n + 41$</div>

Виявилось, що формула згенерує 40 простих чисел для послідовних значень цілих чисел $0 \\le n \\le 39$. Проте, при умові, що $n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41$ ділиться на 41, і без сумніву, коли $n = 41, 41^2 + 41 + 41$ ділиться на 41.

Таким чином була виявлена неймовірна формула $n^2 - 79n + 1601$, що генерує 80 простих чисел для послідовних значень $0 \\le n \\le 79$. Добуток коефіцієнтів −79 та 1601 дорівнює -126479.

Розглянемо квадратичну форму типу:

<div style='margin-left: 4em;'>
  $n^2 + an + b$, де $|a| < range$ і $|b| \le range$<br> де $|n|$ - це модуль/абсолютне значення $n$<br>, наприклад, $|11| = 11$ та $|-4| = 4$<br>
</div>

Знайдіть добуток коефіцієнтів $a$ та $b$ для квадратичного виразу, який згенерує максимальну кількість простих чисел для послідовних значень $n$, починаючи з $n = 0$.

# --hints--

`quadraticPrimes(200)` має повернути число.

```js
assert(typeof quadraticPrimes(200) === 'number');
```

`quadraticPrimes(200)` має повернути число -4925.

```js
assert(quadraticPrimes(200) == -4925);
```

`quadraticPrimes(500)` має повернути число -18901.

```js
assert(quadraticPrimes(500) == -18901);
```

`quadraticPrimes(800)` має повернути число -43835.

```js
assert(quadraticPrimes(800) == -43835);
```

`quadraticPrimes(1000)` має повернути число -59231.

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
