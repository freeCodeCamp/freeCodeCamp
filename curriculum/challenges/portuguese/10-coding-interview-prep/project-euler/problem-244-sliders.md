---
id: 5900f4601000cf542c50ff72
title: 'Problema 244: Blocos deslizantes'
challengeType: 1
forumTopicId: 301891
dashedName: problem-244-sliders
---

# --description--

Você provavelmente conhece o Jogo do Quinze. Aqui, em vez de blocos numerados, temos sete blocos vermelhos e oito blocos azuis.

Um movimento é indicado pela primeira letra maiúscula da direção (Left - Esquerda, Right - Direita, Up - Acima e Down - Abaixo) na qual o bloco é deslizado, ou seja, a partir da configuração ($S$), pela sequência $LULUR$ que chegamos à configuração ($E$):

($S$) <img class="img-responsive" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-1.gif" style="display: inline-block; background-color: white; padding: 10px;" />, ($E$) <img class="img-responsive" alt="configuração E" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-2.gif" style="display: inline-block; background-color: white; padding: 10px;" />

Para cada caminho, seu valor de verificação é calculado por (pseudocódigo):

$$\begin{align}   & \text{checksum} = 0 \\\\
  & \text{checksum} = (\text{checksum} × 243 + m_1) \\; \text{mod} \\; 100\\,000\\,007 \\\\   & \text{checksum} = (\text{checksum} × 243 + m_2) \\; \text{mod} \\; 100\\,000\\,007 \\\\
  & \ldots \\\\ & \text{checksum} = (\text{checksum} × 243 + m_n) \\; \text{mod} \\; 100\\,000\\,007 \end{align}$$

onde $m_k$ é o valor ASCII da $k^{\text{a}}$ letra na sequência de movimento e os valores ASCII dos movimentos são:

$$\begin{array}{|c|c|} \hline L & 76 \\\\ \hline R & 82 \\\\ \hline U & 85 \\\\ \hline D & 68 \\\\ \hline \end{array}$$

Para a sequência $LULUR$ dada acima, o checksum seria 19761398. Agora, começando pela configuração ($S$), encontre todas as formas mais curtas para chegar à configuração ($T$).

($S$) <img class="img-responsive center-block" alt="configuration S" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-3.gif" style="display: inline-block; background-color: white; padding: 10px;" />, ($T$) <img class="img-responsive center-block" alt="configuração T" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliders-4.gif" style="display: inline-block; background-color: white; padding: 10px;" />

Qual é a soma de todas as somas de checksums para os percursos de menor comprimento?

# --hints--

`sliders()` deve retornar `96356848`.

```js
assert.strictEqual(sliders(), 96356848);
```

# --seed--

## --seed-contents--

```js
function sliders() {

  return true;
}

sliders();
```

# --solutions--

```js
// solution required
```
