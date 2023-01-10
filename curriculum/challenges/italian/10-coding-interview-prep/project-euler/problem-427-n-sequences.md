---
id: 5900f5181000cf542c51002a
title: 'Problema 427: n-sequenze'
challengeType: 1
forumTopicId: 302097
dashedName: problem-427-n-sequences
---

# --description--

Una sequenza di numeri interi $S = \\{s_i\\}$ è chiamata una $n$-sequenza se ha $n$ elementi e ogni elemento $s_i$ soddisfa $1 ≤ s_i ≤ n$. Quindi ci sono $n^n$ $n$-sequenze distinte in totale.

Per esempio, la sequenza $S = \\{1, 5, 5, 10, 7, 7, 7, 2, 3, 7\\}$ è una 10-sequenza.

Per ogni sequenza $S$, sia $L(S)$ la lunghezza della sottosequenza contigua più lunga di $S$ con lo stesso valore. Per esempio, data la sequenza $S$ sopra, $L(S) = 3$, per i tre 7 consecutivi.

Sia $f(n) = \sum L(S)$ per tutte le $n$-sequenza $S$.

Per esempio, $f(3) = 45$, $f(7) = 1\\,403\\,689$ e $f(11) = 481\\,496\\,895\\,121$.

Trova $f(7\\,500\\,000)\bmod 1\\,000\\,000\\,009$.

# --hints--

`nSequences()` dovrebbe restituire `97138867`.

```js
assert.strictEqual(nSequences(), 97138867);
```

# --seed--

## --seed-contents--

```js
function nSequences() {

  return true;
}

nSequences();
```

# --solutions--

```js
// solution required
```
