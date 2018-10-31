---
id: 56bbb991ad1ed5201cd392cc
title: Manipulate Arrays With pop()
challengeType: 1
videoUrl: ''
localeTitle: 使用pop（）操作数组
---

## Description
<section id="description">更改数组中数据的另一种方法是使用<code>.pop()</code>函数。 <code>.pop()</code>用于“弹出”数组末尾的值。我们可以通过将其赋值给变量来存储这个“弹出”值。换句话说， <code>.pop()</code>从数组中删除最后一个元素并返回该元素。任何类型的条目都可以从数组“弹出” - 数字，字符串，甚至嵌套数组。 <blockquote> <code>var threeArr = [1, 4, 6]; <br> var oneDown = threeArr.pop(); <br> console.log(oneDown); // Returns 6 <br> console.log(threeArr); // Returns [1, 4]</code> </blockquote> </section>

## Instructions
<section id="instructions">使用<code>.pop()</code>函数从<code>myArray</code>删除最后一项，将“弹出”值分配给<code>removedFromMyArray</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>myArray</code>应该只包含<code>[[&quot;John&quot;, 23]]</code> 。'
    testString: 'assert((function(d){if(d[0][0] == "John" && d[0][1] === 23 && d[1] == undefined){return true;}else{return false;}})(myArray), "<code>myArray</code> should only contain <code>[["John", 23]]</code>.");'
  - text: 在<code>myArray</code>上使用<code>pop()</code>
    testString: 'assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code), "Use <code>pop()</code> on <code>myArray</code>");'
  - text: '<code>removedFromMyArray</code>应该只包含<code>[&quot;cat&quot;, 2]</code> 。'
    testString: 'assert((function(d){if(d[0] == "cat" && d[1] === 2 && d[2] == undefined){return true;}else{return false;}})(removedFromMyArray), "<code>removedFromMyArray</code> should only contain <code>["cat", 2]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray;

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
