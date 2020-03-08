---
id: afd15382cdfb22c9efe8b7de
title: DNA Pairing
isRequired: true
challengeType: 5
forumTopicId: 16009
localeTitle: DNA 配对
---

## Description
<section id='description'>
DNA 单链丢失了配对碱基。每一个碱基，可以得到与其配对的碱基，以二维数组的形式返回其结果。
<a href="http://en.wikipedia.org/wiki/Base_pair" target="_blank">碱基对</a> 由一对碱基组成。碱基有四种，分别为 A（腺嘌呤）、T（胸腺嘧啶）、G（鸟嘌呤）和 C（胞嘧啶）。配对原则是：A 与 T 配对，C 与 G 配对。我们需要根据这个原则对传入的所有碱基进行配对。
每个数组的第一个元素为已知的碱基。
比如，传入的参数是 GCG，那么函数的返回值应为 [["G", "C"], ["C","G"],["G", "C"]]
对于每个传入的碱基，我们应采用数组的形式展示配对结果。其中，传入的碱基需要作为数组的第一个元素出现。最终返回的数组中应当包含参数中每一个碱基的配对结果。
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
    testString: assert.deepEqual(pairElement("ATCGA"),[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
  - text: "<code>pairElement('TTGAG')</code>应该返回<code>[['T','A'],['T','A'],['G','C'],['A','T'],['G','C']]</code>。"
    testString: assert.deepEqual(pairElement("TTGAG"),[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
  - text: "<code>pairElement('CTCTA')</code>应该返回<code>[['C','G'],['T','A'],['C','G'],['T','A'],['A','T']]</code>。"
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
              