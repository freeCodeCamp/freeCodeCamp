---
id: 56533eb9ac21ba0edf2244c4
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe39Sq'
forumTopicId: 18272
title: 函数执行到 return 语句就结束
---

## Description
<section id='description'>
当代码执行到 return 语句时，函数返回一个结果就结束运行了，return 后面的语句不会执行。
<strong>示例</strong>

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

上面的代码输出"Hello"到控制台、返回 "World"，但没有输出<code>"byebye"</code>，因为函数遇到 return 语句就退出了。
</section>

## Instructions
<section id='instructions'>
修改函数<code>abTest</code>当<code>a</code>或<code>b</code>小于0时，函数立即返回一个<code>undefined</code>并退出。
<strong>提示</strong><br>记住<a href='/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables' target='_blank'><code>undefined</code> 是一个关键字</a>，而不是一个字符串。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>abTest(2,2)</code> 应该返回一个数字。
    testString: assert(typeof abTest(2,2) === 'number' );
  - text: <code>abTest(2,2)</code> 应该返回 <code>8</code>。
    testString: assert(abTest(2,2) === 8 );
  - text: <code>abTest(-2,2)</code> 应该返回 <code>undefined</code>。
    testString: assert(abTest(-2,2) === undefined );
  - text: <code>abTest(2,-2)</code> 应该返回 <code>undefined</code>。
    testString: assert(abTest(2,-2) === undefined );
  - text: <code>abTest(2,8)</code> 应该返回 <code>18</code>。
    testString: assert(abTest(2,8) === 18 );
  - text: <code>abTest(3,3)</code> 应该返回 <code>12</code>。
    testString: assert(abTest(3,3) === 12 );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```

</section>
