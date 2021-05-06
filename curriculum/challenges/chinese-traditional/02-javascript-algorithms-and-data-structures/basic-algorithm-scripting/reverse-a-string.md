---
id: a202eed8fc186c8434cb6d61
title: 反轉字符串
challengeType: 5
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

請反轉傳入函數的字符串。

在反轉字符串之前，你可能需要將其切分成包含字符的數組。

函數的返回結果應爲字符串。

# --hints--

`reverseString("hello")` 應返回一個字符串。

```js
assert(typeof reverseString('hello') === 'string');
```

`reverseString("hello")` 應返回 `olleh`。

```js
assert(reverseString('hello') === 'olleh');
```

`reverseString("Howdy")` 應返回 `ydwoH`。

```js
assert(reverseString('Howdy') === 'ydwoH');
```

`reverseString("Greetings from Earth")` 應返回 `htraE morf sgniteerG`。

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
