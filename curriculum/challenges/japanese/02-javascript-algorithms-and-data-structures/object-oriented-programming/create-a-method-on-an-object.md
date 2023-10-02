---
id: 587d7dad367417b2b2512b75
title: オブジェクトにメソッドを作成する
challengeType: 1
forumTopicId: 301318
dashedName: create-a-method-on-an-object
---

# --description--

オブジェクトには、<dfn>メソッド</dfn>と呼ばれる特別なタイプのプロパティを持たせることができます。

メソッドは、関数をその実体とするプロパティです。 メソッドによってオブジェクトにさまざまな動作が追加されます。 次は、メソッドを持つ `duck` の例です。

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
```

この例では、`sayName` メソッドを追加しています。これは、`duck` の名前を教える文章を返す関数です。 メソッドでは return ステートメントで `duck.name` を使用して `name` プロパティにアクセスしています。 次のチャレンジでは、これを実行する別の方法について説明します。

# --instructions--

`dog` オブジェクトを使用して、`sayLegs` というメソッドを追加してください。 このメソッドは `This dog has 4 legs.` という文章を返す必要があります。

# --hints--

`dog.sayLegs()` は関数である必要があります。

```js
assert(typeof dog.sayLegs === 'function');
```

`dog.sayLegs()` は与えられた文字列を返す必要があります。句読点とスペースが重要であることに注意してください。

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```
