---
id: 587d7b87367417b2b2512b40
title: Compare Scopes of the var and let Keywords
challengeType: 1
forumTopicId: 301195
localeTitle: 比较 var 和 let 关键字的作用域
---

## Description
<section id='description'>
当你使用<code>var</code>关键字来声明一个变量的时候，这个变量会被声明成全局变量，或是函数内的局部变量。
<code>let</code>关键字的作用类似，但会有一些额外的特性。如果你在代码块、语句或表达式中使用关键字<code>let</code>声明变量，这个变量的作用域就被限制在当前的代码块，语句或表达式之中。
举个例子：

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// 返回 [0, 1, 2]
console.log(i);
// 返回 3
```

当使用<code>var</code>关键字的时候，<code>i</code>会被声明成全局变量。当<code>i++</code>执行的时候，它会改变全局变量的值。这段代码可以看做下面这样:

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// 返回 [0, 1, 2]
console.log(i);
// 返回 3
```

如果你在<code>for</code>循环中创建了使用<code>i</code>变量的函数，那么在后续调用函数的时候，上面提到的这种行为就会出现问题。这是因为函数存储的值会因为全局变量<code>i</code>的变化而不断的改变。

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// 返回 3
```

可以看到，<code>printNumTwo()</code>打印了 3 而不是 2。这是因为<code>i</code>发生了改变，并且函数<code>printNumTwo()</code>返回的是全局变量<code>i</code>的值，而不是<code>for</code>循环中创建函数时<code>i</code>的值。<code>let</code>关键字就不会有这种现象：

```js
'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// 返回 2
console.log(i);
// 返回 "i 未定义"
```

<code>i</code>在全局作用域中没有声明，所以它没有被定义，它的声明只会发生在<code>for</code>循环内。在循环执行的时候，<code>let</code>关键字创建了三个不同的<code>i</code>变量，他们的值分别为 0、1 和 2，所以<code>printNumTwo()</code>返回了正确的值。
</section>

## Instructions
<section id='instructions'>
修改这段代码，使得在<code>if</code>语句中声明的<code>i</code>变量与在函数的第一行声明的<code>i</code>变量是彼此独立的。请注意不要在你的代码的任何地方使用<code>var</code>关键字。
这个练习说明了使用<code>var</code>与<code>let</code>关键字声明变量时，作用域之间的不同。当编写类似这个练习中的函数的时候，通常来说最好还是使用不同的变量名来避免误会。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code>不应该在代码中存在。
    testString: getUserInput => assert(!getUserInput('index').match(/var/g));
  - text: "在<code>if</code>语句中声明的<code>i</code>变量的值是 'block scope'。"
    testString: getUserInput => assert(getUserInput('index').match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
  - text: "<code>checkScope()</code>应当返回 'function scope'"
    testString: assert(checkScope() === "function scope");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkScope() {
  'use strict';
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

</div>



</section>

## Solution
<section id='solution'>

```js
function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
 
  console.log('Function scope i is: ', i);
  return i;
}
```

</section>
