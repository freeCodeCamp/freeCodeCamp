---
id: 587d7dae367417b2b2512b7c
title: プロトタイプのプロパティを使用して重複コードを減らす
challengeType: 1
forumTopicId: 301336
dashedName: use-prototype-properties-to-reduce-duplicate-code
---

# --description--

`numLegs` はおそらく `Bird` のすべてのインスタンスで同じ値になるので、実質的に各 `Bird` インスタンスの中に重複した変数 `numLegs` が存在することになります。

インスタンスが 2 つだけならば問題にはならないかもしれませんが、インスタンスが何百万もある状況を想像してみてください。 たくさんの重複変数ができることになります。

より適切なのは、`Bird` の `prototype` を使用する方法です。 `prototype` のプロパティは `Bird` のすべてのインスタンスで共有されます。 次の方法で `numLegs` を `Bird prototype` に追加できます。

```js
Bird.prototype.numLegs = 2;
```

これで `Bird` のすべてのインスタンスが `numLegs` プロパティを持ちます。

```js
console.log(duck.numLegs);
console.log(canary.numLegs);
```

すべてのインスタンスは自動的に `prototype` にプロパティを持つので、`prototype` をオブジェクトを作成するための「レシピ」と捉えることができます。 ちなみに、`duck` と `canary` の `prototype` は、`Bird.prototype` として `Bird` のコンストラクターの一部となっています。

# --instructions--

`numLegs` プロパティを `Dog` の `prototype` に追加してください。

# --hints--

`beagle` は `numLegs` プロパティを持つ必要があります。

```js
assert(beagle.numLegs !== undefined);
```

`beagle.numLegs` は数値である必要があります。

```js
assert(typeof beagle.numLegs === 'number');
```

`numLegs` は、独自のプロパティではなく、`prototype` のプロパティにする必要があります。

```js
assert(beagle.hasOwnProperty('numLegs') === false);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}



// Only change code above this line
let beagle = new Dog("Snoopy");
```

# --solutions--

```js
function Dog (name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```
