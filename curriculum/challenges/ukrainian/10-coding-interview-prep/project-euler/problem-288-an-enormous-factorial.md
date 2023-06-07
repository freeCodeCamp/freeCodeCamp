---
id: 5900f48d1000cf542c50ff9f
title: 'Задача 288: Величезний факторіал'
challengeType: 1
forumTopicId: 301939
dashedName: problem-288-an-enormous-factorial
---

# --description--

Для будь-якого цілого числа $p$ число $N(p,q)$ визначається за $N(p,q) = \sum_{n=0}^q T_n \times p^n$ з $T_n$, що створене генератором випадкових чисел:

$$\begin{align}   & S_0 = 290797 \\\\
  & S_{n + 1} = {S_n}^2\bmod 50\\,515\\,093 \\\\ & T_n = S_n\bmod p \end{align}$$

Припустимо, $Nfac(p,q)$ – факторіал $N(p,q)$.

Нехай $NF(p,q)$ – кількість множників $p$ у $Nfac(p,q)$.

Дано: $NF(3,10000) \bmod 3^{20} = 624\\,955\\,285$.

Знайти: $NF(61,{10}^7)\bmod {61}^{10}$.

# --hints--

`enormousFactorial()` має повертати до `605857431263982000`.

```js
assert.strictEqual(enormousFactorial(), 605857431263982000);
```

# --seed--

## --seed-contents--

```js
function enormousFactorial() {

  return true;
}

enormousFactorial();
```

# --solutions--

```js
// solution required
```
