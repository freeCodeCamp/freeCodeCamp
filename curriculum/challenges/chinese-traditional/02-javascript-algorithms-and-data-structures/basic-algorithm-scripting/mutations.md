---
id: af2170cad53daa0770fabdea
title: 比較字符串
challengeType: 1
forumTopicId: 16025
dashedName: mutations
---

# --description--

如果數組裏的第一個字符串包含了第二個字符串中的所有字母，則返回 `true`。

例如，`["hello", "Hello"]` 應該返回 `true`。因爲在忽略大小寫的情況下，第一個字符串包含了第二個字符串裏出現的所有字母。

`["hello", "hey"]` 應該返回 `false`。因爲 `hello` 並不包含字符 `y`。

最後，`["Alien", "line"]` 應該返回 `true`。因爲 `line` 中的所有字母都出現在了 `Alien` 中。

# --hints--

`mutation(["hello", "hey"])` 應返回 `false`。

```js
assert(mutation(['hello', 'hey']) === false);
```

`mutation(["hello", "Hello"])` 應返回 `true`。

```js
assert(mutation(['hello', 'Hello']) === true);
```

`mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` 應返回 `true`。

```js
assert(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']) === true);
```

`mutation(["Mary", "Army"])` 應返回 `true`。

```js
assert(mutation(['Mary', 'Army']) === true);
```

`mutation(["Mary", "Aarmy"])` 應返回 `true`。

```js
assert(mutation(['Mary', 'Aarmy']) === true);
```

`mutation(["Alien", "line"])` 應返回 `true`。

```js
assert(mutation(['Alien', 'line']) === true);
```

`mutation(["floor", "for"])` 應返回 `true`。

```js
assert(mutation(['floor', 'for']) === true);
```

`mutation(["hello", "neo"])` 應返回 `false`。

```js
assert(mutation(['hello', 'neo']) === false);
```

`mutation(["voodoo", "no"])` 應返回 `false`。

```js
assert(mutation(['voodoo', 'no']) === false);
```

`mutation(["ate", "date"])` 應返回 `false`。

```js
assert(mutation(['ate', 'date']) === false);
```

`mutation(["Tiger", "Zebra"])` 應返回 `false`。

```js
assert(mutation(['Tiger', 'Zebra']) === false);
```

`mutation(["Noel", "Ole"])` 應返回 `true`。

```js
assert(mutation(['Noel', 'Ole']) === true);
```

# --seed--

## --seed-contents--

```js
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);
```

# --solutions--

```js
function mutation(arr) {
  let hash = Object.create(null);

  arr[0].toLowerCase().split('').forEach(c => hash[c] = true);

  return !arr[1].toLowerCase().split('').filter(c => !hash[c]).length;
}

mutation(["hello", "hey"]);
```
