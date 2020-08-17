---
id: afd15382cdfb22c9efe8b7de
title: DNA Pairing
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Emparelhamento de ADN
---

## Description
<section id="description"> O fio de DNA está faltando o elemento de emparelhamento. Pegue cada caractere, obtenha seu par e retorne os resultados como uma matriz 2d. <a href="http://en.wikipedia.org/wiki/Base_pair" target="_blank">Pares de bases</a> são um par de AT e CG. Corresponde o elemento ausente ao caractere fornecido. Retorna o caractere fornecido como primeiro elemento em cada array. Por exemplo, para a entrada GCG, retorne [[&quot;G&quot;, &quot;C&quot;], [&quot;C&quot;, &quot;G&quot;], [&quot;G&quot;, &quot;C&quot;]]. O caractere e seu par são emparelhados em um array, e todos os arrays são agrupados em um array de encapsulamento. Lembre-se de usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> se você ficar preso. Tente emparelhar o programa. Escreva seu próprio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>pairElement(&quot;ATCGA&quot;)</code> deve retornar <code>[[&quot;A&quot;,&quot;T&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;C&quot;,&quot;G&quot;],[&quot;G&quot;,&quot;C&quot;],[&quot;A&quot;,&quot;T&quot;]]</code> .'
    testString: 'assert.deepEqual(pairElement("ATCGA"),[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]], "<code>pairElement("ATCGA")</code> should return <code>[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]</code>.");'
  - text: '<code>pairElement(&quot;TTGAG&quot;)</code> deve retornar <code>[[&quot;T&quot;,&quot;A&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;G&quot;,&quot;C&quot;],[&quot;A&quot;,&quot;T&quot;],[&quot;G&quot;,&quot;C&quot;]]</code> .'
    testString: 'assert.deepEqual(pairElement("TTGAG"),[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]], "<code>pairElement("TTGAG")</code> should return <code>[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]</code>.");'
  - text: '<code>pairElement(&quot;CTCTA&quot;)</code> deve retornar <code>[[&quot;C&quot;,&quot;G&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;C&quot;,&quot;G&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;A&quot;,&quot;T&quot;]]</code> .'
    testString: 'assert.deepEqual(pairElement("CTCTA"),[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]], "<code>pairElement("CTCTA")</code> should return <code>[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pairElement(str) {
  return str;
}

pairElement("GCG");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
