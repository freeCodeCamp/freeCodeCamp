---
id: 587d7b8e367417b2b2512b5e
title: Avoid Mutations and Side Effects Using Functional Programming
challengeType: 1
forumTopicId: 301228
localeTitle: 使用函数式编程避免变化和副作用
---

## Description
<section id='description'>
如果你还没想通，上一个挑战的问题出在<code>tabClose()</code>函数里的<code>splice</code>。不幸的是，<code>splice</code>修改了调用它的原始数组，所以第二次调用它时是基于修改后的数组，才给出了意料之外的结果。
这是一个小例子，还有更广义的定义——在变量，数组或对象上调用一个函数，这个函数会改变对象中的变量或其他东西。
函数式编程的核心原则之一是不改变任何东西。变化会导致错误。如果一个函数不改变传入的参数、全局变量等数据，那么它造成问题的可能性就会小很多。
前面的例子没有任何复杂的操作，但是<code>splice</code>方法改变了原始数组，导致 bug 产生。
回想一下，在函数式编程中，改变或变更叫做<code>mutation</code>，这种改变的结果叫做“副作用”（<code>side effect</code>）。理想情况下，函数应该是不会产生任何副作用的<code>纯函数</code>。
让我们尝试掌握这个原则：不要改变代码中的任何变量或对象。
</section>

## Instructions
<section id='instructions'>
填写<code>incrementer</code>函数的代码，使其返回全局变量<code>fixedValue</code>的值增加 1。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>incrementer</code>函数不能改变<code>fixedValue</code>的值。
    testString: assert(fixedValue === 4);
  - text: <code>incrementer</code>函数应返回比<code>fixedValue</code>变量更大的值。
    testString: assert(newValue === 5);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line


  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4
```

</div>



</section>

## Solution
<section id='solution'>

```js
var fixedValue = 4

function incrementer() {
  return fixedValue + 1
}

var newValue = incrementer(); // Should equal 5
```

</section>
