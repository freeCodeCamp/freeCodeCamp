---
id: 5900f51a1000cf542c51002d
title: 'Problema 430: ribaltamenti in range'
challengeType: 1
forumTopicId: 302101
dashedName: problem-430-range-flips
---

# --description--

$N$ dischi sono posizionati in una riga, indicizzati da 1 a $N$ da sinistra a destra.

Ogni disco ha un lato nero e un lato bianco. All'inizio tutti i dischi mostrano il lato bianco.

In ogni turno, due, non necessariamente distinti, numeri interi $A$ e $B$ tra 1 e $N$ (inclusi) sono scelti uniformemente a caso. Tutti i dischi con un indice da $A$ e $B$ (inclusi) sono rovesciati.

Il seguente esempio mostra il caso per $N = 8$. Al primo turno $A = 5$ e $B = 2$, e al secondo turno $A = 4$ e $B = 6$.

<img class="img-responsive center-block" alt="esempio per N = 8, con il primo turno A = 5 e B = 2, e il secondo turno A = 4 e B = 6" src="https://cdn.freecodecamp.org/curriculum/project-euler/range-flips.gif" style="background-color: white; padding: 10px;" />

Sia $E(N, M)$ il valore atteso del numero di dischi che mostrano il loro lato bianco dopo $M$ turni. Possiamo verificare che $E(3, 1) = \frac{10}{9}$, $E(3, 2) = \frac{5}{3}$, $E(10, 4) ≈ 5.157$ e $E(100, 10) ≈ 51.893$.

Trova $E({10}^{10}, 4000)$. Dai la tua risposta approssimata a 2 cifre dopo il punto decimale.

# --hints--

`rangeFlips()` dovrebbe restituire `5000624921.38`.

```js
assert.strictEqual(rangeFlips(), 5000624921.38);
```

# --seed--

## --seed-contents--

```js
function rangeFlips() {

  return true;
}

rangeFlips();
```

# --solutions--

```js
// solution required
```
