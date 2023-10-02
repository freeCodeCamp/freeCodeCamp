---
id: 5900f4291000cf542c50ff3c
title: 'Problema 189: Colorização tripla de uma grade triangular'
challengeType: 1
forumTopicId: 301825
dashedName: problem-189-tri-colouring-a-triangular-grid
---

# --description--

Considere a seguinte configuração de 64 triângulos:

<img class="img-responsive center-block" alt="64 triângulos arranjados de modo a criar um triângulo maior com comprimento de lado de 8 triângulos" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-1.gif" style="background-color: white; padding: 10px;" />

Queremos colorir o interior de cada triângulo com uma de três cores: vermelho, verde ou azul, para que nenhum de dois triângulos vizinhos tenha a mesma cor. Essa colorização será considerada válida. Aqui, diz-se que dois triângulos são vizinhos se eles compartilharem uma aresta. Observação: se eles apenas compartilharem um vértice, então não são vizinhos.

Por exemplo, aqui está uma colorização válida para a grade acima:

<img class="img-responsive center-block" alt="grade colorida de 64 triângulos" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-2.gif" style="background-color: white; padding: 10px;" />

Uma colorização C', que é obtida a partir de uma colorização C por rotação ou reflexão é considerada diferente de C, a menos que ambas sejam idênticas.

Quantas colorizações válidas distintas existem para a configuração acima?

# --hints--

`triangularGridColoring()` deve retornar `10834893628237824`.

```js
assert.strictEqual(triangularGridColoring(), 10834893628237824);
```

# --seed--

## --seed-contents--

```js
function triangularGridColoring() {

  return true;
}

triangularGridColoring();
```

# --solutions--

```js
// solution required
```
