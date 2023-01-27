---
id: 5900f4be1000cf542c50ffd1
title: 'Problema 338: Tagliare carta a quadretti rettangolare'
challengeType: 1
forumTopicId: 301996
dashedName: problem-338-cutting-rectangular-grid-paper
---

# --description--

Viene fornito un foglio rettangolare di carta a quadretti con dimensioni intere $w$ × $h$. La spaziatura della griglia è 1.

Quando tagliamo il foglio lungo le linee della griglia in due pezzi e riordiniamo quei pezzi senza sovrapposizioni, possiamo creare nuovi rettangoli con dimensioni diverse.

Ad esempio, da un foglio con dimensioni 9 × 4, possiamo realizzare rettangoli con dimensioni 18 × 2, 12 × 3 e 6 × 6 mediante taglio e riarrangiamento come segue:

<img class="img-responsive center-block" alt="foglio con 9 x 4 dimensioni tagliato in tre modi diversi per realizzare rettangoli con dimensioni 18 x 2, 12 x 3 e 6 x 6" src="https://cdn.freecodecamp.org/curriculum/project-euler/cutting-rectangular-grid-paper.gif" style="background-color: white; padding: 10px;" />

Allo stesso modo, da un foglio con dimensioni 9 × 8, possiamo realizzare rettangoli con dimensioni 18 × 4 e 12 × 6.

Per una coppia $w$ e $h$, sia $F(w, h)$ il numero di rettangoli distinti che possono essere fatti da un foglio con dimensioni $w$ × $h$. Per esempio, $F(2, 1) = 0$, $F(2, 2) = 1$, $F(9, 4) = 3$ e $F(9, 8) = 2$. Nota che i rettangoli congruenti a quello iniziale non sono contati in $F(w, h)$. Nota anche che i rettangoli con dimensioni $w$ × $h$ e le dimensioni $h$ × $w$ non sono considerati distinti.

Per un intero $N$, sia $G(N)$ la somma di $F(w, h)$ per tutte le coppie $w$ e $h$ che soddisfano $0 &lt; h ≤ w ≤ N$. Possiamo verificare che $G(10) = 55$, $G({10}^3) = 971\\,745$ e $G({10}^5) = 9\\,992\\,617\\,687$.

Trova $G({10}^{12})$. Dai la tua risposta nel formato ${10}^8$.

# --hints--

`cuttingRectangularGridPaper()` dovrebbe restituire `15614292`.

```js
assert.strictEqual(cuttingRectangularGridPaper(), 15614292);
```

# --seed--

## --seed-contents--

```js
function cuttingRectangularGridPaper() {

  return true;
}

cuttingRectangularGridPaper();
```

# --solutions--

```js
// solution required
```
