---
id: 587d7b7c367417b2b2512b1a
challengeType: 1
forumTopicId: 301150
title: 使用方括号访问属性名称
---

## Description
<section id='description'>
在关于对象的第一个挑战中，我们提到可以在方括号符号中用一个变量作为属性名来访问属性值。假设一个超市的收银台的程序中使用了一个<code>foods</code>对象，并且有一些程序逻辑会设置<code>selectedFood</code>，我们需要查询<code>foods</code>对象来检查某种食物是否存在，我们可以这样写检查逻辑：

```js
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
```

上述代码会先计算<code>selectedFood</code>变量的值，并返回<code>foods</code>对象中以该值命名的属性对应的值，若没有以该值命名的属性则会返回<code>undefined</code>。有时候对象的属性名在运行之前是不确定的，或者我们需要动态地访问对象的属性，这时方括号符号就会很有用。
</section>

## Instructions
<section id='instructions'>
我们已经定义了一个<code>checkInventory</code>函数，它接受一个被扫描到的商品名作为输入参数。它要返回<code>foods</code>对象中以<code>scannedItem</code>的值命名的属性的值。只有有效的属性名会作为参数传入<code>checkInventory</code>，你在完成挑战时不需处理参数无效的情况。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkInventory</code>是一个函数
    testString: assert.strictEqual(typeof checkInventory, 'function');
  - text: '<code>foods</code>对象应该只有以下键值对： <code>apples: 25</code> ， <code>oranges: 32</code> ， <code>plums: 28</code> ， <code>bananas: 13</code> ， <code>grapes: 35</code> ， <code>strawberries: 27</code>'
    testString: 'assert.deepEqual(foods, {apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27});'
  - text: <code>checkInventory(&quot;apples&quot;)</code>应该返回<code>25</code>
    testString: assert.strictEqual(checkInventory('apples'), 25);
  - text: <code>checkInventory(&quot;bananas&quot;)</code>应该返回<code>13</code>
    testString: assert.strictEqual(checkInventory('bananas'), 13);
  - text: <code>checkInventory(&quot;strawberries&quot;)</code>应该返回<code>27</code>
    testString: assert.strictEqual(checkInventory('strawberries'), 27);

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
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}
```

</section>
