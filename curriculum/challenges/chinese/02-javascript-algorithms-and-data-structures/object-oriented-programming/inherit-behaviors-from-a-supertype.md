---
id: 587d7db0367417b2b2512b84
title: 从超类继承行为
challengeType: 1
forumTopicId: 301319
dashedName: inherit-behaviors-from-a-supertype
---

# --description--

在上一个挑战中，我们创建了一个`Animal` 超类（`supertype`），用来定义所有动物共有的行为：

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

在这一节以及下一节挑战中我们将学习如何在 `Bird` 和 `Dog` 中重用 `Animal` 中的方法，而无需重新定义它们。 这里我们会用到构造函数的继承特性。 这一节挑战中我们学习第一步：创建一个超类 `supertype`（或者叫父类）的实例。 你已经学会了一种创建 `Animal` 实例的方法，即使用 `new` 操作符：

```js
let animal = new Animal();
```

此语法用于继承时会存在一些缺点，这些缺点对于当前我们这个挑战来说太复杂了。 相反，我们学习另外一种没有这些缺点的方法来替代 new 操作：

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` 创建了一个新对象，并指定了 `obj` 作为新对象的 `prototype`。 回忆一下，我们之前说过 `prototype` 就像是创建对象的“配方”。 如果我们把 `animal` 的 `prototype` 设置为与 `Animal` 构造函数的 `prototype` 一样，那么就相当于让 `animal` 这个实例具有与 `Animal` 的其他实例相同的“配方”了。

```js
animal.eat();
animal instanceof Animal;
```

`instanceof` 方法会返回 `true`.

# --instructions--

使用 `Object.create` 方法给 `Animal` 创建两个实例：`duck` 和 `beagle`。

# --hints--

应该定义一个 `duck` 变量。

```js
assert(typeof duck !== 'undefined');
```

应该定义一个 `beagle` 变量。

```js
assert(typeof beagle !== 'undefined');
```

`duck` 变量应该通过 `Object.create` 初始化。

```js
assert(
  /(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

`beagle` 变量应该通过 `Object.create` 初始化。

```js
assert(
  /(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

`duck` 的原型应该被设置为 `Animal` 的 `prototype`。

```js
assert(duck instanceof Animal);
```

`beagle` 的 `prototype` 应该是 `Animal`。

```js
assert(beagle instanceof Animal);
```

# --seed--

## --seed-contents--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line
```

# --solutions--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();
```
