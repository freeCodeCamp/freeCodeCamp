---
id: 56533eb9ac21ba0edf2244a9
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWJ4Bfb'
forumTopicId: 301171
title: 使用赋值运算符初始化变量
---

## Description
<section id='description'>
通常在声明变量的时候会给变量<dfn>初始化</dfn>一个初始值。
<code>var myVar = 0;</code>
创建一个名为<code>myVar</code>的变量并指定一个初始值<code>0</code>。
</section>

## Instructions
<section id='instructions'>
通过关键字<code>var</code>定义一个变量<code>a</code>并且给它一个初始值<code>9</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你需要初始化<code>a</code>的值为<code>9</code>。
    testString: assert(/var\s+a\s*=\s*9\s*/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourVar = 19;

// Only change code below this line

```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof a !== 'undefined') {(function(a){return "a = " + a;})(a);} else { (function() {return 'a is undefined';})(); }
```

</div>

</section>

## Solution
<section id='solution'>


```js
var a = 9;
```

</section>
