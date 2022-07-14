---
id: 5900f4dd1000cf542c50ffef
title: 'Problema 368: Una serie di Kempner'
challengeType: 1
forumTopicId: 302029
dashedName: problem-368-a-kempner-like-series
---

# --description--

La serie armonica $1 + \dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{4} + \ldots$ è nota per essere divergente.

Se comunque si omette da questa serie ogni termine in cui il denominatore ha un 9 in esso, la serie converge abbastanza notevolmente a circa 22.9206766193. Questa serie armonica modificata è chiamata serie Kempner.

Consideriamo ora un'altra serie armonica modificata omettendo dalla serie armonica ogni termine in cui il denominatore ha 3 o più cifre consecutive uguali. Si può verificare che sui primi 1200 termini della serie armonica, solo 20 termini saranno omessi.

Questi 20 termini omessi sono:

$$\dfrac{1}{111}, \dfrac{1}{222}, \dfrac{1}{333}, \dfrac{1}{444}, \dfrac{1}{555}, \dfrac{1}{666}, \dfrac{1}{777}, \dfrac{1}{888}, \dfrac{1}{999}, \dfrac{1}{1000}, \dfrac{1}{1110}, \\\\
\dfrac{1}{1111}, \dfrac{1}{1112}, \dfrac{1}{1113}, \dfrac{1}{1114}, \dfrac{1}{1115}, \dfrac{1}{1116}, \dfrac{1}{1117}, \dfrac{1}{1118}, \dfrac{1}{1119}$$

Anche questa serie converge.

Trova il valore a cui converge la serie. Dai la tua risposta approssimata a 10 cifre dopo il punto decimale.

# --hints--

`kempnerLikeSeries()` dovrebbe restituire `253.6135092068`.

```js
assert.strictEqual(kempnerLikeSeries(), 253.6135092068);
```

# --seed--

## --seed-contents--

```js
function kempnerLikeSeries() {

  return true;
}

kempnerLikeSeries();
```

# --solutions--

```js
// solution required
```
