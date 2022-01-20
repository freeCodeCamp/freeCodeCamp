---
id: 587d7daf367417b2b2512b80
title: プロトタイプの変更時に constructor プロパティを必ず設定する
challengeType: 1
forumTopicId: 301323
dashedName: remember-to-set-the-constructor-property-when-changing-the-prototype
---

# --description--

プロトタイプに新しいオブジェクトを手動で設定すると、重要な副作用が一つ発生します。 それは、`constructor` プロパティを消してしまうことです！ このプロパティを使用して、どのコンストラクター関数がインスタンスを作成したかを確認することができますが、プロパティが上書きされてしまうと次の結果は正しくなくなります。

```js
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
```

これらの式は順に `false`、`true`、`true` と評価されます。

これを修正するには、プロトタイプに新しいオブジェクトを手動で設定するたびに、必ず `constructor` プロパティを定義します。

```js
Bird.prototype = {
  constructor: Bird,
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

`Dog` の `prototype` の `constructor` プロパティを定義してください。

# --hints--

`Dog.prototype` で `constructor` プロパティを設定する必要があります。

```js
assert(Dog.prototype.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
