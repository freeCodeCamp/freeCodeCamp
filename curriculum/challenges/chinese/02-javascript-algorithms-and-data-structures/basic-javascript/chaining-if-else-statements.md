---
id: 56533eb9ac21ba0edf2244dc
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeJgsw'
forumTopicId: 16772
title: 多个 if else 语句
---

## Description
<section id='description'>
<code>if/else</code>语句串联在一起可以实现复杂的逻辑，这是多个<code>if/else if</code>语句串联在一起的伪代码：

```js
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}
```

</section>

## Instructions
<section id='instructions'>
把<code>if</code>/<code>else if</code>语句串联起来实现下面的逻辑：
<code>num &lt;   5</code>- return "Tiny"<br><code>num &lt;  10</code>- return "Small"<br><code>num &lt; 15</code>- return "Medium"<br><code>num &lt; 20</code>- return "Large"<br><code>num >= 20</code> - return "Huge"
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该有至少 4 个<code>else</code>表达式。
    testString: assert(code.match(/else/g).length > 3);
  - text: 你应该有至少 4 个<code>if</code>表达式。
    testString: assert(code.match(/if/g).length > 3);
  - text: 你应该有至少 1 个<code>return</code>表达式。
    testString: assert(code.match(/return/g).length >= 1);
  - text: <code>testSize(0)</code>应该返回 "Tiny"。
    testString: assert(testSize(0) === "Tiny");
  - text: <code>testSize(4)</code>应该返回 "Tiny"。
    testString: assert(testSize(4) === "Tiny");
  - text: <code>testSize(5)</code>应该返回 "Small"。
    testString: assert(testSize(5) === "Small");
  - text: <code>testSize(8)</code>应该返回 "Small"。
    testString: assert(testSize(8) === "Small");
  - text: <code>testSize(10)</code>应该返回 "Medium"。
    testString: assert(testSize(10) === "Medium");
  - text: <code>testSize(14)</code>应该返回 "Medium"。
    testString: assert(testSize(14) === "Medium");
  - text: <code>testSize(15)</code>应该返回 "Large"。
    testString: assert(testSize(15) === "Large");
  - text: <code>testSize(17)</code>应该返回 "Large"。
    testString: assert(testSize(17) === "Large");
  - text: <code>testSize(20)</code>应该返回 "Huge"。
    testString: assert(testSize(20) === "Huge");
  - text: <code>testSize(25)</code>应该返回 "Huge"。
    testString: assert(testSize(25) === "Huge");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function testSize(num) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
```

</section>
