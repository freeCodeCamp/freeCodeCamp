---
id: 587d8250367417b2b2512c5f
challengeType: 1
videoUrl: ''
title: 创建一个堆栈类
---

## Description
<section id="description">在上一节中，我们讨论了堆栈是什么以及如何使用数组来表示堆栈。在本节中，我们将创建自己的堆栈类。虽然您可以使用数组来创建堆栈，但有时最好限制我们对堆栈的控制量。除了<code>push</code>和<code>pop</code>方法之外，堆栈还有其他有用的方法。让我们为我们的堆栈类添加一个<code>peek</code> ， <code>isEmpty</code>和<code>clear</code>方法。说明编写一个<code>push</code>方法，将元素推送到堆栈顶部，一个<code>pop</code>方法删除堆栈顶部的元素，一个<code>peek</code>堆栈中第一个元素的<code>peek</code>方法，一个<code>isEmpty</code>方法，用于检查是否存在stack是空的，是一个<code>clear</code>堆栈中所有元素的方法。通常堆栈没有这个，但我们添加了一个控制台记录集合的<code>print</code>助手方法。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>Stack</code>类应该有一个<code>push</code>方法。
    testString: assert((function(){var test = new Stack(); return (typeof test.push === 'function')}()));
  - text: 你的<code>Stack</code>类应该有一个<code>pop</code>方法。
    testString: assert((function(){var test = new Stack(); return (typeof test.pop === 'function')}()));
  - text: 你的<code>Stack</code>类应该有一个<code>peek</code>方法。
    testString: assert((function(){var test = new Stack(); return (typeof test.peek === 'function')}()));
  - text: 您的<code>Stack</code>类应该有一个<code>isEmpty</code>方法。
    testString: assert((function(){var test = new Stack(); return (typeof test.isEmpty === 'function')}()));
  - text: 你的<code>Stack</code>类应该有一个<code>clear</code>方法。
    testString: assert((function(){var test = new Stack(); return (typeof test.clear === 'function')}()));
  - text: <code>peek</code>方法应该返回堆栈的顶部元素
    testString: assert((function(){var test = new Stack();  test.push('CS50'); return (test.peek() === 'CS50')}()));
  - text: <code>pop</code>方法应该删除并返回堆栈的顶部元素
    testString: assert((function(){var test = new Stack(); test.push('CS50'); return (test.pop() === 'CS50');}()));
  - text: 如果堆栈不包含任何元素，则<code>isEmpty</code>方法应返回true
    testString: assert((function(){var test = new Stack(); return test.isEmpty()}()));
  - text: <code>clear</code>方法应该从堆栈中删除所有元素
    testString: assert((function(){var test = new Stack();  test.push('CS50'); test.clear(); return (test.isEmpty())}()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Stack() {
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line

    // Only change code above this line
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
