---
id: 587d7daf367417b2b2512b7d
title: すべてのプロパティを反復処理する
challengeType: 1
forumTopicId: 301320
dashedName: iterate-over-all-properties
---

# --description--

ここまで、<dfn>独自のプロパティ</dfn>と `prototype` プロパティの 2 種類のプロパティについて説明しました。 独自のプロパティは、オブジェクトインスタンス自体に直接定義されます。 prototype プロパティは `prototype` に定義されます。

```js
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

次の例は、`duck` の独自のプロパティを配列 `ownProps` に追加し、`prototype` のプロパティを配列 `prototypeProps` に追加します。

```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
```

`console.log(ownProps)` はコンソールに `["name"]` を表示し、`console.log(prototypeProps)` は `["numLegs"]` を表示します。

# --instructions--

`beagle` のすべての独自のプロパティを配列 `ownProps` に追加してください。 `Dog` のすべての `prototype` プロパティを配列 `prototypeProps` に追加してください。

# --hints--

`ownProps` 配列には `name` のみを含める必要があります。

```js
assert.deepEqual(ownProps, ['name']);
```

`prototypeProps` 配列には `numLegs` のみを含める必要があります。

```js
assert.deepEqual(prototypeProps, ['numLegs']);
```

このチャレンジは組み込みのメソッド `Object.keys()` を使用せずに解決する必要があります。

```js
assert(!/\Object.keys/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}
```
