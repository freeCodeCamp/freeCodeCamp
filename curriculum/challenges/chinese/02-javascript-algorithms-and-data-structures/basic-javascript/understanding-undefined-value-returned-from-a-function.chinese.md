---
id: 598e8944f009e646fc236146
title: Understanding Undefined Value returned from a Function
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
localeTitle: 函数也可以返回 undefined
---

## Description
<section id='description'>
函数一般用<code>return</code>语句来返回值，但这不是必须的。在函数没有<code>return</code>语句的情况下，当你调用它时，该函数会执行内部代码，返回的值是<code>undefined</code>。
<strong>示例</strong>

```js
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined
```

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
  - text: <code>addFive</code>应该是一个函数。
    testString: assert(typeof addFive === 'function');
  - text: <code>sum</code>应该等于 8。
    testString: assert(sum === 8);
  - text: <code>addFive</code>的返回值应该是<code>undefined</code>。
    testString: assert(addFive() === undefined);
  - text: 函数给变量 <code>sum</code> 加 5。
    testString: assert(addFive.toString().replace(/\s/g, '').match(/sum=sum\+5|sum\+=5/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line

// Only change code above this line
addThree();
addFive();
```

</div>


## Solution
<section id='solution'>


```js
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum = sum + 5;
}

// Only change code above this line
addThree();
addFive();
```

</section>
