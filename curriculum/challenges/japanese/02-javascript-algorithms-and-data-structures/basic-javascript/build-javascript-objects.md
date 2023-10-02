---
id: 56bbb991ad1ed5201cd392d0
title: JavaScript オブジェクトの作成
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
dashedName: build-javascript-objects
---

# --description--

これまでに `object` (オブジェクト) という言葉を耳にしたことがあるでしょうか。

オブジェクトは `arrays` (配列) に似ていますが、配列とは異なり、インデックスを使用してデータにアクセスしたりデータを変更したりする代わりに、`properties` (プロパティ) と呼ばれるものを通じてオブジェクトのデータにアクセスします。

オブジェクトはデータを構造化して格納する場合に便利であり、たとえば猫などの現実世界の物体 (オブジェクト) を表現することができます。

次は猫のオブジェクトの例です。

```js
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

この例では、すべてのプロパティを `name`、`legs`、`tails` のように文字列として格納しています。 しかし、数値もプロパティとして使用することが可能です。 次のように、1 つの単語の文字列プロパティの場合は引用符を省略することもできます。

```js
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

ただし、オブジェクトに文字列ではないプロパティがある場合、JavaScript では自動的に文字列に型変換されます。

# --instructions--

犬を表現する `myDog` というオブジェクトを作成してください。このオブジェクトには `name` (文字列)、`legs`、`tails`、`friends` というプロパティを含めてください。

オブジェクトのプロパティには任意の値を設定できます。ただし、`name` は文字列、`legs` と `tails` は数値、`friends` は配列とします。

# --hints--

`myDog` はプロパティ `name` を含み、それは `string` である必要があります。

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('name') &&
      z.name !== undefined &&
      typeof z.name === 'string'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` はプロパティ `legs` を含み、それは `number` である必要があります。

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('legs') &&
      z.legs !== undefined &&
      typeof z.legs === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` はプロパティ `tails` を含み、それは `number` である必要があります。

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('tails') &&
      z.tails !== undefined &&
      typeof z.tails === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` はプロパティ `friends` を含み、それは `array` である必要があります。

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('friends') &&
      z.friends !== undefined &&
      Array.isArray(z.friends)
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` には指定されたすべてのプロパティのみを含めてください。

```js
assert(
  (function (z) {
    return Object.keys(z).length === 4;
  })(myDog)
);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
const myDog = {
  // Only change code below this line


  // Only change code above this line
};
```

# --solutions--

```js
const myDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```
