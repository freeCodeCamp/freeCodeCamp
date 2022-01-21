---
id: 587d7daf367417b2b2512b7f
title: プロトタイプを新しいオブジェクトに変更する
challengeType: 1
forumTopicId: 301316
dashedName: change-the-prototype-to-a-new-object
---

# --description--

これまでは、`prototype` に個別にプロパティを追加してきました。

```js
Bird.prototype.numLegs = 2;
```

プロパティの数が増えてくると退屈になってきます。

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

より効率的な方法として、すでにプロパティが含まれている新しいオブジェクトを `prototype` に設定することができます。 こうするとすべてのプロパティが一度に追加されます。

```js
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

# --instructions--

`prototype` に新しいオブジェクトを設定して、`Dog` の `prototype` にプロパティ `numLegs` と 2 つのメソッド `eat()` および `describe()` を追加してください。

# --hints--

`Dog.prototype` に新しいオブジェクトを設定する必要があります。

```js
assert(/Dog\.prototype\s*?=\s*?{/.test(code));
```

`Dog.prototype` はプロパティ `numLegs` を持つ必要があります。

```js
assert(Dog.prototype.numLegs !== undefined);
```

`Dog.prototype` はメソッド `eat()` を持つ必要があります。

```js
assert(typeof Dog.prototype.eat === 'function');
```

`Dog.prototype` はメソッド `describe()` を持つ必要があります。

```js
assert(typeof Dog.prototype.describe === 'function');
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
numLegs: 4,
  eat () {
    console.log('nom nom nom');
  },
  describe () {
    console.log('My name is ' + this.name);
  }
};
```
