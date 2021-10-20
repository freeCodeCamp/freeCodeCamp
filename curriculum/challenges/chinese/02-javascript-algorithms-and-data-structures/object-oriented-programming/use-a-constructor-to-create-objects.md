---
id: 587d7dad367417b2b2512b78
title: 使用构造函数创建对象
challengeType: 1
forumTopicId: 18233
dashedName: use-a-constructor-to-create-objects
---

# --description--

在上一个挑战中，我们用所学到的知识创建了一个 `Bird` 构造函数：

```js
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
```

**注意：** 构造函数内的 `this` 总是指被创建的对象。

注意：通过构造函数创建对象的时候要使用 `new` 操作符。 因为只有这样，JavaScript 才知道要给 `Bird` 这个构造函数创建一个新的实例：`blueBird`。 如果不使用 `new` 操作符来新建对象，那么构造函数里面的 `this` 就无法指向新创建的这个对象实例，从而产生不可预见的错误。 现在 `blueBird` 这个实例就继承了`Bird` 构造函数的所有属性，如下：

```js
blueBird.name;
blueBird.color;
blueBird.numLegs;
```

由构造函数创建的实例也和其他对象一样，它的属性可以被访问和修改：

```js
blueBird.name = 'Elvira';
blueBird.name;
```

# --instructions--

使用上一个挑战中的 `Dog` 构造函数创建一个 `Dog` 的新实例，并把它赋值给变量 `hound`。

# --hints--

`hound` 应该是通过 `Dog` 构造函数来创建的。

```js
assert(hound instanceof Dog);
```

你的代码中应该使用 `new` 操作符来创建 `Dog` 构造函数的新实例。

```js
assert(code.match(/new/g));
```

# --seed--

## --seed-contents--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
```

# --solutions--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
const hound = new Dog();
```
