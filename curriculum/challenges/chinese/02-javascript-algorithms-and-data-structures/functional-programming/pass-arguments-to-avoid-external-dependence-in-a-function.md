---
id: 587d7b8e367417b2b2512b5f
challengeType: 1
forumTopicId: 301234
title: 传递参数以避免函数中的外部依赖
---

## Description
<section id='description'>
上一个挑战是更接近函数式编程原则的挑战，但是仍然缺少一些东西。
虽然我们没有改变全局变量值，但在没有全局变量<code>fixedValue</code>情况下，<code>incrementer</code>函数将不起作用。
函数式编程的另一个原则是：总是显式声明依赖关系。如果函数依赖于一个变量或对象，那么将该变量或对象作为参数直接传递到函数中。
这样做会有很多好处，其中一点是让函数更容易测试，因为你确切地知道参数是什么，并且这个参数也不依赖于程序中的任何其他内容。
其次，这样做可以让你更加自信地更改，删除或添加新代码。因为你很清楚哪些是可以改的，哪些是不可以改的，这样你就知道哪里可能会有潜在的陷阱。
最后，无论代码的哪一部分执行它，函数总是会为同一组输入生成相同的输出。
</section>

## Instructions
<section id='instructions'>
更新<code>incrementer</code>函数，明确声明其依赖项。
编写<code>incrementer</code>函数，获取它的参数，然后将值增加 1。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>incrementer</code>函数不能修改<code>fixedValue</code>的值。
    testString: assert(fixedValue === 4);
  - text: <code>incrementer</code>函数应该接收一个参数。
    testString: assert(incrementer.length === 1);
  - text: <code>incrementer</code>函数应返回比<code>fixedValue</code>更大的值。
    testString: assert(newValue === 5);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer () {


  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
```

</div>



</section>

## Solution
<section id='solution'>

```js
// the global variable
var fixedValue = 4;

const incrementer = val => val + 1;

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
```

</section>
