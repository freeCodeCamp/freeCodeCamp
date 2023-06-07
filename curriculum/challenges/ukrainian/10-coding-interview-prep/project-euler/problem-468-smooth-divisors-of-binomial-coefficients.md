---
id: 5900f5411000cf542c510054
title: 'Завдання 468: Гладкі многовиди дивізорів біноміальних коефіцієнтів'
challengeType: 1
forumTopicId: 302143
dashedName: problem-468-smooth-divisors-of-binomial-coefficients
---

# --description--

Ціле число називають B-гладким, якщо жоден з його простих множників не перевищує $B$.

Нехай $SB(n)$ — це найбільший B-гладкий дільник $n$.

Приклади:

$$\begin{align}   & S_1(10) = 1 \\\\
  & S_4(2\\,100) = 12 \\\\ & S_{17}(2\\,496\\,144) = 5\\,712 \end{align}$$

Визначте $F(n) = \displaystyle\sum_{B = 1}^n \sum_{r = 0}^n S_B(\displaystyle\binom{n}{r})$. Тут $\displaystyle\binom{n}{r}$ позначає біноміальний коефіцієнт.

Приклади:

$$\begin{align}   & F(11) = 3132 \\\\
  & F(1\\,111)\bmod 1\\,000\\,000\\,993 = 706\\,036\\,312 \\\\ & F(111\\,111)\bmod 1\\,000\\,000\\,993 = 22\\,156\\,169 \end{align}$$

Знайдіть $F(11\\,111\\,111)\bmod 1\\,000\\,000\\,993$.

# --hints--

`smoothDivisorsOfBinomialCoefficients()` має повернути `852950321`.

```js
assert.strictEqual(smoothDivisorsOfBinomialCoefficients(), 852950321);
```

# --seed--

## --seed-contents--

```js
function smoothDivisorsOfBinomialCoefficients() {

  return true;
}

smoothDivisorsOfBinomialCoefficients();
```

# --solutions--

```js
// solution required
```
