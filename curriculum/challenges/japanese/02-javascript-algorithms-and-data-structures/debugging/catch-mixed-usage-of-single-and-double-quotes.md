---
id: 587d7b84367417b2b2512b37
title: シングルクォートとダブルクォートの混用をキャッチする
challengeType: 1
forumTopicId: 301188
dashedName: catch-mixed-usage-of-single-and-double-quotes
---

# --description--

JavaScript では、文字列の宣言にシングルクォート (`'`) と ダブルクォート (`"`) のどちらの引用符も使用できます。 どちらを使用するかは通常は個人の好みによりますが、いくつか例外があります。

文字列に短縮形が含まれている場合や、引用符で囲まれた別のテキストがある場合は、2 つの選択肢があると便利です。 ただし、文字列をあまりに早く終了することがないように注意してください。構文エラーになります。

引用符を混用している例を次に示します。

```js
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

最初の 2 つは正しい構文ですが、3 つ目は間違っています。

もちろん、一種類の引用符だけを使用しても構いません。 バックスラッシュ (`\`) エスケープ文字 (日本語では円記号) を使用して、文字列内の引用符をエスケープすることができます。

```js
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

# --instructions--

`href` 値に対して別の引用符を使用するか、既存の引用符をエスケープするように、文字列を修正してください。 文字列全体はダブルクォートで囲んでください。

# --hints--

`href` の値 `#Home` を囲む引用符を変更するか、またはエスケープして、コードを修正します。

```js
assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g));
```

文字列全体をダブルクォートで囲みます。

```js
assert(code.match(/"<p>.*?<\/p>";/g));
```

# --seed--

## --seed-contents--

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
```

# --solutions--

```js
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
```
