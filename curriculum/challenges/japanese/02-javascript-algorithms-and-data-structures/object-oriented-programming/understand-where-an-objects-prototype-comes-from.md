---
id: 587d7db0367417b2b2512b81
title: オブジェクトのプロトタイプの発生元を理解する
challengeType: 1
forumTopicId: 301330
dashedName: understand-where-an-objects-prototype-comes-from
---

# --description--

人々が親から遺伝子を継承するのと同じように、オブジェクトはそれを作成したコンストラクター関数から直接、自身の `prototype` を継承します。 次の例では、`Bird` コンストラクターが `duck` オブジェクトを作成します。

```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

`duck` は自身の `prototype` を `Bird` コンストラクター関数から継承します。 この関係は `isPrototypeOf` メソッドで表示できます。

```js
Bird.prototype.isPrototypeOf(duck);
```

これは `true` を返します。

# --instructions--

`isPrototypeOf` を使用して、`beagle` の `prototype` を確認してください。

# --hints--

`beagle` の `prototype` が `Dog.prototype` であることを示す必要があります。

```js
assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
```
