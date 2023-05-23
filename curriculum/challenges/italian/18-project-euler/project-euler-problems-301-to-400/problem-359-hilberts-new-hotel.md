---
id: 5900f4d31000cf542c50ffe6
title: 'Problema 359: il nuovo hotel di Hilbert'
challengeType: 1
forumTopicId: 302019
dashedName: problem-359-hilberts-new-hotel
---

# --description--

Un numero infinito di persone (numerate 1, 2, 3, ecc.) sono in fila per prendere una stanza nel nuovo hotel infinito di Hilbert. L'hotel contiene un numero infinito di piani (numerati 1, 2, 3, ecc.) e ogni piano contiene un numero infinito di stanze (numerate 1, 2, 3, ecc.).

All'inizio l'hotel è vuoto. Hilbert dichiara una regola su come all'$n$-esima persona è assegnata una stanza: la persona $n$ riceve la prima stanza vuota al piano col numero più basso che soddisfa una delle seguenti condizioni:

- il piano è vuoto
- il piano non è vuoto, e se l'ultima persona che ha preso una stanza in quel piano è la persona $m$ allora $m + n$ è un quadrato perfetto

La persona 1 prende la stanza 1 al piano 1 visto che il piano 1 è vuoto.

La persona 2 non prende la stanza 2 al piano 1 visto che 1 + 2 = 3 non è un quadrato perfetto.

La persona 2 invece prende la stanza 1 al piano 2 visto che il piano 2 è vuoto.

La persona 3 prende la stanza 2 al piano 1 visto che 1 + 3 = 4 è un quadrato perfetto.

Alla fine, ogni persona in fila ottiene una stanza nell'hotel.

Si definisce $P(f, r)$ come $n$ se la persona $n$ occupa stanza $r$ al piano $f$, e 0 se nessuna persona occupa la stanza. Ecco alcuni esempi:

$$\begin{align}   & P(1, 1) = 1 \\\\
  & P(1, 2) = 3 \\\\   & P(2, 1) = 2 \\\\
  & P(10, 20) = 440 \\\\   & P(25, 75) = 4863 \\\\
  & P(99, 100) = 19454 \end{align}$$

Trova la somma di tutti i $P(f, r)$ per tutti i positivi $f$ e $r$ in modo tale che $f × r = 71\\,328\\,803\\,586\\,048$ e dai le ultime 8 cifre come risposta.

# --hints--

`hilbertsNewHotel()` dovrebbe restituire `40632119`.

```js
assert.strictEqual(hilbertsNewHotel(), 40632119);
```

# --seed--

## --seed-contents--

```js
function hilbertsNewHotel() {

  return true;
}

hilbertsNewHotel();
```

# --solutions--

```js
// solution required
```
