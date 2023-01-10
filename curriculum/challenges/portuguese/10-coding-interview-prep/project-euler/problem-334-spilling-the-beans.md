---
id: 5900f4ba1000cf542c50ffcd
title: 'Problema 334: Derramando feijões'
challengeType: 1
forumTopicId: 301992
dashedName: problem-334-spilling-the-beans
---

# --description--

No céu de Platão, existe um número infinito de tigelas em linha reta. Cada tigela contém alguns ou nenhum de um número finito de feijões. Uma criança joga um jogo, que permite apenas um tipo de movimento: remover dois feijões de qualquer tigela, e colocando um em cada uma das duas tigelas adjacentes. O jogo termina quando cada tigela contém um ou nenhum feijão.

Por exemplo, considere duas tigelas adjacentes contendo 2 e 3 feijões, respectivamente. Todas as outras estão vazias. Os oito movimentos seguintes terminarão o jogo:

<img class="img-responsive center-block" alt="animação do jogo quando duas tigelas adjacentes contêm 2 e 3 feijões, respectivamente" src="https://cdn.freecodecamp.org/curriculum/project-euler/spilling-the-beans.gif" style="background-color: white; padding: 10px;" />

Você recebe as seguintes sequências:

$$\begin{align}   & t_0 = 123456, \\\\
  & t_i = \begin{cases}          \frac{t_{i - 1}}{2},               & \text{if $t_{i - 1}$ é par} \\\\
         \left\lfloor\frac{t_{i - 1}}{2}\right\rfloor \oplus 926252, & \text{if $t_{i - 1}$ é ímpar}          \end{cases} \\\\
         & \qquad \text{onde $⌊x⌋$ é a função piso e $\oplus$ é o operador bitwise XOR.} \\\\ & b_i = (t_i\bmod 2^{11}) + 1. \end{align}$$

Os dois primeiros termos da última sequência são $b_1 = 289$ e $b_2 = 145$. Se começarmos com $b_1$ e $b_2$ feijões em duas tigelas adjacentes, 3419100 movimentos seriam necessários para terminar o jogo.

Considere agora 1500 tigelas adjacentes contendo $b_1, b_2, \ldots, b_{1500}$ feijões, respectivamente. Todas as outras tigelas estão vazias. Descubra quantos movimentos são necessários antes de o jogo terminar.

# --hints--

`spillingTheBeans()` deve retornar `150320021261690850`.

```js
assert.strictEqual(spillingTheBeans(), 150320021261690850);
```

# --seed--

## --seed-contents--

```js
function spillingTheBeans() {

  return true;
}

spillingTheBeans();
```

# --solutions--

```js
// solution required
```
