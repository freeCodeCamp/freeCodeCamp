---
id: 587d78b2367417b2b2512b0f
title: Remove Items from an Array with pop() and shift()
challengeType: 1
forumTopicId: 301165
localeTitle: 使用 pop() 和 shift() 从数组中删除项目
---

## Description
<section id='description'>
<code>push()</code>和<code>unshift()</code>都分别有一个作用基本与之相反的函数：<code>pop()</code>和<code>shift()</code>。你现在或许已经猜到，与插入元素相反，<code>pop()</code>从数组的末尾<em>移除</em>一个元素，而<code>shift()</code>从数组的开头移除一个元素。<code>pop()</code>和<code>shift()</code>与对应的<code>push()</code>和<code>unshift()</code>的关键区别在于，前者不能接受输入参数，而且每次只能修改数组中的一个元素。
让我们来看以下的例子：

```js
let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']
```

还可以用这些方法返回移除的元素，像这样：

```js
let popped = greetings.pop();
// returns 'hello'
// greetings now equals []
```

</section>

## Instructions
<section id='instructions'>
我们已经定义了一个<code>popShift</code>函数，它会接收一个数组作为输入参数并返回一个新的数组。请你修改这个函数，使用<code>pop()</code>和<code>shift()</code>来移除输入的数组的第一个元素和最后一个元素，并将这两个被移除的元素赋值给对应的变量，使得返回的数组包含它们的值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>popShift([&quot;challenge&quot;, &quot;is&quot;, &quot;not&quot;, &quot;complete&quot;])</code>应返回<code>[&quot;challenge&quot;, &quot;complete&quot;]</code>'
    testString: assert.deepEqual(popShift(['challenge', 'is', 'not', 'complete']), ["challenge", "complete"]);
  - text: <code>popShift</code>函数应该使用<code>pop()</code>方法
    testString: assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1);
  - text: <code>popShift</code>函数应该使用<code>shift()</code>方法
    testString: assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function popShift(arr) {
  let popped; // change this line
  let shifted; // change this line
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));
```

</div>



</section>

## Solution
<section id='solution'>

```js
function popShift(arr) {
  let popped = arr.pop(); // change this line
  let shifted = arr.shift(); // change this line
  return [shifted, popped];
}
```

</section>
