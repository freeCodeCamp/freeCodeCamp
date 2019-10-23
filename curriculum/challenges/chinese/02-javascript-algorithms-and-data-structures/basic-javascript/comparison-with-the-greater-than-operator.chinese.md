---
id: 56533eb9ac21ba0edf2244d4
title: Comparison with the Greater Than Operator
challengeType: 1
videoUrl: ''
localeTitle: 与大于运营商的比较
---

## Description
<section id="description">大于运算符（ <code>&gt;</code> ）比较两个数字的值。如果左边的数字大于右边的数字，则返回<code>true</code> 。否则，它返回<code>false</code> 。与等于运算符一样，大于运算符将在比较时转换数据类型的值。 <strong>例子</strong> <blockquote> 5&gt; 3 //是的<br> 7&gt;&#39;3&#39;//是的<br> 2&gt; 3 //假<br> &#39;1&#39;&gt; 9 //假</blockquote></section>

## Instructions
<section id="instructions">将<code>greater than</code>运算符添加到指示的行，以便返回语句有意义。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testGreaterThan(0)</code>应返回“10或Under”
    testString: 'assert(testGreaterThan(0) === "10 or Under", "<code>testGreaterThan(0)</code> should return "10 or Under"");'
  - text: <code>testGreaterThan(10)</code>应返回“10或Under”
    testString: 'assert(testGreaterThan(10) === "10 or Under", "<code>testGreaterThan(10)</code> should return "10 or Under"");'
  - text: <code>testGreaterThan(11)</code>应该返回“Over 10”
    testString: 'assert(testGreaterThan(11) === "Over 10", "<code>testGreaterThan(11)</code> should return "Over 10"");'
  - text: <code>testGreaterThan(99)</code>应该返回“Over 10”
    testString: 'assert(testGreaterThan(99) === "Over 10", "<code>testGreaterThan(99)</code> should return "Over 10"");'
  - text: <code>testGreaterThan(100)</code>应该返回“Over 10”
    testString: 'assert(testGreaterThan(100) === "Over 10", "<code>testGreaterThan(100)</code> should return "Over 10"");'
  - text: <code>testGreaterThan(101)</code>应返回“超过100”
    testString: 'assert(testGreaterThan(101) === "Over 100", "<code>testGreaterThan(101)</code> should return "Over 100"");'
  - text: <code>testGreaterThan(150)</code>应该返回“超过100”
    testString: 'assert(testGreaterThan(150) === "Over 100", "<code>testGreaterThan(150)</code> should return "Over 100"");'
  - text: 您应该至少使用<code>&gt;</code>运算符两次
    testString: 'assert(code.match(/val\s*>\s*("|")*\d+("|")*/g).length > 1, "You should use the <code>&gt;</code> operator at least twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
