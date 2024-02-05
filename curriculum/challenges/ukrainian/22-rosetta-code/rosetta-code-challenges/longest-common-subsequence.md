---
id: 5e6dd1278e6ca105cde40ea9
title: Найдовша спільна підпослідовність
challengeType: 1
forumTopicId: 385271
dashedName: longest-common-subsequence
---

# --description--

The **longest common subsequence** (or **LCS**) of groups A and B is the longest group of elements from A and B that are common between the two groups and in the same order in each group. For example, the sequences `1234` and `1224533324` have an LCS of `1234`:

<u>1234</u>

<u>12</u>245<u>3</u>332<u>4</u>

На прикладі рядка розглянемо послідовності `thisisatest` та `testing123testing`. LCS буде `tsitest`:

<u>t</u>hi<u>si</u>sa<u>test</u>

<u>t</u>e<u>s</u>t<u>i</u>ng123<u>test</u>ing.

Ваш код має складатися тільки з рядків.

# --instructions--

Напишіть чутливу до регістру символів функцію, яка повертає LCS двох рядків. Вам не потрібно показувати багато LCS.

# --hints--

`lcs` має бути функцією.

```js
assert(typeof lcs == 'function');
```

`lcs("thisisatest", "testing123testing")` повинен вивести рядок.

```js
assert(typeof lcs('thisisatest', 'testing123testing') == 'string');
```

`lcs("thisisatest", "testing123testing")` повинен повернути `"tsitest"`.

```js
assert.equal(lcs('thisisatest', 'testing123testing'), 'tsitest');
```

`lcs("ABCDGH", "AEDFHR")` повинен повернути `"ADH"`.

```js
assert.equal(lcs('ABCDGH', 'AEDFHR'), 'ADH');
```

`lcs("AGGTAB", "GXTXAYB")` повинен повернути `"GTAB"`.

```js
assert.equal(lcs('AGGTAB', 'GXTXAYB'), 'GTAB');
```

`lcs("BDACDB", "BDCB")` повинен повернути `"BDCB"`.

```js
assert.equal(lcs('BDACDB', 'BDCB'), 'BDCB');
```

`lcs("ABAZDC", "BACBAD")` повинен повернути `"ABAD"`.

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
  var aSub = a.substring(0, a.length - 1);
  var bSub = b.substring(0, b.length - 1);

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
