---
id: 5e4ce2eaac708cc68c1df260
title: 莱文斯坦距离
challengeType: 1
forumTopicId: 385264
dashedName: levenshtein-distance
---

# --description--

In information theory and computer science, the **Levenshtein distance** is a metric for measuring the amount of difference between two sequences (i.e. an edit distance). The Levenshtein distance between two strings is defined as the minimum number of edits needed to transform one string into the other, with the allowable edit operations being insertion, deletion, or substitution of a single character.

例如：

"**kitten**" 和 "**sitting**" 之间的 Levenshtein 距离为 3，因为以下三个编辑将其中一个变为另一个，并且没有一种方法可以通过少于三个编辑来做到这一点：

<ul>
  <li><strong>k</strong>itten   <strong>s</strong>itten    (substitution of 'k' with 's')</li>
  <li>sitt<strong>e</strong>n   sitt<strong>i</strong>n    (用 'i' 替换 'e')</li>
  <li>sittin   sittin<strong>g</strong>    (在末尾插入 'g')。</li>
</ul>

*"**rosettacode**" 和 "**raisethysword**" 之间的 Levenshtein 距离是 ** 8**。*

*两个字符串之间的距离与两个字符串颠倒后的距离相同。*

# --instructions--

编写一个函数，返回作为参数给出的两个字符串之间的 Levenshtein 距离。

# --hints--

`levenshtein` 应该是一个函数。

```js
assert(typeof levenshtein == 'function');
```

`levenshtein("mist", "dist")` 应该返回一个数字。

```js
assert(typeof levenshtein('mist', 'dist') == 'number');
```

`levenshtein("mist", "dist")` 应该返回 `1`。

```js
assert.equal(levenshtein('mist', 'dist'), 1);
```

`levenshtein("tier", "tor")` 应该返回 `2`。

```js
assert.equal(levenshtein('tier', 'tor'), 2);
```

`levenshtein("kitten", "sitting")` 应该返回 `3`。

```js
assert.equal(levenshtein('kitten', 'sitting'), 3);
```

`levenshtein("stop", "tops")` 应该返回 `2`。

```js
assert.equal(levenshtein('stop', 'tops'), 2);
```

`levenshtein("rosettacode", "raisethysword")` 应该返回 `8`。

```js
assert.equal(levenshtein('rosettacode', 'raisethysword'), 8);
```

`levenshtein("mississippi", "swiss miss")` 应该返回 `8`。

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
