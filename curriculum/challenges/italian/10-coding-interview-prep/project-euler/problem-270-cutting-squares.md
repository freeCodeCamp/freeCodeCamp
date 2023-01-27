---
id: 5900f47c1000cf542c50ff8e
title: 'Problema 270: Taglio dei quadrati'
challengeType: 1
forumTopicId: 301920
dashedName: problem-270-cutting-squares
---

# --description--

Un pezzo quadrato di carta con dimensioni intere $N×N$ è posizionato con un angolo all'origine e due dei suoi lati lungo gli assi $x$ e $y$. Quindi lo tagliamo rispettando le seguenti regole:

- Facciamo solo tagli dritti tra due punti situati su lati diversi del quadrato e aventi coordinate intere.
- Due tagli non possono incrociarsi, ma diversi tagli possono incontrarsi sullo stesso punto di confine.
- Procedere fino a quando non sarà possibile effettuare ulteriori tagli ammissibili.

Contando qualsiasi riflessione o rotazione come distinta, chiamiamo $C(N)$ il numero di modi di tagliare un quadrato $N×N$. Per esempio, $C(1) = 2$ e $C(2) = 30$ (mostrato di seguito).

<img class="img-responsive center-block" alt="modi di tagliare un quadrato 2x2, contando riflessioni e rotazioni come distinta" src="https://cdn.freecodecamp.org/curriculum/project-euler/cutting-squares.gif" style="background-color: white; padding: 10px;" />

Quanto vale $C(30)\bmod {10}^8$ ?

# --hints--

`cuttingSquares()` dovrebbe restituire `82282080`.

```js
assert.strictEqual(cuttingSquares(), 82282080);
```

# --seed--

## --seed-contents--

```js
function cuttingSquares() {

  return true;
}

cuttingSquares();
```

# --solutions--

```js
// solution required
```
