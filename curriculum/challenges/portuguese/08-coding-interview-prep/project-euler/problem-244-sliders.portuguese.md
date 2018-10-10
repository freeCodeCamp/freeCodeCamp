---
id: 5900f4601000cf542c50ff72
challengeType: 5
title: 'Problem 244: Sliders'
videoUrl: ''
localeTitle: 'Problema 244: Sliders'
---

## Description
<section id="description"> Você provavelmente conhece o jogo Fifteen Puzzle. Aqui, em vez de azulejos numerados, temos sete telhas vermelhas e oito azulejos azuis. Um movimento é denotado pela inicial maiúscula da direção (Esquerda, Direita, Cima, Baixo) na qual o ladrilho é deslizado, por exemplo, partindo da configuração (S), pela sequência LULUR nós alcançamos a configuração (E): <p> (S), (E) </p><p> Para cada caminho, sua soma de verificação é calculada por (pseudocódigo): </p><p> soma de verificação = 0 soma de verificação = (soma de verificação × 243 + m1) mod 100 000 007 soma de verificação = (soma de verificação × 243 + m2) mod 100 000 007… soma de verificação = (soma de verificação × 243 + mn) mod 100 000 007 onde mk é o valor ASCII de a k-ésima letra na sequência de movimentos e os valores ASCII dos movimentos são: </p><p> L76R82U85D68 </p><p> Para a sequência LULUR dada acima, a soma de verificação seria 19761398. Agora, partindo da configuração (S), encontre todas as maneiras mais curtas de alcançar a configuração (T). </p><p> (S), (T) </p><p> Qual é a soma de todas as somas de verificação dos caminhos com comprimento mínimo? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler244()</code> deve retornar 96356848.
    testString: 'assert.strictEqual(euler244(), 96356848, "<code>euler244()</code> should return 96356848.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler244() {
  // Good luck!
  return true;
}

euler244();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
