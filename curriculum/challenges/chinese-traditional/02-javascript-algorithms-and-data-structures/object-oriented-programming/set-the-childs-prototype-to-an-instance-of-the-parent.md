---
id: 587d7db1367417b2b2512b85
title: 將子輩的原型設置爲父輩的實例
challengeType: 1
forumTopicId: 301325
dashedName: set-the-childs-prototype-to-an-instance-of-the-parent
---

# --description--

在上一個挑戰中，我們學習了從超類（或者叫父類） `Animal` 繼承其行爲的第一個步驟：創建一個 `Animal` 的新實例。

這一節挑戰我們將學習第二個步驟：給子類型（或者子類）設置 `prototype`。 這樣一來，`Bird` 就是 `Animal` 的一個實例了。

```js
Bird.prototype = Object.create(Animal.prototype);
```

請記住，`prototype` 類似於創建對象的“配方”。 從某種意義上來說，`Bird` 對象的配方包含了 `Animal` 的所有關鍵“成分”。

```js
let duck = new Bird("Donald");
duck.eat();
```

`duck` 繼承了`Animal` 的所有屬性，其中包括了 `eat` 方法。

# --instructions--

修改你的代碼，實現一個繼承自 `Animal` 的 `Dog` 實例。

# --hints--

`Dog.prototype` 應該是 `Animal` 的一個實例。

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
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

function Dog() { }

// Only change code below this line


let beagle = new Dog();
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

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
```
