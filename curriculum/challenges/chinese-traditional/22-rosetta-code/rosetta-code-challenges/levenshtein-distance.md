---
id: 5e4ce2eaac708cc68c1df260
title: 萊文斯坦距離
challengeType: 1
forumTopicId: 385264
dashedName: levenshtein-distance
---

# --description--

In information theory and computer science, the **Levenshtein distance** is a metric for measuring the amount of difference between two sequences (i.e. an edit distance). The Levenshtein distance between two strings is defined as the minimum number of edits needed to transform one string into the other, with the allowable edit operations being insertion, deletion, or substitution of a single character.

例如：

"**kitten**" 和 "**sitting**" 之間的 Levenshtein 距離爲 3，因爲以下三個編輯將其中一個變爲另一個，並且沒有一種方法可以通過少於三個編輯來做到這一點：

<ul>
  <li><strong>k</strong>itten   <strong>s</strong>itten    (substitution of 'k' with 's')</li>
  <li>sitt<strong>e</strong>n   sitt<strong>i</strong>n    (用 'i' 替換 'e')</li>
  <li>sittin   sittin<strong>g</strong>    (在末尾插入 'g')。</li>
</ul>

*"**rosettacode**" 和 "**raisethysword**" 之間的 Levenshtein 距離是 ** 8**。*

*兩個字符串之間的距離與兩個字符串顛倒後的距離相同。*

# --instructions--

編寫一個函數，返回作爲參數給出的兩個字符串之間的 Levenshtein 距離。

# --hints--

`levenshtein` 應該是一個函數。

```js
assert(typeof levenshtein == 'function');
```

`levenshtein("mist", "dist")` 應該返回一個數字。

```js
assert(typeof levenshtein('mist', 'dist') == 'number');
```

`levenshtein("mist", "dist")` 應該返回 `1`。

```js
assert.equal(levenshtein('mist', 'dist'), 1);
```

`levenshtein("tier", "tor")` 應該返回 `2`。

```js
assert.equal(levenshtein('tier', 'tor'), 2);
```

`levenshtein("kitten", "sitting")` 應該返回 `3`。

```js
assert.equal(levenshtein('kitten', 'sitting'), 3);
```

`levenshtein("stop", "tops")` 應該返回 `2`。

```js
assert.equal(levenshtein('stop', 'tops'), 2);
```

`levenshtein("rosettacode", "raisethysword")` 應該返回 `8`。

```js
assert.equal(levenshtein('rosettacode', 'raisethysword'), 8);
```

`levenshtein("mississippi", "swiss miss")` 應該返回 `8`。

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
