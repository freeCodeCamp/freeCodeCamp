---
id: afcc8d540bea9ea2669306b6
title: Повторіть рядок Повторення рядка
challengeType: 5
forumTopicId: 16041
dashedName: repeat-a-string-repeat-a-string
---

# --description--

Повторити заданий рядок `str` (перший елемент) `num` разів (другий елемент). Повернути порожній рядок, якщо `num` не є додатнім числом. Для цього завдання *не* використовуйте вбудований `.repeat()` метод.

# --hints--

`repeatStringNumTimes("*", 3)` має повернути рядок `***`.

```js
assert(repeatStringNumTimes('*', 3) === '***');
```

`repeatStringNumTimes("abc", 3)` має повернути рядок `abcabcabc`.

```js
assert(repeatStringNumTimes('abc', 3) === 'abcabcabc');
```

`repeatStringNumTimes("abc", 4)` має повернути рядок `abcabcabcabc`.

```js
assert(repeatStringNumTimes('abc', 4) === 'abcabcabcabc');
```

`repeatStringNumTimes("abc", 1)` має повернути рядок `abc`.

```js
assert(repeatStringNumTimes('abc', 1) === 'abc');
```

`repeatStringNumTimes("*", 8)` має повернути рядок `********`.

```js
assert(repeatStringNumTimes('*', 8) === '********');
```

`repeatStringNumTimes("abc", -2)` має повернути порожній рядок (`""`).

```js
assert(repeatStringNumTimes('abc', -2) === '');
```

Вбудований метод `repeat()` не слід використовувати.

```js
assert(!/\.repeat/g.test(code));
```

`repeatStringNumTimes("abc", 0)` має повернути рядок `""`.

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
