---
id: 5900f4911000cf542c50ffa3
title: 'Problema 292: Polígonos de Pitágoras'
challengeType: 1
forumTopicId: 301944
dashedName: problem-292-pythagorean-polygons
---

# --description--

Definiremos um polígono pitagórico como ser um polígono convexo com as seguintes propriedades:

- existem pelo menos três vértices,
- não há três vértices alinhados,
- cada vértice tem coordenadas inteiras,
- cada aresta tem comprimento inteiro.

Para um número inteiro determinado $n$, defina $P(n)$ como o número de polígonos pitagóricos distintos para os quais o perímetro é $≤ n$.

Os polígonos pitagóricos devem ser considerados distintos, desde que um não seja uma tradução de outro.

Você é informado de que $P(4) = 1$, $P(30) = 3655$ e $P(60) = 891045$.

Encontre $P(120)$.

# --hints--

`pythagoreanPolygons()` deve retornar `3600060866`.

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
