---
id: 56533eb9ac21ba0edf2244d7
title: Comparison with the Less Than Or Equal To Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVR7Am'
forumTopicId: 16788
localeTitle: 小于或等于运算符
---

## Description
<section id='description'>
使用<code>小于等于</code>运算符（<code>&lt;=</code>）比较两个数字的大小。如果在小于等于运算符左边的数字小于或者等于右边的数字，它会返回<code>true</code>。如果在小于等于运算符左边的数字大于右边的数字，它会返回<code>false</code>。与相等运算符类似，<code>小于等于</code>运算符会转换数据类型。
<strong>例如</strong>

```js
4   <= 5  // true
'7' <= 7  // true
5   <= 5  // true
3   <= 2  // false
'8' <= 4  // false
```

</section>

## Instructions
<section id='instructions'>
添加<code>小于等于</code>运算符到指定行，使得函数的返回语句有意义。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testLessOrEqual(0)</code>应该返回 "Smaller Than or Equal to 12"。
    testString: assert(testLessOrEqual(0) === "Smaller Than or Equal to 12");
  - text: <code>testLessOrEqual(11)</code>应该返回 "Smaller Than or Equal to 12"。
    testString: assert(testLessOrEqual(11) === "Smaller Than or Equal to 12");
  - text: <code>testLessOrEqual(12)</code>应该返回 "Smaller Than or Equal to 12"。
    testString: assert(testLessOrEqual(12) === "Smaller Than or Equal to 12");
  - text: <code>testLessOrEqual(23)</code>应该返回 "Smaller Than or Equal to 24"。
    testString: assert(testLessOrEqual(23) === "Smaller Than or Equal to 24");
  - text: <code>testLessOrEqual(24)</code>应该返回 "Smaller Than or Equal to 24"。
    testString: assert(testLessOrEqual(24) === "Smaller Than or Equal to 24");
  - text: <code>testLessOrEqual(25)</code>应该返回 "More Than 24"。
    testString: assert(testLessOrEqual(25) === "More Than 24");
  - text: <code>testLessOrEqual(55)</code>应该返回 "More Than 24"。
    testString: assert(testLessOrEqual(55) === "More Than 24");
  - text: 你应该使用<code>&lt;=</code>运算符至少两。
    testString: assert(code.match(/val\s*<=\s*('|")*\d+('|")*/g).length > 1);

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
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
```

</section>
