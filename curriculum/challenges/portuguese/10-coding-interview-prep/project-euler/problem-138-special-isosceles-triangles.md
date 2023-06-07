---
id: 5900f3f61000cf542c50ff09
title: 'Problema 138: Triângulos isósceles especiais'
challengeType: 1
forumTopicId: 301766
dashedName: problem-138-special-isosceles-triangles
---

# --description--

Considere o triângulo isósceles com o comprimento de base, $b = 16$, e os lados iguais, $L = 17$.

<img class="img-responsive center-block" alt="triângulo isósceles com lados chamados de L - dois lados com o mesmo comprimento e a base do triângulo chamada de b. A altura do triângulo é chamada de h e vai da base do triângulo ao ângulo entre os lados L" src="https://cdn.freecodecamp.org/curriculum/project-euler/special-isosceles-triangles.png" style="background-color: white; padding: 10px;" />

Usando o teorema de Pitágoras, pode ser visto que a altura do triângulo, $h = \sqrt{{17}^2 - 8^2} = 15$, que é uma unidade menor que o comprimento da base.

Com $b = 272$ e $L = 305$, obtemos $h = 273$, que é um a mais do que o comprimento da base, e este é o segundo menor triângulo isósceles com a propriedade $h = b ± 1$.

Encontre $\sum{L}$ para os doze menores triângulos isósceles para os quais $h = b ± 1$ e $b$, $L$ são números inteiros positivos.

# --hints--

`isoscelesTriangles()` deve retornar `1118049290473932`.

```js
assert.strictEqual(isoscelesTriangles(), 1118049290473932);
```

# --seed--

## --seed-contents--

```js
function isoscelesTriangles() {

  return true;
}

isoscelesTriangles();
```

# --solutions--

```js
// solution required
```
