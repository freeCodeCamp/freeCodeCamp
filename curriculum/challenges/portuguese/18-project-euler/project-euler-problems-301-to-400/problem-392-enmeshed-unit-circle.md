---
id: 5900f4f41000cf542c510007
title: 'Problema 392: Círculo unitário em malha'
challengeType: 1
forumTopicId: 302057
dashedName: problem-392-enmeshed-unit-circle
---

# --description--

Uma grade retilinear é uma grade ortogonal onde o espaçamento entre as linhas da grade não precisa ser equidistante.

Um exemplo desse tipo de grade é o papel gráfico logarítmico.

Considere as grades retilineares no sistema de coordenadas cartesiano com as seguintes propriedades:

- As linhas da grade são paralelas aos eixos do sistema de coordenadas cartesiano.
- Existem $N + 2$ linhas de grade verticais e $N + 2$ linhas de grade horizontais. Portanto, existem $(N + 1) \times (N + 1)$ células retangulares.
- As equações das duas linhas da grade verticais externas são $x = -1$ e $x = 1$.
- As equações das duas linhas da grade horizontais externas são $y = -1$ e $y = 1$.
- As células da grade são coloridas de vermelho se elas estiveres sobre o círculo unitário. Do contrário, elas serão pretas.

Para esse problema, gostaríamos que você encontrasse as posições das $N$ linhas de grade internas horizontais e das $N$ linhas de grade internas verticais restantes, de modo que a área ocupada pelas células vermelhas seja minimizada.

Ex: aqui vemos uma imagem da solução para $N = 10$:

<img class="img-responsive center-block" alt="solução para N = 10" src="https://cdn.freecodecamp.org/curriculum/project-euler/enmeshed-unit-circle.png" style="background-color: white; padding: 10px;" />

A área ocupada pelas células vermelhas para $N = 10$, arredondada para 10 casas depois da vírgula, é de 3,3469640797.

Encontre as posições para $N = 400$. Dê sua resposta como a área ocupada pelas células vermelhas arredondada para 10 casas depois da vírgula.

# --hints--

`enmeshedUnitCircle()` deve retornar `3.1486734435`.

```js
assert.strictEqual(enmeshedUnitCircle(), 3.1486734435);
```

# --seed--

## --seed-contents--

```js
function enmeshedUnitCircle() {

  return true;
}

enmeshedUnitCircle();
```

# --solutions--

```js
// solution required
```
