---
id: 56533eb9ac21ba0edf2244c9
title: 変数によるオブジェクトのプロパティへのアクセス
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

オブジェクトに対するブラケット記法のもう一つの用例として、プロパティを変数の値として保存し、アクセスする方法があります。 この用法は、オブジェクトのプロパティを繰り返し処理する場合や、ルックアップテーブルにアクセスする場合にとても便利です。

次は変数を使用してプロパティにアクセスする例です。

```js
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
```

コンソールには文字列 `Doberman` が表示されます。

変数を使用してプロパティにアクセスする場合、変数名を引用符で*囲まない*ことに注意してください。使用するのは変数の*値*であって、*名前*ではありません。

# --instructions--

`playerNumber` 変数を `16` に設定してください。 次に、変数を使用してプレイヤーの名前を参照し、それを `player` に割り当ててください。

# --hints--

`playerNumber` は数値である必要があります。

```js
assert(typeof playerNumber === 'number');
```

変数 `player` は文字列である必要があります。

```js
assert(typeof player === 'string');
```

`player` の値は文字列 `Montana` である必要があります。

```js
assert(player === 'Montana');
```

ブラケット記法を使用して `testObj` にアクセスする必要があります。

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

値 `Montana` を、変数 `player` に直接、割り当てることはできません。

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

ブラケット記法で、変数 `playerNumber` を使用する必要があります。

```js
assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof player !== "undefined"){(function(v){return v;})(player);}
```

## --seed-contents--

```js
// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 42;  // Change this line
const player = testObj;   // Change this line
```

# --solutions--

```js
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber];
```
