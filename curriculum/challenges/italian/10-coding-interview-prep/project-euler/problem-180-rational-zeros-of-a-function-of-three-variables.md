---
id: 5900f4201000cf542c50ff33
title: 'Problema 180: Zeri razionali di una funzione di tre variabili'
challengeType: 1
forumTopicId: 301816
dashedName: problem-180-rational-zeros-of-a-function-of-three-variables
---

# --description--

Per qualsiasi intero $n$, considera le tre funzioni

$$\begin{align}   & f_{1,n}(x,y,z) = x^{n + 1} + y^{n + 1} − z^{n + 1}\\\\
  & f_{2,n}(x,y,z) = (xy + yz + zx) \times (x^{n - 1} + y^{n - 1} − z^{n - 1})\\\\ & f_{3,n}(x,y,z) = xyz \times (x^{n - 2} + y^{n - 2} − z^{n - 2}) \end{align}$$

e la loro combinazione

$$\begin{align} & f_n(x,y,z) = f_{1,n}(x,y,z) + f_{2,n}(x,y,z) − f_{3,n}(x,y,z) \end{align}$$

Chiamiamo $(x,y,z)$ una tripletta d'oro di ordine $k$ se $x$, $y$, e $z$ sono tutti i numeri razionali nella forma $\frac{a}{b}$ con $0 &lt; a &lt; b ≤ k$ e c'è (almeno) un intero $n$, tale che $f_n(x,y,z) = 0$.

Sia $s(x,y,z) = x + y + z$.

Sia $t = \frac{u}{v}$ la somma di tutti i distinti $s(x,y,z)$ per tutte le triplette d'oro $(x,y,z)$ di ordine 35. Tutti i $s(x,y,z)$ e $t$ devono essere in forma ridotta.

Trova $u + v$.

# --hints--

`rationalZeros()` dovrebbe restituire `285196020571078980`.

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
