---
id: afd15382cdfb22c9efe8b7de
challengeType: 5
forumTopicId: 16009
title: DNA 配对
---

## Description
<section id='description'>
DNA 链缺少配对元素。对于每个字符，获取与其配对的元素，并将结果作为二维数组返回。  
<a href="http://en.wikipedia.org/wiki/Base_pair" target="_blank">碱基对</a> 是一对 AT 和 CG。将缺少的元素与提供的字符匹配。
将提供的字符作为每个数组中的第一个元素返回。
例如，对于输入 GCG，返回[[“G”, “C”]，[“C”, “G”]，[“G”, “C”]]。
字符及与其配对的元素在一个数组中。再将所有数组放到一个封装数组中。
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
