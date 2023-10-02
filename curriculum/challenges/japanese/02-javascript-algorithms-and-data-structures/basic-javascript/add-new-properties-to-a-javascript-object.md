---
id: 56bbb991ad1ed5201cd392d2
title: JavaScript オブジェクトへの新しいプロパティの追加
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe38UD'
forumTopicId: 301169
dashedName: add-new-properties-to-a-javascript-object
---

# --description--

プロパティの変更と同じ方法で、既存の JavaScript オブジェクトに新しいプロパティを追加することができます。

`ourDog` に `bark` プロパティを追加する方法を次に示します。

```js
ourDog.bark = "bow-wow";
```

または

```js
ourDog["bark"] = "bow-wow";
```

これで `ourDog.bark` を評価すると、`bow-wow` という鳴き声が得られます。

例:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```

# --instructions--

`myDog` に `bark` プロパティを追加して、"woof" などの犬の鳴き声を設定してください。 ドット記法またはブラケット記法のいずれも使用できます。

# --hints--

プロパティ `bark` を `myDog` に追加する必要があります。

```js
assert(myDog.bark !== undefined);
```

`myDog` の初期化に `bark`を追加しないでください。

```js
assert(!/bark[^\n]:/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};


```

# --solutions--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Woof Woof";
```
