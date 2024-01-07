---
id: a202eed8fc186c8434cb6d61
title: 反转字符串
challengeType: 1
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

反转提供的字符串并返回反转后的字符串。

例如， `"hello"` 应该变成 `"olleh"`。

# --hints--

`reverseString("hello")` 应返回一个字符串。

```js
assert(typeof reverseString('hello') === 'string');
```

`reverseString("hello")` 应返回 `olleh`。

```js
assert(reverseString('hello') === 'olleh');
```

`reverseString("Howdy")` 应返回 `ydwoH`。

```js
assert(reverseString('Howdy') === 'ydwoH');
```

`reverseString("Greetings from Earth")` 应返回 `htraE morf sgniteerG`。

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
