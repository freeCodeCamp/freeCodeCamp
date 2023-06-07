---
id: ab6137d4e35944e21037b769
title: 句中单词首字母大写
challengeType: 1
forumTopicId: 16088
dashedName: title-case-a-sentence
---

# --description--

请将传入的字符串中，每个单词的第一个字母变成大写并返回。 注意除首字母外，其余的字符都应是小写的。

在这个挑战中，我们还需要将诸如 `the` 和 `of` 之类的连接词大写。

# --hints--

`titleCase("I'm a little tea pot")` 应返回一个字符串。

```js
assert(typeof titleCase("I'm a little tea pot") === 'string');
```

`titleCase("I'm a little tea pot")` 应返回 `I'm A Little Tea Pot`。

```js
assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
```

`titleCase("sHoRt AnD sToUt")` 应返回 `Short And Stout`。

```js
assert(titleCase('sHoRt AnD sToUt') === 'Short And Stout');
```

`titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` 应返回 `Here Is My Handle Here Is My Spout`。

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
