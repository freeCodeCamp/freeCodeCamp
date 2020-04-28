---
id: 56533eb9ac21ba0edf2244ac
title: Increment a Number with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: 使用JavaScript增加数字
---

## Description
<section id="description">您可以轻松地<dfn>增加</dfn>或添加一个变量与<code>++</code>运算符。 <code>i++;</code>相当于<code>i = i + 1;</code> <strong>注意</strong> <br>整行成为<code>i++;</code> ，消除了对等号的需要。 </section>

## Instructions
<section id="instructions">更改代码以在<code>myVar</code>上使用<code>++</code>运算符。 <strong>暗示</strong> <br>了解有关<a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_()" target="_blank">算术运算符的</a>更多信息<a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_()" target="_blank">- 增量（++）</a> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myVar</code>应该等于<code>88</code>
    testString: assert(myVar === 88);
  - text: <code>myVar = myVar + 1;</code>应该改变
    testString: assert(/var\s*myVar\s*=\s*87;\s*\/*.*\s*([+]{2}\s*myVar|myVar\s*[+]{2});/.test(code));
  - text: 使用<code>++</code>运算符
    testString: assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code));
  - text: 不要更改行上方的代码
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
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
