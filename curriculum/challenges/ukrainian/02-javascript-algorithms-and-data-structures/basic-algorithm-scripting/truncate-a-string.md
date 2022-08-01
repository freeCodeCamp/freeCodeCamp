---
id: ac6993d51946422351508a41
title: Алгоритм Truncate a String (Скорочення рядка)
challengeType: 1
forumTopicId: 16089
dashedName: truncate-a-string
---

# --description--

Скоротіть рядок якщо перший аргумент довший ніж задана максимальна довжина рядка (другий аргумент). Перетворіть скорочений рядок на `...`.

# --hints--

`truncateString("A-tisket a-tasket A green and yellow basket", 8)` має повернути рядок `A-tisket...`.

```js
assert(
  truncateString('A-tisket a-tasket A green and yellow basket', 8) ===
    'A-tisket...'
);
```

`truncateString("Peter Piper picked a peck of pickled peppers", 11)` має повернути рядок `Peter Piper...`.

```js
assert(
  truncateString('Peter Piper picked a peck of pickled peppers', 11) ===
    'Peter Piper...'
);
```

`truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)` має повернути рядок `A-tisket a-tasket A green and yellow basket`.

```js
assert(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  ) === 'A-tisket a-tasket A green and yellow basket'
);
```

`truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)` має повернути рядок `A-tisket a-tasket A green and yellow basket`.

```js
assert(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length + 2
  ) === 'A-tisket a-tasket A green and yellow basket'
);
```

`truncateString("A-", 1)` має повернути рядок `A...`.

```js
assert(truncateString('A-', 1) === 'A...');
```

`truncateString("Absolutely Longer", 2)` має повернути рядок `Ab...`.

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
