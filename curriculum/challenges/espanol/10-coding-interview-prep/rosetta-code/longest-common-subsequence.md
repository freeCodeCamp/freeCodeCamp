---
id: 5e6dd1278e6ca105cde40ea9
title: Subsecuencia común más larga
challengeType: 1
forumTopicId: 385271
dashedName: longest-common-subsequence
---

# --description--

La **longest common subsequence** (or **LCS**) de grupos A y B es el grupo de elementos más largos desde A y B que son comunes entre dos grupos y en el mismo orden que cada grupo. Por ejemplo, las secuencias `1234` y `1224533324` tienen un LCS de `1234`:<u>1234</u>
<u>12</u>245<u>3</u>332<u>4</u>

Para una cadena ejemplo, considera las secuencias `thisisatest` y `testing123testing`. Un LCS sería `tsitest`:
<u>t</u>hi<u>si</u>sa<u>test</u>

<u>t</u>e<u>s</u>t<u>i</u>ng123<u>test</u>ing.

Tu código solo necesita tratar con cadenas.

# --instructions--

Escribe una función case-sensitive que devuelva el LCS de dos cadenas. No se necesita mostrar multiples LCS's.

# --hints--

`lcs` debe ser una función.

```js
assert(typeof lcs == 'function');
```

`lcs("thisisatest", "testing123testing")` debe devolver una cadena.

```js
assert(typeof lcs('thisisatest', 'testing123testing') == 'string');
```

`lcs("thisisatest", "testing123testing")` debe devolver `"tsitest"`.

```js
assert.equal(lcs('thisisatest', 'testing123testing'), 'tsitest');
```

`lcs("ABCDGH", "AEDFHR")` debe devolver `"ADH"`.

```js
assert.equal(lcs('ABCDGH', 'AEDFHR'), 'ADH');
```

`lcs("AGGTAB", "GXTXAYB")` debe devolver `"GTAB"`.

```js
assert.equal(lcs('AGGTAB', 'GXTXAYB'), 'GTAB');
```

`lcs("BDACDB", "BDCB")` debe devolver `"BDCB"`.

```js
assert.equal(lcs('BDACDB', 'BDCB'), 'BDCB');
```

`lcs("ABAZDC", "BACBAD")` debe devolver `"ABAD"`.

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
