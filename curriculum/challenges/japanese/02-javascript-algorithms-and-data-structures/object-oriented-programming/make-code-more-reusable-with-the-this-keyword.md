---
id: 587d7dad367417b2b2512b76
title: this キーワードを使用してコードの再利用性を高める
challengeType: 1
forumTopicId: 301321
dashedName: make-code-more-reusable-with-the-this-keyword
---

# --description--

前回のチャレンジでは、`duck` オブジェクトにメソッドを導入しました。 `duck.name` というドット表記を使用して、return ステートメントの中で `name` プロパティの値にアクセスしました。

```js
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

これはオブジェクトのプロパティにアクセスするための有効な方法ですが、ここには落とし穴があります。 変数名を変更する場合、元の名前を参照しているコードも同様に更新する必要があります。 オブジェクトの定義が短ければ問題ありませんが、オブジェクトに自身のプロパティへの参照が多数あると、エラーが発生する可能性が高くなります。

この問題を回避する方法として、`this` キーワードを使用できます。

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

`this` は奥深いキーワードであり、上記はその用例の 1 つにすぎません。 現在のコンテキストでは、`this` は、メソッドが関連付けられているオブジェクト `duck` を参照します。 オブジェクトの名前を `mallard` に変更したとしても、コードの中ですべての `duck` への参照を探す必要はありません。 コードが再利用可能になり、読みやすくなります。

# --instructions--

`dog.sayLegs` メソッドを変更して、`dog` への参照を削除してください。 `duck` の例を参考にしてください。

# --hints--

`dog.sayLegs()` は与えられた文字列を返す必要があります。

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

コードで `dog` の `numLegs` プロパティにアクセスするには、`this` キーワードを使用する必要があります。

```js
assert(code.match(/this\.numLegs/g));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
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
