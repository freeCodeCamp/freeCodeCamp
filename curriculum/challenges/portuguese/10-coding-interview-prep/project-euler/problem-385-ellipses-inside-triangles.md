---
id: 5900f4ee1000cf542c510000
title: 'Problema 385: Elipses dentro de triângulos'
challengeType: 1
forumTopicId: 302049
dashedName: problem-385-ellipses-inside-triangles
---

# --description--

Para qualquer triângulo $T$ no plano, pode-se mostrar que há uma elipse única com a maior área completamente dentro de $T$.

<img class="img-responsive center-block" alt="elipse totalmente interna ao triângulo" src="https://cdn.freecodecamp.org/curriculum/project-euler/ellipses-inside-triangles.png" style="background-color: white; padding: 10px;" />

Para um $n$ dado, considere os triângulos $T$, tal que:

-   os vértices de $T$ têm coordenadas em números inteiros, com valor absoluto $≤ n$, e
-   os focos<sup>1</sup> da elipse de maior área dentro de $T$ são $(\sqrt{13}, 0)$ e $(-\sqrt{13}, 0)$.

Considere $A(n)$ como a soma das áreas de todos esses triângulos.

Por exemplo, se $n = 8$, existem dois triângulos desse tipo. Seus vértices são (-4,-3), (-4,3), (8,0) e (4,3), (4,-3), (-8,0). A área de cada triângulo é 36. Portanto, $A(8) = 36 + 36 = 72$.

Pode-se verificar que $A(10) = 252$, $A(100) = 34.632$ e $A(1000) = 3.529.008$.

Encontre $A(1.000.000.000)$.

<sup>1</sup>Os focos de uma elipse são dois pontos $A$ e $B$, tal que, para qualquer ponto $P$ no limite da elipse, $AP + PB$ é constante.

# --hints--

`ellipsesInsideTriangles()` deve retornar `3776957309612154000`.

```js
assert.strictEqual(ellipsesInsideTriangles(), 3776957309612154000);
```

# --seed--

## --seed-contents--

```js
function ellipsesInsideTriangles() {

  return true;
}

ellipsesInsideTriangles();
```

# --solutions--

```js
// solution required
```
