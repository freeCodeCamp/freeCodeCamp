---
id: ac6993d51946422351508a41
title: اقتطاع (Truncate) القطع (String) النصي
challengeType: 1
forumTopicId: 16089
dashedName: truncate-a-string
---

# --description--

اقتطع المقطع النصي (الحَجَّة الأولى) إذا كانت أطول من الحد الأقصى المحدد لطول المقطع النصي (الحَجَّة الثانية). أنشئ المقطع النصي المتقطع حيث ينتهي بـ `...` ثلاث نُقَط.

# --hints--

`truncateString("A-tisket a-tasket A green and yellow basket", 8)` يجب أن يُنشئ المقطع النصي `A-tisket...`.

```js
assert(
  truncateString('A-tisket a-tasket A green and yellow basket', 8) ===
    'A-tisket...'
);
```

`truncateString("Peter Piper picked a peck of pickled peppers", 11)` يجب أن يُنشئ المقطع `Peter Piper...`.

```js
assert(
  truncateString('Peter Piper picked a peck of pickled peppers', 11) ===
    'Peter Piper...'
);
```

`truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)` يجب أن ينشئ المقطع `A-tisket a-tasket A green and yellow basket`.

```js
assert(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length
  ) === 'A-tisket a-tasket A green and yellow basket'
);
```

`truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)` يجب أن يرجع المقطع `A-tisket a-tasket A green and yellow basket`.

```js
assert(
  truncateString(
    'A-tisket a-tasket A green and yellow basket',
    'A-tisket a-tasket A green and yellow basket'.length + 2
  ) === 'A-tisket a-tasket A green and yellow basket'
);
```

`truncateString("A-", 1)` يجب أن ينشئ المقطع `A...`.

```js
assert(truncateString('A-', 1) === 'A...');
```

`truncateString("Absolutely Longer", 2)` يجب أن ينشئ المقطع `Ab...`.

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
