---
id: a202eed8fc186c8434cb6d61
title: 文字列の反転
challengeType: 1
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

与えられた文字列を反転させて、反転した文字列を返してください。

例えば、`"hello"` は `"olleh"` となるようにしてください。

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
