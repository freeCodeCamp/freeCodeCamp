---
id: 5e6dd1278e6ca105cde40ea9
title: Maior subsequência comum
challengeType: 1
forumTopicId: 385271
dashedName: longest-common-subsequence
---

# --description--

A **maior subsequência comum** (ou **LCS**) dos grupos A e B é o maior grupo de elementos de A e de B que são comuns entre os dois grupos e na mesma ordem em cada grupo. Por exemplo, as sequências `1234` e `1224533324` têm um LCS de `1234`:<u>1234</u>
<u>12</u>245<u>3</u>332<u>4</u>

Para um exemplo em string, considere as sequências `thisisatest`e `testing123testing`. Um LCS seria `tsitest`:
<u>t</u>hi<u>si</u>sa<u>test</u>

<u>t</u>e<u>s</u>t<u>i</u>ng123<u>test</u>ing.

O código só precisa lidar com strings.

# --instructions--

Escreva uma função que diferencie maiúsculas de minúsculas e que retorne o LCS de duas strings. Você não precisa mostrar diversos LCS.

# --hints--

`lcs` deve ser uma função.

```js
assert(typeof lcs == 'function');
```

`lcs("thisisatest", "testing123testing")` deve retornar uma string.

```js
assert(typeof lcs('thisisatest', 'testing123testing') == 'string');
```

`lcs("thisisatest", "testing123testing")` deve retornar `"tsitest"`.

```js
assert.equal(lcs('thisisatest', 'testing123testing'), 'tsitest');
```

`lcs("ABCDGH", "AEDFHR")` deve retornar `"ADH"`.

```js
assert.equal(lcs('ABCDGH', 'AEDFHR'), 'ADH');
```

`lcs("AGGTAB", "GXTXAYB")` deve retornar `"GTAB"`.

```js
assert.equal(lcs('AGGTAB', 'GXTXAYB'), 'GTAB');
```

`lcs("BDACDB", "BDCB")` deve retornar `"BDCB"`.

```js
assert.equal(lcs('BDACDB', 'BDCB'), 'BDCB');
```

`lcs("ABAZDC", "BACBAD")` deve retornar `"ABAD"`.

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
