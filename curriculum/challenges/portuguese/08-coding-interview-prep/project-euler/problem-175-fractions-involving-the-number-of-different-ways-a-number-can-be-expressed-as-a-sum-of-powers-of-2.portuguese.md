---
id: 5900f41c1000cf542c50ff2e
challengeType: 5
title: 'Problem 175: Fractions involving the number of different ways a number can be expressed as a sum of powers of 2'
videoUrl: ''
localeTitle: 'Problema 175: Frações envolvendo o número de maneiras diferentes em que um número pode ser expresso como uma soma de potências de 2'
---

## Description
<section id="description"> Defina f (0) = 1 e f (n) como o número de maneiras de escrever n como uma soma de potências de 2, onde nenhuma potência ocorre mais de duas vezes. <p> Por exemplo, f (10) = 5, pois há cinco maneiras diferentes de expressar 10:10 = 8 + 2 = 8 + 1 + 1 = 4 + 4 + 2 = 4 + 2 + 2 + 1 + 1 = 4 + 4 + 1 + 1 </p><p> Pode ser mostrado que para cada fração p / q (p&gt; 0, q&gt; 0) existe pelo menos um inteiro n tal que f (n) / f (n-1) = p / q. Por exemplo, o menor n para o qual f (n) / f (n-1) = 13/17 é 241. A expansão binária de 241 é 11110001. A leitura deste número binário do bit mais significativo para o bit menos significativo é 4 um, 3 zeros e 1 um. Nós chamaremos a corda 4,3,1 a expansão binária encurtada de 241. Encontre a expansão binária encurtada do menor n para qual f (n) / f (n-1) = 123456789/987654321. Dê sua resposta como inteiros separados por vírgulas, sem espaços em branco. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>euler175()</code> deve retornar 1, 13717420, 8.'
    testString: 'assert.strictEqual(euler175(), 1, 13717420, 8, "<code>euler175()</code> should return 1, 13717420, 8.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler175() {
  // Good luck!
  return true;
}

euler175();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
