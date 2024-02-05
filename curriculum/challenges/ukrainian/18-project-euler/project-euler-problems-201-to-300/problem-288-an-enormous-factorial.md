---
id: 5900f48d1000cf542c50ff9f
title: 'Завдання 288: величезний факторіал'
challengeType: 1
forumTopicId: 301939
dashedName: problem-288-an-enormous-factorial
---

# --description--

Число $N(p,q)$, де $p$ є будь-яким простим числом, визначається як $N(p,q) = \sum_{n=0}^q T_n \times p^n$, де $T_n$ отримано таким генератором випадкових чисел:

$$\begin{align}   & S_0 = 290797 \\\\
  & S_{n + 1} = {S_n}^2\bmod 50\\,515\\,093 \\\\ & T_n = S_n\bmod p \end{align}$$

Нехай $Nfac(p,q)$ буде факторіалом $N(p,q)$.

Нехай $NF(p,q)$ буде кількістю множників $p$ в $Nfac(p,q)$.

Дано, що $NF(3,10000) \bmod 3^{20} = 624\\,955\\,285$.

Знайдіть $NF(61,{10}^7)\bmod {61}^{10}$.

# --hints--

`enormousFactorial()` має повернути `605857431263982000`.

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
