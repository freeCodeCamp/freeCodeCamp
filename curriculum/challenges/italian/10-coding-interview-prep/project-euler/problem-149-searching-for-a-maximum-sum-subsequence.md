---
id: 5900f4021000cf542c50ff13
title: 'Problema 149: Ricerca di una sequenza a somma massima'
challengeType: 1
forumTopicId: 301778
dashedName: problem-149-searching-for-a-maximum-sum-subsequence
---

# --description--

Guardando la tabella sotto, è facile verificare che la somma massima possibile di numeri adiacenti in qualsiasi direzione (orizzontale, verticale, diagonale o anti-diagonale) è di $16 (= 8 + 7 + 1)$.

$$\begin{array}{|r|r|r|r|} \hline −2 &  5 &  3 & 2 \\\\ \hline 9 & −6 &  5 & 1 \\\\ \hline 3 &  2 &  7 & 3 \\\\ \hline −1 &  8 & −4 & 8 \\\\ \hline \end{array}$$

Ora ripetiamo la ricerca, ma su una scala molto più grande:

In primo luogo, generare quattro milioni di numeri pseudo-casuali utilizzando una forma specifica di quello che è noto come "Lagged Fibonacci Generator":

Per $1 ≤ k ≤ 55$, $s_k = (100003 − 200003k + 300007{k}^3) \\ (modulo\\ 1000000) − 500000$.

Per $56 ≤ k ≤ 4000000$, $s_k = (s_{k − 24} + s_{k − 55} + 1000000) \\ (modulo\\ 1000000) − 500000$.

Così, $s_{10} = −393027$ e $s_{100} = 86613$.

I termini di $s$ sono poi disposti in una tabella 2000×2000, usando i primi 2000 numeri per riempire la prima riga (sequenzialmente), i prossimi 2000 numeri per riempire la seconda riga, e così via.

Infine, trova la più grande somma di (qualsiasi numero di) voci adiacenti in qualsiasi direzione (orizzontale, verticale, diagonale o anti-diagonale).

# --hints--

`maximumSubSequence()` dovrebbe restituire `52852124`.

```js
assert.strictEqual(maximumSubSequence(), 52852124);
```

# --seed--

## --seed-contents--

```js
function maximumSubSequence() {

  return true;
}

maximumSubSequence();
```

# --solutions--

```js
// solution required
```
