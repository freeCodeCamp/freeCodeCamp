---
id: 5900f4461000cf542c50ff59
title: 'Завдання 218: Ідеальні прямокутні трикутники'
challengeType: 1
forumTopicId: 301860
dashedName: problem-218-perfect-right-angled-triangles
---

# --description--

Розглянемо прямокутний трикутник зі сторонами $a=7$, $b=24$ та $c=25$.

Площа цього трикутника дорівнює 84, що ділиться на досконалі числа 6 і 28.

До того ж це примітивний прямокутний трикутник, оскільки $gcd(a,b) = 1$ та $gcd(b,c) = 1$.

Також $c$ — це квадрат цілого числа.

Прямокутний трикутник ідеальний, якщо:

- це примітивний прямокутний трикутник
- його гіпотенуза є квадратом цілого числа

Прямокутний трикутник надідеальний, якщо:

- це ідеальний прямокутний трикутник
- його площа кратна ідеальним числам 6 та 28.

Скільки ідеальних прямокутних трикутників існує з $c ≤ {10}^{16}$ та не є надідеальними?

# --hints--

`perfectRightAngledTriangles()` має повернути `0`.

```js
assert.strictEqual(perfectRightAngledTriangles(), 0);
```

# --seed--

## --seed-contents--

```js
function perfectRightAngledTriangles() {

  return true;
}

perfectRightAngledTriangles();
```

# --solutions--

```js
// solution required
```
