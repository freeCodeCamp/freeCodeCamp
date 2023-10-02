---
id: 587d7dac367417b2b2512b74
title: ドット表記を使用してオブジェクトのプロパティにアクセスする
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

前回のチャレンジでは、さまざまなプロパティを持つオブジェクトを作成しました。 ここでは、これらのプロパティの値にアクセスする方法を紹介しましょう。 例を次に示します。

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

`Aflac` という値にアクセスするには、オブジェクト名 `duck` に続いて、ドット表記を使用してプロパティ名 `name` を記述します。

# --instructions--

`dog` オブジェクトの両方のプロパティをコンソールに出力してください。

# --hints--

`console.log` を使用して、`dog` オブジェクトの `name` プロパティの値を出力します。

```js
assert(/console.log\(.*dog\.name.*\)/g.test(code));
```

`console.log` を使用して、`dog` オブジェクトの `numLegs` プロパティの値を出力します。

```js
assert(/console.log\(.*dog\.numLegs.*\)/g.test(code));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);
```
