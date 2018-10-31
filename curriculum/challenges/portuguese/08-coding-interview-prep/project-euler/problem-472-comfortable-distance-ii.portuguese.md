---
id: 5900f5451000cf542c510057
challengeType: 5
title: 'Problem 472: Comfortable Distance II'
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> Existem N lugares seguidos. N pessoas vêm uma após a outra para preencher os assentos de acordo com as seguintes regras: Nenhuma pessoa se senta ao lado da outra. A primeira pessoa escolhe qualquer assento. Cada pessoa subseqüente escolhe o assento mais distante de qualquer outra pessoa já sentada, desde que não viole a regra 1. Se houver mais de uma escolha satisfazendo essa condição, a pessoa escolhe a escolha mais à esquerda. Observe que, devido à regra 1, alguns lugares certamente ficarão desocupados, e o número máximo de pessoas que podem sentar-se é menor que N (para N&gt; 1). <p> Aqui estão os possíveis arranjos de assentos para N = 15: </p><p> Vemos que, se a primeira pessoa escolhe corretamente, os 15 lugares podem acomodar até 7 pessoas. Também podemos ver que a primeira pessoa tem 9 opções para maximizar o número de pessoas que podem estar sentadas. </p><p> Seja f (N) o número de escolhas que a primeira pessoa deve maximizar o número de ocupantes para N assentos seguidos. Assim, f (1) = 1, f (15) = 9, f (20) = 6 e f (500) = 16. </p><p> Além disso, (f (N) = 83 para 1 ≤ N ≤ 20 e ∑f (N) = 13343 para 1 ≤ N ≤ 500. </p><p> Encontre ∑f (N) para 1 ≤ N ≤ 1012. Dê os últimos 8 dígitos da sua resposta. </p></section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert.strictEqual(euler472(), 73811586, "<code>euler472()</code> should return 73811586.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler472() {
  // Good luck!
  return true;
}

euler472();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
