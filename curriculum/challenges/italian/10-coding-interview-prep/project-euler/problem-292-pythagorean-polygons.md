---
id: 5900f4911000cf542c50ffa3
title: 'Problema 292: Poligoni Pitagorici'
challengeType: 1
forumTopicId: 301944
dashedName: problem-292-pythagorean-polygons
---

# --description--

Definiremo un poligono pitagorico come poligono convesso con le seguenti proprietà:

- ci sono almeno tre vertici,
- non ci sono tre vertici allineati,
- ogni vertice ha coordinate intere,
- ogni lato ha lunghezza intera.

Per un dato numero intero $n$, definire $P(n)$ come il numero di poligoni pitagorici distinti per i quali il perimetro è $≤ n$.

I poligoni pitagorici dovrebbero essere considerati distinti purché nessuno sia la traduzione di un altro.

Ti viene dato che $P(4) = 1$, $P(30) = 3655$ e $P(60) = 891045$.

Trova $P(120)$.

# --hints--

`pythagoreanPolygons()` dovrebbe restituire `3600060866`.

```js
assert.strictEqual(pythagoreanPolygons(), 3600060866);
```

# --seed--

## --seed-contents--

```js
function pythagoreanPolygons() {

  return true;
}

pythagoreanPolygons();
```

# --solutions--

```js
// solution required
```
