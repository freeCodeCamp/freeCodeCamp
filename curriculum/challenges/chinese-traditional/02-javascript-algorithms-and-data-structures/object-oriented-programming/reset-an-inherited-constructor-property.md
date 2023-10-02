---
id: 587d7db1367417b2b2512b86
title: 重置一個繼承的構造函數屬性
challengeType: 1
forumTopicId: 301324
dashedName: reset-an-inherited-constructor-property
---

# --description--

當一個對象從另一個對象那裏繼承了其 `prototype` 時，那它也繼承了父類的 constructor 屬性。

請看下面的舉例：

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

但是 `duck` 和其他所有 `Bird` 的實例都應該表明它們是由 `Bird` 創建的，而不是由 `Animal` 創建的。 爲此，你可以手動將 `Bird` 的構造函數屬性設置爲 `Bird` 對象：

```js
Bird.prototype.constructor = Bird;
duck.constructor
```

# --instructions--

修改你的代碼，使得 `duck.constructor` 和 `beagle.constructor` 返回各自的構造函數。

# --hints--

`Bird.prototype` 應該是 `Animal` 的一個實例。

```js
assert(Animal.prototype.isPrototypeOf(Bird.prototype));
```

`duck.constructor` 應該返回 `Bird`。

```js
assert(duck.constructor === Bird);
```

`Dog.prototype` 應該是 `Animal` 的一個實例。

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

`beagle.constructor` 應該返回 `Dog`。

```js
assert(beagle.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line



let duck = new Bird();
let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Bird.prototype.constructor = Bird;
let duck = new Bird();
let beagle = new Dog();
```
