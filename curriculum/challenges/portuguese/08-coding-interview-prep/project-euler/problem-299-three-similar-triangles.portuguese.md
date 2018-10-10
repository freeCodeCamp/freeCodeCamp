---
id: 5900f4971000cf542c50ffaa
challengeType: 5
title: 'Problem 299: Three similar triangles'
videoUrl: ''
localeTitle: 'Problema 299: Três triângulos semelhantes'
---

## Description
<section id="description"> Quatro pontos com coordenadas inteiras são selecionados: A (a, 0), B (b, 0), C (0, c) e D (0, d), com 0 &lt;a &lt;b e 0 &lt;c &lt;d. O ponto P, também com coordenadas inteiras, é escolhido na linha AC para que os três triângulos ABP, CDP e BDP sejam todos semelhantes. <p> É fácil provar que os três triângulos podem ser semelhantes, somente se a = c. </p><p> Assim, dado que a = c, estamos procurando por trigêmeos (a, b, d) de modo que pelo menos um ponto P (com coordenadas inteiras) exista em AC, fazendo com que os três triângulos ABP, CDP e BDP sejam todos semelhantes. </p><p> Por exemplo, se (a, b, d) = (2,3,4), pode ser facilmente verificado que o ponto P (1,1) satisfaz a condição acima. Note que os trigêmeos (2,3,4) e (2,4,3) são considerados distintos, embora o ponto P (1,1) seja comum para ambos. </p><p> Se b + d &lt;100, existem 92 tripletos distintos (a, b, d) de tal forma que o ponto P existe. Se b + d &lt;100 000, existem 320471 tripletos distintos (a, b, d) de tal forma que o ponto P existe. Se b + d &lt;100 000 000, quantos tripletos distintos (a, b, d) existem de tal forma que o ponto P existe? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler299()</code> deve retornar 549936643.
    testString: 'assert.strictEqual(euler299(), 549936643, "<code>euler299()</code> should return 549936643.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler299() {
  // Good luck!
  return true;
}

euler299();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
