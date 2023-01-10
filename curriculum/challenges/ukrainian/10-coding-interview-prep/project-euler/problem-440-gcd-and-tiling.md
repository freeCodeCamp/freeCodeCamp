---
id: 5900f5241000cf542c510037
title: 'Проблема 440: GCD і мозаїчний менеджер вікон'
challengeType: 1
forumTopicId: 302112
dashedName: problem-440-gcd-and-tiling
---

# --description--

Ми хочемо повністю заповнити панель довжиною $n$ і висотою 1, за допомогою блоків 1 × 2 або 1 × 1 з одним десятковим знаком зверху:

<img class="img-responsive center-block" alt="десять блоків 1x1 з одним десятковим знаком зверху і блоком 1х2" src="https://cdn.freecodecamp.org/curriculum/project-euler/gcd-and-tiling-1.png" style="background-color: white; padding: 10px;" />

Наприклад, ось деякі способи заповнити панель довжиною $n = 8$:

<img class="img-responsive center-block" alt="приклади способів заповнення панелі довжиною n = 8" src="https://cdn.freecodecamp.org/curriculum/project-euler/gcd-and-tiling-2.png" style="background-color: white; padding: 10px;" />

Нехай $T(n)$ буде кількістю способів для панелі довжиною $n$, як описано вище.

Наприклад, $T(10) = 1$ і $T(2) = 101$.

Нехай $S(L)$ буде потрійною сумою $\sum_{a, b, c} gcd(T(c^a), T(c^b)$ за $1 ≤ a, b, c ≤ L$.

Наприклад:

$$\begin{align}   & S(2) = 10\\,444 \\\\
  & S(3) = 1\\,292\\,115\\,238\\,446\\,807\\,016\\,106\\,539\\,989 \\\\ & S(4)\bmod 987\\,898\\,789 = 670\\,616\\,280. \end{align}$$

Знайдіть $S(2000)\bmod 987\\,898\\,789$.

# --hints--

`gcdAndTiling()` має повернути `970746056`.

```js
assert.strictEqual(gcdAndTiling(), 970746056);
```

# --seed--

## --seed-contents--

```js
function gcdAndTiling() {

  return true;
}

gcdAndTiling();
```

# --solutions--

```js
// solution required
```
