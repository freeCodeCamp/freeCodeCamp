---
id: 56533eb9ac21ba0edf2244aa
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBa2JAL'
forumTopicId: 18335
title: 理解未初始化的变量
---

## Description
<section id='description'>
当 JavaScript 中的变量被声明的时候，程序内部会给它一个初始值<code>undefined</code>。当你对一个值为<code>undefined</code>的变量进行运算操作的时候，算出来的结果将会是<code>NaN</code>，<code>NaN</code>的意思是<dfn>"Not a Number"</dfn>。当你用一个值是<code>undefined</code>的变量来做字符串拼接操作的时候，它会输出字符串<code>"undefined"</code>。
</section>

## Instructions
<section id='instructions'>
定义 3 个变量<code>a</code>、<code>b</code>、<code>c</code>，并且分别给他们赋值：<code>5</code>、<code>10</code>、<code>"I am a"</code>，这样它们值就不会是<code>undefined</code>了。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>a</code>应该被定义，并且值为<code>6</code>。
    testString: assert(typeof a === 'number' && a === 6);
  - text: <code>b</code>应该被定义，并且值为<code>15</code>。
    testString: assert(typeof b === 'number' && b === 15);
  - text: <code>c</code>的值不能包含<code>undefined</code>，应该为 "I am a String!"。
    testString: assert(!/undefined/.test(c) && c === "I am a String!");
  - text: 不要修改第二条注释下的代码。
    testString: assert(/a = a \+ 1;/.test(code) && /b = b \+ 5;/.test(code) && /c = c \+ " String!";/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Initialize these three variables
var a;
var b;
var c;

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = '" + c + "'"; })(a,b,c);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
```

</section>
