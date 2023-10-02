---
id: 5900f4691000cf542c50ff7c
title: 'Problema 253: Mettere in ordine'
challengeType: 1
forumTopicId: 301901
dashedName: problem-253-tidying-up
---

# --description--

Un bambino piccolo ha un "bruco numeroso" composto da quaranta pezzi, ciascuno con un numero su di esso, che, quando collegati insieme in una linea, rivelano i numeri da 1 a 40 in ordine.

Ogni notte, il padre del bambino deve raccogliere i pezzi del bruco che sono stati sparsi attraverso la stanza dei giochi. Raccoglie i pezzi a caso e li posiziona nell'ordine corretto.

Mentre il bruco viene costruito in questo modo, si formano segmenti distinti che gradualmente si fondono insieme. Il numero di segmenti inizia con zero (nessun pezzo posizionato), generalmente aumenta fino a circa undici o dodici, poi tende a scendere di nuovo prima di finire in un singolo segmento (tutti i pezzi posizionati).

Per esempio:

| Pezzo Posizionato | Segmenti Fino ad Ora |
| ----------------- | -------------------- |
| 12                | 1                    |
| 4                 | 2                    |
| 29                | 3                    |
| 6                 | 4                    |
| 34                | 5                    |
| 5                 | 4                    |
| 35                | 4                    |
| …                 | …                    |

Sia $M$ il numero massimo di segmenti incontrati durante un riordino casuale del bruco. Per un bruco di dieci pezzi, il numero di possibilità per ogni $M$ è

| M | Possibilità |
| - | ----------- |
| 1 | 512         |
| 2 | 250912      |
| 3 | 1815264     |
| 4 | 1418112     |
| 5 | 144000      |

quindi il valore più probabile di $M$ è 3 e il valore medio è $\frac{385\\,643}{113\\,400} = 3.400732$, arrotondato a sei decimali.

Il valore più probabile di $M$ per un bruco a quaranta pezzi è 11; ma qual è il valore medio di $M$? Dai la risposta arrotondata a sei decimali.

# --hints--

`tidyingUp()` dovrebbe restituire `11.492847`.

```js
assert.strictEqual(tidyingUp(), 11.492847);
```

# --seed--

## --seed-contents--

```js
function tidyingUp() {

  return true;
}

tidyingUp();
```

# --solutions--

```js
// solution required
```
