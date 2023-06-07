---
id: 5900f3df1000cf542c50fef1
title: 'Problema 115: Conteggio delle combinazioni di blocchi II'
challengeType: 1
forumTopicId: 301741
dashedName: problem-115-counting-block-combinations-ii
---

# --description--

Una fila di `n` unità di lunghezza presenta blocchi rossi con una lunghezza minima di `m` unità poste su di essa, in modo che due blocchi rossi (che possono essere lunghezze diverse) siano separati da almeno un quadrato nero.

Lascia che la funzione di conteggio del riempimento, $F(m, n)$, rappresenti il numero di modi in cui una riga può essere riempita.

Per esempio, $F(3, 29) = 673135$ e $F(3, 30) = 1089155$.

Cioè, per m = 3, si può osservare che n = 30 è il valore più piccolo per il quale la funzione di riempimento supera per la prima volta un milione.

Allo stesso modo, per m = 10, si può verificare che $F(10, 56) = 880711$ e $F(10, 57) = 1148904$, quindi n = 57 è il valore minimo per il quale la funzione di riempimento supera per la prima volta un milione.

Per m = 50, trovare il valore minimo di `n` per il quale la funzione di riempimento è superiore a un milione.

**Nota:** Questa è una versione più difficile del Problema 114.

# --hints--

`countingBlockTwo()` dovrebbe restituire `168`.

```js
assert.strictEqual(countingBlockTwo(), 168);
```

# --seed--

## --seed-contents--

```js
function countingBlockTwo() {

  return true;
}

countingBlockTwo();
```

# --solutions--

```js
// solution required
```
