---
id: 56533eb9ac21ba0edf2244ed
title: 文字列への変数の連結
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmZfa'
forumTopicId: 16656
dashedName: appending-variables-to-strings
---

# --description--

複数行の文字列<dfn>リテラル</dfn>から文字列を作成することができますが、それと同じように、加算代入 (`+=`) 演算子を使用して変数を文字列に連結することができます。

例:

```js
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```

`ourStr` の値は `freeCodeCamp is awesome!` となります。

# --instructions--

`someAdjective` に 3 文字以上の文字列を設定し、`+=` 演算子を使用して `myStr` に連結してください。

# --hints--

`someAdjective` には 3 文字以上の長さの文字列を設定する必要があります。

```js
assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2);
```

`+=` 演算子を使用して、`someAdjective` を `myStr` に連結する必要があります。

```js
assert(code.match(/myStr\s*\+=\s*someAdjective\s*/).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof someAdjective === 'string') {
    output.push('someAdjective = "' + someAdjective + '"');
  } else {
    output.push('someAdjective is not a string');
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
// Change code below this line
const someAdjective = "";
let myStr = "Learning to code is ";
```

# --solutions--

```js
const someAdjective = "neat";
let myStr = "Learning to code is ";
myStr += someAdjective;
```
