---
id: ab6137d4e35944e21037b769
title: 句中單詞首字母大寫
challengeType: 1
forumTopicId: 16088
dashedName: title-case-a-sentence
---

# --description--

請將傳入的字符串中，每個單詞的第一個字母變成大寫並返回。 注意除首字母外，其餘的字符都應是小寫的。

在這個挑戰中，我們還需要將諸如 `the` 和 `of` 之類的連接詞大寫。

# --hints--

`titleCase("I'm a little tea pot")` 應返回一個字符串。

```js
assert(typeof titleCase("I'm a little tea pot") === 'string');
```

`titleCase("I'm a little tea pot")` 應返回 `I'm A Little Tea Pot`。

```js
assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot");
```

`titleCase("sHoRt AnD sToUt")` 應返回 `Short And Stout`。

```js
assert(titleCase('sHoRt AnD sToUt') === 'Short And Stout');
```

`titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")` 應返回 `Here Is My Handle Here Is My Spout`。

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
