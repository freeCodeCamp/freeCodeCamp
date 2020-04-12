---
id: 587d7b87367417b2b2512b43
title: Use Arrow Functions to Write Concise Anonymous Functions
challengeType: 1
videoUrl: ''
localeTitle: 使用箭头函数编写简明的匿名函数
---

## Description
<section id="description">在JavaScript中，我们通常不需要命名我们的函数，特别是在将函数作为参数传递给另一个函数时。相反，我们创建内联函数。我们不需要命名这些函数，因为我们不会在其他任何地方重用它们。为此，我们经常使用以下语法： <blockquote> const myFunc = function（）{ <br> const myVar =“value”; <br>返回myVar; <br> } </blockquote> ES6为我们提供了语法糖，而不必以这种方式编写匿名函数。相反，您可以使用<strong>箭头函数语法</strong> ： <blockquote> const myFunc =（）=&gt; { <br> const myVar =“value”; <br>返回myVar; <br> } </blockquote>当没有函数体，并且只有返回值时，箭头函数语法允许您省略关键字<code>return</code>以及代码周围的括号。这有助于将较小的函数简化为单行语句： <blockquote> const myFunc =（）=&gt;“value” </blockquote>默认情况下，此代码仍将返回<code>value</code> 。 </section>

## Instructions
<section id="instructions">重写分配给变量<code>magic</code>的函数，该函数返回一个新的<code>Date()</code>以使用箭头函数语法。还要确保使用关键字<code>var</code>定义任何内容。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 用户确实替换了<code>var</code>关键字。
    testString: getUserInput => assert(!getUserInput('index').match(/var/g));
  - text: <code>magic</code>应该是一个常量变量（通过使用<code>const</code> ）。
    testString: getUserInput => assert(getUserInput('index').match(/const\s+magic/g));
  - text: <code>magic</code>是一种<code>function</code> 。
    testString: assert(typeof magic === 'function');
  - text: <code>magic()</code>返回正确的日期。
    testString: assert(magic().setHours(0,0,0,0) === new Date().setHours(0,0,0,0));
  - text: <code>function</code>关键字未使用。
    testString: getUserInput => assert(!getUserInput('index').match(/function/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var magic = function() {
  "use strict";
  return new Date();
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
