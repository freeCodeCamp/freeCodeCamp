---
id: 5900f4a11000cf542c50ffb4
title: 'Problema 309: Escadas de números inteiros'
challengeType: 1
forumTopicId: 301963
dashedName: problem-309-integer-ladders
---

# --description--

No problema clássico das "escadas cruzadas", temos os comprimentos $x$ e $y$ de duas escadas colocadas contra paredes opostas de uma rua nivelada e estreita. Também somos informados da altura $h$ acima da rua onde as duas escadas se cruzam e nos é pedido para encontrar a largura da rua ($w$).

<img class="img-responsive center-block" alt="escadas x e y, se cruzando na altura h, colocadas contra as paredes opostas da rua de largura w" src="https://cdn.freecodecamp.org/curriculum/project-euler/integer-ladders.gif" style="background-color: white; padding: 10px;" />

Aqui, estamos preocupados apenas com instâncias em que as quatro variáveis são números inteiros positivos. Por exemplo, se $x = 70$, $y = 119$ e $h = 30$, podemos calcular que $w = 56$.

De fato, para valores inteiros $x$, $y$, $h$ e $0 &lt; x &lt; y &lt; 200$, há apenas cinco trios ($x$, $y$, $h$) que produzem soluções em números inteiros para $w$: (70, 119, 30), (74, 182, 21), (87, 105, 35), (100, 116, 35) e (119, 175, 40).

Para os valores inteiros $x$, $y$, $h$ e $0 &lt; x &lt; y &lt; 1.000.000$, quantos trios ($x$, $y$, $h$) produzem soluções com números inteiros para $w$?

# --hints--

`integerLadders()` deve retornar `210139`.

```js
assert.strictEqual(integerLadders(), 210139);
```

# --seed--

## --seed-contents--

```js
function integerLadders() {

  return true;
}

integerLadders();
```

# --solutions--

```js
// solution required
```
