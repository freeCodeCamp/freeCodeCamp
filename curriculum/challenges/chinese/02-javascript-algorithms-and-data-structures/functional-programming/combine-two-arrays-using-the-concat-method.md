---
id: 587d7da9367417b2b2512b66
challengeType: 1
forumTopicId: 301229
title: 使用 concat 方法组合两个数组
---

## Description
<section id='description'>
<code>Concatenation</code>意思是将元素连接到尾部。同理，JavaScript 为字符串和数组提供了<code>concat</code>方法。对数组来说，在一个数组上调用<code>concat</code>方法，然后提供另一个数组作为参数添加到第一个数组末尾，返回一个新数组，不会改变任何一个原始数组。举个例子：

```js
[1, 2, 3].concat([4, 5, 6]);
// 返回新数组 [1, 2, 3, 4, 5, 6]
```

</section>

## Instructions
<section id='instructions'>
在<code>nonMutatingConcat</code>函数里使用<code>concat</code>，将<code>attach</code>拼接到<code>original</code>尾部，返回拼接后的数组。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该使用<code>concat</code>方法。
    testString: assert(code.match(/\.concat/g));
  - text: 不能改变<code>first</code>数组。
    testString: assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
  - text: 不能改变<code>second</code>数组。
    testString: assert(JSON.stringify(second) === JSON.stringify([4, 5]));
  - text: <code>nonMutatingConcat([1, 2, 3], [4, 5])</code>应返回<code>[1, 2, 3, 4, 5]</code>。
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
function nonMutatingConcat(original, attach) {
  // Add your code below this line
  return original.concat(attach);
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
```

</section>
