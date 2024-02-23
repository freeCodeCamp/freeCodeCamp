---
id: 587d7db0367417b2b2512b84
title: スーパータイプから動作を継承する
challengeType: 1
forumTopicId: 301319
dashedName: inherit-behaviors-from-a-supertype
---

# --description--

前回のチャレンジでは、`Animal` という `supertype` を作成し、すべての動物が共有する動作を定義しました。

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

今回と次回のチャレンジでは、`Bird` と `Dog` の中で `Animal` のメソッドを再定義せずに再利用する方法について説明します。 それには継承と呼ばれる手法を利用します。 このチャレンジでは最初のステップとして、`supertype` (親) のインスタンスを作成します。 `Animal` のインスタンスを作成する方法として、`new` 演算子を使用する方法についてはすでに説明しました。

```js
let animal = new Animal();
```

継承に対してこの構文を使用する場合、いくつかの欠点がありますが、話が複雑すぎるためこのチャレンジでの説明は割愛します。 代わりに、それらの欠点のない別のアプローチを紹介します。

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` は、新しいオブジェクトを作成し、`obj` を新しいオブジェクトの `prototype` として設定します。 すでに説明したように、`prototype` はオブジェクトを作成するための「レシピ」のようなものです。 `animal` の `prototype` を `Animal` の `prototype` に設定することで、`Animal` の他のインスタンスと同じ「レシピ」を `animal` のインスタンスに効率的に与えることができます。

```js
animal.eat();
animal instanceof Animal;
```

この `instanceof` メソッドは `true` を返します。

# --instructions--

`Object.create` を使用して、`duck` と `beagle` という 2 つの `Animal` インスタンスを作成してください。

# --hints--

`duck` 変数を定義する必要があります。

```js
assert(typeof duck !== 'undefined');
```

`beagle` 変数を定義する必要があります。

```js
assert(typeof beagle !== 'undefined');
```

`Object.create` を使用して `duck` 変数を初期化する必要があります。

```js
assert(
  /(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

`Object.create` を使用して `beagle` 変数を初期化する必要があります。

```js
assert(
  /(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

`duck` は `Animal` の `prototype` を持つ必要があります。

```js
assert(duck instanceof Animal);
```

`beagle` は `Animal` の `prototype` を持つ必要があります。

```js
assert(beagle instanceof Animal);
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

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line
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
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();
```
