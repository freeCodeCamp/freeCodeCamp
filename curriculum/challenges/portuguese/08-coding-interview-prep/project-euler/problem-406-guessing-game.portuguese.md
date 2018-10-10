---
id: 5900f5021000cf542c510015
challengeType: 5
title: 'Problem 406: Guessing Game'
videoUrl: ''
localeTitle: 'Problema 406: Jogo de Adivinhação'
---

## Description
<section id="description"> Estamos tentando encontrar um número oculto selecionado do conjunto de inteiros {1, 2, ..., n} fazendo perguntas. Cada número (pergunta) que pedimos, temos uma das três respostas possíveis: &quot;Seu palpite é menor do que o número oculto&quot; (e você tem um custo de a), ou &quot;Seu palpite é maior que o número oculto&quot; (e você incorrer em um custo de b), ou &quot;Sim, é isso!&quot; (e o jogo termina). Dado o valor de n, aeb, uma estratégia ótima minimiza o custo total para o pior caso possível. <p> Por exemplo, se n = 5, a = 2 e b = 3, então podemos começar por perguntar &quot;2&quot; como nossa primeira pergunta. </p><p> Se nos disserem que 2 é maior do que o número oculto (para um custo de b = 3), então temos certeza de que &quot;1&quot; é o número oculto (para um custo total de 3). Se nos dissermos que 2 é menor do que o número oculto (por um custo de a = 2), então nossa próxima pergunta será &quot;4&quot;. Se nos disserem que 4 é maior que o número oculto (para um custo de b = 3), então temos certeza de que &quot;3&quot; é o número oculto (para um custo total de 2 + 3 = 5). Se nos disserem que 4 é menor do que o número oculto (por um custo de a = 2), então temos certeza de que &quot;5&quot; é o número oculto (para um custo total de 2 + 2 = 4). Assim, o custo de pior caso alcançado por esta estratégia é 5. Também pode ser mostrado que este é o menor custo de pior caso que pode ser alcançado. Então, de fato, acabamos de descrever uma estratégia ótima para os valores dados de n, a e b. </p><p> Seja C (n, a, b) o pior custo possível alcançado por uma estratégia ótima para os valores dados de n, a e b. </p><p> Aqui estão alguns exemplos: C (5, 2, 3) = 5 C (500, √2, √3) = 13.22073197 ... C (20000, 5, 7) = 82 C (2000000, √5, √7 ) = 49,63755955 ... </p><p> Seja Fk os números de Fibonacci: Fk = Fk-1 + Fk-2 com casos de base F1 = F2 = 1. Encontre ∑1≤k≤30 C (1012, √k, √Fk), e dê sua resposta arredondada para 8 casas decimais atrás do ponto decimal. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler406()</code> deve retornar 36813.12757207.
    testString: 'assert.strictEqual(euler406(), 36813.12757207, "<code>euler406()</code> should return 36813.12757207.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler406() {
  // Good luck!
  return true;
}

euler406();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
