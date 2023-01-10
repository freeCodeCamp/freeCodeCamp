---
id: af2170cad53daa0770fabdea
title: ミューテーション
challengeType: 1
forumTopicId: 16025
dashedName: mutations
---

# --description--

配列の最初の要素内の文字列に、2 番目の要素内の文字列にあるすべての文字が含まれている場合に、`true` を返してください。

たとえば、`["hello", "Hello"]` は、2 番目の文字列内のすべての文字が最初の文字列に含まれているので、`true` を返す必要があります (大文字と小文字は区別しません)。

引数 `["hello", "hey"]` は `false` を返す必要があります。文字列 `hello` には `y` が含まれていないからです。

最後の例として、`["Alien", "line"]` は `true` を返す必要があります。`line` のすべての文字が `Alien` に含まれているからです。

# --hints--

`mutation(["hello", "hey"])` は `false` を返す必要があります。

```js
assert(mutation(['hello', 'hey']) === false);
```

`mutation(["hello", "Hello"])` は `true` を返す必要があります。

```js
assert(mutation(['hello', 'Hello']) === true);
```

`mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` は `true` を返す必要があります。

```js
assert(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']) === true);
```

`mutation(["Mary", "Army"])` は `true` を返す必要があります。

```js
assert(mutation(['Mary', 'Army']) === true);
```

`mutation(["Mary", "Aarmy"])` は `true` を返す必要があります。

```js
assert(mutation(['Mary', 'Aarmy']) === true);
```

`mutation(["Alien", "line"])` は `true` を返す必要があります。

```js
assert(mutation(['Alien', 'line']) === true);
```

`mutation(["floor", "for"])` は `true` を返す必要があります。

```js
assert(mutation(['floor', 'for']) === true);
```

`mutation(["hello", "neo"])` は `false` を返す必要があります。

```js
assert(mutation(['hello', 'neo']) === false);
```

`mutation(["voodoo", "no"])` は `false` を返す必要があります。

```js
assert(mutation(['voodoo', 'no']) === false);
```

`mutation(["ate", "date"])` は `false` を返す必要があります。

```js
assert(mutation(['ate', 'date']) === false);
```

`mutation(["Tiger", "Zebra"])` は `false` を返す必要があります。

```js
assert(mutation(['Tiger', 'Zebra']) === false);
```

`mutation(["Noel", "Ole"])` は `true` を返す必要があります。

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
