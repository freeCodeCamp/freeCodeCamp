---
id: 587d7dac367417b2b2512b73
title: 基本的な JavaScript のオブジェクトを作成する
challengeType: 1
forumTopicId: 301317
dashedName: create-a-basic-javascript-object
---

# --description--

車、お店、鳥など、人々が毎日見かけるものについて考えてみてください。 これらはすべて<dfn>オブジェクト</dfn> (対象物) です。人々が観察し、やり取りすることのできる有形のものです。

これらのオブジェクトの特徴は何でしょうか？ 車には車輪が付いています。 お店は品物を販売しています。 鳥には翼があります。

こうした特徴、つまりオブジェクトを構成するものを定義するのが<dfn>プロパティ</dfn>です。 似たようなオブジェクトどうしは同じプロパティを共有しますが、それらのプロパティの値は異なる可能性があります。 たとえば、すべての車には車輪がありますが、すべての車に同じ数の車輪があるわけではありません。

JavaScript のオブジェクトは、実際のオブジェクトをモデル化するために使用され、実際のオブジェクトと同じようにプロパティや動作を与えます。 次の例では、こうした概念を使用して `duck` オブジェクトを作成しています。

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

この `duck` オブジェクトには、プロパティと値のペアが 2 つあります。`Aflac` という `name` と、2 という `numLegs` です。

# --instructions--

`name` プロパティと `numLegs` プロパティを持つ `dog` オブジェクトを作成し、それぞれに文字列と数値を設定してください。

# --hints--

`dog` はオブジェクトである必要があります。

```js
assert(typeof dog === 'object');
```

`dog` は文字列に設定された `name` プロパティを持つ必要があります。

```js
assert(typeof dog.name === 'string');
```

`dog` は数値に設定された `numLegs` プロパティを持つ必要があります。

```js
assert(typeof dog.numLegs === 'number');
```

# --seed--

## --seed-contents--

```js
let dog = {

};
```

# --solutions--

```js
let dog = {
  name: '',
  numLegs: 4
};
```
