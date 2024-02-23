---
id: 5900f4b71000cf542c50ffc9
title: 'Завдання 330: число Ейлера'
challengeType: 1
forumTopicId: 301988
dashedName: problem-330-eulers-number
---

# --description--

Визначимо нескінченну послідовність дійсних чисел $a(n)$ для усіх цілих чисел $n$ наступним чином:

$$ a(n) = \begin{cases} 1                                                       & n < 0 \\\\
\displaystyle \sum_{i = 1}^{\infty} \frac{a(n - 1)}{i!} & n \ge 0 \end{cases} $$

Наприклад,

$$\begin{align}   & a(0) = \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = e − 1 \\\\
  & a(1) = \frac{e − 1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = 2e − 3 \\\\ & a(2) = \frac{2e − 3}{1!} + \frac{e − 1}{2!} + \frac{1}{3!} + \ldots = \frac{7}{2} e − 6 \end{align}$$

де $e = 2.7182818\ldots$ є сталою Ейлера.

Можна довести, що $a(n)$ має вигляд $\displaystyle\frac{A(n)e + B(n)}{n!}$ за цілих чисел $A(n)$ та $B(n)$.

Наприклад, $\displaystyle a(10) = \frac{328161643e − 652694486}{10!}$.

Знайдіть $A({10}^9)$ + $B({10}^9)$ та надайте відповідь за $\bmod 77\\,777\\,777$.

# --hints--

`eulersNumber()` має повернути `15955822`.

```js
assert.strictEqual(eulersNumber(), 15955822);
```

# --seed--

## --seed-contents--

```js
function eulersNumber() {

  return true;
}

eulersNumber();
```

# --solutions--

```js
// solution required
```
