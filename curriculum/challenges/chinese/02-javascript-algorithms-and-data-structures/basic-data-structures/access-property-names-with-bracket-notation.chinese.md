---
id: 587d7b7c367417b2b2512b1a
title: Access Property Names with Bracket Notation
challengeType: 1
videoUrl: ''
localeTitle: 使用括号表示法访问属性名称
---

## Description
<section id="description">在第一个对象挑战中，我们提到使用括号表示法作为使用变量求值来访问属性值的方法。例如，假设我们的<code>foods</code>对象被用于超市收银机的程序中。我们有一些设置<code>selectedFood</code>功能，我们想检查我们的<code>foods</code>对象是否存在该食物。这可能看起来像： <blockquote> let selectedFood = getCurrentFood（scanningItem）; <br>让库存=食物[selectedFood]; </blockquote>此代码将评估存储在<code>selectedFood</code>变量中的值，并在<code>foods</code>对象中返回该键的值，如果不存在则返回<code>undefined</code> 。括号表示法非常有用，因为有时候对象属性在运行时之前是未知的，或者我们需要以更动态的方式访问它们。 </section>

## Instructions
<section id="instructions">我们定义了一个函数<code>checkInventory</code> ，它接收一个扫描的项目作为参数。返回<code>foods</code>对象中的<code>scannedItem</code>键的当前值。您可以假设只有有效键将作为<code>checkInventory</code>的参数提供。 </section>

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
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line

}

// change code below this line to test different cases:
console.log(checkInventory("apples"));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
