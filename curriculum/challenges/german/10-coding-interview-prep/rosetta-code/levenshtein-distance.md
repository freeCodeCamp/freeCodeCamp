---
id: 5e4ce2eaac708cc68c1df260
title: Levenshtein distance
challengeType: 1
forumTopicId: 385264
dashedName: levenshtein-distance
---

# --description--

In information theory and computer science, the **Levenshtein distance** is a metric for measuring the amount of difference between two sequences (i.e. an edit distance). The Levenshtein distance between two strings is defined as the minimum number of edits needed to transform one string into the other, with the allowable edit operations being insertion, deletion, or substitution of a single character.

Example:

The Levenshtein distance between "**kitten**" and "**sitting**" is 3, since the following three edits change one into the other, and there isn't a way to do it with fewer than three edits:

<ul>
  <li><strong>k</strong>itten   <strong>s</strong>itten    (substitution of 'k' with 's')</li>
  <li>sitt<strong>e</strong>n   sitt<strong>i</strong>n    (substitution of 'e' with 'i')</li>
  <li>sittin   sittin<strong>g</strong>    (insert 'g' at the end).</li>
</ul>

*The Levenshtein distance between "**rosettacode**", "**raisethysword**" is **8**.*

*The distance between two strings is same as that when both strings are reversed.*

# --instructions--

Write a function that returns the Levenshtein distance between two strings given as parameters.

# --hints--

`levenshtein` should be a function.

```js
assert(typeof levenshtein == 'function');
```

`levenshtein("mist", "dist")` should return a number.

```js
assert(typeof levenshtein('mist', 'dist') == 'number');
```

`levenshtein("mist", "dist")` should return `1`.

```js
assert.equal(levenshtein('mist', 'dist'), 1);
```

`levenshtein("tier", "tor")` should return `2`.

```js
assert.equal(levenshtein('tier', 'tor'), 2);
```

`levenshtein("kitten", "sitting")` should return `3`.

```js
assert.equal(levenshtein('kitten', 'sitting'), 3);
```

`levenshtein("stop", "tops")` should return `2`.

```js
assert.equal(levenshtein('stop', 'tops'), 2);
```

`levenshtein("rosettacode", "raisethysword")` should return `8`.

```js
assert.equal(levenshtein('rosettacode', 'raisethysword'), 8);
```

`levenshtein("mississippi", "swiss miss")` should return `8`.

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
