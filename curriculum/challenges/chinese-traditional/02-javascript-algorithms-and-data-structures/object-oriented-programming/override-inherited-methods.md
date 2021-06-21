---
id: 587d7db1367417b2b2512b88
title: 重寫繼承的方法
challengeType: 1
forumTopicId: 301322
dashedName: override-inherited-methods
---

# --description--

在上一個挑戰中，我們學習了一個對象可以通過引用另一個對象的 `prototype` 來繼承其屬性和行爲（或方法）：

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

然後，`ChildObject` 將自己的方法鏈接到它的 `prototype`中：

```js
ChildObject.prototype.methodName = function() {...};
```

我們還可以重寫繼承的方法。 以同樣的方式 - 通過使用一個與需要重寫的方法相同的方法名，向`ChildObject.prototype` 中添加方法。 請看下面的舉例：`Bird` 重寫了從 `Animal` 繼承來的 `eat()` 方法：

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

如果你有一個實例：`let duck = new Bird();`，然後你調用了 `duck.eat()`，以下就是 JavaScript 在 `duck` 的 `prototype` 鏈上尋找方法的過程：

1.  `duck` => `eat()` 是定義在這裏嗎？ 不是。
2.  `Bird` => `eat()` 是定義在這裏嗎？ => 是的。 執行它並停止往上搜索。
3.  `Animal` => 這裏也定義了 `eat()` 方法，但是 JavaScript 在到達這層原型鏈之前已停止了搜索。
4.  Object => JavaScript 在到達這層原型鏈之前也已經停止了搜索。

# --instructions--

重寫 `Penguin` 的 `fly()` 方法，使其返回字符串 `Alas, this is a flightless bird.`

# --hints--

`penguin.fly()` 方法應該返回字符串 `Alas, this is a flightless bird.`

```js
assert(penguin.fly() === 'Alas, this is a flightless bird.');
```

The `bird.fly()`方法應該返回字符串 `I am flying!`

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
