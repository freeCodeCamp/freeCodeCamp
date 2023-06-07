---
id: 5900f48d1000cf542c50ff9f
title: 'Problem 288: Ein riesiger Faktor'
challengeType: 1
forumTopicId: 301939
dashedName: problem-288-an-enormous-factorial
---

# --description--

Für jede Primzahl $p$ ist die Zahl $N(p,q)$ definiert durch $N(p,q) = \sum_{n=0}^q T_n \times p^n$, wobei $T_n$ durch den folgenden Zufallszahlengenerator erzeugt wird:

$$\begin{align}   & S_0 = 290797 \\\\
  & S_{n + 1} = {S_n}^2\bmod 50\\,515\\,093 \\\\ & T_n = S_n\bmod p \end{align}$$

Lasse $Nfac(p,q)$ die Fakultät von $N(p,q)$ sein.

Lasse $NF(p,q)$ die Anzahl der Faktoren $p$ in $Nfac(p,q)$ sein.

Es ist gegeben, dass $NF(3,10000) \bmod 3^{20} = 624\\,955\\,285$.

Finde $NF(61,{10}^7)\bmod {61}^{10}$.

# --hints--

`enormousFactorial()` sollte `605857431263982000` zurückgeben.

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
