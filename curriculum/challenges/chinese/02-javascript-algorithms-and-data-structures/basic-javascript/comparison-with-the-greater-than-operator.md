---
id: 56533eb9ac21ba0edf2244d4
title: Comparison with the Greater Than Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp6GbH4'
forumTopicId: 16786
localeTitle: 大于运算符
---

## Description
<section id='description'>
使用大于运算符（<code>&gt;</code>）来比较两个数字。如果大于运算符左边的数字大于右边的数字，将会返回<code>true</code>。否则，它返回<code>false</code>。
与相等运算符一样，大于运算符在比较的时候，会转换值的数据类型。
<strong>例如</strong>

```js
5   >  3   // true
7   > '3'  // true
2   >  3   // false
'1' >  9   // false
```

</section>

## Instructions
<section id='instructions'>
添加<code>大于</code>运算符到指定的行，使得返回的语句是有意义的。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>testGreaterThan(0)</code>应该返回 "10 or Under"。
    testString: assert(testGreaterThan(0) === "10 or Under");
  - text: <code>testGreaterThan(10)</code>应该返回 "10 or Under"。
    testString: assert(testGreaterThan(10) === "10 or Under");
  - text: <code>testGreaterThan(11)</code>应该返回 "Over 10"。
    testString: assert(testGreaterThan(11) === "Over 10");
  - text: <code>testGreaterThan(99)</code>应该返回 "Over 10"。
    testString: assert(testGreaterThan(99) === "Over 10");
  - text: <code>testGreaterThan(100)</code>应该返回 "Over 10"。
    testString: assert(testGreaterThan(100) === "Over 10");
  - text: <code>testGreaterThan(101)</code>应该返回 "Over 100"。
    testString: assert(testGreaterThan(101) === "Over 100");
  - text: <code>testGreaterThan(150)</code>应该返回 "Over 100"。
    testString: assert(testGreaterThan(150) === "Over 100");
  - text: 你应该使用<code>&gt;</code>运算符至少两次。
    testString: assert(code.match(/val\s*>\s*('|")*\d+('|")*/g).length > 1);

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
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
```

</section>
