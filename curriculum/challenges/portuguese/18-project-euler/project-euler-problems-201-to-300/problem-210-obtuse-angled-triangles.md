---
id: 5900f43e1000cf542c50ff50
title: 'Problema 210: Triângulos de ângulos obtusos'
challengeType: 1
forumTopicId: 301852
dashedName: problem-210-obtuse-angled-triangles
---

# --description--

Considere o conjunto $S(r)$ de pontos ($x$,$y$) com coordenadas inteiras que satisfaçam $|x| + |y| ≤ r$.

Considere $O$ como sendo o ponto (0,0) e $C$ o ponto($\frac{r}{4}$,$\frac{r}{4}$).

Considere $N(r)$ como sendo o número de pontos $B$ em $S(r)$, para que o triângulo $OBC$ tenha um ângulo obtuso, ou seja, o maior ângulo $α$ satisfaz $90°&lt;α&lt;180°$.

Assim, por exemplo, $N(4)=24$ e $N(8)=100$.

Qual é $N(1.000.000.000)$?

# --hints--

`obtuseAngledTriangles()` deve retornar `1598174770174689500`.

```js
assert.strictEqual(obtuseAngledTriangles(), 1598174770174689500);
```

# --seed--

## --seed-contents--

```js
function obtuseAngledTriangles() {

  return true;
}

obtuseAngledTriangles();
```

# --solutions--

```js
// solution required
```
