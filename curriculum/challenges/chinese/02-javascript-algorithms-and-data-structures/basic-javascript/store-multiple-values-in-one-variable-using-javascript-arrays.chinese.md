---
id: bd7993c9c69feddfaeb8bdef
title: Store Multiple Values in one Variable using JavaScript Arrays
challengeType: 1
videoUrl: ''
localeTitle: 使用JavaScript数组在一个变量中存储多个值
---

## Description
<section id="description">使用JavaScript <code>array</code>变量，我们可以在一个地方存储多个数据。你开始一个带有开口方括号的数组声明，用一个结束的方括号结束，并在每个条目之间加一个逗号，如下所示： <code>var sandwich = [&quot;peanut butter&quot;, &quot;jelly&quot;, &quot;bread&quot;]</code> 。 </section>

## Instructions
<section id="instructions">修改新数组<code>myArray</code> ，使其包含<code>string</code>和<code>number</code> （ <code>myArray</code>顺序）。 <strong>暗示</strong> <br>如果卡住，请参阅文本编辑器中的示例代码。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code>应该是一个<code>array</code> 。
    testString: 'assert(typeof myArray == "object", "<code>myArray</code> should be an <code>array</code>.");'
  - text: <code>myArray</code>的第一项应该是一个<code>string</code> 。
    testString: 'assert(typeof myArray[0] !== "undefined" && typeof myArray[0] == "string", "The first item in <code>myArray</code> should be a <code>string</code>.");'
  - text: <code>myArray</code>的第二项应该是一个<code>number</code> 。
    testString: 'assert(typeof myArray[1] !== "undefined" && typeof myArray[1] == "number", "The second item in <code>myArray</code> should be a <code>number</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = [];

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
