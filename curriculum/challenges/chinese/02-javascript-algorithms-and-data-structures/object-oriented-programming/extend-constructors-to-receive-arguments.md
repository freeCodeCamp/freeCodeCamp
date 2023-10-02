---
id: 587d7dae367417b2b2512b79
title: 扩展构造函数以接收参数
challengeType: 1
forumTopicId: 18235
dashedName: extend-constructors-to-receive-arguments
---

# --description--

上一个挑战中 `Bird` 和 `Dog` 构造函数运行得不错。 但是，注意到没有：所有通过`Bird` 构造函数创建出来的实例 `Birds` 都自动的取名为 Albert，颜色都是蓝色，还都有两条腿。 如果你想要新创建出来的小鸟们拥有不同的名字和颜色要怎么办呢？ 当然，手动的去修改每一个小鸟实例自己的属性也是可以实现的，只是会增加很多无谓的工作量：

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

假如你写了一个程序来追踪一个鸟舍里面的几百只甚至几千只不同的小鸟。 你将会花费很多时间去创建所有的小鸟实例并给它们的属性一一修改为不同的值。 为了减轻创建不同 `Bird` 对象的工作量，你可以给你的 Bird 设置为可以接收参数的构造函数：

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

然后将值通过参数的方式传递给 `Bird` 构造函数来定义每一个唯一的小鸟实例： `let cardinal = new Bird("Bruce", "red");` 这给 `Bird` 的 `name` 和 `color` 属性分别赋值为 `Bruce` 和 `red` 色。 但 `numLegs` 属性仍然设置为 2。 `cardinal` 有以下这些属性：

```js
cardinal.name
cardinal.color
cardinal.numLegs
```

这样一来构造函数就变得很灵活了。 现在可以在创建每个`Bird`实例时直接定义属性，这是 JavaScript 构造函数非常实用的用法之一。 它们根据共同或相似的属性和行为将对象归纳为一组，并能够自动的创建各自实例。

# --instructions--

创建另一个 `Dog` 构造函数。 这一次，给它设置两个参数：`name` 和 `color`，同时给 `numLegs` 赋值为 4。 然后创建一个新 `Dog` 实例保存为变量名：`terrier`。 再将两个字符串通过参数的形式传入`name` 和 `color` 属性。

# --hints--

`Dog` 应该接收一个 `name` 参数。

```js
assert(new Dog('Clifford').name === 'Clifford');
```

`Dog` 应该接收一个 `color` 参数。

```js
assert(new Dog('Clifford', 'yellow').color === 'yellow');
```

`Dog` 应该有一个 `numLegs` 属性且值为 4。

```js
assert(new Dog('Clifford').numLegs === 4);
```

`terrier` 应该是通过 `Dog` 构造函数创建的。

```js
assert(terrier instanceof Dog);
```

# --seed--

## --seed-contents--

```js
function Dog() {

}
```

# --solutions--

```js
function Dog (name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

const terrier = new Dog();
```
