---
id: 5a23c84252665b21eecc8016
title: カスタムコンパレータを使用したソート
challengeType: 1
forumTopicId: 302309
dashedName: sort-using-a-custom-comparator
---

# --description--

文字列の配列 (またはリスト) を長さの降順に、かつ長さの等しい文字列は辞書式昇順にソートする関数を記述してください。

# --hints--

`lengthSorter` は関数とします。

```js
assert(typeof lengthSorter == 'function');
```

`lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"])` は配列を返す必要があります。

```js
assert(
  Array.isArray(
    lengthSorter([
      'Here',
      'are',
      'some',
      'sample',
      'strings',
      'to',
      'be',
      'sorted'
    ])
  )
);
```

`lengthSorter(["Here", "are", "some", "sample", "strings", "to", "be", "sorted"])` は `["strings", "sample", "sorted", "Here", "some", "are", "be", "to"]` を返す必要があります。

```js
assert.deepEqual(
  lengthSorter([
    'Here',
    'are',
    'some',
    'sample',
    'strings',
    'to',
    'be',
    'sorted'
  ]),
  ['strings', 'sample', 'sorted', 'Here', 'some', 'are', 'be', 'to']
);
```

`lengthSorter(["I", "hope", "your", "day", "is", "going", "good", "?"])` は `["going", "good", "hope", "your", "day", "is", "?","I"]` を返す必要があります。

```js
assert.deepEqual(
  lengthSorter(['I', 'hope', 'your', 'day', 'is', 'going', 'good', '?']),
  ['going', 'good', 'hope', 'your', 'day', 'is', '?', 'I']
);
```

`lengthSorter(["Mine", "is", "going", "great"])` は `["going", "great", "Mine", "is"]` を返す必要があります。

```js
assert.deepEqual(lengthSorter(['Mine', 'is', 'going', 'great']), [
  'going',
  'great',
  'Mine',
  'is'
]);
```

`lengthSorter(["Have", "fun", "sorting", "!!"])` は `["sorting", "Have", "fun", "!!"]` を返す必要があります。

```js
assert.deepEqual(lengthSorter(['Have', 'fun', 'sorting', '!!']), [
  'sorting',
  'Have',
  'fun',
  '!!'
]);
```

`lengthSorter(["Everything", "is", "good", "!!"])` は `["Everything", "good", "!!", "is"]` を返す必要があります。

```js
assert.deepEqual(lengthSorter(['Everything', 'is', 'good', '!!']), [
  'Everything',
  'good',
  '!!',
  'is'
]);
```

# --seed--

## --seed-contents--

```js
function lengthSorter(arr) {

}
```

# --solutions--

```js
function lengthSorter(arr) {
  arr.sort(function(a, b) {
    var result = b.length - a.length;
    if (result == 0) result = a.localeCompare(b);
    return result;
  });
  return arr;
}
```
