---
id: 5900f3fc1000cf542c50ff0e
title: 'Problema 143: Investigação do ponto de Torricelli de um triângulo'
challengeType: 1
forumTopicId: 301772
dashedName: problem-143-investigating-the-torricelli-point-of-a-triangle
---

# --description--

Imagine que ABC seja um triângulo com todos os ângulos internos menores que 120 graus. Considere X qualquer ponto dentro do triângulo e $XA = p$, $XC = q$ e $XB = r$.

Fermat desafiou Torricelli a encontrar a posição de X, de modo que p + q + r seja minimizado.

Torricelli foi capaz de provar que, se triângulos equiláteros AOB, BNC e AMC são construídos em cada lado do triângulo ABC, os círculos circunscritos da AOB, BNC e AMC se entrecruzarão em um único ponto, T, dentro do triângulo. Além disso, ele provou que T, chamado de ponto de Torricelli/Fermat, minimiza $p + q + r$. Ainda mais notável, pode mostrar-se que, quando a soma é minimizada, $AN = BM = CO = p + q + r$ e AN, BM e CO também se cruzam em T.

<img class="img-responsive center-block" alt="triângulos equiláteros AOB, BNC e AMC construídos em cada lado do triângulo ABC; os círculos circunscritos da AOB, BNC e AMC se entrecruzarão em um único ponto, T, dentro do triângulo" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-the-torricelli-point-of-a-triangle.png" style="background-color: white; padding: 10px;" />

Se a soma for minimizada e a, b, c, p, q e r forem todos números inteiros positivos, chamaremos o triângulo ABC de triângulo de Torricelli. Por exemplo, $a = 399$, $b = 455$, $c = 511$ é um exemplo de um triângulo de Torricelli, com $p + q + r = 784$. Encontre a soma de todos os valores distintos de $p + q + r ≤ 120000$ para os triângulos de Torricelli.

# --hints--

`sumTorricelliTriangles()` deve retornar `30758397`.

```js
assert.strictEqual(sumTorricelliTriangles(), 30758397);
```

# --seed--

## --seed-contents--

```js
function sumTorricelliTriangles() {

  return true;
}

sumTorricelliTriangles();
```

# --solutions--

```js
// solution required
```
