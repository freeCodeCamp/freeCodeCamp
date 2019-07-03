---
id: 587d78b2367417b2b2512b0f
title: Remove Items from an Array with pop() and shift()
challengeType: 1

videoUrl: ''
localeTitle: Remove Items from an Array with pop() and shift()
---

## Description
<section id='description'>
<code>push()</code>和<code>unshift()</code>都分别有一个作用基本与之相反的函数：<code>pop()</code>和<code>shift()</code>。你现在或许已经猜到，与插入元素相反，<code>pop()</code>从数组的末尾<em>移除</em>一个元素，而<code>shift()</code>从数组的开头移除一个元素。<code>pop()</code>和<code>shift()</code>与对应的<code>push()</code>和<code>unshift()</code>的关键区别在于，前者不能接受输入参数，而且每次只能修改数组中的一个元素。
让我们来看以下的例子：
<blockquote>let greetings = ['whats up?', 'hello', 'see ya!'];<br><br>greetings.pop();<br>// 数组现在等于 ['whats up?', 'hello']<br><br>greetings.shift();<br>// 数组现在等于 ['hello']</blockquote>
对于上述两个方法中的任意一个，我们都可以返回被其移除的元素：
<blockquote>let popped = greetings.pop();<br>// 返回 'hello'<br>// greetings 现在等于 []</blockquote>
</section>

## Instructions
<section id='instructions'>
我们已经定义了一个<code>popShift</code>函数，它会接收一个数组作为输入参数并返回一个新的数组。请你修改这个函数，使用<code>pop()</code>和<code>shift()</code>来移除输入的数组的第一个元素和最后一个元素，并将这两个被移除的元素赋值给对应的变量，使得返回的数组包含它们的值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "<code>popShift(['challenge', 'is', 'not', 'complete'])</code>应该返回<code>['challenge', 'complete']</code>。"
    testString: assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), ["challenge", "complete"], '<code>popShift(["challenge", "is", "not", "complete"])</code>应该返回<code>["challenge", "complete"]</code>。');
  - text: <code>popShift</code>函数应该用到<code>pop()</code>方法。
    testString: assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1, '<code>popShift</code>函数应该用到<code>pop()</code>方法。');
  - text: <code>popShift</code>函数应该用到<code>shift()</code>方法。
    testString: assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1, '<code>popShift</code>函数应该用到<code>shift()</code>方法。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















</section>

              