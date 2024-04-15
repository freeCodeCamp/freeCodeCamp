---
id: 5900f4201000cf542c50ff33
title: 'Завдання 180: раціональні нулі функції трьох змінних'
challengeType: 1
forumTopicId: 301816
dashedName: problem-180-rational-zeros-of-a-function-of-three-variables
---

# --description--

Розглянемо три функції для будь-якого цілого числа $n$

$$\begin{align}   & f_{1,n}(x,y,z) = x^{n + 1} + y^{n + 1} − z^{n + 1}\\\\
  & f_{2,n}(x,y,z) = (xy + yz + zx) \times (x^{n - 1} + y^{n - 1} − z^{n - 1})\\\\ & f_{3,n}(x,y,z) = xyz \times (x^{n - 2} + y^{n - 2} − z^{n - 2}) \end{align}$$

та їх комбінацію

$$\begin{align} & f_n(x,y,z) = f_{1,n}(x,y,z) + f_{2,n}(x,y,z) − f_{3,n}(x,y,z) \end{align}$$

Назвемо $(x,y,z)$ золотою трійкою порядку $k$, якщо $x$, $y$ та $z$ є раціональними числами у вигляді $\frac{a}{b}$, де $0 &lt; a &lt; b ≤ k$ та наявне (принаймні) одне ціле число $n$, щоб $f_n(x,y,z) = 0$.

Нехай $s(x,y,z) = x + y + z$.

Нехай $t = \frac{u}{v}$ є сумою всіх різних $s(x,y,z)$ для золотих трійок $(x,y,z)$ порядку 35. Всі $s(x,y,z)$ і $t$ повинні бути в скороченій формі.

Знайдіть $u + v$.

# --hints--

`rationalZeros()` має повернути `285196020571078980`.

```js
assert.strictEqual(rationalZeros(), 285196020571078980);
```

# --seed--

## --seed-contents--

```js
function rationalZeros() {

  return true;
}

rationalZeros();
```

# --solutions--

```js
// solution required
```
