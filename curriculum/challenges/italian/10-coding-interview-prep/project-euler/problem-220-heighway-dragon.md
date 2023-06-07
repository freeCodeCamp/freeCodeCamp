---
id: 5900f4481000cf542c50ff5b
title: 'Problema 220: Heighway Dragon'
challengeType: 1
forumTopicId: 301863
dashedName: problem-220-heighway-dragon
---

# --description--

Sia $D_0$ la stringa con due lettere "Fa". Per $n ≥ 1$, deriva $D_n$ da $D_{n - 1}$ usando le regole per riscrivere le stringhe:

- "a" → "aRbFR"
- "b" → "LFaLb"

Così, $D_0$ = "Fa", $D_1$ = "FaRbFR", $D_2$ = "FaRbFRRLFaLbFR", e così via.

Queste stringhe possono essere interpretate come istruzioni da un programma di grafica del computer, con "F" che significa "disegna in avanti di una unità", "L" significa "gira a sinistra di 90 gradi", "R" significa "gira a destra di 90 gradi", e "a" e "b" che vengono ignorati. La posizione iniziale del cursore del computer è (0,0), puntando in alto verso (0,1).

Allora $D_n$ è un disegno esotico conosciuto col nome di Heighway Dragon di ordine $n$. Per esempio, $D_{10}$ è mostrato qua sotto; contando ogni "F" come uno step, il punto evidenziato a (18,16) è la posizione raggiunta dopo 500 step.

<img class="img-responsive center-block" alt="disegno del Heighway Dragon dopo 500 step" src="https://cdn.freecodecamp.org/curriculum/project-euler/heighway-dragon.gif" style="background-color: white; padding: 10px;" />

Qual è la posizione del cursore dopo ${10}^{12}$ passi in $D_{50}$? Dai la tua risposta come una stringa nella forma `x,y` senza spazi.

# --hints--

`heighwayDragon()` dovrebbe restituire una stringa.

```js
assert(typeof heighwayDragon() === 'string');
```

`heighwayDragon()` dovrebbe restituire la stringa `139776,963904`.

```js
assert.strictEqual(heighwayDragon(), '139776,963904');
```

# --seed--

## --seed-contents--

```js
function heighwayDragon() {

  return true;
}

heighwayDragon();
```

# --solutions--

```js
// solution required
```
