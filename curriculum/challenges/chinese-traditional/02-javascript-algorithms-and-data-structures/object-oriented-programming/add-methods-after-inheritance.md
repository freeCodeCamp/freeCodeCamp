---
id: 587d7db1367417b2b2512b87
title: 繼承後添加方法
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

從超類構造函數繼承其 `prototype` 對象的構造函數，除了繼承的方法外，還可以擁有自己的方法。

請看舉例：`Bird` 是一個構造函數，它繼承了 `Animal` 的 `prototype`：

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

除了從 `Animal` 構造函數繼承的行爲之外，還需要給 `Bird` 對象添加它獨有的行爲。 這裏，我們給 `Bird` 對象添加一個 `fly()` 函數。 函數會以一種與其他構造函數相同的方式添加到 `Bird's` 的 `prototype` 中：

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

現在 `Bird` 的實例中就有了 `eat()` 和 `fly()` 這兩個方法：

```js
let duck = new Bird();
duck.eat();
duck.fly();
```

`duck.eat()` 將在控制檯中顯示字符串 `nom nom nom`， `duck.fly()` 將顯示字符串 `I'm flying!`。

# --instructions--

添加必要的代碼，使得 `Dog` 對象繼承 `Animal`，並且把 `Dog` 的 `prototype`上的 constructor 屬性設置爲 `Dog`。 然後給 `Dog` 對象添加一個 `bark()` 方法，這樣的話，`beagle` 將同時擁有 `eat()` 和 `bark()` 這兩個方法。 `bark()` 方法中應該輸出 `Woof!` 到控制檯。

# --hints--

`Animal` 應該沒有 `bark()` 方法。

```js
assert(typeof Animal.prototype.bark == 'undefined');
```

`Dog` 應該繼承了 `Animal` 的 `eat()` 方法。

```js
assert(typeof Dog.prototype.eat == 'function');
```

`Dog` 應該有一個 `bark()` 方法作爲 `own` 屬性。

```js
assert(Dog.prototype.hasOwnProperty('bark'));
```

`beagle` 應該是 `Animal` 的一個 `instanceof`。

```js
assert(beagle instanceof Animal);
```

`beagle` 的 constructor 屬性應該被設置爲 `Dog`。

```js
assert(beagle.constructor === Dog);
```

`beagle.eat()` 應該記錄字符串 `nom nom nom`

```js
console.log = function (msg) {
  throw msg;
};
assert.throws(() => beagle.eat(), 'nom nom nom');
```

`beagle.bark()` 應該將字符串 `Woof!` 打印到控制檯

```js
console.log = function (msg) {
  throw msg;
};
assert.throws(() => beagle.bark(), 'Woof!');
```

# --seed--

## --seed-contents--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line




// Only change code above this line

let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};
let beagle = new Dog();

beagle.eat();
beagle.bark();
```
