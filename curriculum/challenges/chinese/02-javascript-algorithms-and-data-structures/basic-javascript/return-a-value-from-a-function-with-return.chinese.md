---
id: 56533eb9ac21ba0edf2244c2
title: Return a Value from a Function with Return
challengeType: 1
videoUrl: ''
localeTitle: 从带返回的函数返回值
---

## Description
<section id="description">我们可以将值传递给带<dfn>参数</dfn>的函数。您可以使用<code>return</code>语句从函数中发回一个值。 <strong>例</strong> <blockquote> function plusThree（num）{ <br>返回num + 3; <br> } <br> var answer = plusThree（5）; // 8 </blockquote> <code>plusThree</code>接受<code>num</code>的<dfn>参数</dfn>并返回一个等于<code>num + 3</code>的值。 </section>

## Instructions
<section id="instructions">创建一个接受一个参数的函数<code>timesFive</code> ，将其乘以<code>5</code> ，然后返回新值。有关如何测试<code>timesFive</code>函数的示例，请参阅编辑器中的最后一行。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>timesFive</code>应该是一个功能
    testString: 'assert(typeof timesFive === "function", "<code>timesFive</code> should be a function");'
  - text: <code>timesFive(5)</code>应该返回<code>25</code>
    testString: 'assert(timesFive(5) === 25, "<code>timesFive(5)</code> should return <code>25</code>");'
  - text: <code>timesFive(2)</code>应该返回<code>10</code>
    testString: 'assert(timesFive(2) === 10, "<code>timesFive(2)</code> should return <code>10</code>");'
  - text: <code>timesFive(0)</code>应该返回<code>0</code>
    testString: 'assert(timesFive(0) === 0, "<code>timesFive(0)</code> should return <code>0</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line



console.log(minusSeven(10));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
