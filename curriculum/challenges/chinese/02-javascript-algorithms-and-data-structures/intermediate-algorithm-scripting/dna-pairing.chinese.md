---
id: afd15382cdfb22c9efe8b7de
title: DNA Pairing
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: DNA Pairing
---

## Description
<section id='description'>
给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。
注意，较小数不一定总是出现在数组的第一个元素。
如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>pairElement('ATCGA')</code>应该返回<code>[['A','T'],['T','A'],['C','G'],['G','C'],['A','T']]</code>。"
    testString: assert.deepEqual(pairElement("ATCGA"),[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]], '<code>pairElement("ATCGA")</code>应该返回<code>[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]</code>。');
  - text: "<code>pairElement('TTGAG')</code>应该返回<code>[['T','A'],['T','A'],['G','C'],['A','T'],['G','C']]</code>。"
    testString: assert.deepEqual(pairElement("TTGAG"),[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]], '<code>pairElement("TTGAG")</code>应该返回<code>[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]</code>。');
  - text: "<code>pairElement('CTCTA')</code>应该返回<code>[['C','G'],['T','A'],['C','G'],['T','A'],['A','T']]</code>。"
    testString: assert.deepEqual(pairElement("CTCTA"),[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]], '<code>pairElement("CTCTA")</code>应该返回<code>[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]</code>。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              