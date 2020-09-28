---
id: 587d7b87367417b2b2512b43
title: Use Arrow Functions to Write Concise Anonymous Functions
challengeType: 1
forumTopicId: 301211
localeTitle: 使用箭头函数编写简洁的匿名函数
---

## Description
<section id='description'>
在 JavaScript 里，我们会经常遇到不需要给函数命名的情况，尤其是在需要将一个函数作为参数传给另外一个函数的时候。这时，我们会创建匿名函数。因为这些函数不会在其他地方复用，所以我们不需要给它们命名。
这种情况下，我们通常会使用以下语法：

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 提供了其他写匿名函数的方式的语法糖。你可以使用箭头函数：

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

当不需要函数体，只返回一个值的时候，箭头函数允许你省略<code>return</code>关键字和外面的大括号。这样就可以将一个简单的函数简化成一个单行语句。

```js
const myFunc = () => "value";
```

这段代码仍然会返回<code>value</code>。
</section>

## Instructions
<section id='instructions'>
使用箭头函数的语法重写<code>magic</code>函数，使其返回一个新的<code>Date()</code>。同时不要用<code>var</code>关键字来定义任何变量。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 替换掉<code>var</code>关键字。
    testString: getUserInput => assert(!getUserInput('index').match(/var/g));
  - text: <code>magic</code>应该为一个常量 (使用<code>const</code>)。
    testString: getUserInput => assert(getUserInput('index').match(/const\s+magic/g));
  - text: <code>magic</code>是一个<code>function</code>。
    testString: assert(typeof magic === 'function');
  - text: <code>magic()</code>返回正确的日期。
    testString: assert(magic().setHours(0,0,0,0) === new Date().setHours(0,0,0,0));
  - text: 不要使用<code>function</code>关键字。
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
const magic = () => {
  "use strict";
  return new Date();
};
```

</section>
