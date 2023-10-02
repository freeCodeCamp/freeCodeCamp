---
id: 5e4ce2eaac708cc68c1df260
title: レーベンシュタイン距離
challengeType: 1
forumTopicId: 385264
dashedName: levenshtein-distance
---

# --description--

In information theory and computer science, the **Levenshtein distance** is a metric for measuring the amount of difference between two sequences (i.e. an edit distance). 2 つの文字列間のレーベンシュタイン距離は、1 つの文字の挿入、削除、置換を行うことで、1 つの文字列をもう 1 つの文字列に変換するために必要な最小編集回数として定義されます。

例:

"**kitten**" と "**sitting**" の間のレーベンシュタイン距離は 3 です。以下の 3 回で一方から他方へと変換され、かつ 3 回より少ない回数の編集でこの変換を行う方法がないからです。

<ul>
  <li><strong>k</strong>itten   <strong>s</strong>itten    ('k' を 's' で置換)</li>
  <li>sitt<strong>e</strong>n   sitt<strong>i</strong>n    ('e' を 'i' で置換)</li>
  <li>sittin   sittin<strong>g</strong>    (最後に 'g' を挿入)</li>
</ul>

*"**rosettacode**" と "**raisethysword**" とのレーベンシュタイン距離は **8** となります。*

*2つの文字列間のレーベンシュタイン距離は、両方の文字列を逆にした場合も同じです。*

# --instructions--

パラメータとして与えられた 2 つの文字列間のレーベンシュタイン距離を返す関数を記述してください。

# --hints--

`levenshtein` は関数とします。

```js
assert(typeof levenshtein == 'function');
```

`levenshtein("mist", "dist")` は数値を返す必要があります。

```js
assert(typeof levenshtein('mist', 'dist') == 'number');
```

`levenshtein("mist", "dist")` は `1` を返す必要があります。

```js
assert.equal(levenshtein('mist', 'dist'), 1);
```

`levenshtein("tier", "tor")` は `2` を返す必要があります。

```js
assert.equal(levenshtein('tier', 'tor'), 2);
```

`levenshtein("kitten", "sitting")` は `3` を返す必要があります。

```js
assert.equal(levenshtein('kitten', 'sitting'), 3);
```

`levenshtein("stop", "tops")` は `2` を返す必要があります。

```js
assert.equal(levenshtein('stop', 'tops'), 2);
```

`levenshtein("rosettacode", "raisethysword")` は `8` を返す必要があります。

```js
assert.equal(levenshtein('rosettacode', 'raisethysword'), 8);
```

`levenshtein("mississippi", "swiss miss")` は `8` を返す必要があります。

```js
assert.equal(levenshtein('mississippi', 'swiss miss'), 8);
```

# --seed--

## --seed-contents--

```js
function levenshtein(a, b) {

}
```

# --solutions--

```js
function levenshtein(a, b) {
  var t = [], u, i, j, m = a.length, n = b.length;
  if (!m) { return n; }
  if (!n) { return m; }
  for (j = 0; j <= n; j++) { t[j] = j; }
  for (i = 1; i <= m; i++) {
    for (u = [i], j = 1; j <= n; j++) {
      u[j] = a[i - 1] === b[j - 1] ? t[j - 1] : Math.min(t[j - 1], t[j], u[j - 1]) + 1;
    } t = u;
  } return u[n];
}
```
