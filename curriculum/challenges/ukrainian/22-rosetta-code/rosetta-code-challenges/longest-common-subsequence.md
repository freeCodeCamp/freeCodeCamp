---
id: 5e6dd1278e6ca105cde40ea9
title: Найдовша спільна підпослідовність
challengeType: 1
forumTopicId: 385271
dashedName: longest-common-subsequence
---

# --description--

**Найдовша спільна підпослідовність** груп A та B — це найдовша група спільних елементів груп A та B, які розташовані в однаковому порядку в обох групах. Наприклад, послідовності `1234` та `1224533324` мають найдовшу спільну підпослідовність `1234`:

<u>1234</u>

<u>12</u>245<u>3</u>332<u>4</u>

Для прикладу рядка розглянемо послідовності `thisisatest` та `testing123testing`. Найдовшою спільною підпослідовністю буде `tsitest`:

<u>t</u>hi<u>si</u>sa<u>test</u>

<u>t</u>e<u>s</u>t<u>i</u>ng123<u>test</u>ing.

Ваш код має обробляти лише рядки.

# --instructions--

Напишіть чутливу до регістру функцію, яка повертає найдовшу спільну підпослідовність двох рядків. Вам не потрібно відтворювати багато найдовших спільних підпослідовностей.

# --hints--

`lcs` має бути функцією.

```js
assert(typeof lcs == 'function');
```

`lcs("thisisatest", "testing123testing")` має повернути рядок.

```js
assert(typeof lcs('thisisatest', 'testing123testing') == 'string');
```

`lcs("thisisatest", "testing123testing")` має повернути `"tsitest"`.

```js
assert.equal(lcs('thisisatest', 'testing123testing'), 'tsitest');
```

`lcs("ABCDGH", "AEDFHR")` має повернути `"ADH"`.

```js
assert.equal(lcs('ABCDGH', 'AEDFHR'), 'ADH');
```

`lcs("AGGTAB", "GXTXAYB")` має повернути `"GTAB"`.

```js
assert.equal(lcs('AGGTAB', 'GXTXAYB'), 'GTAB');
```

`lcs("BDACDB", "BDCB")` має повернути `"BDCB"`.

```js
assert.equal(lcs('BDACDB', 'BDCB'), 'BDCB');
```

`lcs("ABAZDC", "BACBAD")` має повернути `"ABAD"`.

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
