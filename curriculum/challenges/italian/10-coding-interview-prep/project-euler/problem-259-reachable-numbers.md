---
id: 5900f4701000cf542c50ff82
title: 'Problema 259: Numeri Raggiungibili'
challengeType: 1
forumTopicId: 301907
dashedName: problem-259-reachable-numbers
---

# --description--

Un intero positivo sarà chiamato raggiungibile se può derivare da un'espressione aritmetica che obbedisce alle seguenti regole:

- Usa le cifre da 1 a 9, in quest'ordine ed esattamente una volta ciascuna.
- Eventuali cifre successive possono essere concatenate (ad esempio, utilizzando le cifre 2, 3 e 4 otteniamo il numero 234).
- Sono ammesse solo le quattro normali operazioni aritmetiche binarie (somma, sottrazione, moltiplicazione e divisione).
- Ogni operazione può essere utilizzata qualsiasi numero di volte, o non essere usata affatto.
- Il meno unario non è permesso.
- Qualsiasi numero di parentesi (eventualmente annidate) può essere utilizzato per definire l'ordine delle operazioni.

Ad esempio, 42 è raggiungibile, poiché $\frac{1}{23} \times ((4 \times 5) - 6) \times (78 - 9) = 42$.

Qual è la somma di tutti gli interi raggiungibili positivi?

# --hints--

`reachableNumbers()` dovrebbe restituire `20101196798`.

```js
assert.strictEqual(reachableNumbers(), 20101196798);
```

# --seed--

## --seed-contents--

```js
function reachableNumbers() {

  return true;
}

reachableNumbers();
```

# --solutions--

```js
// solution required
```
