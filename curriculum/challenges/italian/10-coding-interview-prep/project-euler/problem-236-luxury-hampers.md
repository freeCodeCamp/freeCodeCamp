---
id: 5900f4591000cf542c50ff6b
title: 'Problema 236: Cesti Di Lusso'
challengeType: 1
forumTopicId: 301881
dashedName: problem-236-luxury-hampers
---

# --description--

I fornitori 'A' e 'B' hanno fornito il seguente numero di prodotti per il mercato di lusso:

| Prodotto               | 'A'  | 'B'  |
| ---------------------- | ---- | ---- |
| Caviale di Beluga      | 5248 | 640  |
| Torta Natalizia        | 1312 | 1888 |
| Gammon Joint           | 2624 | 3776 |
| Porto Vintage          | 5760 | 3776 |
| Tartufi allo Champagne | 3936 | 5664 |

Anche se i fornitori si impegnano molto a spedire i loro prodotti in perfette condizioni, vi è inevitabilmente un certo deterioramento - cioè prodotti andati male.

I fornitori confrontano le loro prestazioni utilizzando due tipi di statistiche:

- I cinque tassi di deterioramento per prodotto per ogni fornitore sono pari al numero di prodotti andati a male diviso per il numero di prodotti forniti, per ciascuno dei cinque prodotti a turno.
- Il tasso di deterioramento complessivo per ciascun fornitore è pari al numero totale di prodotti andati male diviso per il numero totale di prodotti forniti da tale fornitore.

Con loro sorpresa, i fornitori hanno rilevato che ciascuno dei cinque tassi di deterioramento per prodotto era peggiore (più alto) per 'B' rispetto a 'A' dello stesso fattore (rapporto tra i tassi di deterioramento), $m > 1$; eppure, paradossalmente, il tasso complessivo di deterioramento è stato peggiore per 'A' che per 'B', anche per un fattore di $m$.

Ci sono trentacinque $m > 1$ per i quali questo sorprendente risultato avrebbe potuto verificarsi, il più piccolo dei quali è $\frac{1476}{1475}$.

Qual è il valore più grande possibile di $m$? Dai la tua risposta come una stringa con frazione ridotta ai suoi termini più bassi, nella forma `u/v`.

# --hints--

`luxuryHampers()` dovrebbe restituire una stringa.

```js
assert(typeof luxuryHampers() === 'string');
```

`luxuryHampers()` dovrebbe restituire la stringa `123/59`.

```js
assert.strictEqual(luxuryHampers(), '123/59');
```

# --seed--

## --seed-contents--

```js
function luxuryHampers() {

  return true;
}

luxuryHampers();
```

# --solutions--

```js
// solution required
```
