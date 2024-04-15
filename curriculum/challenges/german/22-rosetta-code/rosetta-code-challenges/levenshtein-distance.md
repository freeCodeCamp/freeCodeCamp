---
id: 5e4ce2eaac708cc68c1df260
title: Levenshtein Distanz
challengeType: 1
forumTopicId: 385264
dashedName: levenshtein-distance
---

# --description--

In information theory and computer science, the **Levenshtein distance** is a metric for measuring the amount of difference between two sequences (i.e. an edit distance). The Levenshtein distance between two strings is defined as the minimum number of edits needed to transform one string into the other, with the allowable edit operations being insertion, deletion, or substitution of a single character.

Beispiel:

Die Levenshtein-Distanz zwischen "**kitten**" und "**sitting**" ist 3, da die folgenden drei Änderungen eine in die andere ändern, und es besteht keine Möglichkeit es in weniger als drei Bearbeitungen zu tun:

<ul>
  <li><strong>k</strong>itten   <strong>s</strong>itten    (substitution of 'k' with 's')</li>
  <li>sitt<strong>e</strong>n   sitt<strong>i</strong>n    (Ersatz von 'e' durch 'i')</li>
  <li>sittin   sittin<strong>g</strong>    (füge am Ende 'g' hinzu).</li>
</ul>

*Die Levenshtein-Distanz zwischen "**rosettacode**", "**raisethysword**" ist **8**.*

*Die Distanz zwischen zwei Zeichenfolgen ist die gleiche wenn beide Zeichenfolgen umgekehrt sind.*

# --instructions--

Schreibe eine Funktion, die die Levenshtein-Distanz zwischen den zwei gegebenen Zeichenfolgen als Parameter zurückgibt.

# --hints--

`levenshtein` sollte eine Funktion sein.

```js
assert(typeof levenshtein == 'function');
```

`levenshtein("mist", "dist")` sollte eine Zahl zurückgeben.

```js
assert(typeof levenshtein('mist', 'dist') == 'number');
```

`levenshtein("mist", "dist")` sollte `1` zurückgeben.

```js
assert.equal(levenshtein('mist', 'dist'), 1);
```

`levenshtein("tier", "tor")` sollte `2` zurückgeben.

```js
assert.equal(levenshtein('tier', 'tor'), 2);
```

`levenshtein("kitten", "sitting")` sollte `3` zurückgeben.

```js
assert.equal(levenshtein('kitten', 'sitting'), 3);
```

`levenshtein("stop", "tops")` sollte `2` zurückgeben.

```js
assert.equal(levenshtein('stop', 'tops'), 2);
```

`levenshtein("rosettacode", "raisethysword")` sollte `8` zurückgeben.

```js
assert.equal(levenshtein('rosettacode', 'raisethysword'), 8);
```

`levenshtein("mississippi", "swiss miss")` sollte `8` zurückgeben.

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
