---
id: 587d7da9367417b2b2512b66
title: Combine Two Arrays Using the concat Method
challengeType: 1
videoUrl: ''
localeTitle: 使用concat方法组合两个数组
---

## Description
<section id="description"> <code>Concatenation</code>意味着端到端地连接项目。 JavaScript为字符串和数组提供了以相同方式工作的<code>concat</code>方法。对于数组，该方法在一个上调用，然后另一个数组作为<code>concat</code>的参数提供，该数组被添加到第一个数组的末尾。它返回一个新数组，不会改变任何一个原始数组。这是一个例子： <blockquote> [1,2,3] .concat（[4,5,6]）; <br> //返回一个新数组[1,2,3,4,5,6] </blockquote></section>

## Instructions
<section id="instructions">使用<code>nonMutatingConcat</code>函数中的<code>concat</code>方法<code>attach</code>到<code>original</code>的结尾。该函数应返回连接数组。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用<code>concat</code>方法。
    testString: assert(code.match(/\.concat/g));
  - text: 第<code>first</code>数组不应该改变。
    testString: assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
  - text: <code>second</code>数组不应该改变。
    testString: assert(JSON.stringify(second) === JSON.stringify([4, 5]));
  - text: '<code>nonMutatingConcat([1, 2, 3], [4, 5])</code>应该返回<code>[1, 2, 3, 4, 5]</code> 。'
    testString: assert(JSON.stringify(nonMutatingConcat([1, 2, 3], [4, 5])) === JSON.stringify([1, 2, 3, 4, 5]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingConcat(original, attach) {
  // Add your code below this line


  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
