---
id: 587d7b7c367417b2b2512b1a
title: 使用方括号访问属性名称
challengeType: 1
forumTopicId: 301150
---

# --description--

在关于对象的第一个挑战中，我们提到可以在方括号符号中用一个变量作为属性名来访问属性值。假设一个超市的收银台的程序中使用了一个`foods`对象，并且有一些程序逻辑会设置`selectedFood`，我们需要查询`foods`对象来检查某种食物是否存在，我们可以这样写检查逻辑：

```js
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
```

上述代码会先计算`selectedFood`变量的值，并返回`foods`对象中以该值命名的属性对应的值，若没有以该值命名的属性则会返回`undefined`。有时候对象的属性名在运行之前是不确定的，或者我们需要动态地访问对象的属性，这时方括号符号就会很有用。

# --instructions--

我们已经定义了一个`checkInventory`函数，它接受一个被扫描到的商品名作为输入参数。它要返回`foods`对象中以`scannedItem`的值命名的属性的值。只有有效的属性名会作为参数传入`checkInventory`，你在完成挑战时不需处理参数无效的情况。

# --hints--

`checkInventory`是一个函数

```js
assert.strictEqual(typeof checkInventory, 'function');
```

`foods`对象应该只有以下键值对： `apples: 25` ， `oranges: 32` ， `plums: 28` ， `bananas: 13` ， `grapes: 35` ， `strawberries: 27`

```js
assert.deepEqual(foods, {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
});
```

`checkInventory("apples")`应该返回`25`

```js
assert.strictEqual(checkInventory('apples'), 25);
```

`checkInventory("bananas")`应该返回`13`

```js
assert.strictEqual(checkInventory('bananas'), 13);
```

`checkInventory("strawberries")`应该返回`27`

```js
assert.strictEqual(checkInventory('strawberries'), 27);
```

# --solutions--

