---
id: 587d7b8e367417b2b2512b5e
title: Avoid Mutations and Side Effects Using Functional Programming
challengeType: 1
videoUrl: ''
localeTitle: 使用功能编程避免突变和副作用
---

## Description
<section id="description">如果您还没有弄明白，上一次挑战中的问题是使用<code>tabClose()</code>函数中的<code>splice</code>调用。不幸的是， <code>splice</code>更改了它所调用的原始数组，因此对它的第二次调用使用了一个修改过的数组，并给出了意想不到的结果。这是一个更大模式的一个小例子 - 你在一个变量，数组或一个对象上调用一个函数，该函数改变了对象中的变量或其他东西。函数式编程的核心原则之一是不改变事物。变化导致错误。知道你的函数不会改变任何东西，包括函数参数或任何全局变量，更容易防止错误。前面的例子没有任何复杂的操作，但是<code>splice</code>方法改变了原始数组，并导致了一个bug。回想一下，在函数式编程中，改变或改变事物称为<code>mutation</code> ，结果称为<code>side effect</code> 。理想情况下，函数应该是<code>pure function</code> ，这意味着它不会产生任何副作用。让我们尝试掌握这门学科，不要改变代码中的任何变量或对象。 </section>

## Instructions
<section id="instructions">填写函数<code>incrementer</code>的代码，使其返回全局变量<code>fixedValue</code>的值增加1。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的函数<code>incrementer</code>不应更改<code>fixedValue</code>的值。
    testString: assert(fixedValue === 4);
  - text: 您的<code>incrementer</code>函数应返回一个大于<code>fixedValue</code>值的值。
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
// solution required
```
</section>
