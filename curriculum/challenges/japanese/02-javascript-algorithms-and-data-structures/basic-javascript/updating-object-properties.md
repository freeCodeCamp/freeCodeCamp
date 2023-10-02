---
id: 56bbb991ad1ed5201cd392d1
title: オブジェクトのプロパティを更新する
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yEJT4'
forumTopicId: 18336
dashedName: updating-object-properties
---

# --description--

JavaScript オブジェクトを作成した後、他の変数と同じようにいつでもそのプロパティを更新することができます。 更新には、ドット記法またはブラケット記法のいずれも使用できます。

例として、`ourDog` を見てみましょう。

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

この犬はとても楽しい犬なので、名前を `Happy Camper` に変更してみましょう。 オブジェクトの name プロパティを更新するには、`ourDog.name = "Happy Camper";` と記述するか、`ourDog["name"] = "Happy Camper";` と記述します。これで `ourDog.name` の値を確認すると、`Camper` ではなく新しい名前の `Happy Camper` になっています。

# --instructions--

`myDog` オブジェクトの name プロパティを更新してください。 名前を `Coder` から `Happy Coder` に変更しましょう。 ドット記法またはブラケット記法のいずれも使用できます。

# --hints--

`myDog` の `name` プロパティが文字列 `Happy Coder` と等しくなるようにします。

```js
assert(/happy coder/gi.test(myDog.name));
```

`myDog` の定義を編集しないでください。

```js
assert(/"name": "Coder"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

```

# --solutions--

```js
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
```
