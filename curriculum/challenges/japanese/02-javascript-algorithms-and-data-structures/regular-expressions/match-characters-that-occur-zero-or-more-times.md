---
id: 587d7db6367417b2b2512b9a
title: 0 回以上出現する文字にマッチさせる
challengeType: 1
forumTopicId: 301351
dashedName: match-characters-that-occur-zero-or-more-times
---

# --description--

前回のチャレンジでは、プラス `+` 記号を使用して、1 回以上出現する文字を検索しました。 0 回以上出現する文字にマッチするオプションもあります。

それにはアスタリスクまたはスター `*` 文字を使用します。

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
```

3 つの `match` 呼び出しは順に、値 `["goooooooo"]`、`["g"]`、`null` を返します。

# --instructions--

このチャレンジでは、`chewieQuote` を文字列 `Aaaaaaaaaaaaaaaarrrgh!` としてすでに初期化してあります。 `*` 文字を使用する正規表現 `chewieRegex` を作成し、`chewieQuote` の中で、大文字 `A` の直後に 0 個以上の小文字 `a` が続く箇所にマッチさせてください。 この正規表現にフラグや文字クラスは必要ありません。また、他のどの引用符ともマッチさせないでください。

# --hints--

正規表現 `chewieRegex` で `*` 文字を使用して、0 個以上の文字 `a` にマッチさせる必要があります。

```js
assert(/\*/.test(chewieRegex.source));
```

正規表現は `chewieQuote` にある文字列 `A` にマッチする必要があります。

```js
assert(result[0][0] === 'A');
```

正規表現は `chewieQuote` にある文字列 `Aaaaaaaaaaaaaaaa` にマッチする必要があります。

```js
assert(result[0] === 'Aaaaaaaaaaaaaaaa');
```

正規表現 `chewieRegex` は `chewieQuote` にある 16 文字にマッチする必要があります。

```js
assert(result[0].length === 16);
```

正規表現は文字列 `He made a fair move. Screaming about it can't help you.` にあるどの文字にもマッチしない必要があります。

```js
assert(
  !"He made a fair move. Screaming about it can't help you.".match(chewieRegex)
);
```

正規表現は文字列 `Let him have it. It's not wise to upset a Wookiee.` にあるどの文字にもマッチしない必要があります。

```js
assert(
  !"Let him have it. It's not wise to upset a Wookiee.".match(chewieRegex)
);
```

# --seed--

## --before-user-code--

```js
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
```

## --seed-contents--

```js
// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
```

# --solutions--

```js
  let chewieRegex = /Aa*/;
  let result = chewieQuote.match(chewieRegex);
```
