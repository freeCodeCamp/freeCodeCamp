---
id: 5900f4eb1000cf542c50fffd
title: 'Problema 382: Generazione di poligoni'
challengeType: 1
forumTopicId: 302046
dashedName: problem-382-generating-polygons
---

# --description--

Un poligono è una forma piatta costituita da segmenti di linea retta che si uniscono a formare una catena o un circuito chiusi. Un poligono è costituito da almeno tre lati e non si autointerseca.

Si dice che un set $S$ di numeri positivi genera un poligono $P$ se:

- nessuna coppia di lati di $P$ ha la stessa lunghezza,
- la lunghezza di ogni lato di $P$ è in $S$ e
- $S$ non contiene nessun altro valore.

Ad esempio:

Il set {3, 4, 5} genera un poligono con i lati 3, 4 e 5 (un triangolo).

Il set {6, 9, 11, 24} genera un poligono con i lati 6, 9, 11 e 24 (un quadrilatero).

I set {1, 2, 3} e {2, 3, 4, 9} non generano alcun poligono.

Considera la sequenza $s$, definita come segue:

- $s_1 = 1$, $s_2 = 2$, $s_3 = 3$
- $s_n = s_{n - 1} + s_{n - 3}$ per $n > 3$.

Sia $U_n$ il set $\\{s_1, s_2, \ldots, s_n\\}$. Per esempio, $U_{10} = \\{1, 2, 3, 4, 6, 9, 13, 19, 28, 41\\}$.

Sia $f(n)$ il numero di sottoinsiemi di $U_n$ che generano almeno un poligono.

Per esempio, $f(5) = 7$, $f(10) = 501$ e $f(25) = 18\\,635\\,853$.

Trova le ultime 9 cifre di $f({10}^{18})$.

# --hints--

`generatingPolygons()` dovrebbe restituire `697003956`.

```js
assert.strictEqual(generatingPolygons(), 697003956);
```

# --seed--

## --seed-contents--

```js
function generatingPolygons() {

  return true;
}

generatingPolygons();
```

# --solutions--

```js
// solution required
```
