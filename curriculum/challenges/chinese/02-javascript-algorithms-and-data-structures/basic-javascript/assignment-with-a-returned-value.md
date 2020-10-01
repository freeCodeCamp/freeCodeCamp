---
id: 56533eb9ac21ba0edf2244c3
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2pEtB'
forumTopicId: 16658
title: 用返回值来赋值
---

## Description
<section id='description'>
如果你还记得我们在这一节<a href="/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank">使用赋值运算符存储值</a>的讨论，赋值之前，先完成等号右边的操作。这意味着我们可把一个函数的返回值，赋值给一个变量。
假设我们预先定义的函数<code>sum</code>其功能就是将两个数字相加，那么：
<code>ourSum = sum(5, 12);</code>
将调用<code>sum</code>函数，返回<code>return</code>了一个数值<code>17</code>，然后把它赋值给了<code>ourSum</code>变量。
</section>

## Instructions
<section id='instructions'>
调用<code>processArg</code>函数并给参数一个值<code>7</code>，然后把返回的值赋值给变量<code>processed</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>processed</code>的值应该是<code>2</code>。
    testString: assert(processed === 2);
  - text: 你应该把<code>processArg</code>的返回值赋给<code>processed</code>。
    testString: assert(/processed\s*=\s*processArg\(\s*7\s*\)\s*;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(){return "processed = " + processed})();
```

</div>

</section>

## Solution
<section id='solution'>


```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```

</section>
