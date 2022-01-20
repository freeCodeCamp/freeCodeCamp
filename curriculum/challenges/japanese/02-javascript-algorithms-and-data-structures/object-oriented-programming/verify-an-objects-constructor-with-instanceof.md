---
id: 587d7dae367417b2b2512b7a
title: instanceof を使用してオブジェクトのコンストラクターを検証する
challengeType: 1
forumTopicId: 301337
dashedName: verify-an-objects-constructor-with-instanceof
---

# --description--

コンストラクター関数が新しいオブジェクトを生成するときはいつでも、そのオブジェクトはコンストラクターの<dfn>インスタンス</dfn>である、という言い方をします。 JavaScript にはそのことを検証するための便利な手段として `instanceof` 演算子が用意されています。 `instanceof` を使用してオブジェクトとコンストラクターを比較し、そのオブジェクトがそのコンストラクターを使用して作成されたかどうかに基づいて `true` または `false` を返すことができます。 例を示します。

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
```

この `instanceof` メソッドは `true` を返します。

オブジェクトがコンストラクターを使用せずに作成された場合、`instanceof` はオブジェクトがそのコンストラクターのインスタンスではないことを検証します。

```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
```

この `instanceof` メソッドは `false` を返します。

# --instructions--

`House` コンストラクターの新しいインスタンスを作成し、それに `myHouse` という名前を付けて、いくつかの寝室を渡してください。 次に、`instanceof` を使用して、`House` のインスタンスであることを検証してください。

# --hints--

`myHouse` の `numBedrooms` 属性に数値を設定する必要があります。

```js
assert(typeof myHouse.numBedrooms === 'number');
```

`instanceof` 演算子を使用して、`myHouse` が `House` のインスタンスであることを検証する必要があります。

```js
assert(/myHouse\s*instanceof\s*House/.test(code));
```

# --seed--

## --seed-contents--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
```

# --solutions--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);
```
