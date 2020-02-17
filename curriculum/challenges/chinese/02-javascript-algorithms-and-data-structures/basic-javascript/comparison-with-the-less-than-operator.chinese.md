---
id: 56533eb9ac21ba0edf2244d6
title: Comparison with the Less Than Operator
challengeType: 1
videoUrl: ''
localeTitle: 与小于算子的比较
---

## Description
<section id="description"> <dfn>小于</dfn>运算符（ <code>&lt;</code> ）比较两个数字的值。如果左边的数字小于右边的数字，则返回<code>true</code> 。否则，它返回<code>false</code> 。与等于运算符一样， <dfn>少于</dfn>运算符在比较时转换数据类型。 <strong>例子</strong> <blockquote> 2 &lt;5 //是的<br> &#39;3&#39;&lt;7 //是的<br> 5 &lt;5 //假<br> 3 &lt;2 //假<br> &#39;8&#39;&lt;4 //假</blockquote></section>

## Instructions
<section id="instructions">将<code>less than</code>运算符添加到指示的行，以便返回语句有意义。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testLessThan(0)</code>应该返回“25岁以下”
    testString: assert(testLessThan(0) === "Under 25");
  - text: <code>testLessThan(24)</code>应该返回“25岁以下”
    testString: assert(testLessThan(24) === "Under 25");
  - text: <code>testLessThan(25)</code>应该返回“55岁以下”
    testString: assert(testLessThan(25) === "Under 55");
  - text: <code>testLessThan(54)</code>应该返回“55岁以下”
    testString: assert(testLessThan(54) === "Under 55");
  - text: <code>testLessThan(55)</code>应返回“55或以上”
    testString: assert(testLessThan(55) === "55 or Over");
  - text: <code>testLessThan(99)</code>应返回“55或以上”
    testString: assert(testLessThan(99) === "55 or Over");
  - text: 您应该至少使用<code>&lt;</code>运算符两次
    testString: assert(code.match(/val\s*<\s*('|")*\d+('|")*/g).length > 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
