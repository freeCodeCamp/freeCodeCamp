---
id: 587d7b87367417b2b2512b41
challengeType: 1
forumTopicId: 301201
title: 用 const 关键字声明只读变量
---

## Description
<section id='description'>
<code>let</code>并不是唯一的新的声明变量的方式。在 ES6里面，你还可以使用<code>const</code>关键字来声明变量。
<code>const</code>拥有<code>let</code>的所有优点，所不同的是，通过<code>const</code>声明的变量是只读的。这意味着通过<code>const</code>声明的变量只能被赋值一次，而不能被再次赋值。

```js
"use strict";
const FAV_PET = "Cats";
FAV_PET = "Dogs"; // returns error
```

可以看见，尝试给通过<code>const</code>声明的变量再次赋值会报错。你应该使用<code>const</code>关键字来对所有不打算再次赋值的变量进行声明。这有助于你避免给一个常量进行额外的再次赋值。一个最佳实践是对所有常量的命名采用全大写字母，并在单词之间使用下划线进行分隔。

  <strong>注意：</strong> 一般开发者会以大写做为常量标识符，小写字母或者驼峰命名做为变量（对象或数组）标识符。接下来的挑战里会涉及到小写变量标识符的数组。
</section>

## Instructions
<section id='instructions'>
改变以下代码，使得所有的变量都使用<code>let</code>或<code>const</code>关键词来声明。当变量将会改变的时候使用<code>let</code>关键字，当变量要保持常量的时候使用<code>const</code>关键字。同时，对使用<code>const</code>声明的变量按照最佳实践重命名，变量名中的字母应该都是大写的。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code>在代码中不存在。
    testString: getUserInput => assert(!getUserInput('index').match(/var/g));
  - text: <code>SENTENCE</code>应该是使用<code>const</code>声明的常量。
    testString: getUserInput => assert(getUserInput('index').match(/(const SENTENCE)/g));
  - text: <code>i</code>应该是使用<code>let</code>声明的变量。
    testString: getUserInput => assert(getUserInput('index').match(/(let i)/g));
  - text: <code>console.log</code>应该修改为用于打印<code>SENTENCE</code>变量。
    testString: getUserInput => assert(getUserInput('index').match(/console\.log\(\s*SENTENCE\s*\)\s*;?/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function printManyTimes(str) {
  "use strict";

  // change code below this line

  var sentence = str + " is cool!";
  for (var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
```

</div>



</section>

## Solution
<section id='solution'>

```js
function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
```

</section>
