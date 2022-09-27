---
id: 5900f4b71000cf542c50ffc9
title: 'Problema 330: Numero di Eulero'
challengeType: 1
forumTopicId: 301988
dashedName: problem-330-eulers-number
---

# --description--

Una sequenza infinita di numeri reali $a(n)$ è definita per tutti gli interi $n$ come segue:

$$ a(n) = \begin{cases} 1                                                       & n < 0 \\\\
\displaystyle \sum_{i = 1}^{\infty} \frac{a(n - 1)}{i!} & n \ge 0 \end{cases} $$

Per esempio,

$$\begin{align}   & a(0) = \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = e − 1 \\\\
  & a(1) = \frac{e − 1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = 2e − 3 \\\\ & a(2) = \frac{2e − 3}{1!} + \frac{e − 1}{2!} + \frac{1}{3!} + \ldots = \frac{7}{2} e − 6 \end{align}$$

dove $e = 2.7182818\ldots$ è costante di Euler.

Può essere dimostrato che $a(n)$ è della forma $\displaystyle\frac{A(n)e + B(n)}{n!}$ per i numeri interi $A(n)$ e $B(n)$.

Per esempio $\displaystyle a(10) = \frac{328161643e − 652694486}{10!}$.

Trova $A({10}^9)$ + $B({10}^9)$ e dai la tua risposta $\bmod 77\\,777\\,777$.

# --hints--

`eulersNumber()` dovrebbe restituire `15955822`.

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
