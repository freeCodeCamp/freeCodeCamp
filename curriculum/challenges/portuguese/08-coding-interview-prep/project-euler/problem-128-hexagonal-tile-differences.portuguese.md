---
id: 5900f3ec1000cf542c50feff
challengeType: 5
title: 'Problem 128: Hexagonal tile differences'
videoUrl: ''
localeTitle: 'Problema 128: Diferenças de ladrilhos hexagonais'
---

## Description
<section id="description"> Um azulejo hexagonal com o número 1 é rodeado por um anel de seis azulejos hexagonais, começando às 12 horas e numerando os azulejos de 2 a 7 no sentido anti-horário. Novos anéis são adicionados da mesma forma, com os próximos anéis numerados de 8 a 19, 20 a 37, 38 a 61 e assim por diante. O diagrama abaixo mostra os três primeiros anéis. <p> Ao encontrar a diferença entre o tile n e cada um dos seus seis vizinhos, definiremos PD (n) como o número dessas diferenças que são primos. Por exemplo, trabalhando no sentido horário ao redor do ladrilho 8 as diferenças são 12, 29, 11, 6, 1 e 13. Assim, PD (8) = 3. Da mesma forma, as diferenças em torno do ladrilho 17 são 1, 17, 16, 1. , 11, e 10, portanto, PD (17) = 2. Pode ser mostrado que o valor máximo de PD (n) é 3. Se todas as peças para as quais PD (n) = 3 são listadas em ordem crescente para formar uma seqüência, o 10º bloco seria 271. Encontre o 2000º bloco nesta seqüência. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler128()</code> deve retornar 14516824220.
    testString: 'assert.strictEqual(euler128(), 14516824220, "<code>euler128()</code> should return 14516824220.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler128() {
  // Good luck!
  return true;
}

euler128();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
