---
id: 5900f4861000cf542c50ff99
title: 'Problema 282: La funzione Ackermann'
challengeType: 1
forumTopicId: 301933
dashedName: problem-282-the-ackermann-function
---

# --description--

Per gli interi non negativi $m$, $n$, la funzione Ackermann $A(m, n)$ è definita come segue:

$$A(m, n) = \begin{cases} n + 1                 & \text{if $m = 0$}             \\\\
A(m - 1, 1)           & \text{if $m > 0$ e $n = 0$} \\\\ A(m - 1, A(m, n - 1)) & \text{if $m > 0$ e $n > 0$} \end{cases}$$

Per esempio $A(1, 0) = 2$, $A(2, 2) = 7$ e $A(3, 4) = 125$.

Trova $\displaystyle\sum_{n = 0}^6 A(n, n)$ e dai la tua risposta mod ${14}^8$.

# --hints--

`ackermanFunction()` dovrebbe restituire `1098988351`.

```js
assert.strictEqual(ackermanFunction(), 1098988351);
```

# --seed--

## --seed-contents--

```js
function ackermanFunction() {

  return true;
}

ackermanFunction();
```

# --solutions--

```js
// solution required
```
