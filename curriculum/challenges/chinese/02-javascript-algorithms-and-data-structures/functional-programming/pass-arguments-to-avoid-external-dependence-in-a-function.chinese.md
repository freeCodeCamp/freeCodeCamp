---
id: 587d7b8e367417b2b2512b5f
title: Pass Arguments to Avoid External Dependence in a Function
challengeType: 1
videoUrl: ''
localeTitle: 传递参数以避免函数中的外部依赖
---

## Description
<section id="description">最后一个挑战是向功能编程原则迈进了一步，但仍然缺少一些东西。我们没有改变全局变量值，但是如果没有全局变量<code>fixedValue</code> ，函数<code>incrementer</code>将无法工作。函数式编程的另一个原则是始终明确声明您的依赖项。这意味着如果函数依赖于存在的变量或对象，则将该变量或对象作为参数直接传递给函数。这个原则有几个好的结果。该函数更容易测试，您确切知道它需要什么输入，并且它不依赖于程序中的任何其他内容。当您更改，删除或添加新代码时，这可以让您更有信心。你会知道你可以或不可以改变什么，你可以看到潜在陷阱的位置。最后，无论代码的哪一部分执行，函数总是会为同一组输入生成相同的输出。 </section>

## Instructions
<section id="instructions">让我们更新<code>incrementer</code>函数以清楚地声明其依赖关系。编写<code>incrementer</code>函数，使其获取参数，然后将值增加1。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的函数<code>incrementer</code>不应更改<code>fixedValue</code>的值。
    testString: 'assert(fixedValue === 4, "Your function <code>incrementer</code> should not change the value of <code>fixedValue</code>.");'
  - text: 您的<code>incrementer</code>功能应该采用参数。
    testString: 'assert(code.match(/function\s+?incrementer\s*?\(.+?\)/g), "Your <code>incrementer</code> function should take a parameter.");'
  - text: 您的<code>incrementer</code>函数应返回一个大于<code>fixedValue</code>值的值。
    testString: 'assert(newValue === 5, "Your <code>incrementer</code> function should return a value that is one larger than the <code>fixedValue</code> value.");'

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
// solution required
```
</section>
