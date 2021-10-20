---
id: 587d7db1367417b2b2512b88
title: 重写继承的方法
challengeType: 1
forumTopicId: 301322
dashedName: override-inherited-methods
---

# --description--

在上一个挑战中，我们学习了一个对象可以通过引用另一个对象的 `prototype` 来继承其属性和行为（或方法）：

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

然后，`ChildObject` 将自己的方法链接到它的 `prototype`中：

```js
ChildObject.prototype.methodName = function() {...};
```

我们还可以重写继承的方法。 以同样的方式 - 通过使用一个与需要重写的方法相同的方法名，向`ChildObject.prototype` 中添加方法。 请看下面的举例：`Bird` 重写了从 `Animal` 继承来的 `eat()` 方法：

```js
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

如果你有一个实例：`let duck = new Bird();`，然后你调用了 `duck.eat()`，以下就是 JavaScript 在 `duck` 的 `prototype` 链上寻找方法的过程：

1.  `duck` => `eat()` 是定义在这里吗？ 不是。
2.  `Bird` => `eat()` 是定义在这里吗？ => 是的。 执行它并停止往上搜索。
3.  `Animal` => 这里也定义了 `eat()` 方法，但是 JavaScript 在到达这层原型链之前已停止了搜索。
4.  Object => JavaScript 在到达这层原型链之前也已经停止了搜索。

# --instructions--

重写 `Penguin` 的 `fly()` 方法，使其返回字符串 `Alas, this is a flightless bird.`

# --hints--

`penguin.fly()` 方法应该返回字符串 `Alas, this is a flightless bird.`

```js
assert(penguin.fly() === 'Alas, this is a flightless bird.');
```

The `bird.fly()`方法应该返回字符串 `I am flying!`

```js
assert(new Bird().fly() === 'I am flying!');
```

# --seed--

## --seed-contents--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line



// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
```

# --solutions--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = () => 'Alas, this is a flightless bird.';
let penguin = new Penguin();
console.log(penguin.fly());
```
