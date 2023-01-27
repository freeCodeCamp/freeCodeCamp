---
id: 5e4ce2eaac708cc68c1df260
title: Відстань Левенштейна
challengeType: 1
forumTopicId: 385264
dashedName: levenshtein-distance
---

# --description--

In information theory and computer science, the **Levenshtein distance** is a metric for measuring the amount of difference between two sequences (i.e. an edit distance). Відстань Левенштейна між двома рядками визначається як мінімальна кількість операцій вставки, видалення або заміни, необхідних для перетворення одного рядка в інший.

Наприклад:

Відстань Левенштейна між "**kitten**" і "**sitting**" складають 3, оскільки неможливо перетворити одне слово в інше за меншу кількість операцій:

<ul>
  <li><strong>k</strong>itten   <strong>s</strong>itten    (заміна 'k' на 's')</li>
  <li>sitt<strong>e</strong>n   sitt<strong>i</strong>n    (заміна 'e' на 'i')</li>
  <li>sittin   sittin<strong>g</strong>    (вставити 'g' в кінці).</li>
</ul>

*Відстань Левенштейна між "**rosettacode**" та "**raisethysword**" складає **8**.*

*Якщо рядки поміняти місцями, відстань між ними не зміниться.*

# --instructions--

Напишіть функцію, яка повертає відстань Левенштейна між двома рядками, вказаними як параметри.

# --hints--

`levenshtein` має бути функцією.

```js
assert(typeof levenshtein == 'function');
```

`levenshtein("mist", "dist")` має повернути число.

```js
assert(typeof levenshtein('mist', 'dist') == 'number');
```

`levenshtein("mist", "dist")` має повернути `1`.

```js
assert.equal(levenshtein('mist', 'dist'), 1);
```

`levenshtein("tier", "tor")` має повернути `2`.

```js
assert.equal(levenshtein('tier', 'tor'), 2);
```

`levenshtein("kitten", "sitting")` має повернути `3`.

```js
assert.equal(levenshtein('kitten', 'sitting'), 3);
```

`levenshtein("stop", "tops")` має повернути `2`.

```js
assert.equal(levenshtein('stop', 'tops'), 2);
```

`levenshtein("rosettacode", "raisethysword")` має повернути `8`.

```js
assert.equal(levenshtein('rosettacode', 'raisethysword'), 8);
```

`levenshtein("mississippi", "swiss miss")` має повернути `8`.

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
