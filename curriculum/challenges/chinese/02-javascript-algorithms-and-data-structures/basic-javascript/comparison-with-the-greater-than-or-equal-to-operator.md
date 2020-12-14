---
id: 56533eb9ac21ba0edf2244d5
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KBqtV'
forumTopicId: 16785
title: 大于或等于运算符
---

## Description
<section id='description'>
使用<code>大于等于</code>运算符（<code>&gt;=</code>）来比较两个数字的大小。如果大于等于运算符左边的数字比右边的数字大或者相等，它会返回<code>true</code>。否则，它会返回<code>false</code>。
与相等运算符相似，<code>大于等于</code>运算符在比较的时候会转换值的数据类型。
<strong>例如</strong>

```js
6   >=  6   // true
7   >= '3'  // true
2   >=  3   // false
'7' >=  9   // false
```

</section>

## Instructions
<section id='instructions'>
添加<code>大于等于</code>运算符到指定行，使得函数的返回语句有意义。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testGreaterOrEqual(0)</code>应该返回 "Less than 10"。
    testString: assert(testGreaterOrEqual(0) === "Less than 10");
  - text: <code>testGreaterOrEqual(9)</code>应该返回 "Less than 10"。
    testString: assert(testGreaterOrEqual(9) === "Less than 10");
  - text: <code>testGreaterOrEqual(10)</code>应该返回 "10 or Over"。
    testString: assert(testGreaterOrEqual(10) === "10 or Over");
  - text: <code>testGreaterOrEqual(11)</code>应该返回 "10 or Over"。
    testString: assert(testGreaterOrEqual(11) === "10 or Over");
  - text: <code>testGreaterOrEqual(19)</code>应该返回 "10 or Over"。
    testString: assert(testGreaterOrEqual(19) === "10 or Over");
  - text: <code>testGreaterOrEqual(100)</code>应该返回 "20 or Over"。
    testString: assert(testGreaterOrEqual(100) === "20 or Over");
  - text: <code>testGreaterOrEqual(21)</code>应该返回 "20 or Over"。
    testString: assert(testGreaterOrEqual(21) === "20 or Over");
  - text: 你应该使用<code>&gt;=</code>运算符至少两次。
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
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
```

</section>
