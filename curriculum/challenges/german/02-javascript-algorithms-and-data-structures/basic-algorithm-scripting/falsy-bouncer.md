---
id: adf08ec01beb4f99fc7a68f2
title: Falsy Bouncer
challengeType: 1
forumTopicId: 16014
dashedName: falsy-bouncer
---

# --description--

Entferne alle fehlerhaften Werte aus einem Array. Gibt ein neues Array zurück; verändere nicht das ursprüngliche Array.

Folgendes sind fehlerhafte Werte in JavaScript: `false`, `null`, `0`, `""`, `undefined`, und `NaN`.

Tipp: Versuche, jeden Wert in einen booleschen Wert zu konvertieren.

# --hints--

`bouncer([7, "ate", "", false, 9])` sollte `[7, "ate", 9]` zurückgeben.

```js
assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9]);
```

`bouncer(["a", "b", "c"])` sollte `["a", "b", "c"]` zurückgeben.

```js
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c']);
```

`bouncer([false, null, 0, NaN, undefined, ""])` sollte `[]` zurückgeben.

```js
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, '']), []);
```

`bouncer([null, NaN, 1, 2, undefined])` sollte `[1, 2]` zurückgeben.

```js
assert.deepEqual(bouncer([null, NaN, 1, 2, undefined]), [1, 2]);
```

`arr` sollte nicht verändert werden.

```js
const arr = ['a', false, 0, 'Naomi'];
bouncer(arr);
assert.deepEqual(arr, ['a', false, 0, 'Naomi'])
```

# --seed--

## --seed-contents--

```js
function bouncer(arr) {
  return arr;
}

bouncer([7, "ate", "", false, 9]);
```

# --solutions--

```js
function bouncer(arr) {
  return arr.filter(e => e);
}

bouncer([7, "ate", "", false, 9]);
```
