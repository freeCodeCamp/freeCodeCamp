---
id: 5e6dd1278e6ca105cde40ea9
title: Più lunga successione comune
challengeType: 5
forumTopicId: 385271
dashedName: longest-common-subsequence
---

# --description--

La **sottosequenza comune più lunga** (o [**LCS**](http://en.wikipedia.org/wiki/Longest_common_subsequence_problem)) dei gruppi A e B è il gruppo più lungo di elementi provenienti da A e B che sono comuni tra i due gruppi e nello stesso ordine in ogni gruppo. Per esempio, le sequenze "1234" e "1224533324" hanno un LCS di "1234":

***1234***

***12***245***3***332***4***

Per un esempio di stringa, considera le sequenze "thisisatest" e "testing123testing". Un LCS sarebbe "tsitest":

***t***hi***si***sa***test***

***t***e***s***t***i***ng123***test***ing.

Il tuo codice deve riguardare solo le stringhe.

Per ulteriori informazioni su questo problema consulta [Wikipedia](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem).

# --instructions--

Scrivi una funzione sensibile alle maiuscole/minuscole che restituisce l'LCS di due stringhe. Non è necessario mostrare più LCS.

# --hints--

`lcs` dovrebbe essere una funzione.

```js
assert(typeof lcs == 'function');
```

`lcs("thisisatest", "testing123testing")` dovrebbe restituire una stringa.

```js
assert(typeof lcs('thisisatest', 'testing123testing') == 'string');
```

`lcs("thisisatest", "testing123testing")` dovrebbe restituire `"tsitest"`.

```js
assert.equal(lcs('thisisatest', 'testing123testing'), 'tsitest');
```

`lcs("ABCDGH", "AEDFHR")` dovrebbe restituire `"ADH"`.

```js
assert.equal(lcs('ABCDGH', 'AEDFHR'), 'ADH');
```

`lcs("AGGTAB", "GXTXAYB")` dovrebbe restituire `"GTAB"`.

```js
assert.equal(lcs('AGGTAB', 'GXTXAYB'), 'GTAB');
```

`lcs("BDACDB", "BDCB")` dovrebbe restituire `"BDCB"`.

```js
assert.equal(lcs('BDACDB', 'BDCB'), 'BDCB');
```

`lcs("ABAZDC", "BACBAD")` dovrebbe restituire `"ABAD"`.

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
  var aSub = a.substr(0, a.length - 1);
  var bSub = b.substr(0, b.length - 1);

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
