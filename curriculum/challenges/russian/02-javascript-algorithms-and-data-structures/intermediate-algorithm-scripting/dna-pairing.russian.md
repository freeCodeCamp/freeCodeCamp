---
id: afd15382cdfb22c9efe8b7de
title: DNA Pairing
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Связывание ДНК
---

## Description
<section id="description"> В цепочке ДНК отсутствует элемент сопряжения. Возьмите каждого символа, получите его пару и верните результаты в виде массива 2d. <a href="http://en.wikipedia.org/wiki/Base_pair" target="_blank">Базовые пары</a> - это пара AT и CG. Совместите отсутствующий элемент с предоставленным символом. Возвращаем предоставленный символ как первый элемент в каждом массиве. Например, для входного GCG возвратите [[«G», «C»], [«C», «G»], [«G», «C»]] Символ и его пара спарены в массив, и все массивы сгруппированы в один инкапсулирующий массив. Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>pairElement(&quot;ATCGA&quot;)</code> должен возвращать <code>[[&quot;A&quot;,&quot;T&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;C&quot;,&quot;G&quot;],[&quot;G&quot;,&quot;C&quot;],[&quot;A&quot;,&quot;T&quot;]]</code> .'
    testString: 'assert.deepEqual(pairElement("ATCGA"),[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]], "<code>pairElement("ATCGA")</code> should return <code>[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]</code>.");'
  - text: '<code>pairElement(&quot;TTGAG&quot;)</code> должен возвращать <code>[[&quot;T&quot;,&quot;A&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;G&quot;,&quot;C&quot;],[&quot;A&quot;,&quot;T&quot;],[&quot;G&quot;,&quot;C&quot;]]</code> .'
    testString: 'assert.deepEqual(pairElement("TTGAG"),[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]], "<code>pairElement("TTGAG")</code> should return <code>[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]</code>.");'
  - text: '<code>pairElement(&quot;CTCTA&quot;)</code> должен возвращать <code>[[&quot;C&quot;,&quot;G&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;C&quot;,&quot;G&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;A&quot;,&quot;T&quot;]]</code> .'
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
