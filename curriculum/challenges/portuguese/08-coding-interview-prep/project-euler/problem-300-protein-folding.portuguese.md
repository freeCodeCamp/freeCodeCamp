---
id: 5900f49a1000cf542c50ffac
challengeType: 5
title: 'Problem 300: Protein folding'
videoUrl: ''
localeTitle: 'Problema 300: Dobragem de Proteínas'
---

## Description
<section id="description"> De uma forma muito simplificada, podemos considerar proteínas como cadeias constituídas por elementos hidrofóbicos (H) e polares (P), por exemplo, HHPPHHHPHHPH. Para este problema, a orientação de uma proteína é importante; Por exemplo, o HPP é considerado distinto do PPH. Assim, existem 2n proteínas distintas, constituídas por n elementos. <p> Quando alguém encontra essas cordas na natureza, elas são sempre dobradas de tal maneira que o número de pontos de contato HH é tão grande quanto possível, uma vez que isso é energeticamente vantajoso. Como resultado, os elementos-H tendem a se acumular na parte interna, com os elementos-P do lado de fora. As proteínas naturais são dobradas em três dimensões, é claro, mas consideraremos apenas o dobramento de proteínas em duas dimensões. </p><p> A figura abaixo mostra duas maneiras possíveis de dobrar nossa proteína de exemplo (pontos de contato HH são mostrados com pontos vermelhos). </p><p> A dobra à esquerda tem apenas seis pontos de contato HH, portanto nunca ocorreria naturalmente. Por outro lado, a dobra à direita tem nove pontos de contato HH, o que é ótimo para essa string. </p><p> Assumindo que os elementos H e P têm a mesma probabilidade de ocorrer em qualquer posição ao longo da cadeia, o número médio de pontos de contato HH em uma dobragem ideal de uma cadeia de proteína aleatória de comprimento 8 é 850/28 = 3.3203125. </p><p> Qual é o número médio de pontos de contato de HH em uma dobragem ideal de uma cadeia de proteína aleatória de comprimento 15? Dê sua resposta usando quantas casas decimais forem necessárias para um resultado exato. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler300()</code> deve retornar 8.0540771484375.
    testString: 'assert.strictEqual(euler300(), 8.0540771484375, "<code>euler300()</code> should return 8.0540771484375.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler300() {
  // Good luck!
  return true;
}

euler300();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
