---
id: afcc8d540bea9ea2669306b6
title: Повторення рядка Повторення рядка
challengeType: 1
forumTopicId: 16041
dashedName: repeat-a-string-repeat-a-string
---

# --description--

Повторіть заданий рядок `str` (перший аргумент) `num` разів (другий аргумент). Поверніть порожній рядок, якщо `num` не є додатним числом. *Не* використовуйте вбудований метод `.repeat()` для цього завдання.

# --hints--

`repeatStringNumTimes("*", 3)` має повертати рядок `***`.

```js
assert(repeatStringNumTimes('*', 3) === '***');
```

`repeatStringNumTimes("abc", 3)` має повертати рядок `abcabcabc`.

```js
assert(repeatStringNumTimes('abc', 3) === 'abcabcabc');
```

`repeatStringNumTimes("abc", 4)` має повертати рядок `abcabcabcabc`.

```js
assert(repeatStringNumTimes('abc', 4) === 'abcabcabcabc');
```

`repeatStringNumTimes("abc", 1)` має повертати рядок `abc`.

```js
assert(repeatStringNumTimes('abc', 1) === 'abc');
```

`repeatStringNumTimes("*", 8)` має повертати рядок `********`.

```js
assert(repeatStringNumTimes('*', 8) === '********');
```

`repeatStringNumTimes("abc", -2)` має повертати порожній рядок (`""`).

```js
assert(repeatStringNumTimes('abc', -2) === '');
```

Не використовуйте вбудований метод `repeat()`.

```js
assert(!/\.repeat/g.test(code));
```

`repeatStringNumTimes("abc", 0)` має повертати `""`.

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
