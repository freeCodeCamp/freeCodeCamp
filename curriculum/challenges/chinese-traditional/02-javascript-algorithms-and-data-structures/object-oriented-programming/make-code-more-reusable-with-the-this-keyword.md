---
id: 587d7dad367417b2b2512b76
title: 使用 this 關鍵字提高代碼重用性
challengeType: 1
forumTopicId: 301321
dashedName: make-code-more-reusable-with-the-this-keyword
---

# --description--

在上一個挑戰中我們瞭解了該如何給 `duck` 對象設置一個方法。 然後在 return 語句裏，我們通過使用 “點號表示法” `duck.name` 來獲取 `name` 的屬性值：

```js
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

雖然這是訪問對象屬性的有效方法，但是這裏有一個陷阱。 如果變量名發生了改變，那麼引用了原始名稱的任何代碼都需要更新。 在一個簡短的對象定義中，這並不是問題，但是如果對象有很多對其屬性的引用，那麼發生錯誤的可能性就更大了。

我們可以使用 `this` 關鍵字來避免這一問題：

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

`this` 是一個很複雜的知識點，而上面那個例子也只是使用它的一種方法而已。 在當前的上下文環境中，`this` 指向的就是與這個方法有關聯的 `duck` 對象。 如果把對象的變量名改爲 `mallard`，那使用 this 後就沒有必要在代碼中找到所有指向 `duck` 的部分。 這樣可以使得代碼更具有可讀性和複用性。

# --instructions--

修改 `dog.sayLegs` 方法，以將所有直接對 `dog` 的引用刪除。 可以參考上面 `duck` 的例子。

# --hints--

`dog.sayLegs()` 應該返回一個指定的字符串。

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

應該使用 `this` 關鍵字來訪問 `dog` 對象的 `numLegs` 屬性值。

```js
assert(code.match(/this\.numLegs/g));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```
