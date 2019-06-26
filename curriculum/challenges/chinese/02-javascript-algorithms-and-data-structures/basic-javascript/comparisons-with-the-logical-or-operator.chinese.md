---
id: 56533eb9ac21ba0edf2244d9
title: Comparisons with the Logical Or Operator
challengeType: 1
videoUrl: ''
localeTitle: 与逻辑或运算符的比较
---

## Description
<section id="description"> <dfn>逻辑OR</dfn>运算符（ <code>||</code> ）返回<code>true</code> ，如果任一<dfn>操作数</dfn>为<code>true</code> 。否则，它返回<code>false</code> 。 <dfn>逻辑或</dfn>运算符由两个管道符号（ <code>|</code> ）组成。这通常可以在Backspace和Enter键之间找到。以下模式应该从以前的方法点看起来很熟悉： <blockquote> if（num&gt; 10）{ <br>返回“否”; <br> } <br> if（num &lt;5）{ <br>返回“否”; <br> } <br>返回“是”; </blockquote>仅当<code>num</code>介于<code>5</code>和<code>10</code>之间（包括5和10）时，才会返回“Yes”。相同的逻辑可以写成： <blockquote> if（num&gt; 10 || num &lt;5）{ <br>返回“否”; <br> } <br>返回“是”; </blockquote></section>

## Instructions
<section id="instructions">将两个<code>if</code>语句组合成一个语句，如果<code>val</code>不在<code>10</code>和<code>20</code>之间（包括<code>10</code>和<code>20</code> ，则返回<code>&quot;Outside&quot;</code> 。否则，返回<code>&quot;Inside&quot;</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
