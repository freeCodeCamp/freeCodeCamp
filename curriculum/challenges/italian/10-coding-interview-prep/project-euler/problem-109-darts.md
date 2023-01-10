---
id: 5900f3db1000cf542c50feec
title: 'Problema 109: Freccette'
challengeType: 1
forumTopicId: 301733
dashedName: problem-109-darts
---

# --description--

Nel gioco delle freccette un giocatore lancia tre freccette a un bersaglio che è diviso in venti sezioni di dimensioni uguali, numerate da uno a venti.

<img class="img-responsive center-block" alt="Bersaglio da freccette" src="https://cdn.freecodecamp.org/curriculum/project-euler/darts.png" style="background-color: white; padding: 10px;" />

Il punteggio di un lancio è determinato dal numero della regione dentro cui atterra il dardo. Un atterraggio fuori dall'anello rosso/verde esterno segna zero. Le regioni nere e color crema all'interno di questo anello rappresentano punteggi singoli. Tuttavia, gli anelli rosso/verde all'esterno e nel mezzo contano rispettivamente come punteggio doppio e triplo.

Al centro del tabellone ci sono due cerchi concentrici. Il cerchio esterno vale 25 punti e il cerchio interno è un doppio che vale 50 punti.

Ci sono molte variazioni di regole ma nel gioco più popolare i giocatori iniziano con un punteggio di 301 o 501 e il primo giocatore che riduce il suo punteggio a zero vince. Comunque, è normale giocare un sistema a "finale doppio", che significa che il giocatore deve colpite un doppio (incluso il doppio al centro del tabellone) con la sua freccetta finale per vincere; qualsiasi altra freccetta che ridurrebbe il punteggio a 1 o inferione significa che il set di tre dardi è "sprecato".

Quando un giocare è in grado di finire sul proprio punteggio viene chiamato un "checkout" e il checkout più alto è 170: T20 T20 D25 (due tripli 20 e un doppio centro). Ci sono esattamente 11 modi distinti per fare checkout con un punteggio di 6:

$$\begin{array}   \text{D3} &    &    \\\\
  D1        & D2 &    \\\\   S2        & D2 &    \\\\
  D2        & D1 &    \\\\   S4        & D1 &    \\\\
  S1        & S1 & D2 \\\\   S1        & T1 & D1 \\\\
  S1        & S3 & D1 \\\\   D1        & D1 & D1 \\\\
  D1        & S2 & D1 \\\\ S2        & S2 & D1 \end{array}$$

Nota che D1 D2 è considerato diverso da D2 D1 visto che finiscono su doppi diversi. Invece, la combinazione S1 T1 D1 è considerata la stessa di T1 S1 D1. In aggiunta, non includiamo lanci mancati considerando le combinazioni; per esempio, D3 è la stessa cosa di 0 D3 e 0 0 D3. Incredibilmente ci sono 42336 modi diversi per fare checkout in totale. Quanti modi distinti ci sono per un giocatore di fare checkout con un punteggio inferiore a 100?

# --hints--

`darts()` dovrebbe restituire `38182`.

```js
assert.strictEqual(darts(), 38182);
```

# --seed--

## --seed-contents--

```js
function darts() {

  return true;
}

darts();
```

# --solutions--

```js
// solution required
```
