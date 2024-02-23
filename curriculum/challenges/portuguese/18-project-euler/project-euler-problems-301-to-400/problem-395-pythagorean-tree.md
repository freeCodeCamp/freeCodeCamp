---
id: 5900f4f71000cf542c51000a
title: 'Problema 395: Árvore de Pitágoras'
challengeType: 1
forumTopicId: 302060
dashedName: problem-395-pythagorean-tree
---

# --description--

A árvore de Pitágoras é um fractal gerado pelo seguinte procedimento:

Comece com um quadrado unitário. Em seguida, chamando um dos lados de sua base (na animação, o lado inferior é a base):

1. Conecte um triângulo retângulo ao lado oposto da base, com a hipotenusa coincidindo com aquele lado e com os lados em uma relação de 3-4-5. Observe que o lado menor do triângulo deve estar no lado direito em relação à base (ver animação).
2. Anexe um quadrado a cada cateto do triângulo reto, com um de seus lados coincidindo com aquele cateto.
3. Repita este procedimento para ambos os quadrados, considerando que as suas bases tocam o triângulo.

A figura resultante, após um número infinito de iterações, é a árvore de Pitágoras.

<img class="img-responsive center-block" alt="animação mostrando 8 iterações do procedimento" src="https://cdn.freecodecamp.org/curriculum/project-euler/pythagorean-tree.gif" style="background-color: white; padding: 10px;" />

É possível mostrar que existe pelo menos um retângulo, cujos lados são paralelos ao quadrado maior da árvore de Pitágoras, e que envolve a árvore completamente.

Encontre a menor área possível para esse triângulo limitador, dando sua resposta arredondada para 10 casas decimais.

# --hints--

`pythagoreanTree()` deve retornar `28.2453753155`.

```js
assert.strictEqual(pythagoreanTree(), 28.2453753155);
```

# --seed--

## --seed-contents--

```js
function pythagoreanTree() {

  return true;
}

pythagoreanTree();
```

# --solutions--

```js
// solution required
```
