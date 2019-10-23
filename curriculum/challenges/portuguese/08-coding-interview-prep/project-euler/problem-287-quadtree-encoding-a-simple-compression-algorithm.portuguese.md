---
id: 5900f48b1000cf542c50ff9e
challengeType: 5
title: 'Problem 287: Quadtree encoding (a simple compression algorithm)'
videoUrl: ''
localeTitle: 'Problema 287: Codificação Quadtree (um algoritmo de compactação simples)'
---

## Description
<section id="description"> A codificação quadtree permite descrever uma imagem em preto e branco 2N × 2N como uma seqüência de bits (0 e 1). Essas seqüências devem ser lidas da esquerda para a direita da seguinte maneira: o primeiro bit lida com a região 2N × 2N completa; &quot;0&quot; denota uma divisão: a região 2n × 2n atual é dividida em 4 sub-regiões de dimensão 2n-1 × 2n-1, os próximos bits contêm a descrição das partes superior esquerda, superior direita, inferior esquerda e inferior direita -regiões - nessa ordem; &quot;10&quot; indica que a região atual contém apenas pixels pretos; &quot;11&quot; indica que a região atual contém apenas pixels brancos.Considere a seguinte imagem 4 × 4 (marcas coloridas denotam locais onde uma divisão pode ocorrer): <p> Esta imagem pode ser descrita por várias sequências, por exemplo: &quot;001010101001011111011010101010&quot;, de comprimento 30, ou &quot;0100101111101110&quot;, de comprimento 16, que é a sequência mínima para esta imagem. </p><p> Para um inteiro positivo N, defina DN como a imagem 2N × 2N com o seguinte esquema de cores: o pixel com coordenadas x = 0, y = 0 corresponde ao pixel inferior esquerdo, se (x - 2N-1) 2 + (y - 2N-1) 2 ≤ 22N-2, em seguida, o pixel é preto, caso contrário, o pixel é branco. Qual é o comprimento da seqüência mínima que descreve D24? </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler287()</code> deve retornar 313135496.
    testString: 'assert.strictEqual(euler287(), 313135496, "<code>euler287()</code> should return 313135496.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler287() {
  // Good luck!
  return true;
}

euler287();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
