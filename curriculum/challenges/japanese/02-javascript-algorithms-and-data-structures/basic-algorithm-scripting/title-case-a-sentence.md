---
id: ab6137d4e35944e21037b769
title: 文章をタイトルケースに変換
challengeType: 1
forumTopicId: 16088
dashedName: title-case-a-sentence
---

# --description--

与えられた文字列を、各単語の最初の文字を大文字にして返してください。 単語の残りの文字が小文字であることを確認してください。

この演習では、 `the` や `of` のような接続語なども大文字にする必要があります。

# --hints--

`titleCase("I'm a little tea pot")` は文字列を返す必要があります。

```js
assert(typeof titleCase("I'm a little tea pot") === 'string');
```

`titleCase("I'm a little tea pot")` は文字列 `I'm A Little Tea Pot` を返す必要があります。

```js
assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
```

`titleCase("sHoRt AnD sToUt")` は文字列 `Short And Stout` を返す必要があります。

```js
assert(titleCase('sHoRt AnD sToUt') === 'Short And Stout');
```

`titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` は文字列 `Here Is My Handle Here Is My Spout` を返す必要があります。

```js
assert(
  titleCase('HERE IS MY HANDLE HERE IS MY SPOUT') ===
    'Here Is My Handle Here Is My Spout'
);
```

# --seed--

## --seed-contents--

```js
function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
```

# --solutions--

```js
function titleCase(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join(' ');
}

titleCase("I'm a little tea pot");
```
