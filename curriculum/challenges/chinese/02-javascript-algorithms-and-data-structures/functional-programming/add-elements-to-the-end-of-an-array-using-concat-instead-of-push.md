---
id: 587d7da9367417b2b2512b67
challengeType: 1
forumTopicId: 301226
title: 使用 concat 而不是 push 将元素添加到数组的末尾
---

## Description
<section id='description'>
函数式编程就是创建和使用具有不变性的函数。
上一个挑战介绍了<code>concat</code>方法，这是一种在不改变原始数组的前提下，将数组组合成新数组的方法。将<code>concat</code>方法与<code>push</code>方法做比较，<code>Push</code>将元素添加到调用它的数组的末尾，这样会改变该数组。举个例子：

```js
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
// arr is changed to [1, 2, 3, [4, 5, 6]]
// Not the functional programming way
```

<code>Concat</code>方法可以将新项目添加到数组末尾，而不产生任何变化。
</section>

## Instructions
<section id='instructions'>
修改<code>nonMutatingPush</code>函数，用<code>concat</code>替代<code>push</code>将<code>newItem</code>添加到<code>original</code>末尾，该函数应返回一个数组。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该使用<code>concat</code>方法。
    testString: assert(code.match(/\.concat/g));
  - text: 不能使用<code>push</code>方法。
    testString: assert(!code.match(/\.push/g));
  - text: 不能改变<code>first</code>数组。
    testString: assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
  - text: 不能改变<code>second</code>数组。
    testString: assert(JSON.stringify(second) === JSON.stringify([4, 5]));
  - text: <code>nonMutatingPush([1, 2, 3], [4, 5])</code>应返回<code>[1, 2, 3, 4, 5]</code>。
    testString: assert(JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) === JSON.stringify([1, 2, 3, 4, 5]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingPush(original, newItem) {
  // Add your code below this line
  return original.push(newItem);

  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```

</section>
