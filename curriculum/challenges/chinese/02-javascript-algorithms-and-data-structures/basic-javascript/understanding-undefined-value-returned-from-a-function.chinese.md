---
id: 598e8944f009e646fc236146
title: Understanding Undefined Value returned from a Function
challengeType: 1

videoUrl: ''
localeTitle: Understanding Undefined Value returned from a Function
---

## Description
<section id='description'>
函数一般用<code>return</code>语句来返回值，但这不是必须的。在函数没有<code>return</code>语句的情况下，当你调用它时，该函数会执行内部代码，返回的值是<code>undefined</code>。
<strong>示例</strong>
<blockquote>var sum = 0;<br>function addSum(num) {<br>&nbsp;&nbsp;sum = sum + num;<br>}<br>var returnedValue = addSum(3); // sum 会改变，但函数的返回值仍为 undefined</blockquote>
<code>addSum</code>是一个没有<code>return</code>语句的函数。该函数将更改全局变量<code>sum</code>，函数的返回值为<code>undefined</code>。
</section>

## Instructions
<section id='instructions'>
创建一个没有任何参数的函数<code>addFive</code>。此函数使<code>sum</code>变量加 5，但其返回值是<code>undefined</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>addFive</code>应该是一个函数
    testString: assert(typeof addFive === 'function', '<code>addFive</code>应该是一个函数');
  - text: <code>sum</code>应该等于 8
    testString: assert(sum === 8, '<code>sum</code>应该等于 8');
  - text: <code>addFive</code>的返回值应该是<code>undefined</code>
    testString: assert(addFive() === undefined, '<code>addFive</code>的返回值应该是<code>undefined</code>');
  - text: Inside of your functions, add 5 to the <code>sum</code> variable
    testString: assert(code.match(/(sum\s*\=\s*sum\s*\+\s*5)|(sum\s*\+\=\s*5)/g).length === 1, 'Inside of your functions, add 5 to the <code>sum</code> variable');

```

</section>

## Challenge Seed
<section id='challengeSeed'>














### After Test

<div id='js-teardown'>

```js
var sum = 0;
function addThree() {sum = sum + 3;}
addThree();
addFive();
```

</div>

</section>

## Solution
<section id='solution'>

```js
function addFive() {
 sum = sum + 5;
}
```

</section>
              