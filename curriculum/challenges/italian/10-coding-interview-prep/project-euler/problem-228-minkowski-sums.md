---
id: 5900f4511000cf542c50ff63
title: 'Problem 228: Somme di Minkowski'
challengeType: 1
forumTopicId: 301871
dashedName: problem-228-minkowski-sums
---

# --description--

Sia $S_n$ il poligono regolare a $n$ lati i cui vertici $v_k (k = 1, 2, \ldots, n)$ hanno coordinate:

$$\begin{align}   & x_k = cos(\frac{2k - 1}{n} × 180°) \\\\
  & y_k = sin(\frac{2k - 1}{n} × 180°) \end{align}$$

Ogni $S_n$ è da considerarsi come una forma riempita consistente di tutti i punti sia del perimetro che dell'interno.

La somma di Minkowski, $S + T$, di due figure $S$ e $T$ è il risultato di sommare ogni punto in $S$ con ogni punto in $T$ dove l'addizione dei punti è fatta sulla base delle coordinate: $(u, v) + (x, y) = (u + x, v + y)$.

Per esempio, la somma di $S_3$ e $S_4$ è la forma a 6 lati mostrata in rosa qui sotto:

<img class="img-responsive center-block" alt="immagine che mostra S_3, S_4 e S_3 + S_4" src="https://cdn.freecodecamp.org/curriculum/project-euler/minkowski-sums.png" style="background-color: white; padding: 10px;" />

Quanti lati ha $S_{1864} + S_{1865} + \ldots + S_{1909}$?

# --hints--

`minkowskiSums()` dovrebbe restituire `86226`.

```js
assert.strictEqual(minkowskiSums(), 86226);
```

# --seed--

## --seed-contents--

```js
function minkowskiSums() {

  return true;
}

minkowskiSums();
```

# --solutions--

```js
// solution required
```
