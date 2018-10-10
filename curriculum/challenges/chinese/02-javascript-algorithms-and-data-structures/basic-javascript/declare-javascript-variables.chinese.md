---
id: bd7123c9c443eddfaeb5bdef
title: Declare JavaScript Variables
challengeType: 1
videoUrl: ''
localeTitle: 声明JavaScript变量
---

## Description
<section id="description">在计算机科学中， <dfn>数据</dfn>是对计算机有意义的任何东西。 JavaScript提供了七种不同的<dfn>数据类型</dfn> ，它们是<code>undefined</code> ， <code>null</code> ， <code>boolean</code> ， <code>string</code> ， <code>symbol</code> ， <code>number</code>和<code>object</code> 。例如，计算机区分数字（例如数字<code>12</code> ）和<code>strings</code> （例如<code>&quot;12&quot;</code> ， <code>&quot;dog&quot;</code>或<code>&quot;123 cats&quot;</code> ，它们是字符集合。计算机可以对数字执行数学运算，但不能对字符串执行数学运算。 <dfn>变量</dfn>允许计算机以动态方式存储和操作数据。他们通过使用“标签”指向数据而不是使用数据本身来做到这一点。七种数据类型中的任何一种都可以存储在变量中。 <code>Variables</code>类似于您在数学中使用的x和y变量，这意味着它们是表示我们想要引用的数据的简单名称。计算机<code>variables</code>与数学<code>variables</code>不同之处在于它们可以在不同时间存储不同的值。我们告诉JavaScript通过将关键字<code>var</code>放在它前面来创建或<dfn>声明</dfn>变量，如下所示： <blockquote> var ourName; </blockquote>创建一个名为<code>ourName</code>的<code>variable</code> 。在JavaScript中，我们以分号结束语句。 <code>Variable</code>名可以由数字，字母和<code>$</code>或<code>_</code> ，但不能包含空格或以数字开头。 </section>

## Instructions
<section id="instructions">使用<code>var</code>关键字创建名为<code>myName</code>的变量。 <strong>暗示</strong> <br>如果你遇到<code>ourName</code>查看我们的<code>ourName</code>示例。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您应该使用<code>var</code>关键字声明<code>myName</code> ，以分号结尾
    testString: 'assert(/var\s+myName\s*;/.test(code), "You should declare <code>myName</code> with the <code>var</code> keyword, ending with a semicolon");'

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
