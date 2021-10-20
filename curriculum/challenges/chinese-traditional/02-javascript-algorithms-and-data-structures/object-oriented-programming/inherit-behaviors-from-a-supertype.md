---
id: 587d7db0367417b2b2512b84
title: 從超類繼承行爲
challengeType: 1
forumTopicId: 301319
dashedName: inherit-behaviors-from-a-supertype
---

# --description--

在上一個挑戰中，我們創建了一個`Animal` 超類（`supertype`），用來定義所有動物共有的行爲：

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

在這一節以及下一節挑戰中我們將學習如何在 `Bird` 和 `Dog` 中重用 `Animal` 中的方法，而無需重新定義它們。 這裏我們會用到構造函數的繼承特性。 這一節挑戰中我們學習第一步：創建一個超類 `supertype`（或者叫父類）的實例。 你已經學會了一種創建 `Animal` 實例的方法，即使用 `new` 操作符：

```js
let animal = new Animal();
```

此語法用於繼承時會存在一些缺點，這些缺點對於當前我們這個挑戰來說太複雜了。 相反，我們學習另外一種沒有這些缺點的方法來替代 new 操作：

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` 創建了一個新對象，並指定了 `obj` 作爲新對象的 `prototype`。 回憶一下，我們之前說過 `prototype` 就像是創建對象的“配方”。 如果我們把 `animal` 的 `prototype` 設置爲與 `Animal` 構造函數的 `prototype` 一樣，那麼就相當於讓 `animal` 這個實例具有與 `Animal` 的其他實例相同的“配方”了。

```js
animal.eat();
animal instanceof Animal;
```

`instanceof` 方法會返回 `true`.

# --instructions--

使用 `Object.create` 方法給 `Animal` 創建兩個實例：`duck` 和 `beagle`。

# --hints--

應該定義一個 `duck` 變量。

```js
assert(typeof duck !== 'undefined');
```

應該定義一個 `beagle` 變量。

```js
assert(typeof beagle !== 'undefined');
```

`duck` 變量應該通過 `Object.create` 初始化。

```js
assert(
  /(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

`beagle` 變量應該通過 `Object.create` 初始化。

```js
assert(
  /(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

`duck` 的原型應該被設置爲 `Animal` 的 `prototype`。

```js
assert(duck instanceof Animal);
```

`beagle` 的 `prototype` 應該是 `Animal`。

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
