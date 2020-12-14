---
id: 5679ceb97cbaa8c51670a16b
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp62qAQ'
forumTopicId: 18273
title: 从函数返回布尔值
---

## Description
<section id='description'>
你应该还记得<a href="javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator" target="_blank">相等运算符</a>这道挑战题。在那里我们提到，所有比较操作符都会返回 boolean：要么是<code>true</code>要么是<code>false</code>。
有时人们通过 if/else 语句来做比较然后返回<code>true</code>或<code>false</code>。

```js
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

有一个更好的方法，因为<code>===</code>总是返回<code>true</code>或<code>false</code>，所以我们可以直接返回比较的结果：

```js
function isEqual(a,b) {
  return a === b;
}
```

</section>

## Instructions
<section id='instructions'>
移除<code>isLess</code>函数的<code>if/else</code>语句但不影响函数的功能。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isLess(10,15)</code>应该返回 <code>true</code>。
    testString: assert(isLess(10,15) === true);
  - text: <code>isLess(15,10)</code>应该返回 <code>false</code>。
    testString: assert(isLess(15, 10) === false);
  - text: 不应该使用 <code>if</code> 或者 <code>else</code> 语句。
    testString: assert(!/if|else/g.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isLess(a, b) {
  // Fix this code
  if (a < b) {
    return true;
  } else {
    return false;
  }
}

// Change these values to test
isLess(10, 15);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function isLess(a, b) {
  return a < b;
}
```

</section>
