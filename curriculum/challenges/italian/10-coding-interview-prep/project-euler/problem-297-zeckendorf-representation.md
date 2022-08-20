---
id: 5900f4951000cf542c50ffa8
title: 'Problema 297: rappresentazione di Zeckendorf'
challengeType: 1
forumTopicId: 301949
dashedName: problem-297-zeckendorf-representation
---

# --description--

Ogni nuovo termine della sequenza di Fibonacci è dato dalla somma dei due numeri precedenti.

Iniziando con 1 e 2, i primi 10 termini saranno: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.

Ogni numero intero positivo può essere scritto in maniera unica come somma di termini non consecutivi della sequenza di Fibonacci. Ad esempio, 100 = 3 + 8 + 89.

Tale somma è chiamata la rappresentazione Zeckendorf del numero.

Per qualsiasi numero intero $n>0$, sia $z(n)$ il numero di termini nella rappresentazione di Zeckendorf di $n$.

Così, $z(5) = 1$, $z(14) = 2$, $z(100) = 3$ ecc.

Inoltre, per $0 &lt; n &lt; {10}^6$, $\sum z(n) = 7\\,894\\,453$.

Trova $\sum z(n)$ per $0 &lt; n &lt; {10}^{17}$.

# --hints--

`zeckendorfRepresentation()` dovrebbe restituire `2252639041804718000`.

```js
assert.strictEqual(zeckendorfRepresentation(), 2252639041804718000);
```

# --seed--

## --seed-contents--

```js
function zeckendorfRepresentation() {

  return true;
}

zeckendorfRepresentation();
```

# --solutions--

```js
// solution required
```
