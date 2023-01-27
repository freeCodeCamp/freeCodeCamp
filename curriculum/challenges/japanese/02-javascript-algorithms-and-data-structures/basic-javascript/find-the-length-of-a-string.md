---
id: bd7123c9c448eddfaeb5bdef
title: 文字列の長さの取得
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
dashedName: find-the-length-of-a-string
---

# --description--

文字列変数または文字列リテラルの後に `.length` と記述することで、`String` 値の長さを取得することができます。

```js
console.log("Alan Peter".length);
```

コンソールに `10` の値が表示されます。 なお、"Alan" と "Peter" の間のスペースも文字としてカウントされます。

たとえば、変数 `const firstName = "Ada"` を作成した場合、`firstName.length` プロパティを使用して文字列 `Ada` の長さを取得できます。

# --instructions--

`.length` プロパティを使って、`lastNameLength` に `lastName` の文字数を設定します。

# --hints--

`// Setup` セクションの変数宣言を変更しないでください。

```js
assert(
  code.match(/let lastNameLength = 0;/) &&
    code.match(/const lastName = "Lovelace";/)
);
```

`lastNameLength` は 8 になる必要があります。

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

`lastName.length` のように、`.length` を使用して `lastName` の長さを取得する必要があります。

```js
assert(code.match(/=\s*lastName\.length/g) && !code.match(/lastName\s*=\s*8/));
```

# --seed--

## --seed-contents--

```js
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName;
```

# --solutions--

```js
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
```
