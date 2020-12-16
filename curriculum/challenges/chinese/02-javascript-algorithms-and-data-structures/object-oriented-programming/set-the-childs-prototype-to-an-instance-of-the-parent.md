---
id: 587d7db1367417b2b2512b85
title: 将子辈的原型设置为父辈的实例
challengeType: 1
forumTopicId: 301325
---

# --description--

在上一个挑战中，我们学习了从`超类（或者叫父类） Animal`继承其行为的第一个步骤：创建一个`Animal`的实例。

这一节挑战我们将学习第二个步骤：给`子类型（或者子类）`设置`原型`。这样一来，`Bird`就是`Animal`的一个实例了。

```js
Bird.prototype = Object.create(Animal.prototype);
```

请记住，`原型`类似于创建对象的“配方”。从某种意义上来说，`Bird`对象的配方包含了`Animal`构造函数的所有关键“成分”。

```js
let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"
```

`duck`继承了`Animal`构造函数的所有属性，其中包括了`eat`方法。

# --instructions--

修改你的代码，实现一个继承自`Animal`的`Dog`构造函数。

# --hints--

`Dog.prototype`应该是`Animal`的一个实例。

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

# --solutions--

