---
id: 5900f4771000cf542c50ff8a
title: 'Problema 267: Miliardario'
challengeType: 1
forumTopicId: 301916
dashedName: problem-267-billionaire
---

# --description--

Ti viene data un'opportunità di investimento unica.

A partire da 1£ di capitale, è possibile scegliere una proporzione fissa, $f$, del tuo capitale da scommettere su una moneta lanciata ripetutamente per 1000 volte.

Il tuo ritorno è il doppio della tua puntata per le teste e perdi la tua puntata per le croci.

Ad esempio, se $f = \frac{1}{4}$, per il primo lancio hai scommesso £0.25, e se le teste vengono in su vinci £ 0.5 e quindi abbiamo £ 1.5. Quindi scommetti £ 0.375 e se il secondo lancio è croce, hai £ 1.125.

Scegliendo $f$ per massimizzare le tue probabilità di avere almeno £1.000.000.000 dopo 1.000 lanci, qual è la probabilità che diventi un miliardario?

Tutti i calcoli sono considerati esatti (senza arrotondamento), ma dai la tua risposta arrotondata a 12 cifre dopo il punto decimale nel formato 0.abcdefghijkl.

# --hints--

`billionaire()` dovrebbe restituire `0.999992836187`.

```js
assert.strictEqual(billionaire(), 0.999992836187);
```

# --seed--

## --seed-contents--

```js
function billionaire() {

  return true;
}

billionaire();
```

# --solutions--

```js
// solution required
```
