---
id: 587d7b8b367417b2b2512b50
title: Write Concise Declarative Functions with ES6
challengeType: 1
videoUrl: ''
localeTitle: 用ES6编写简明的声明函数
---

## Description
<section id="description">在ES5中定义对象内的函数时，我们必须使用关键字<code>function</code> ，如下所示： <blockquote> const person = { <br>名称：“泰勒”， <br> sayHello：function（）{ <br>回来`你好！我的名字是$ {this.name} .`; <br> } <br> }; </blockquote>使用ES6，您可以在定义对象中的函数时完全删除<code>function</code>关键字和冒号。以下是此语法的示例： <blockquote> const person = { <br>名称：“泰勒”， <br>问好（） { <br>回来`你好！我的名字是$ {this.name} .`; <br> } <br> }; </blockquote></section>

## Instructions
<section id="instructions">重构对象<code>bicycle</code>内的函数<code>setGear</code>以使用上述简写语法。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 未使用传统函数表达式。
    testString: 'assert(!getUserInput("index").match(/function/),"Traditional <code>function</code> expression was not used.");'
  - text: <code>setGear</code>是一个声明函数。
    testString: 'assert(typeof bicycle.setGear === "function" && getUserInput("index").match(/setGear\s*\(.+\)\s*\{/), "<code>setGear</code> is a declarative function.");'
  - text: ''
    testString: 'assert((new bicycle.setGear(48)).gear === 48, "<code>bicycle.setGear(48)</code> changes the <code>gear</code> value to 48.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
