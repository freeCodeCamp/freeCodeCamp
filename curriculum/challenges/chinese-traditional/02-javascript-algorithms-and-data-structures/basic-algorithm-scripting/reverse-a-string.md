---
id: a202eed8fc186c8434cb6d61
title: 反轉字符串
challengeType: 1
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

反轉提供的字符串並返回反轉後的字符串。

例如， `"hello"` 應該變成 `"olleh"`。

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
