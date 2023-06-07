---
id: 5900f5431000cf542c510055
title: 'Problema 470: Super Ramvok'
challengeType: 1
forumTopicId: 302146
dashedName: problem-470-super-ramvok
---

# --description--

Considere um único jogo de Ramvok:

$t$ representa o número máximo de turnos que o jogo dura. Se $t = 0$, então o jogo termina imediatamente. Caso contrário, em cada turno $i$, o jogador rola um dado. Depois de rolar, se $i &lt; t$, o jogador pode parar o jogo e receber um prêmio igual ao valor da rolada de dados atual, ou descartar a rolada e tentar novamente no próximo turno. Se $i = t$, a rolada não pode ser descartada e o prêmio deve ser aceito. Antes de o jogo começar, $t$ é escolhido pelo jogador, que deve pagar um custo inicial $ct$ para algum $c$ constante. Para $c = 0$, $t$ pode ser escolhido como infinito (com um custo adiantado de 0). Considere $R(d, c)$ como o lucro esperado (ou seja, ganho líquido) que o jogador recebe de uma única partida de Ramvok jogado de maneira ideal, dado que o dado de $d$ lados é justo e com custo constante de $c$. Por exemplo, $R(4, 0,2) = 2,65$. Suponha que o jogador tem fundos suficientes para pagar todo e qualquer custo inicial.

Agora considere um jogo de Super Ramvok:

No Super Ramvok, o jogo de Ramvok é jogado repetidamente, mas com uma pequena modificação. Após cada jogo, o dado é alterado. O processo de alteração é o seguinte: o dado é rolado uma vez, e se a face resultante tem seus pontos visíveis, então essa face é alterada para ficar em branco. Se a face já for branca, então ela é alterada de volta para seu valor original. Após a alteração ser feita, outro jogo de Ramvok pode começar (e durante esse jogo, a cada turno, o dado é rolado até que uma face com valor apareça). O jogador sabe quais faces estão em branco e quais não estão em todas as ocasiões. O jogo do Super Ramvok termina uma vez que todas as faces do dado estejam em branco.

Considere $S(d, c)$ como o lucro esperado que o jogador recebe de um jogo ideal de Super Ramvok, levando em conta um dado de $d$ lados justo para começar (com todos os lados visíveis) e custo $c$ constante. Por exemplo, $S(6, 1) = 208,3$.

Considere $F(n) = \sum_{4 ≤ d ≤ n} \sum_{0 ≤ c ≤ n} S(d, c)$.

Calcule $F(20)$, arredondado para o número inteiro mais próximo.

# --hints--

`superRamvok()` deve retornar `147668794`.

```js
assert.strictEqual(superRamvok(), 147668794);
```

# --seed--

## --seed-contents--

```js
function superRamvok() {

  return true;
}

superRamvok();
```

# --solutions--

```js
// solution required
```
