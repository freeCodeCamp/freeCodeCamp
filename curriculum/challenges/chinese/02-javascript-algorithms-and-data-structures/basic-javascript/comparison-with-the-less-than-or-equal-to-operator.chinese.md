---
id: 56533eb9ac21ba0edf2244d7
title: Comparison with the Less Than Or Equal To Operator
challengeType: 1
videoUrl: ''
localeTitle: 与小于或等于运算符的比较
---

## Description
<section id="description"> <code>less than or equal to</code>运算符（ <code>&lt;=</code> ）比较两个数字的值。如果左边的数字小于或等于右边的数字，则返回<code>true</code> 。如果左侧的数字大于右侧的数字，则返回<code>false</code> 。与等于运算符一样， <code>less than or equal to</code>转换数据类型。 <strong>例子</strong> <blockquote> 4 &lt;= 5 //是的<br> &#39;7&#39;&lt;= 7 //是的<br> 5 &lt;= 5 //是的<br> 3 &lt;= 2 //假<br> &#39;8&#39;&lt;= 4 //假</blockquote></section>

## Instructions
<section id="instructions">将<code>less than or equal to</code>运算符添加到指示的行，以便返回语句有意义。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testLessOrEqual(0)</code>应该返回“小于或等于12”
    testString: 'assert(testLessOrEqual(0) === "Smaller Than or Equal to 12", "<code>testLessOrEqual(0)</code> should return "Smaller Than or Equal to 12"");'
  - text: <code>testLessOrEqual(11)</code>应返回“小于或等于12”
    testString: 'assert(testLessOrEqual(11) === "Smaller Than or Equal to 12", "<code>testLessOrEqual(11)</code> should return "Smaller Than or Equal to 12"");'
  - text: <code>testLessOrEqual(12)</code>应返回“小于或等于12”
    testString: 'assert(testLessOrEqual(12) === "Smaller Than or Equal to 12", "<code>testLessOrEqual(12)</code> should return "Smaller Than or Equal to 12"");'
  - text: <code>testLessOrEqual(23)</code>应返回“小于或等于24”
    testString: 'assert(testLessOrEqual(23) === "Smaller Than or Equal to 24", "<code>testLessOrEqual(23)</code> should return "Smaller Than or Equal to 24"");'
  - text: <code>testLessOrEqual(24)</code>应返回“小于或等于24”
    testString: 'assert(testLessOrEqual(24) === "Smaller Than or Equal to 24", "<code>testLessOrEqual(24)</code> should return "Smaller Than or Equal to 24"");'
  - text: <code>testLessOrEqual(25)</code>应该返回“超过24”
    testString: 'assert(testLessOrEqual(25) === "More Than 24", "<code>testLessOrEqual(25)</code> should return "More Than 24"");'
  - text: <code>testLessOrEqual(55)</code>应该返回“超过24”
    testString: 'assert(testLessOrEqual(55) === "More Than 24", "<code>testLessOrEqual(55)</code> should return "More Than 24"");'
  - text: 你应该至少使用<code>&lt;=</code>运算符两次
    testString: 'assert(code.match(/val\s*<=\s*("|")*\d+("|")*/g).length > 1, "You should use the <code>&lt;=</code> operator at least twice");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
