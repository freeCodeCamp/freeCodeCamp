---
id: 5900f4b41000cf542c50ffc7
title: 'Problema 328: Ricerca a costo minore'
challengeType: 1
forumTopicId: 301985
dashedName: problem-328-lowest-cost-search
---

# --description--

Stiamo cercando di trovare un numero nascosto selezionato dal set di interi {1, 2, ..., $n$} facendo domande. Ogni numero (domanda) che chiediamo, ha un <u>costo pari al numero chiesto</u> e otteniamo una delle tre risposte possibili:

- "La tua ipotesi è inferiore al numero nascosto", o
- "Sì, è così!", o
- "La tua ipotesi è più alta del numero nascosto".

Dato il valore di $n$, una strategia ottimale minimizza il costo totale (es. la somma di tutte le domande poste) <u>per il caso peggiore</u>. Ad es.

Se $n = 3$, il meglio che possiamo fare è ovviamente chiedere il numero "<strong>2</strong>". La risposta ci porterà immediatamente a trovare il numero nascosto (a un costo totale = 2).

Se $n = 8$, potremmo decidere di utilizzare un tipo di strategia di "ricerca binaria": la nostra prima domanda sarebbe "<strong>4</strong>" e se il numero nascosto è superiore a 4 avremo bisogno di una o due domande aggiuntive. Sia "<strong>6</strong>" la nostra seconda domanda. Se il numero nascosto è ancora superiore a 6, avremo bisogno di una terza domanda per operare una discriminazione tra 7 e 8. Così, la nostra terza domanda sarà "<strong>7</strong>" e il costo totale per questo scenario peggiore sarà di $4 + 6 + 7 = \mathbf{\color{red}{17}}$.

Possiamo migliorare notevolmente il costo peggiore per $n = 8$, scegliendo "<strong>5</strong>" come nostra prima domanda. Se ci viene detto che il numero nascosto è superiore a 5, la nostra seconda domanda sarà "<strong>7</strong>", allora sapremo per certo qual'è il numero nascosto (per un costo totale di $5 + 7 = \mathbf{\color{blue}{12}}$). Se ci viene detto che il numero nascosto è inferiore a 5, la nostra seconda domanda sarà "<strong>3</strong>" e se il numero nascosto è inferiore a 3 la nostra terza domanda sarà "<strong>1</strong>", dando un costo totale di $5 + 3 + 1 = \mathbf{\color{blue}{9}}$. Dal momento che $\mathbf{\color{blue}{12 > 9}}$, il costo più basso per questa strategia è <strong><span style="color: red;">12</span></strong>. Questo è meglio di quello che abbiamo realizzato in precedenza con la strategia di "ricerca binaria"; è anche migliore o uguale a qualsiasi altra strategia. Così, infatti, abbiamo appena descritto una strategia ottimale per $n = 8$.

Sia $C(n)$ sia il costo peggiore ottenuto da una strategia ottimale per $n$, come descritto sopra. Così $C(1) = 0$, $C(2) = 1$, $C(3) = 2$ e $C(8) = 12$.

Allo stesso modo, $C(100) = 400$ e $\displaystyle\sum_{n = 1}^{100} C(n) = 17575$.

Trova $\displaystyle\sum_{n = 1}^{200\\,000} C(n)$.

# --hints--

`lowestCostSearch()` dovrebbe restituire `260511850222`.

```js
assert.strictEqual(lowestCostSearch(), 260511850222);
```

# --seed--

## --seed-contents--

```js
function lowestCostSearch() {

  return true;
}

lowestCostSearch();
```

# --solutions--

```js
// solution required
```
