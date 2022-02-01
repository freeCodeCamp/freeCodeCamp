---
id: 5e6dd1278e6ca105cde40ea9
title: 最長共通部分列
challengeType: 5
forumTopicId: 385271
dashedName: longest-common-subsequence
---

# --description--

グループAおよびBの **最長共通部分列** (または [**LCS**](http://en.wikipedia.org/wiki/Longest_common_subsequence_problem)) とは、2つのグループ間で共通していて、各グループで同じ順序であるAおよびBの要素の最長グループです。 たとえば、数列 "1234" と "1224533324" の LCS は "1234" です。

***1234***

***12***245***3***332***4***

文字列の例として、文字列 "thisisatest" と "testing123testing" の場合を考えてみましょう。 LCS は "tsitest" となります。

***t***hi***si***sa***test***

***t***e***s***t***i***ng123***test***ing.

今回のコードでは文字列のみを扱います。

この問題の詳細については、 [Wikipedia](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem) を参照してください。

# --instructions--

2 つの文字列の LCS を返す関数 (大文字と小文字を区別する) を記述してください。 複数の LCS を表示する必要はありません。

# --hints--

`lcs` は関数とします。

```js
assert(typeof lcs == 'function');
```

`lcs("thisisatest", "testing123testing")` は文字列を返す必要があります。

```js
assert(typeof lcs('thisisatest', 'testing123testing') == 'string');
```

`lcs("thisisatest", "testing123testing")` は `"tsitest"` を返す必要があります。

```js
assert.equal(lcs('thisisatest', 'testing123testing'), 'tsitest');
```

`lcs("ABCDGH", "AEDFHR")` は `"ADH"` を返す必要があります。

```js
assert.equal(lcs('ABCDGH', 'AEDFHR'), 'ADH');
```

`lcs("AGGTAB", "GXTXAYB")` は `"GTAB"` を返す必要があります。

```js
assert.equal(lcs('AGGTAB', 'GXTXAYB'), 'GTAB');
```

`lcs("BDACDB", "BDCB")` は `"BDCB"` を返す必要があります。

```js
assert.equal(lcs('BDACDB', 'BDCB'), 'BDCB');
```

`lcs("ABAZDC", "BACBAD")` は `"ABAD"` を返す必要があります。

```js
assert.equal(lcs('ABAZDC', 'BACBAD'), 'ABAD');
```

# --seed--

## --seed-contents--

```js
function lcs(a, b) {

}
```

# --solutions--

```js
function lcs(a, b) {
  var aSub = a.substr(0, a.length - 1);
  var bSub = b.substr(0, b.length - 1);

  if (a.length === 0 || b.length === 0) {
    return '';
  } else if (a.charAt(a.length - 1) === b.charAt(b.length - 1)) {
    return lcs(aSub, bSub) + a.charAt(a.length - 1);
  } else {
    var x = lcs(a, bSub);
    var y = lcs(aSub, b);
    return (x.length > y.length) ? x : y;
  }
}
```
