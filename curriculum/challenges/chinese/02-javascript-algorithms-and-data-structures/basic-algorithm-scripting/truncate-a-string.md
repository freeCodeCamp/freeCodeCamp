---
id: ac6993d51946422351508a41
title: 截断字符串
challengeType: 5
videoUrl: ''
---

# --description--

如果字符串（第一个参数）长于给定的最大字符串长度（第二个参数），则截断该字符串。返回带有`...`结尾的截断字符串。如果卡住，请记得使用[Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) 。编写自己的代码。

# --hints--

`truncateString("A-tisket a-tasket A green and yellow basket", 8)`应该返回“A-tisket ......”。

```js
assert(
  truncateString('A-tisket a-tasket A green and yellow basket', 8) ===
    'A-tisket...'
);
```

`truncateString("Peter Piper picked a peck of pickled peppers", 11)`应该回归“Peter Piper ......”。

```js
assert(
  truncateString('Peter Piper picked a peck of pickled peppers', 11) ===
    'Peter Piper...'
);
```

`truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)`应该返回“A-tisket a-tasket A green and yellow basket”。

```js
assert(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  ) === 'A-tisket a-tasket A green and yellow basket'
);
```

`truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)`应返回“A-tisket a-tasket A green and yellow basket”。

```js
assert(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length + 2
  ) === 'A-tisket a-tasket A green and yellow basket'
);
```

`truncateString("A-", 1)`应返回“A ...”。

```js
assert(truncateString('A-', 1) === 'A...');
```

`truncateString("Absolutely Longer", 2)`应返回“Ab ...”。

```js
assert(truncateString('Absolutely Longer', 2) === 'Ab...');
```

# --solutions--

