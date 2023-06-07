---
id: 5900f4071000cf542c50ff19
title: 'Problema 154: Explorando o triângulo de Pascal'
challengeType: 1
forumTopicId: 301785
dashedName: problem-154-exploring-pascals-pyramid
---

# --description--

Uma pirâmide triangular é construída usando bolas esféricas de modo que cada bola fique exatamente sobre três bolas do próximo nível.

<img class="img-responsive center-block" alt="pirâmide triangular de quatro níveis construída usando bolas esféricas" src="https://cdn.freecodecamp.org/curriculum/project-euler/exploring-pascals-pyramid.png" style="background-color: white; padding: 10px;" />

Então, calculamos o número de caminhos que levam a partir do ápice para cada posição: um caminho começa no ápice e avança para baixo para qualquer uma das três esferas diretamente abaixo da posição atual. Consequentemente, o número de caminhos para chegar a uma determinada posição é a soma dos números imediatamente acima dele (dependendo da posição, há até três números acima dele).

O resultado é a pirâmide de Pascal e os números de cada nível são os coeficientes da expansão trinomial ${(x + y + z)}^n$.

Quantos coeficientes na expansão de ${(x + y + z)}^{200000}$ são múltiplos de ${10}^{12}$?

# --hints--

`pascalsPyramid()` deve retornar `479742450`.

```js
assert.strictEqual(pascalsPyramid(), 479742450);
```

# --seed--

## --seed-contents--

```js
function pascalsPyramid() {

  return true;
}

pascalsPyramid();
```

# --solutions--

```js
// solution required
```
