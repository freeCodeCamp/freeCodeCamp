---
id: 587d7dae367417b2b2512b7c
title: 使用原型屬性來減少重複代碼
challengeType: 1
forumTopicId: 301336
dashedName: use-prototype-properties-to-reduce-duplicate-code
---

# --description--

所有 `Bird` 實例可能會有相同的 `numLegs` 值，所以在每一個 `Bird` 的實例中本質上都有一個重複的變量 `numLegs`。

當只有兩個實例時可能並不是什麼問題，但想象一下如果有數百萬個實例。 這將會產生許許多多重複的變量。

更好的方法是使用 `Bird` 的 `prototype`。 `prototype` 是一個可以在所有 `Bird` 實例之間共享的對象。 以下是一個在 `Bird prototype` 中添加 `numLegs` 屬性的示例：

```js
Bird.prototype.numLegs = 2;
```

現在所有的 `Bird` 實例都擁有了共同的 `numLegs` 屬性值。

```js
console.log(duck.numLegs);
console.log(canary.numLegs);
```

由於所有的實例都可以繼承 `prototype` 上的屬性，所以可以把 `prototype` 看作是創建對象的 "配方"。 請注意：`duck` 和 `canary` 的 `prototype` 屬於 `Bird` 的構造函數，即 Bird 的原型 `Bird.prototype`。

# --instructions--

給 `Dog` 的 `prototype` 添加一個 `numLegs` 屬性。

# --hints--

`beagle` 應該有一個 `numLegs` 屬性。

```js
assert(beagle.numLegs !== undefined);
```

`beagle.numLegs` 應該是一個數字。

```js
assert(typeof beagle.numLegs === 'number');
```

`numLegs` 應該是一個 `prototype` 屬性，而不是一個自身屬性。

```js
assert(beagle.hasOwnProperty('numLegs') === false);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}



// Only change code above this line
let beagle = new Dog("Snoopy");
```

# --solutions--

```js
function Dog (name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```
