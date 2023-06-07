---
id: 5900f5411000cf542c510052
title: 'Problema 467: Superinteri'
challengeType: 1
forumTopicId: 302142
dashedName: problem-467-superinteger
---

# --description--

Un intero $s$ è chiamato un superintero di un altro intero $n$ se le cifre di $n$ formano una sottosequenza delle cifre di $s$.

Ad esempio, 2718281828 è un superintero di 18828, mentre 314159 non è un superintero di 151.

Sia $p(n) l'$n$° numero primo, e sia $c(n)$ l'$n$° numero composto. Per esempio, $p(1) = 2$, $p(10) = 29$, $c(1) = 4$ e $c(10) = 18$.

$$\begin{align}   & \\{p(i) : i ≥ 1\\} = \\{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \ldots \\} \\\\
  & \\{c(i) : i ≥ 1\\} = \\{4, 6, 8, 9, 10, 12, 14, 15, 16, 18, \ldots \\} \end{align}$$

Sia $P^D$ la sequenza delle radici digitali di $\\{p(i)\\}$ ($C^D$ è definita in modo simile per $\\{c(i)\\}$):

$$\begin{align}   & P^D = \\{2, 3, 5, 7, 2, 4, 8, 1, 5, 2, \ldots \\} \\\\
  & C^D = \\{4, 6, 8, 9, 1, 3, 5, 6, 7, 9, \ldots \\} \end{align}$$

Sia $P_n$ il numero intero formato concatenando i primi $n$ elementi di $P^D$ ($C_n$ è definito allo stesso modo per $C^D$).

$$\begin{align}   & P_{10} = 2\\,357\\,248\\,152 \\\\
  & C_{10} = 4\\,689\\,135\\,679 \end{align}$$

Sia $f(n)$ il più piccolo intero positivo che è un superintero comune di $P_n$ e $C_n$. Per esempio, $f(10) = 2\\,357\\,246\\,891\\,352\\,679$, and $f(100)\bmod 1\\,000\\,000\\,007 = 771\\,661\\,825$.

Trova $f(10\\,000)\bmod 1\\,000\\,000\\,007$.

# --hints--

`superinteger()` dovrebbe restituire `775181359`.

```js
assert.strictEqual(superinteger(), 775181359);
```

# --seed--

## --seed-contents--

```js
function superinteger() {

  return true;
}

superinteger();
```

# --solutions--

```js
// solution required
```
