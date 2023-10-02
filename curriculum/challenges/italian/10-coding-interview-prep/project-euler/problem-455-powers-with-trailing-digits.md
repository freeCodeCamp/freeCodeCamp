---
id: 5900f5331000cf542c510046
title: 'Problema 455: Potenze con cifre finali'
challengeType: 1
forumTopicId: 302129
dashedName: problem-455-powers-with-trailing-digits
---

# --description--

Sia $f(n)$ il più grande numero intero positivo $x$ minore di ${10}^9$ tale che le ultime 9 cifre di $n^x$ formino il numero $x$ (inclusi gli zeri iniziali), o zero se non esiste un tale numero intero.

Ad esempio:

$$\begin{align}   & f(4) = 411\\,728\\,896 (4^{411\\,728\\,896} = ...490\underline{411728896}) \\\\
  & f(10) = 0 \\\\   & f(157) = 743\\,757 (157^{743\\,757} = ...567\underline{000743757}) \\\\
  & Σf(n), 2 ≤ n ≤ 103 = 442\\,530\\,011\\,399 \end{align}$$

Trova $\sum f(n)$, $2 ≤ n ≤ {10}^6$.

# --hints--

`powersWithTrailingDigits()` dovrebbe restituire `450186511399999`.

```js
assert.strictEqual(powersWithTrailingDigits(), 450186511399999);
```

# --seed--

## --seed-contents--

```js
function powersWithTrailingDigits() {

  return true;
}

powersWithTrailingDigits();
```

# --solutions--

```js
// solution required
```
