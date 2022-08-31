---
id: 5900f4f41000cf542c510007
title: 'Problema 392: Cerchio unitario inserito'
challengeType: 1
forumTopicId: 302057
dashedName: problem-392-enmeshed-unit-circle
---

# --description--

Una griglia rettilinea è una griglia ortogonale in cui la spaziatura tra le linee della griglia non deve essere equidistante.

Un esempio di tale griglia è la carta grafica logaritmica.

Considerate le griglie rettilinee nel sistema di coordinate cartesiane con le seguenti proprietà:

- Le linee della griglia sono parallele agli assi del sistema di coordinate cartesiane.
- Ci sono $N + 2$ linee verticali e $N + 2$ linee orizzontali. Quindi ci sono $(N + 1) \times (N + 1) $ celle rettangolari.
- Le equazioni delle due linee verticali esterne sono $x = -1$ e $x = 1$.
- Le equazioni delle due linee orizzontali esterne sono $y = -1$ e $y = 1$.
- Le celle della griglia sono colorate di rosso se si sovrappongono con il cerchio dell'unità, di nero in caso contrario.

Per questo problema vorremmo che tu trovassi le posizioni delle rimanenti $N$ linee orizzontali interne e $N$ linee verticali interne in modo che l'area occupata dalle celle rosse sia ridotta al minimo.

Ad es. ecco una immagine della soluzione per $N = 10$:

<img class="img-responsive center-block" alt="soluzione per N = 10" src="https://cdn.freecodecamp.org/curriculum/project-euler/enmeshed-unit-circle.png" style="background-color: white; padding: 10px;" />

L'area occupata dalle celle rosse per $N = 10$ arrotondata a 10 cifre dietro il punto decimale è 3.3469640797.

Trova le posizioni per $N = 400$. Dare come risposta l'area occupata dalle celle rosse arrotondata a 10 cifre dietro il punto decimale.

# --hints--

`enmeshedUnitCircle()` dovrebbe restituire `3.1486734435`.

```js
assert.strictEqual(enmeshedUnitCircle(), 3.1486734435);
```

# --seed--

## --seed-contents--

```js
function enmeshedUnitCircle() {

  return true;
}

enmeshedUnitCircle();
```

# --solutions--

```js
// solution required
```
