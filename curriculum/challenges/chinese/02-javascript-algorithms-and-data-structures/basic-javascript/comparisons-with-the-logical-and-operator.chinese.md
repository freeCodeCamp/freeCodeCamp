---
id: 56533eb9ac21ba0edf2244d8
title: Comparisons with the Logical And Operator
challengeType: 1
videoUrl: ''
localeTitle: 与逻辑和运算符的比较
---

## Description
<section id="description">有时你需要一次测试多个东西。当且仅当其左侧和右侧的<dfn>操作数</dfn>为<code>true</code>时， <dfn>逻辑和</dfn>运算符（ <code>&amp;&amp;</code> ）才返回true。如果将if语句嵌套在另一个语句中，则可以实现相同的效果： <blockquote> if（num&gt; 5）{ <br> if（num &lt;10）{ <br>返回“是”; <br> } <br> } <br>返回“否”; </blockquote>如果<code>num</code>大于<code>5</code>且小于<code>10</code>则仅返回“Yes”。相同的逻辑可以写成： <blockquote> if（num&gt; 5 &amp;&amp; num &lt;10）{ <br>返回“是”; <br> } <br>返回“否”; </blockquote></section>

## Instructions
<section id="instructions">将两个if语句合并为一个语句，如果<code>val</code>小于或等于<code>50</code>且大于或等于<code>25</code> ，则返回<code>&quot;Yes&quot;</code> 。否则，将返回<code>&quot;No&quot;</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该使用一次<code>&amp;&amp;</code>运算符
    testString: assert(code.match(/&&/g).length === 1);
  - text: 你应该只有一个<code>if</code>语句
    testString: assert(code.match(/if/g).length === 1);
  - text: <code>testLogicalAnd(0)</code>应返回“否”
    testString: assert(testLogicalAnd(0) === "No");
  - text: <code>testLogicalAnd(24)</code>应返回“否”
    testString: assert(testLogicalAnd(24) === "No");
  - text: <code>testLogicalAnd(25)</code>应返回“是”
    testString: assert(testLogicalAnd(25) === "Yes");
  - text: <code>testLogicalAnd(30)</code>应该返回“是”
    testString: assert(testLogicalAnd(30) === "Yes");
  - text: <code>testLogicalAnd(50)</code>应该返回“是”
    testString: assert(testLogicalAnd(50) === "Yes");
  - text: <code>testLogicalAnd(51)</code>应返回“否”
    testString: assert(testLogicalAnd(51) === "No");
  - text: <code>testLogicalAnd(75)</code>应返回“否”
    testString: assert(testLogicalAnd(75) === "No");
  - text: <code>testLogicalAnd(80)</code>应返回“否”
    testString: assert(testLogicalAnd(80) === "No");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLogicalAnd(val) {
  // Only change code below this line

  if (val) {
    if (val) {
      return "Yes";
    }
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
