---
id: 5900f4b91000cf542c50ffcb
title: 'Problema 332: Triângulos esféricos'
challengeType: 1
forumTopicId: 301990
dashedName: problem-332-spherical-triangles
---

# --description--

Um triângulo esférico é uma figura formada na superfície de uma esfera por três grandes arcos circulares que se cruzam entre pares em três vértices.

<img class="img-responsive center-block" alt="triângulo esférico formado na superfície de uma esfera" src="https://cdn.freecodecamp.org/curriculum/project-euler/spherical-triangles.jpg" style="background-color: white; padding: 10px;" />

Considere $C(r)$ como a esfera com o centro (0,0,0) e raio $r$.

Considere $Z(r)$ como o conjunto de pontos na superfície de $C(r)$ com coordenadas em números inteiros.

Considere $T(r)$ como o conjunto de triângulos esféricos com vértices em $Z(r)$. Triângulos esféricos degenerados, formados por três pontos no mesmo grande arco, <u>não</u> estão incluídos em $T(r)$.

Considere $A(r)$ como a área do menor triângulo esférico em $T(r)$.

Por exemplo, $A(14)$ é 3,294040 arredondado para seis casas decimais.

Encontre $\displaystyle \sum_{r = 1}^{50} A(r)$. Dê sua resposta arredondada para seis casas decimais.

# --hints--

`sphericalTriangles()` deve retornar `2717.751525`.

```js
assert.strictEqual(sphericalTriangles(), 2717.751525);
```

# --seed--

## --seed-contents--

```js
function sphericalTriangles() {

  return true;
}

sphericalTriangles();
```

# --solutions--

```js
// solution required
```
