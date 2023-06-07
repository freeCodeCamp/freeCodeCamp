---
id: 5900f5481000cf542c51005a
title: 'Problema 475: Festival musicale'
challengeType: 1
forumTopicId: 302152
dashedName: problem-475-music-festival
---

# --description--

$12n$ musicisti partecipano a un festival musicale. Il primo giorno, formano $3n$ quartetti e provano tutto il giorno.

È una catastrofe. Alla fine della giornata, tutti i musicisti decidono di non accettare mai più di suonare con nessun membro del loro quartetto.

Il secondo giorno, formano $4n$ trio, evitando che ogni musicista stia con i suoi partner del quartetto precedente.

Sia $f(12n)$ il numero di modi per organizzare i trio tra i $12n$ musicisti.

Ti viene dato $f(12) = 576$ e $f(24)\bmod 1\\,000\\,000\\,007 = 509\\,089\\,824$.

Trova $f(600)\bmod 1\\,000\\,000\\,007$.

# --hints--

`musicFestival()` dovrebbe restituire `75780067`.

```js
assert.strictEqual(musicFestival(), 75780067);
```

# --seed--

## --seed-contents--

```js
function musicFestival() {

  return true;
}

musicFestival();
```

# --solutions--

```js
// solution required
```
