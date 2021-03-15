---
id: 587d7dad367417b2b2512b77
title: 定义构造函数
challengeType: 1
forumTopicId: 16804
dashedName: define-a-constructor-function
---

# --description--

<dfn>Constructors</dfn> 是创建对象的函数。 函数给这个新对象定义属性和行为。 可将它们视为创建的新对象的蓝图。

以下就是一个构造函数的示例：

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

这个构造函数定义了一个 `Bird` 对象，其属性 `name`、`color` 和 `numLegs` 的值分别被设置为 Albert、blue 和 2。 构造函数遵循一些惯例规则：

<ul><li>构造函数函数名的首字母大写，这是为了方便我们区分构造函数（ <code>constructors</code>）和其他非构造函数。</li><li>构造函数使用 <code>this</code> 关键字来给它将创建的这个对象设置新的属性。 在构造函数里面，<code>this</code> 指向的就是它新创建的这个对象。</li><li>构造函数定义了属性和行为就可创建对象，而不是像其他函数一样需要设置返回值。</li></ul>

# --instructions--

创建一个构造函数：`Dog`。 给其添加 `name`，`color` 和 `numLegs` 属性并分别给它们设置为：字符串、字符串和数字。

# --hints--

`Dog` 应该有一个 `name` 属性且它的值是一个字符串。

```js
assert(typeof new Dog().name === 'string');
```

`Dog` 应该有一个 `color` 属性且它的值是一个字符串。

```js
assert(typeof new Dog().color === 'string');
```

`Dog` 应该有一个 `numLegs` 属性且它的值是一个数字。

```js
assert(typeof new Dog().numLegs === 'number');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function Dog (name, color, numLegs) {
  this.name = 'name';
  this.color = 'color';
  this.numLegs = 4;
}
```
