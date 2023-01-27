---
id: 5900f4111000cf542c50ff24
title: 'Problema 165: Interseções'
challengeType: 1
forumTopicId: 301799
dashedName: problem-165-intersections
---

# --description--

Um segmento é definido exclusivamente por seus dois pontos de extremidade. Considerando dois segmentos de reta em geometria plana, há três possibilidades: os segmentos têm zero pontos, um ponto, ou infinitos pontos em comum.

Além disso, quando dois segmentos têm exatamente um ponto em comum, pode acontecer que esse ponto comum seja um ponto de extremidade de um dos segmentos ou de ambos. Se um ponto comum de dois segmentos não for um ponto de extremidade de nenhum dos segmentos, ele é um ponto interno de ambos os segmentos.

Chamaremos de ponto comum $T$ de dois segmentos $L_1$ e $L_2$ um ponto de interseção verdadeira de $L_1$ e $L_2$ se $T$ for o único ponto comum de $L_1$ e $L_2$ e se $T$ for um ponto interior de ambos os segmentos.

Considere os três segmentos $L_1$, $L_2$, e $L_3$:

$$\begin{align}   & L_1: (27, 44) \\;\text{to}\\; (12, 32) \\\\
  & L_2: (46, 53) \\;\text{to}\\; (17, 62) \\\\   & L_3: (46, 70) \\;\text{to}\\; (22, 40) \\\\
\end{align}$$

É possível verificar que os segmentos de reta $L_2$ e $L_3$ têm um ponto de interseção verdadeira. Percebemos que, como um dos pontos de extremidade de $L_3$: (22, 40) fica sobre $L_1$, este não é considerado um ponto de interseção verdadeira. $L_1$ e $L_2$ não têm um ponto em comum. Portanto, entre os três segmentos de reta, encontramos um ponto de interseção verdadeira.

Façamos agora o mesmo em 5.000 segmentos de reta. Para isso, geramos 20.000 números usando o chamado gerador pseudoaleatório de números "Blum Blum Shub".

$$\begin{align}   & s_0 = 290797 \\\\
  & s_{n + 1} = s_n × s_n (\text{modulo}\\; 50515093) \\\\   & t_n = s_n (\text{modulo}\\; 500) \\\\
\end{align}$$

Para criar cada segmento de reta, usamos quatro números consecutivos $t_n$. Ou seja, o primeiro segmento de reta é dado por:

($_t$1, $t_2$) a ($t_3$, $t_4$)

Os primeiros quatro números calculados de acordo com o gerador acima devem ser: 27, 144, 12 e 232. O primeiro segmento seria, portanto, de (27, 144) a (12, 232).

Quantos pontos de interseção verdadeira distintos se encontram entre os 5.000 segmentos de reta?

# --hints--

`distinctIntersections()` deve retornar `2868868`.

```js
assert.strictEqual(distinctIntersections(), 2868868);
```

# --seed--

## --seed-contents--

```js
function distinctIntersections() {

  return true;
}

distinctIntersections();
```

# --solutions--

```js
// solution required
```
