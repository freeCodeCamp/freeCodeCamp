---
id: a202eed8fc186c8434cb6d61
title: 反转字符串
challengeType: 1
forumTopicId: 16043
dashedName: reverse-a-string
---

# --description--

请反转传入函数的字符串。

在反转字符串之前，你可能需要将其切分成包含字符的数组。

函数的返回结果应为字符串。

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
