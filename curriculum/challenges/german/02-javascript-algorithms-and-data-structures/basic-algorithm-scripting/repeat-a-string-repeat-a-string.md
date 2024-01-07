---
id: afcc8d540bea9ea2669306b6
title: Repeat a String Repeat a String
challengeType: 1
forumTopicId: 16041
dashedName: repeat-a-string-repeat-a-string
---

# --description--

Wiederhole den vorgegeben String `str` (erstes Argument) für `num` male (zweites Argument). Gib einen leeren String zurück, falls `num` keine positive Zahl ist. Für den Zweck dieser Aufgabe sollte *nicht* die built-in Methode `.repeat()` verwendet werden.

# --hints--

`repeatStringNumTimes("*", 3)` sollte den String `***` zurückgeben.

```js
assert(repeatStringNumTimes('*', 3) === '***');
```

`repeatStringNumTimes("abc", 3)` sollte den String `abcabcabc` zurückgeben.

```js
assert(repeatStringNumTimes('abc', 3) === 'abcabcabc');
```

`repeatStringNumTimes("abc", 4)` sollte den String `abcabcabcabc` zurückgeben.

```js
assert(repeatStringNumTimes('abc', 4) === 'abcabcabcabc');
```

`repeatStringNumTimes("abc", 1)` sollte den String `abc` zurückgeben.

```js
assert(repeatStringNumTimes('abc', 1) === 'abc');
```

`repeatStringNumTimes("*", 8)` sollte den String `********` zurückgeben.

```js
assert(repeatStringNumTimes('*', 8) === '********');
```

`repeatStringNumTimes("abc", -2)` sollte einen leeren String (`""`) zurückgeben.

```js
assert(repeatStringNumTimes('abc', -2) === '');
```

Die built-in Methode `repeat()` sollte hier nicht verwendet werden.

```js
assert(!/\.repeat/g.test(code));
```

`repeatStringNumTimes("abc", 0)` sollte `""` zurückgeben.

```js
assert(repeatStringNumTimes('abc', 0) === '');
```

# --seed--

## --seed-contents--

```js
function repeatStringNumTimes(str, num) {
  return str;
}

repeatStringNumTimes("abc", 3);
```

# --solutions--

```js
function repeatStringNumTimes(str, num) {
  if (num < 1) return '';
  return num === 1 ? str : str + repeatStringNumTimes(str, num-1);
}

repeatStringNumTimes("abc", 3);
```
