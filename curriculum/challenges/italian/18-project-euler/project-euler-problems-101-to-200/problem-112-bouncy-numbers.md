---
id: 5900f3dd1000cf542c50feef
title: 'Problema 112: numeri dinamici'
challengeType: 1
forumTopicId: 301738
dashedName: problem-112-bouncy-numbers
---

# --description--

Andando da sinistra a destra, se nessuna cifra viene superata dalla cifra alla sua sinistra, il numero viene detto crescente; ad esempio, 134468.

Allo stesso modo, se ogni cifra non viene superata dalla cifra alla sua destra il numero è detto decrescente; per esempio, 66420.

Chiameremo dinamico un numero intero positivo che non sia né crescente né decrescente; per esempio, 155349.

Chiaramente non ci possono essere numeri dinamici sotto il cento, ma poco più della metà dei numeri sotto il mille (525) è dinamico. Infatti, il numero minimo per il quale la proporzione di numeri dinamici raggiunge il 50% è 538.

Sorprendentemente, i numeri dinamici diventano sempre più comuni e dal momento in cui raggiungiamo 21780 la proporzione di numeri dinamici è pari al 90%.

Trova il numero più basso per il quale la proporzione di numeri dinamici è esattamente 99%.

# --hints--

`bouncyNumbers()` dovrebbe restituire `1587000`.

```js
assert.strictEqual(bouncyNumbers(), 1587000);
```

# --seed--

## --seed-contents--

```js
function bouncyNumbers() {

  return true;
}

bouncyNumbers();
```

# --solutions--

```js
// solution required
```
