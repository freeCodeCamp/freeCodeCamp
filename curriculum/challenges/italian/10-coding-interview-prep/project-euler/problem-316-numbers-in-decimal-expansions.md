---
id: 5900f4a81000cf542c50ffbb
title: 'Problema 316: numeri in una espansione decimale'
challengeType: 1
forumTopicId: 301972
dashedName: problem-316-numbers-in-decimal-expansions
---

# --description--

Sia $p = p_1 p_2 p_3 \ldots$ una sequenza infinita di cifre random, selezionate da {0,1,2,3,4,5,6,7,8,9} con probabilità uguali.

Si può vedere che $p$ corrisponde al numero reale $0.p_1 p_2 p_3 \ldots$.

Si può anche vedere che la scelta di un numero reale casuale dall'intervallo [0,1) equivale a scegliere una sequenza infinita di cifre casuali selezionate da {0,1,2,3,4,5,6,7,8,9} con pari probabilità.

Per ogni numero intero positivo $n$ con $d$ cifre decimali, sia $k$ l'indice più piccolo tale che $p_k, p_{k + 1}, \ldots p_{k + d - 1}$ sono le cifre decimali di $n$, nello stesso ordine.

Inoltre, sia $g(n)$ il valore atteso di $k$; si può dimostrare che $g(n)$ è sempre finito e, interessante, sempre un numero intero.

Per esempio, se $n = 535$, allora

per $p = 31415926\mathbf{535}897\ldots$, otteniamo $k = 9$

per $p = 35528714365004956000049084876408468\mathbf{535}4\ldots$, otteniamo $k = 36$

ecc e troviamo che $g(535) = 1008$.

Dato che $\displaystyle\sum_{n = 2}^{999} g\left(\left\lfloor\frac{{10}^6}{n}\right\rfloor\right) = 27280188$, trova $\displaystyle\sum_{n = 2}^{999\\,999} g\left(\left\lfloor\frac{{10}^{16}}{n}\right\rfloor\right)$.

**Nota:** $\lfloor x\rfloor$ rappresenta la funzione arrotonda verso il basso.

# --hints--

`numbersInDecimalExpansion()` dovrebbe restituire `542934735751917760`.

```js
assert.strictEqual(numbersInDecimalExpansion(), 542934735751917760);
```

# --seed--

## --seed-contents--

```js
function numbersInDecimalExpansion() {

  return true;
}

numbersInDecimalExpansion();
```

# --solutions--

```js
// solution required
```
