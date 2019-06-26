---
id: 587d7b85367417b2b2512b3a
title: Catch Arguments Passed in the Wrong Order When Calling a Function
challengeType: 1
videoUrl: ''
localeTitle: 调用函数时捕获以错误顺序传递的参数
---

## Description
<section id="description">继续讨论调用函数，需要注意的下一个错误是函数的参数是以错误的顺序提供的。如果参数是不同的类型，例如期望数组和整数的函数，则可能会引发运行时错误。如果参数是相同的类型（例如，所有整数），那么代码的逻辑将没有意义。确保以正确的顺序提供所有必需的参数以避免这些问题。 </section>

## Instructions
<section id="instructions">函数<code>raiseToPower</code>将基数提升为指数。不幸的是，它没有被正确调用 - 修复代码，因此<code>power</code>值是预期的8。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
