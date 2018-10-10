---
id: 587d78b2367417b2b2512b0f
title: Remove Items from an Array with pop() and shift()
challengeType: 1
videoUrl: ''
localeTitle: 使用pop（）和shift（）从数组中删除项
---

## Description
<section id="description"> <code>push()</code>和<code>unshift()</code>都有相应的几乎相反的方法： <code>pop()</code>和<code>shift()</code> 。正如您现在可能已经猜到的那样， <code>pop()</code>不是添加，而是从数组的末尾<em>删除</em>元素，而<code>shift()</code>从头开始删除元素。 <code>pop()</code>和<code>shift()</code>及其兄弟<code>push()</code>和<code>unshift()</code>之间的关键区别在于，两个方法都不接受参数，并且每个方法只允许一次由单个元素修改数组。让我们来看看： <blockquote>让问候= [&#39;什么事情？&#39;，&#39;你好&#39;，&#39;看到你！&#39;]; <br><br> greetings.pop（）; <br> //现在等于[&#39;whats up？&#39;，&#39;hello&#39;] <br><br> greetings.shift（）; <br> //现在等于[&#39;你好&#39;] </blockquote>我们还可以使用以下任一方法返回已删除元素的值： <blockquote> let popped = greetings.pop（）; <br> //返回&#39;你好&#39; <br> //问候现在等于[] </blockquote></section>

## Instructions
<section id="instructions">我们定义了一个函数<code>popShift</code> ，它将一个数组作为参数并返回一个新数组。使用<code>pop()</code>和<code>shift()</code>修改函数，删除参数数组的第一个和最后一个元素，并将删除的元素分配给它们对应的变量，以便返回的数组包含它们的值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>popShift([&quot;challenge&quot;, &quot;is&quot;, &quot;not&quot;, &quot;complete&quot;])</code>应返回<code>[&quot;challenge&quot;, &quot;complete&quot;]</code>'
    testString: 'assert.deepEqual(popShift(["challenge", "is", "not", "complete"]), ["challenge", "complete"], "<code>popShift(["challenge", "is", "not", "complete"])</code> should return <code>["challenge", "complete"]</code>");'
  - text: <code>popShift</code>函数应该使用<code>pop()</code>方法
    testString: 'assert.notStrictEqual(popShift.toString().search(/\.pop\(/), -1, "The <code>popShift</code> function should utilize the <code>pop()</code> method");'
  - text: <code>popShift</code>函数应该使用<code>shift()</code>方法
    testString: 'assert.notStrictEqual(popShift.toString().search(/\.shift\(/), -1, "The <code>popShift</code> function should utilize the <code>shift()</code> method");'

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
// solution required
```
</section>
