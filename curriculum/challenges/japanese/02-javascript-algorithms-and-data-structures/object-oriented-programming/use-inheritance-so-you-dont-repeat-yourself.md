---
id: 587d7db0367417b2b2512b83
title: 継承を使用して繰り返しを避ける
challengeType: 1
forumTopicId: 301334
dashedName: use-inheritance-so-you-dont-repeat-yourself
---

# --description--

プログラミングには <dfn>Don't Repeat Yourself (DRY、繰り返しを避けよ)</dfn> と呼ばれる原則があります。 コードの繰り返しが問題なのは、変更を加える際に複数の場所でコードを修正しなければならないからです。 通常はその結果として、プログラマーの作業とエラーの余地が増えることになります。

次の例では、`Bird` と `Dog` が `describe` メソッドを共有しています。

```js
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

`describe` メソッドが 2 か所で繰り返されています。 そこで、`Animal` という `supertype` (親) を作成することで、DRY の原則に従うようにコードを編集することができます。

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

`Animal` に `describe` メソッドを含めたので、`Bird` と `Dog` から削除することができます。

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

# --instructions--

`eat` メソッドが `Cat` と `Bear` の両方で繰り返されています。 `eat` メソッドを `Animal` `supertype`に移動して、DRY の原則に沿うようにコードを編集してください。

# --hints--

`Animal.prototype` に `eat` プロパティを持たせる必要があります。

```js
assert(Animal.prototype.hasOwnProperty('eat'));
```

`Bear.prototype` に `eat` プロパティを持たせないでください。

```js
assert(!Bear.prototype.hasOwnProperty('eat'));
```

`Cat.prototype` に `eat` プロパティを持たせないでください。

```js
assert(!Cat.prototype.hasOwnProperty('eat'));
```

# --seed--

## --seed-contents--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};
```

# --solutions--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```
