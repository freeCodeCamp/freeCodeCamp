---
id: 5900f4d41000cf542c50ffe7
title: 'Problema 360: Sfera Spaventosa'
challengeType: 1
forumTopicId: 302021
dashedName: problem-360-scary-sphere
---

# --description--

Dati due punti ($x_1$, $y_1$, $z_1$) e ($x_2$, $y_2$, $z_2$) nello spazio tridimensionale, la distanza di Manhattan tra questi punti è definita come $|x_1 - x_2| + |y_1 - y_2| + |z_1 - z_2|$.

Sia $C(r)$ una sfera con raggio $r$ e centro nell'origine $O(0, 0, 0)$.

Sia $I(r)$ l'insieme di tutti i punti con coordinate intere sulla superficie di $C(r)$.

Sia $S(r)$ la somma delle distanze di Manhattan di tutti gli elementi di $I(r)$ dall'origine $O$.

Ad es. $S(45)=34518$.

Trova $S({10}^{10})$.

# --hints--

`scarySphere()` dovrebbe restituire `878825614395267100`.

```js
assert.strictEqual(scarySphere(), 878825614395267100);
```

# --seed--

## --seed-contents--

```js
function scarySphere() {

  return true;
}

scarySphere();
```

# --solutions--

```js
// solution required
```
