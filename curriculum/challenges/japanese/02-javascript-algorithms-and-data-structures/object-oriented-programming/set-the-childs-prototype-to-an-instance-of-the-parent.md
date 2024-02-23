---
id: 587d7db1367417b2b2512b85
title: 子のプロトタイプに親のインスタンスを設定する
challengeType: 1
forumTopicId: 301325
dashedName: set-the-childs-prototype-to-an-instance-of-the-parent
---

# --description--

前回のチャレンジでは、スーパータイプ (親) `Animal` から動作を継承するための最初のステップとして、`Animal` の新しいインスタンスを作成しました。

このチャレンジでは次のステップを説明します。ここでは、サブタイプ (子、この例では `Bird`) の `prototype` に `Animal` のインスタンスを設定します。

```js
Bird.prototype = Object.create(Animal.prototype);
```

`prototype` はオブジェクトを作成するための「レシピ」のようなものであることを忘れないでください。 `Bird` のレシピには `Animal` から受け継いだ重要な「材料」がすべて含まれることになります。

```js
let duck = new Bird("Donald");
duck.eat();
```

`duck` は `Animal` の `eat` メソッドを含むすべてのプロパティを継承します。

# --instructions--

`Dog` のインスタンスが `Animal` から継承されるようにコードを変更してください。

# --hints--

`Dog.prototype` は `Animal` のインスタンスである必要があります。

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
