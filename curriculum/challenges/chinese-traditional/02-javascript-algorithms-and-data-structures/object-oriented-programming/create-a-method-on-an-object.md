---
id: 587d7dad367417b2b2512b75
title: 在對象上創建方法
challengeType: 1
forumTopicId: 301318
dashedName: create-a-method-on-an-object
---

# --description--

對象可以有一個叫做 <dfn>method</dfn> 的特殊屬性。

方法屬性也就是函數。 這給對象添加了不同的行爲。 以下就是一個帶有方法屬性的 `duck` 示例：

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
```

示例添加了 `sayName` 方法，函數返回包含 `duck` 名字的一個句子。 注意：這個方法在返回語句中使用 `duck.name` 的方式來獲取 `name` 的屬性值。 在下一個挑戰中我們將會使用另外一種方法來實現。

# --instructions--

給 `dog` 對象設置一個名爲 `sayLegs` 的方法。 並讓它返回 `This dog has 4 legs.` 這句話。

# --hints--

`dog.sayLegs()` 應該是一個函數。

```js
assert(typeof dog.sayLegs === 'function');
```

`dog.sayLegs()` 應該返回給定的字符串，需要注意標點和間距的問題。

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,

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
