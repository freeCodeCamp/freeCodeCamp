---
id: 56533eb9ac21ba0edf2244b9
title: 変数を使用して文字列を作成する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cqk8rf4'
forumTopicId: 16805
dashedName: constructing-strings-with-variables
---

# --description--

文字列を組み立てなければならない場合があります。 連結演算子 (`+`) を使用して、作成する文字列に 1 つまたは複数の変数を挿入することができます。

例:

```js
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
```

`ourStr` の値は文字列 `Hello, our name is freeCodeCamp, how are you?` となります。

# --instructions--

`myName` にあなたの名前と同じ文字列を設定し、文字列 `My name is` と `and I am well!` の間に `myName` を挿入した `myStr` を作成してください。

# --hints--

`myName` には 3 文字以上の長さの文字列を設定する必要があります。

```js
assert(typeof myName !== 'undefined' && myName.length > 2);
```

2つの `+` 演算子を使用して、`myName` を挿入した `myStr` を作成する必要があります。

```js
assert(code.match(/["']\s*\+\s*myName\s*\+\s*["']/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof myName === 'string') {
    output.push('myName = "' + myName + '"');
  } else {
    output.push('myName is not a string');
  }
  if(typeof myStr === 'string') {
    output.push('myStr = "' + myStr + '"');
  } else {
    output.push('myStr is not a string');
  }
  return output.join('\n');
})();
```

## --seed-contents--

```js
// Only change code below this line
const myName = "";
const myStr = "";
```

# --solutions--

```js
const myName = "Bob";
const myStr = "My name is " + myName + " and I am well!";
```
