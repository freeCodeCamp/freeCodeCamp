---
id: a202eed8fc186c8434cb6d61
title: 文字列の反転
challengeType: 1
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

指定された文字列を反転させてください。

場合によっては、文字列を反転させる前に文字列を配列に変換する必要があります。

結果は必ず文字列にする必要があります。

# --hints--

`reverseString("hello")` は文字列を返す必要があります。

```js
assert(typeof reverseString('hello') === 'string');
```

`reverseString("hello")` は文字列 `olleh` を返す必要があります。

```js
assert(reverseString('hello') === 'olleh');
```

`reverseString("Howdy")` は文字列 `ydwoH` を返す必要があります。

```js
assert(reverseString('Howdy') === 'ydwoH');
```

`reverseString("Greetings from Earth")` は文字列 `htraE morf sgniteerG` を返す必要があります。

```js
assert(reverseString('Greetings from Earth') === 'htraE morf sgniteerG');
```

# --seed--

## --seed-contents--

```js
function reverseString(str) {
  return str;
}

reverseString("hello");
```

# --solutions--

```js
function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");
```
