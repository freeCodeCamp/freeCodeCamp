---
id: 5900f5021000cf542c510014
title: 'Завдання 405: прямокутна плитка'
challengeType: 1
forumTopicId: 302073
dashedName: problem-405-a-rectangular-tiling
---

# --description--

Ми хочемо викласти прямокутник, довжина якого вдвічі більша за ширину.

Нехай $T(0)$ буде плиткою, яка складається з одного прямокутника.

Нехай $T(n)$ буде отримано з $T( n- 1)$ за умови $n > 0$, якщо розкласти плитки ось так:

<img class="img-responsive center-block" alt="отримання T(n) з T(n - 1)" src="https://cdn.freecodecamp.org/curriculum/project-euler/a-rectangular-tiling-1.png" style="background-color: white; padding: 10px;" />

Ця анімація демонструє плитки $T(n)$ для $n$ від 0 до 5:

<img class="img-responsive center-block" alt="анімація з плитками T(n) для n від 0 до 5" src="https://cdn.freecodecamp.org/curriculum/project-euler/a-rectangular-tiling-2.gif" style="background-color: white; padding: 10px;" />

Нехай $f(n)$ буде кількістю точок, у яких перетинаються чотири плитки з $T(n)$. Наприклад, $f(1) = 0$, $f(4) = 82$ та $f({10}^9)\bmod {17}^7 = 126\\,897\\,180$.

Знайдіть $f({10}^k)$ за умови $k = {10}^{18}$. Надайте відповідь за модулем ${17}^7$.

# --hints--

`rectangularTiling()` має повернути `237696125`.

```js
assert.strictEqual(rectangularTiling(), 237696125);
```

# --seed--

## --seed-contents--

```js
function rectangularTiling() {

  return true;
}

rectangularTiling();
```

# --solutions--

```js
// solution required
```
