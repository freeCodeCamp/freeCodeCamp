---
id: 56533eb9ac21ba0edf2244ac
title: Increment a Number with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GLT9'
forumTopicId: 18201
localeTitle: 数字递增
---

## Description
<section id='description'>
使用<code>++</code>，我们可以很容易地对变量进行自增或者<code>+1</code>运算。
<code>i++;</code>
等效于
<code>i = i + 1;</code>
<strong>注意</strong><br><code>i++;</code>这种写法，省去了书写<code>=</code>符号的必要。
</section>

## Instructions
<section id='instructions'>
重写代码，使用<code>++</code>来对变量<code>myVar</code>进行自增操作。
<strong>提示</strong><br>了解更多关于<code>++</code>运算符<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#%E9%80%92%E5%A2%9E_()" target="_blank">Arithmetic operators - Increment (++)</a>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myVar</code>应该等于<code>88</code>。
    testString: assert(myVar === 88);
  - text: <code>myVar = myVar + 1;</code>语句应该被修改。
    testString: assert(/var\s*myVar\s*=\s*87;\s*\/*.*\s*myVar\+\+;/.test(code));
  - text: 使用<code>++</code>运算符。
    testString: assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
  - text: 不要修改注释上方的代码。
    testString: assert(/var myVar = 87;/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myVar = 87;

// Only change code below this line
myVar = myVar + 1;

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
var myVar = 87;
myVar++;
```

</section>
