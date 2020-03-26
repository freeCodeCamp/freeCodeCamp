---
id: 56533eb9ac21ba0edf2244d5
title: Comparison with the Greater Than Or Equal To Operator
challengeType: 1
videoUrl: ''
localeTitle: 与大于或等于运算符的比较
---

## Description
<section id="description"> <code>greater than or equal to</code>运算符（ <code>&gt;=</code> ）比较两个数字的值。如果左边的数字大于或等于右边的数字，则返回<code>true</code> 。否则，它返回<code>false</code> 。与等于运算符一样， <code>greater than or equal to</code>运算符将在比较时转换数据类型。 <strong>例子</strong> <blockquote> 6&gt; = 6 //是的<br> 7&gt; =&#39;3&#39;//是的<br> 2&gt; = 3 //假<br> &#39;7&#39;&gt; = 9 //假</blockquote></section>

## Instructions
<section id="instructions">将<code>greater than or equal to</code>运算符添加到指示的行，以便返回语句有意义。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testGreaterOrEqual(0)</code>应返回“小于10”
    testString: assert(testGreaterOrEqual(0) === "Less than 10");
  - text: <code>testGreaterOrEqual(9)</code>应返回“小于10”
    testString: assert(testGreaterOrEqual(9) === "Less than 10");
  - text: <code>testGreaterOrEqual(10)</code>应返回“10或Over”
    testString: assert(testGreaterOrEqual(10) === "10 or Over");
  - text: <code>testGreaterOrEqual(11)</code>应返回“10或Over”
    testString: assert(testGreaterOrEqual(11) === "10 or Over");
  - text: <code>testGreaterOrEqual(19)</code>应返回“10或Over”
    testString: assert(testGreaterOrEqual(19) === "10 or Over");
  - text: <code>testGreaterOrEqual(100)</code>应该返回“20或Over”
    testString: assert(testGreaterOrEqual(100) === "20 or Over");
  - text: <code>testGreaterOrEqual(21)</code>应返回“20或Over”
    testString: assert(testGreaterOrEqual(21) === "20 or Over");
  - text: 您应该使用<code>&gt;=</code>运算符至少两次
    testString: assert(code.match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
