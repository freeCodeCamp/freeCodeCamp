---
id: afd15382cdfb22c9efe8b7de
title: DNA Pairing
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Apareamiento de ADN
---

## Description
<section id="description"> A la cadena de ADN le falta el elemento de emparejamiento. Tome cada carácter, obtenga su par y devuelva los resultados como una matriz 2d. <a href="http://en.wikipedia.org/wiki/Base_pair" target="_blank">Los pares de bases</a> son un par de AT y CG. Empareja el elemento que falta con el carácter proporcionado. Devuelve el carácter proporcionado como el primer elemento en cada matriz. Por ejemplo, para la entrada GCG, devuelva [[&quot;G&quot;, &quot;C&quot;], [&quot;C&quot;, &quot;G&quot;], [&quot;G&quot;, &quot;C&quot;]] El carácter y su par están emparejados en una matriz, y todas las matrices se agrupan en una matriz de encapsulación. Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>pairElement(&quot;ATCGA&quot;)</code> debe devolver <code>[[&quot;A&quot;,&quot;T&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;C&quot;,&quot;G&quot;],[&quot;G&quot;,&quot;C&quot;],[&quot;A&quot;,&quot;T&quot;]]</code> .'
    testString: 'assert.deepEqual(pairElement("ATCGA"),[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]], "<code>pairElement("ATCGA")</code> should return <code>[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]</code>.");'
  - text: '<code>pairElement(&quot;TTGAG&quot;)</code> debe devolver <code>[[&quot;T&quot;,&quot;A&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;G&quot;,&quot;C&quot;],[&quot;A&quot;,&quot;T&quot;],[&quot;G&quot;,&quot;C&quot;]]</code> .'
    testString: 'assert.deepEqual(pairElement("TTGAG"),[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]], "<code>pairElement("TTGAG")</code> should return <code>[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]</code>.");'
  - text: '<code>pairElement(&quot;CTCTA&quot;)</code> debe devolver <code>[[&quot;C&quot;,&quot;G&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;C&quot;,&quot;G&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;A&quot;,&quot;T&quot;]]</code> .'
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
