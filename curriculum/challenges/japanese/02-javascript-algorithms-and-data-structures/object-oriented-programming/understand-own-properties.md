---
id: 587d7dae367417b2b2512b7b
title: 独自のプロパティを理解する
challengeType: 1
forumTopicId: 301326
dashedName: understand-own-properties
---

# --description--

次の例では、`Bird` コンストラクターで `name` と `numLegs` の 2 つのプロパティを定義しています。

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` と `numLegs` はインスタンスオブジェクトで直接定義されているため、<dfn>独自のプロパティ</dfn>と呼ばれます。 つまり、`duck` と `canary` は、それぞれこれらのプロパティの独自のコピーを持つことになります。 実際、`Bird` のすべてのインスタンスは、これらのプロパティの独自のコピーを持ちます。 次のコードは、`duck` のすべての独自のプロパティを配列 `ownProps` に追加します。

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
```

コンソールには値 `["name", "numLegs"]` が表示されます。

# --instructions--

`canary` の独自のプロパティを配列 `ownProps` に追加してください。

# --hints--

`ownProps` には、`numLegs` と `name` の値を含める必要があります。

```js
assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
```

このチャレンジは組み込みのメソッド `Object.keys()` を使用せずに解決する必要があります。

```js
assert(!/Object(\.keys|\[(['"`])keys\2\])/.test(code));
```

`ownProps` 配列をハードコーディングせずに、このチャレンジを解決する必要があります。

```js
assert(
  !/\[\s*(?:'|")(?:name|numLegs)|(?:push|concat)\(\s*(?:'|")(?:name|numLegs)/.test(
    code
  )
);
```

# --seed--

## --seed-contents--

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
```

# --solutions--

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
function getOwnProps (obj) {
  const props = [];

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      props.push(prop);
    }
  }

  return props;
}

const ownProps = getOwnProps(canary);
```
