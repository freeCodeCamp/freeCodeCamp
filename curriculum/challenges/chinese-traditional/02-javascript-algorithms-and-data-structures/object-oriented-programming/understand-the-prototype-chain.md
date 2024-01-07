---
id: 587d7db0367417b2b2512b82
title: 瞭解原型鏈
challengeType: 1
forumTopicId: 301329
dashedName: understand-the-prototype-chain
---

# --description--

JavaScript 中所有的對象（除了少數例外）都有自己的 `prototype`。 而且，對象的 `prototype` 本身也是一個對象。

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
```

正因爲 `prototype` 是一個對象，所以 `prototype` 對象也有它自己的 `prototype`！ 這樣看來的話，`Bird.prototype` 的 `prototype` 就是 `Object.prototype`：

```js
Object.prototype.isPrototypeOf(Bird.prototype);
```

這有什麼作用呢？ 你可能還記得我們在上一個挑戰中學到的 `hasOwnProperty` 方法：

```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

`hasOwnProperty` 是定義在 `Object.prototype` 上的一個方法，儘管在 `Bird.prototype` 和 `duck`上並沒有定義該方法，但是我們依然可以在這兩個對象上訪問到。 這就是 `prototype` 鏈的一個例子。 在這個`prototype` 鏈中，`Bird` 是 `duck` 的 `supertype`，而 `duck` 是 `subtype`。 `Object` 則是 `Bird` 和 `duck` 實例共同的 `supertype`。 `Object` 是 JavaScript 中所有對象的 `supertype`，也就是原型鏈的最頂層。 因此，所有對象都可以訪問 `hasOwnProperty` 方法。

# --instructions--

修改以下代碼使其展示出正確的原型鏈。

# --hints--

你的代碼應該展示 `Object.prototype` 是 `Dog.prototype` 的原型。

```js
assert(/Object\.prototype\.isPrototypeOf/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
```
