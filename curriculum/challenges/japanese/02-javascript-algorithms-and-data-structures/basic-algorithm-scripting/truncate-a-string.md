---
id: ac6993d51946422351508a41
title: 文字列の省略
challengeType: 1
forumTopicId: 16089
dashedName: truncate-a-string
---

# --description--

文字列 (最初の引数) が指定された最大文字列長 (2 番目の引数) より長い場合、文字列を切り捨ててください。 末尾に `...` を付けて、省略された文字列を返してください。

# --hints--

`truncateString("A-tisket a-tasket A green and yellow basket", 8)` は文字列 `A-tisket...` を返します。

```js
assert(
  truncateString('A-tisket a-tasket A green and yellow basket', 8) ===
    'A-tisket...'
);
```

`truncateString("Peter Piper picked a peck of pickled peppers", 11)` は文字列 `Peter Piper...` を返します。

```js
assert(
  truncateString('Peter Piper picked a peck of pickled peppers', 11) ===
    'Peter Piper...'
);
```

`truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)` は文字列 `A-tisket a-tasket A green and yellow basket` を返します。

```js
assert(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  ) === 'A-tisket a-tasket A green and yellow basket'
);
```

`truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)` は文字列 `A-tisket a-tasket A green and yellow basket` を返します。

```js
assert(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length + 2
  ) === 'A-tisket a-tasket A green and yellow basket'
);
```

`truncateString("A-", 1)` は文字列 `A...` を返します。

```js
assert(truncateString('A-', 1) === 'A...');
```

`truncateString("Absolutely Longer", 2)` は文字列 `Ab...` を返します。

```js
assert(truncateString('Absolutely Longer', 2) === 'Ab...');
```

# --seed--

## --seed-contents--

```js
function truncateString(str, num) {
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```

# --solutions--

```js
function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }

  return str.slice(0, num) + '...';
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```
