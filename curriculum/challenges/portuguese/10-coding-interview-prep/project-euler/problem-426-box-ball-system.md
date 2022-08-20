---
id: 5900f5171000cf542c510029
title: 'Problema 426: Sistema de esfera e caixa'
challengeType: 1
forumTopicId: 302096
dashedName: problem-426-box-ball-system
---

# --description--

Considere uma linha infinita de caixas. Algumas das caixas têm uma esfera. Por exemplo, uma configuração inicial de 2 caixas ocupadas consecutivas seguidas por 2 caixas vazias, 2 caixas ocupadas, 1 caixa vazia, e 2 caixas ocupadas pode ser indicada pela sequência (2, 2, 2, 1, 2), onde o número de caixas ocupadas e vazias consecutivas aparece alternadamente.

Um turno consiste em mover cada esfera exatamente uma vez, de acordo com a seguinte regra: transfira a esfera mais à esquerda, que não foi movida para a caixa vazia mais próxima à sua direita.

Depois de um movimento, a sequência (2, 2, 2, 1, 2) torna-se (2, 2, 1, 2, 3) como pode ser visto abaixo. Note-se que começamos a nova sequência a partir da primeira caixa ocupada.

<img class="img-responsive center-block" alt="animação mostrando um movimento completo de (2, 2, 2, 1, 2) para (2, 2, 1, 2, 3)" src="https://cdn.freecodecamp.org/curriculum/project-euler/box-ball-system-1.gif" style="background-color: white; padding: 10px;" />

Um sistema como esse se chama um sistema de esfera e caixa ou BBS (Box-Ball System) para abreviação.

Pode-se mostrar que após um número suficiente de movimentos, o sistema evolui para um estado onde o número consecutivo de caixas ocupadas é invariável. No exemplo abaixo, os números consecutivos de caixas ocupadas evoluem para [1, 2, 3]; chamaremos isso de estado final.

<img class="img-responsive center-block" alt="quatro movimentos de caixas ocupadas [2, 2, 2] para o estado final [1, 2, 3]" src="https://cdn.freecodecamp.org/curriculum/project-euler/box-ball-system-2.gif" style="background-color: white; padding: 10px;" />

Definimos a sequência $\\{t_i\\}$:

$$\begin{align}   & s_0 = 290.797 \\\\
  & s_{k + 1} = {s_k}^2\bmod 50.515.093 \\\\ & t_k = (s_k\bmod 64) + 1 \end{align}$$

Começando da configuração inicial $(t_0, t_1, \ldots, t_{10})$, o estado final se torna [1, 3, 10, 24, 51, 75].

Começando da configuração inicial $(t_0, t_1, \ldots, t_{10.000.000})$, encontre o estado final.

Dê como sua resposta a soma dos quadrados dos elementos do estado final. Por exemplo, se o estado final é [1, 2, 3], então $14 (= 1^2 + 2^2 + 3^2)$ é a sua resposta.

# --hints--

`boxBallSystem()` deve retornar `31591886008`.

```js
assert.strictEqual(boxBallSystem(), 31591886008);
```

# --seed--

## --seed-contents--

```js
function boxBallSystem() {

  return true;
}

boxBallSystem();
```

# --solutions--

```js
// solution required
```
