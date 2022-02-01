---
id: 596e457071c35c882915b3e4
title: 文字列リストの比較
challengeType: 5
forumTopicId: 302235
dashedName: compare-a-list-of-strings
---

# --description--

任意の多くの文字列 [リスト](https://en.wikipedia.org/wiki/List_(abstract_data_type) "wp: List\_(abstract_data_type)") が与えられた場合、以下の各条件で関数を作成します。

<ul>
  <li>それらがすべて語彙として等しいかどうかをテストします</li>
  <li>すべての文字列がその後の文字列よりも語彙として短いかどうかをテストします (例えば、リストが厳密な昇順であるかどうか)</li>
</ul>

# --hints--

`allEqual` という関数です。

```js
assert(typeof allEqual === 'function');
```

`azSorted` という関数です。

```js
assert(typeof azSorted === 'function');
```

`allEqual(["AA", "AA", "AA", "AA"])` は真を返します。

```js
assert(allEqual(testCases[0]));
```

`azSorted(["AA", "AA", "AA", "AA"])` は偽を返します。

```js
assert(!azSorted(testCases[0]));
```

`allEqual(["AA", "ACB", "BB", "CC"])` は偽を返します。

```js
assert(!allEqual(testCases[1]));
```

`azSorted(["AA", "ACB", "BB", "CC"])` は真を返します。

```js
assert(azSorted(testCases[1]));
```

`allEqual([])` は真を返します。

```js
assert(allEqual(testCases[2]));
```

`azSorted([])` は真を返します。

```js
assert(azSorted(testCases[2]));
```

`allEqual(["AA"])` は真を返します。

```js
assert(allEqual(testCases[3]));
```

`azSorted(["AA"])` は真を返します。

```js
assert(azSorted(testCases[3]));
```

`allEqual(["BB", "AA"])` は偽を返します。

```js
assert(!allEqual(testCases[4]));
```

`azSorted(["BB", "AA"])` は偽を返します。

```js
assert(!azSorted(testCases[4]));
```

# --seed--

## --after-user-code--

```js
const testCases = [['AA', 'AA', 'AA', 'AA'], ['AA', 'ACB', 'BB', 'CC'], [], ['AA'], ['BB', 'AA']];
```

## --seed-contents--

```js
function allEqual(arr) {

  return true;
}

function azSorted(arr) {

  return true;
}
```

# --solutions--

```js
function allEqual(a) {
  let out = true;
  let i = 0;
  while (++i < a.length) {
    out = out && (a[i - 1] === a[i]);
  } return out;
}

function azSorted(a) {
  let out = true;
  let i = 0;
  while (++i < a.length) {
    out = out && (a[i - 1] < a[i]);
  } return out;
}
```
