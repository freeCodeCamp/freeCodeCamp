---
id: 5900f4c21000cf542c50ffd4
title: 'Problema 340: Funzione Pazza'
challengeType: 1
forumTopicId: 301999
dashedName: problem-340-crazy-function
---

# --description--

Per gli interi fissati $a$, $b$, $c$, definire la funzione pazza $F(n)$ come segue:

$$\begin{align}   & F(n) = n - c \\;\text{ per ogni } n > b \\\\
  & F(n) = F(a + F(a + F(a + F(a + n)))) \\;\text{ per ogni } n ≤ b. \end{align}$$

Inoltre, definisci $S(a, b, c) = \displaystyle\sum_{n = 0}^b F(n)$.

Per esempio, se $a = 50$, $b = 2000$ e $c = 40$, allora $F(0) = 3240$ e $F(2000) = 2040$. Inoltre, $S(50, 2000, 40) = 5\\,204\\,240$.

Trova le ultime 9 cifre di $S({21}^7, 7^{21}, {12}^7)$.

# --hints--

`crazyFunction()` dovrebbe restituire `291504964`.

```js
assert.strictEqual(crazyFunction(), 291504964);
```

# --seed--

## --seed-contents--

```js
function crazyFunction() {

  return true;
}

crazyFunction();
```

# --solutions--

```js
// solution required
```
