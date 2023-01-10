---
id: 5900f4ae1000cf542c50ffc0
title: 'Problema 321: Contatori Di Scambio'
challengeType: 1
forumTopicId: 301978
dashedName: problem-321-swapping-counters
---

# --description--

Una riga orizzontale composta da $2n + 1$ quadrati ha $n$ contatori rossi posizionati ad un'estremità e $n$ contatori blu all'altra estremità, che sono separati da un unico quadrato vuoto nel centro. Per esempio, quando $n = 3$.

<img class="img-responsive center-block" alt="tre quadrati con contatori rossi e blu posti sulle estremità opposte della fila, separati da un quadrato vuoto" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-1.gif" style="background-color: white; padding: 10px;" />

Un contatore può spostarsi da un quadrato al successivo (slide) o può saltare sopra un altro contatore (hop) finché il quadrato accanto a quel contatore non è occupato.

<img class="img-responsive center-block" alt="mosse consentite del contatore" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-2.gif" style="background-color: white; padding: 10px;" />

Sia $M(n)$ il numero minimo di mosse/azioni per invertire completamente le posizioni dei contatori colorati; cioè, spostare tutti i contatori rossi a destra e tutti i contatori blu a sinistra.

Si può verificare che $M(3) = 15$, che tra l'altro è un numero triangolare.

Se creiamo una sequenza basata sui valori di n per cui $M(n)$ è un numero triangolare, i primi cinque termini sarebbero: 1, 3, 10, 22, e 63, e la loro somma sarebbe 99.

Trova la somma dei primi quaranta termini di questa sequenza.

# --hints--

`swappingCounters()` dovrebbe restituire `2470433131948040`.

```js
assert.strictEqual(swappingCounters(), 2470433131948040);
```

# --seed--

## --seed-contents--

```js
function swappingCounters() {

  return true;
}

swappingCounters();
```

# --solutions--

```js
// solution required
```
