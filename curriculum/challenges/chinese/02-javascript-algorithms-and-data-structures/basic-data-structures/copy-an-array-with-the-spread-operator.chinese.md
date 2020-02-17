---
id: 587d7b7b367417b2b2512b13
title: Copy an Array with the Spread Operator
challengeType: 1
videoUrl: ''
localeTitle: 使用Spread Operator复制数组
---

## Description
<section id="description">虽然<code>slice()</code>允许我们选择要复制的数组元素，但在其他几个有用的任务中，ES6的新<dfn>扩展运算符</dfn>允许我们使用简单且高度可读的语法轻松地按顺序复制<em>所有</em>数组的元素。扩展语法看起来像这样： <code>...</code>在实践中，我们可以使用spread运算符来复制数组，如下所示： <blockquote> let thisArray = [true，true，undefined，false，null]; <br>让thatArray = [... thisArray]; <br> // thatArray等于[true，true，undefined，false，null] <br> // thisArray保持不变，与thatArray相同</blockquote></section>

## Instructions
<section id="instructions">我们定义了一个函数<code>copyMachine</code> ，它将<code>arr</code> （数组）和<code>num</code> （数字）作为参数。该函数应该返回一个由<code>arr</code>的<code>num</code>副本组成的新数组。我们为您完成了大部分工作，但它还没有正常工作。使用扩展语法修改函数以使其正常工作（提示：我们已经介绍过的另一种方法可能会派上用场！）。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>copyMachine([true, false, true], 2)</code>应返回<code>[[true, false, true], [true, false, true]]</code>'
    testString: assert.deepEqual(copyMachine([true, false, true], 2), [[true, false, true], [true, false, true]]);
  - text: '<code>copyMachine([1, 2, 3], 5)</code>应返回<code>[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]</code>'
    testString: assert.deepEqual(copyMachine([1, 2, 3], 5), [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]);
  - text: '<code>copyMachine([true, true, null], 1)</code>应该返回<code>[[true, true, null]]</code>'
    testString: assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
  - text: '<code>copyMachine([&quot;it works&quot;], 3)</code>应该返回<code>[[&quot;it works&quot;], [&quot;it works&quot;], [&quot;it works&quot;]]</code>'
    testString: assert.deepEqual(copyMachine(['it works'], 3), [['it works'], ['it works'], ['it works']]);
  - text: <code>copyMachine</code>函数应该使用带有数组<code>arr</code>的<code>spread operator</code>
    testString: assert(removeJSComments(code).match(/\.\.\.arr/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line

    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
