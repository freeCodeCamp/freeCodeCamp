---
id: 587d7dad367417b2b2512b78
title: コンストラクターを使用してオブジェクトを作成する
challengeType: 1
forumTopicId: 18233
dashedName: use-a-constructor-to-create-objects
---

# --description--

次に示すのは前回のチャレンジで取り上げた `Bird` コンストラクターです。

```js
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
```

**注:** コンストラクター内の `this` は、作成されるオブジェクトを常に参照します。

コンストラクターを呼び出すときに `new` 演算子を使用していることに注目してください。 これにより、`blueBird` という `Bird` の新しいインスタンスを作成するように JavaScript に伝えます。 `new` 演算子がなければ、コンストラクター内の `this` は新しく作成されたオブジェクトを指さず、予期せぬ結果をもたらします。 これで `blueBird` は、`Bird` コンストラクター内で定義されているすべてのプロパティを持ちます。

```js
blueBird.name;
blueBird.color;
blueBird.numLegs;
```

他のオブジェクトと同様に、プロパティにアクセスして変更することができます。

```js
blueBird.name = 'Elvira';
blueBird.name;
```

# --instructions--

前のレッスンの `Dog` コンストラクターを使用して、`Dog` の新しいインスタンスを作成し、それを変数 `hound` に割り当ててください。

# --hints--

`hound` は `Dog` コンストラクターを使用して作成する必要があります。

```js
assert(hound instanceof Dog);
```

`Dog` のインスタンスを作成するには、`new` 演算子を使用する必要があります。

```js
assert(code.match(/new/g));
```

# --seed--

## --seed-contents--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
```

# --solutions--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
const hound = new Dog();
```
