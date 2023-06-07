---
id: 5900f4ca1000cf542c50ffdc
title: 'Problema 349: Formica di Langton'
challengeType: 1
forumTopicId: 302008
dashedName: problem-349-langtons-ant
---

# --description--

Una formica si muove su una griglia regolare di quadrati colorati neri o bianchi.

La formica è sempre orientata in una delle direzioni cardinali (sinistra, destra, su o giù) e si sposta da un quadrato al quadrato adiacente secondo le seguenti regole:

- se è su un quadrato nero, capovolge il colore del quadrato a bianco, ruota 90° in senso antiorario e si muove in avanti di un quadrato.
- se è su un quadrato bianco, capovolge il colore del quadrato a nero, ruota 90° in senso orario e si muove in avanti di un quadrato.

A partire da una griglia completamente bianca, quanti quadrati sono neri dopo ${10}^{18}$ mosse della formica?

# --hints--

`langtonsAnt()` dovrebbe restituire `115384615384614940`.

```js
assert.strictEqual(langtonsAnt(), 115384615384614940);
```

# --seed--

## --seed-contents--

```js
function langtonsAnt() {

  return true;
}

langtonsAnt();
```

# --solutions--

```js
// solution required
```
