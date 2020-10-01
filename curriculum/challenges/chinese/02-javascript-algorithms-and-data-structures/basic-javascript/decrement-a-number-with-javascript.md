---
id: 56533eb9ac21ba0edf2244ad
title: Decrement a Number with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cM2KeS2'
forumTopicId: 17558
localeTitle: 数字递减
---

## Description
<section id='description'>
使用自减符号<code>--</code>，你可以很方便地对一个变量执行<dfn>自减</dfn>或者<code>-1</code>运算。
<code>i--;</code>
等效于
<code>i = i - 1;</code>
<strong>提示</strong><br><code>i--;</code>这种写法，省去了书写<code>=</code>符号的必要。
</section>

## Instructions
<section id='instructions'>
重写代码，使用<code>--</code>符号对<code>myVar</code>执行自减操作。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myVar</code>应该等于<code>10</code>。
    testString: assert(myVar === 10);
  - text: <code>myVar = myVar - 1;</code>语句应该被修改。
    testString: assert(/var\s*myVar\s*=\s*11;\s*\/*.*\s*([-]{2}\s*myVar|myVar\s*[-]{2});/.test(code));
  - text: 对<code>myVar</code>使用<code>--</code>运算符。
    testString: assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code));
  - text: 不要修改注释上面的代码。
    testString: assert(/var myVar = 11;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myVar = 11;

// Only change code below this line
myVar = myVar - 1;

```

</div>


### After Test
<div id='js-teardown'>

```js
(function(z){return 'myVar = ' + z;})(myVar);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myVar = 11;
myVar--;
```

</section>
