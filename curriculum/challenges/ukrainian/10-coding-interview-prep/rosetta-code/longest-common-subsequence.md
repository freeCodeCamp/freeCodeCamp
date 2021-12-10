---
id: 5e6dd1278e6ca105cde40ea9
title: Найдовша спільна підпослідовність
challengeType: 5
forumTopicId: 385271
dashedName: longest-common-subsequence
---

# --description--

** Найдовша спільна підпослідовність**([**LCS**](http://en.wikipedia.org/wiki/Longest_common_subsequence_problem)) груп А і В - це найдовша група спільних елементів між двома групами, які розташовані в однаковому порядку в кожній групі. Наприклад, послідовності "1234" і "1224533324" мають LCS "1234":

***1234***

***12***245***3***332***4***

На прикладі рядка розглянемо послідовності "thisisatest" та "testing123testing". LCS буде "tsitest":

***t***hi***si***sa***test***

***t***e***s***t***i***ng123***test***ing.

Ваш код має складатися тільки з рядків.

Для отримання додаткової інформації про це завдання, будь ласка, дивіться [Wikipedia](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem).

# --instructions--

Напишіть чутливу до регістру символів функцію, яка повертає LCS двох рядків. Вам не потрібно показувати багато LCS.

# --hints--

`lcs` повинен бути функцією.

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
