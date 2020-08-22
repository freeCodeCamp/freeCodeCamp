---
id: afd15382cdfb22c9efe8b7de
title: DNA Pairing
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: DNA配对
---

## Description
<section id="description"> DNA链缺少配对元素。获取每个字符，获取其对，并将结果作为二维数组返回。 <a href="http://en.wikipedia.org/wiki/Base_pair" target="_blank">碱基对</a>是一对AT和CG。将缺少的元素与提供的字符匹配。将提供的字符作为每个数组中的第一个元素返回。例如，对于输入GCG，返回[[“G”，“C”]，[“C”，“G”]，[“G”，“C”]]字符及其对在一个中配对数组，并将所有数组分组到一个封装数组中。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>pairElement(&quot;ATCGA&quot;)</code>应返回<code>[[&quot;A&quot;,&quot;T&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;C&quot;,&quot;G&quot;],[&quot;G&quot;,&quot;C&quot;],[&quot;A&quot;,&quot;T&quot;]]</code> 。'
    testString: assert.deepEqual(pairElement("ATCGA"),[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]);
  - text: '<code>pairElement(&quot;TTGAG&quot;)</code>应返回<code>[[&quot;T&quot;,&quot;A&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;G&quot;,&quot;C&quot;],[&quot;A&quot;,&quot;T&quot;],[&quot;G&quot;,&quot;C&quot;]]</code> 。'
    testString: assert.deepEqual(pairElement("TTGAG"),[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
  - text: '<code>pairElement(&quot;CTCTA&quot;)</code>应返回<code>[[&quot;C&quot;,&quot;G&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;C&quot;,&quot;G&quot;],[&quot;T&quot;,&quot;A&quot;],[&quot;A&quot;,&quot;T&quot;]]</code> 。'
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
// solution required
```

/section>
