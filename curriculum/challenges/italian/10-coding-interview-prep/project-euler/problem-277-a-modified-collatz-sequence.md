---
id: 5900f4811000cf542c50ff94
title: 'Problema 277: Una sequenza di Collatz modificata'
challengeType: 1
forumTopicId: 301927
dashedName: problem-277-a-modified-collatz-sequence
---

# --description--

Una sequenza di numeri interi modificata è ottenuta da un valore iniziale $a_1$ nel seguente modo:

$a_{n + 1} = \frac{a_n}{3}$ se $a_n$ è divisibile per 3. Lo indicheremo come un passo grande verso il basso, "D".

$a_{n + 1} = \frac{4a_n + 2}{3}$ se $a_n$ diviso per 3 dà un resto di 1. Lo indicheremo come un passo verso l'alto, "U".

$a_{n + 1} = \frac{2a_n - 1}{3}$ se $a_n$ diviso per 3 dà un resto di 2. Lo indicheremo come un piccolo passo verso il basso, "d".

La sequenza termina quando qualche $a_n = 1$.

Dato qualsiasi numero intero, possiamo elencare la sequenza dei passaggi. Per esempio se $a_1 = 231$, allora la sequenza \\{a_n\\} = \\{231, 77, 51, 17, 11, 7, 10, 14, 9, 3, 1\\}$ corrisponde ai passi "DdDddUUdDD".

Naturalmente, ci sono altre sequenze che iniziano con quella stessa sequenza "DdDddUUdDD...".

Per esempio, se $a_1 = 1004064$, allora la sequenza è DdDddUUdDDDdUDUUUdDdUUDDDUdDD.

Infatti, 1004064 è il più piccolo possibile $a_1 > {10}^6$ che inizia con la sequenza DdDddUUdDD.

Qual è il più piccolo $a_1 > {10}^{15}$ che inizia con la sequenza "UDDDUdddDDUDDddDdDddDDUDDdUUDd"?

# --hints--

`modifiedCollatzSequence()` dovrebbe restituire `1125977393124310`.

```js
assert.strictEqual(modifiedCollatzSequence(), 1125977393124310);
```

# --seed--

## --seed-contents--

```js
function modifiedCollatzSequence() {

  return true;
}

modifiedCollatzSequence();
```

# --solutions--

```js
// solution required
```
