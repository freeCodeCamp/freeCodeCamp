---
id: 5900f4e81000cf542c50fffb
title: 'Problema 380: fantastici labirinti!'
challengeType: 1
forumTopicId: 302044
dashedName: problem-380-amazing-mazes
---

# --description--

Un labirinto $m×n$ è una griglia rettangolare $m×n$ con muri piazzati tra celle della griglia in modo tale che c'è un unico percorso dal quadrato in alto a sinistra a qualsiasi altro quadrato. I seguenti sono esempi di labirinti 9×12 e 15×20:

<img class="img-responsive center-block" alt="labirinto 9×12 e labirinto 15×20" src="https://cdn.freecodecamp.org/curriculum/project-euler/amazing-mazes.gif" style="background-color: white; padding: 10px;" />

Sia $C(m, n)$ il numero di labirinti distinti $m×n$. Labirinti che possono essere formati per rotazione e riflessione da un altro labirinto sono considerati distinti.

Si può verificare che $C(1, 1) = 1$, $C(2, 2) = 4$, $C(3, 4) = 2415$, e $C(9, 12) = 2.5720\mathrm{e}\\,46$ (in notazione scientifica arrotondato a 5 cifre significative).

Trova $C(100, 500)$ e scrivi la tua risposta come una stringa in notazione scientifica arrotondato a 5 cifre significative.

Quando dai la tua risposta, usa una e minuscola per separare la mantissa e l'esponente. Ad es. se la risposta è 1234567891011 allora la risposta formattata sarebbe la stringa `1.2346e12`.

# --hints--

`amazingMazes()` dovrebbe restituire una stringa.

```js
assert(typeof amazingMazes() === 'string');
```

`amazingMazes()` dovrebbe restituire la stringa `6.3202e25093`.

```js
assert.strictEqual(amazingMazes(), '6.3202e25093');
```

# --seed--

## --seed-contents--

```js
function amazingMazes() {

  return true;
}

amazingMazes();
```

# --solutions--

```js
// solution required
```
