---
id: 587d7da9367417b2b2512b67
title: Add Elements to the End of an Array Using concat Instead of push
challengeType: 1
videoUrl: ''
localeTitle: 使用concat将元素添加到数组的末尾而不是push
---

## Description
<section id="description">函数式编程就是创建和使用非变异函数。最后一个挑战是将<code>concat</code>方法作为一种将数组组合成新数组而不改变原始数组的方法。将<code>concat</code>与<code>push</code>方法进行比较。 <code>Push</code>将一个项添加到调用它的同一个数组的末尾，这会改变该数组。这是一个例子： <blockquote> var arr = [1,2,3]; <br> arr.push（[4,5,6]）; <br> // arr更改为[1,2,3，[4,5,6]] <br> //不是函数式编程方式</blockquote> <code>Concat</code>提供了一种在数组末尾添加新项目而无任何变异副作用的方法。 </section>

## Instructions
<section id="instructions">更改<code>nonMutatingPush</code>函数，使其使用<code>concat</code>将<code>newItem</code>添加到<code>original</code>结尾而不是<code>push</code> 。该函数应返回一个数组。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应使用<code>concat</code>方法。
    testString: assert(code.match(/\.concat/g));
  - text: 您的代码不应使用<code>push</code>方法。
    testString: assert(!code.match(/\.push/g));
  - text: 第<code>first</code>数组不应该改变。
    testString: assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
  - text: <code>second</code>数组不应该改变。
    testString: assert(JSON.stringify(second) === JSON.stringify([4, 5]));
  - text: '<code>nonMutatingPush([1, 2, 3], [4, 5])</code>应该返回<code>[1, 2, 3, 4, 5]</code> 。'
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
// solution required
```
</section>
