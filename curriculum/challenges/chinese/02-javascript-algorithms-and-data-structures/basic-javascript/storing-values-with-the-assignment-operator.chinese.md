---
id: 56533eb9ac21ba0edf2244a8
title: Storing Values with the Assignment Operator
challengeType: 1

videoUrl: ''
localeTitle: Storing Values with the Assignment Operator
---

## Description
<section id='description'>
在 JavaScript 中，你可以使用赋值运算符将值存储在变量中。
<code>myVariable = 5;</code>
这条语句把<code>Number</code>类型的值<code>5</code>赋给变量<code>myVariable</code>。
赋值过程是从右到左进行的。在将值分配给运算符左侧的变量之前，将解析<code>=</code>运算符右侧的所有内容。
<blockquote>myVar = 5;<br>myNum = myVar;</blockquote>
数值<code>5</code>被赋给变量<code>myVar</code>中，然后再次将变量<code>myVar</code>解析为<code>5</code>并将其赋给<code>myNum</code>变量。
</section>

## Instructions
<section id='instructions'>
把数值<code>7</code>赋给变量 <code>a</code>。
把变量<code>a</code>中的内容赋给变量<code>b</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 不要修改注释上方的代码
    testString: assert(/var a;/.test(code) && /var b = 2;/.test(code), '不要修改注释上方的代码');
  - text: <code>a</code>的值应该是 7
    testString: assert(typeof a === 'number' && a === 7, '<code>a</code>的值应该是 7');
  - text: <code>b</code>的值应该是 7
    testString: assert(typeof b === 'number' && b === 7, '<code>b</code>的值应该是 7');
  - text: 你需要用<code>=</code>把<code>a</code>的值赋给<code>b</code>
    testString: assert(/b\s*=\s*a\s*;/g.test(code), '你需要用<code>=</code>把<code>a</code>的值赋给<code>b</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>











### Before Test
<div id='js-setup'>

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
}
```

</div>



### After Test

<div id='js-teardown'>

```js
(function(a,b){return "a = " + a + ", b = " + b;})(a,b);
```

</div>

</section>

## Solution
<section id='solution'>

```js
var a;
var b = 2;
a = 7;
b = a;
```

</section>
              