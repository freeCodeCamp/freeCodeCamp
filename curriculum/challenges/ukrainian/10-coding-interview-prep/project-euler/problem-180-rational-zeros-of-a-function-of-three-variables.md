---
id: 5900f4201000cf542c50ff33
title: 'Завдання 180: Раціональні нулі функції з трьома змінними'
challengeType: 1
forumTopicId: 301816
dashedName: problem-180-rational-zeros-of-a-function-of-three-variables
---

# --description--

Для будь-якого цілого числа $n$ розглянемо три функції

$$\begin{align}   & f_{1,n}(x,y,z) = x^{n + 1} + y^{n + 1} − z^{n + 1}\\\\
  & f_{2,n}(x,y,z) = (xy + yz + zx) \times (x^{n - 1} + y^{n - 1} − z^{n - 1})\\\\ & f_{3,n}(x,y,z) = xyz \times (x^{n - 2} + y^{n - 2} − z^{n - 2}) \end{align}$$

та їхню комбінацію

$$\begin{align} & f_n(x,y,z) = f_{1,n}(x,y,z) + f_{2,n}(x,y,z) − f_{3,n}(x,y,z) \end{align}$$

$(x,y,z)$ ми називаємо золотою трійкою послідовності $k$, якщо $x$, $y$ і $z$ є раціональними числами форми $\frac{a}{b}$ with $0 &lt; a &lt; b ≤ k$ і є хоча б одне ціле число $n$, щоб виконувалася рівність $f_n(x,y,z) = 0$.

Нехай $s(x,y,z) = x + y + z$.

Нехай $t = \frac{u}{v}$ є сумою всіх різних $s(x,y,z)$ для золотих трійок $(x,y,z)$ послідовності 35. Всі $s(x,y,z)$ і $t$ повинні бути в скороченій формі.

Знайдіть $u + v$.

# --hints--

`rationalZeros()` повинен повернутися як `285196020571078980`.

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
