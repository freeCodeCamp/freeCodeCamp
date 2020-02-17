---
id: 587d7db7367417b2b2512b9d
title: Match Beginning String Patterns
challengeType: 1
videoUrl: ''
localeTitle: 匹配开始字符串模式
---

## Description
<section id="description">先前的挑战表明，正则表达式可用于寻找许多匹配。它们还用于搜索字符串中特定位置的模式。在之前的挑战中，您使用<code>character set</code>内的<code>caret</code>符（ <code>^</code> ）来创建<code>[^thingsThatWillNotBeMatched]</code>形式的<code>negated character set</code> 。在<code>character set</code> ， <code>caret</code>用于在字符串的开头搜索模式。 <blockquote>让firstString =“Ricky是第一个，可以找到。”; <br>让firstRegex = / ^ Ricky /; <br> firstRegex.test（firstString）; <br> //返回true <br>让notFirst =“你现在找不到Ricky了。”; <br> firstRegex.test（notFirst）; <br> //返回false </blockquote></section>

## Instructions
<section id="instructions">使用正则表达式中的<code>caret</code>只能在字符串<code>rickyAndCal</code>的开头找到<code>&quot;Cal&quot;</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的正则表达式应该用大写字母搜索<code>&quot;Cal&quot;</code> 。
    testString: assert(calRegex.source == "^Cal");
  - text: 你的正则表达式不应该使用任何标志。
    testString: assert(calRegex.flags == "");
  - text: 你的正则表达式应该匹配字符串开头的<code>&quot;Cal&quot;</code> 。
    testString: assert(calRegex.test("Cal and Ricky both like racing."));
  - text: 您的正则表达式不应与字符串中间的<code>&quot;Cal&quot;</code>匹配。
    testString: assert(!calRegex.test("Ricky and Cal both like racing."));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
