---
id: 587d7b7b367417b2b2512b14
title: Check For The Presence of an Element With indexOf()
challengeType: 1
videoUrl: ''
localeTitle: 使用indexOf（）检查元素是否存在
---

## Description
<section id="description">由于数组可以随时更改或<em>变异</em> ，因此无法保证特定数据在特定数组中的位置，或者该元素是否仍然存在。幸运的是，JavaScript为我们提供了另一种内置方法<code>indexOf()</code> ，它允许我们快速，轻松地检查数组中元素的存在。 <code>indexOf()</code>接受一个元素作为参数，并在调用时返回该元素的位置或索引，如果该元素在数组中不存在，则返回<code>-1</code> 。例如： <blockquote>让水果= [&#39;苹果&#39;，&#39;梨&#39;，&#39;橙子&#39;，&#39;桃子&#39;，&#39;梨子&#39;]; <br><br> fruits.indexOf（&#39;dates&#39;）//返回-1 <br> fruits.indexOf（&#39;oranges&#39;）//返回2 <br> fruits.indexOf（&#39;pears&#39;）//返回1，元素所在的第一个索引</blockquote></section>

## Instructions
<section id="instructions"> <code>indexOf()</code>对于快速检查数组中是否存在元素非常有用。我们定义了一个函数<code>quickCheck</code> ，它将一个数组和一个元素作为参数。使用<code>indexOf()</code>修改函数，以便在传递的元素存在于数组时返回<code>true</code>如果不存在则返回<code>false</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>quickCheck([&quot;squash&quot;, &quot;onions&quot;, &quot;shallots&quot;], &quot;mushrooms&quot;)</code>应该返回<code>false</code>'
    testString: 'assert.strictEqual(quickCheck(["squash", "onions", "shallots"], "mushrooms"), false, "<code>quickCheck(["squash", "onions", "shallots"], "mushrooms")</code> should return <code>false</code>");'
  - text: '<code>quickCheck([&quot;squash&quot;, &quot;onions&quot;, &quot;shallots&quot;], &quot;onions&quot;)</code>应该返回<code>true</code>'
    testString: 'assert.strictEqual(quickCheck(["squash", "onions", "shallots"], "onions"), true, "<code>quickCheck(["squash", "onions", "shallots"], "onions")</code> should return <code>true</code>");'
  - text: '<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code>应该返回<code>true</code>'
    testString: 'assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true, "<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> should return <code>true</code>");'
  - text: '<code>quickCheck([true, false, false], undefined)</code>应返回<code>false</code>'
    testString: 'assert.strictEqual(quickCheck([true, false, false], undefined), false, "<code>quickCheck([true, false, false], undefined)</code> should return <code>false</code>");'
  - text: <code>quickCheck</code>函数应该使用<code>indexOf()</code>方法
    testString: 'assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1, "The <code>quickCheck</code> function should utilize the <code>indexOf()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quickCheck(arr, elem) {
  // change code below this line

  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
