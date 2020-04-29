---
id: bd7123c9c443eddfaeb5bdef
title: Declare JavaScript Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNanrHq'
forumTopicId: 17556
localeTitle: 声明变量
---

## Description
<section id='description'>
在计算机科学中，<dfn>数据</dfn>就是一切，它对于计算机意义重大。JavaScript 提供七种不同的<dfn>数据类型</dfn>，它们是<code>undefined</code>（未定义）， <code>null</code>（空），<code>boolean</code>（布尔型），<code>string</code>（字符串），<code>symbol</code>(符号)，<code>number</code>（数字），和<code>object</code>（对象）。
例如，计算机区分数字和字符集合的字符串，例如数字<code>12</code>和字符串<code>"12"</code>，<code>"dog"</code>或<code>"123 cats"</code>。计算机可以对数字执行数学运算，但不能对字符串执行数学运算。
<dfn>变量</dfn>允许计算机以一种动态的形式来存储和操作数据，通过操作指向数据的指针而不是数据本身来避免了内存泄露，以上的七种数据类型都可以存储到一个变量中。
<code>变量</code>非常类似于你在数学中使用的 x，y 变量，都是以一个简单命名的名称来代替我们赋值给它的数据。计算机中的<code>变量</code>与数学中的变量不同的是，计算机可以在不同的时间存储不同类型的变量。
通过在变量的前面使用关键字<code>var</code>，声明一个变量，例如：

```js
var ourName;
```

上面代码的意思是创建一个名为<code>ourName</code>的<code>变量</code>，在 JavaScript 中我们以分号结束语句。
<code>变量</code>名称可以由数字、字母、美元符号<code>$</code> 或者 下划线<code>_</code>组成，但是不能包含空格或者以数字为开头。
</section>

## Instructions
<section id='instructions'>
使用<code>var</code> 关键字来创建一个名为<code>myName</code>的变量。
<strong>提示</strong><br>如果遇到困难了，请看下<code>ourName</code>的例子是怎么写的。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你需要使用<code>var</code>关键字定义一个变量<code>myName</code>，并使用分号结尾。
    testString: assert(/var\s+myName\s*;/.test(code), '你需要使用<code>var</code>关键字定义一个变量<code>myName</code>。并使用分号结尾。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourName;

// Declare myName below this line

```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof myName !== "undefined"){(function(v){return v;})(myName);}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myName;
```

</section>
