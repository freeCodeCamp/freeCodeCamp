---
id: 56bbb991ad1ed5201cd392d3
title: JavaScript オブジェクトからのプロパティの削除
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqKdTv'
forumTopicId: 17560
dashedName: delete-properties-from-a-javascript-object
---

# --description--

次のようにオブジェクトからプロパティを削除することもできます。

```js
delete ourDog.bark;
```

例:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
```

上記の最後の行の後の `ourDog` は次のようになります。

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

# --instructions--

`tails` プロパティを `myDog` から削除してください。 ドット記法またはブラケット記法のいずれも使用できます。

# --hints--

プロパティ `tails` を `myDog` から削除する必要があります。

```js
assert(typeof myDog === 'object' && myDog.tails === undefined);
```

`myDog` の設定を変更しないでください。

```js
assert(code.match(/"tails": 1/g).length > 0);
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
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

```

# --solutions--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
```
