---
id: 56533eb9ac21ba0edf2244b5
title: 文字列内の引用符リテラルをエスケープする
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvgSr'
forumTopicId: 17568
dashedName: escaping-literal-quotes-in-strings
---

# --description--

文字列を定義する際、文字列の先頭と末尾ではシングルクォートまたはダブルクォートを使用する必要があります。 もし文字列の中で引用符リテラル `"` または `'`、つまり引用符そのものが必要になった場合はどうすればよいでしょうか？

JavaScript では、引用符の直前に<dfn>バックスラッシュ (日本語では円記号)</dfn> (`\`) を入れることで、その引用符が文字列の終わりとみなされないようになります。これを「引用符を<dfn>エスケープ</dfn>する」といいます。

```js
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

エスケープによって、次に続く引用符が文字列の終わりではなく、文字列の中に出現する文字であることを JavaScript に伝えます。 この結果をコンソールに出力すると次のようになります。

```js
Alan said, "Peter is learning JavaScript".
```

# --instructions--

<dfn>バックスラッシュ</dfn>を使用して `myStr` 変数に文字列を代入し、次のようにコンソールに出力されるようにしてください。

```js
I am a "double quoted" string inside "double quotes".
```

# --hints--

2 つのダブルクォート (`"`) と 4 つのエスケープされたダブルクォート (`\"`) を使用する必要があります。

```js
assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
```

変数 `myStr` は文字列 `I am a "double quoted" string inside "double quotes".` になる必要があります。

```js
assert(/I am a "double quoted" string inside "double quotes(\."|"\.)$/.test(myStr));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();
```

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```
