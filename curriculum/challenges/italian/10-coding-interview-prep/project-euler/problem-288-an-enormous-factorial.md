---
id: 5900f48d1000cf542c50ff9f
title: 'Problema 288: Un fattoriale enorme'
challengeType: 1
forumTopicId: 301939
dashedName: problem-288-an-enormous-factorial
---

# --description--

Per ogni numero primo $p$ il numero $N(p, q)$ è definito da $N(p,q) = \sum_{n=0}^q T_n \times p^n$ con $T_n$ generato dal seguente generatore casuale di numeri:

$$\begin{align}   & S_0 = 290797 \\\\
  & S_{n + 1} = {S_n}^2\bmod 50\\,515\\,093 \\\\ & T_n = S_n\bmod p \end{align}$$

Sia $Nfac(p,q)$ il fattoriale di $N(p,q)$.

Sia $NF(p,q)$ il numero di fattori $p$ in $Nfac(p,q)$.

Ti è dato che $NF(3,10000) \bmod 3^{20} = 624\\,955\\,285$.

Trova $NF(61,{10}^7)\bmod {61}^{10}$.

# --hints--

`enormousFactorial()` dovrebbe restituire `605857431263982000`.

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
