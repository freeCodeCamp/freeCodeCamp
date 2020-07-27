---
id: afd15382cdfb22c9efe8b7de
title: DNA Pairing
isRequired: true
challengeType: 5
forumTopicId: 16009
localeTitle: Связывание ДНК
---

## Description
<section id='description'>
В цепочке ДНК отсутствует элемент сопряжения. Возьмите каждого символа, получите его пару и верните результаты в виде массива 2d. <a href="http://en.wikipedia.org/wiki/Base_pair" target="_blank">Базовые пары</a> - это пара AT и CG. Совместите отсутствующий элемент с предоставленным символом. Возвращаем предоставленный символ как первый элемент в каждом массиве. Например, для входного GCG возвратите [[«G», «C»], [«C», «G»], [«G», «C»]] Символ и его пара спарены в массив, и все массивы сгруппированы в один инкапсулирующий массив. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>pairElement("ATCGA")</code> should return <code>[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]</code>.
    testString: assert.deepEqual(pairElement("ATCGA"),[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
  - text: <code>pairElement("TTGAG")</code> should return <code>[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]</code>.
    testString: assert.deepEqual(pairElement("TTGAG"),[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
  - text: <code>pairElement("CTCTA")</code> should return <code>[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]</code>.
    testString: assert.deepEqual(pairElement("CTCTA"),[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]);

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
var lookup = Object.create(null);
lookup.A = 'T';
lookup.T = 'A';
lookup.C = 'G';
lookup.G = 'C';

function pairElement(str) {
 return str.split('').map(function(p) {return [p, lookup[p]];});
}
```

</section>
