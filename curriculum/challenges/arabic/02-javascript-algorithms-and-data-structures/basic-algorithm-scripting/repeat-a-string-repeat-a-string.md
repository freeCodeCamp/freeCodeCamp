---
id: afcc8d540bea9ea2669306b6
title: تكرار مقطع (String) نصي تكرار مقطع (String) نصي
challengeType: 1
forumTopicId: 16041
dashedName: repeat-a-string-repeat-a-string
---

# --description--

كرر مقطع (String) نصي معين `str` (الحجَّة الأولى) لعدد `num` مرات (الحِجَّة الثانية). انتج مقطع (String) نصي فارغ إذا كان `num` ليس رقماً موجباً. لأغراض هذا التحدي، *لا* تستخدم الوظيفة `.repeat()` المدمجة.

# --hints--

`repeatStringNumTimes("*", 3)` يجب أن ينتج المقطع `***`.

```js
assert(repeatStringNumTimes('*', 3) === '***');
```

`repeatStringNumTimes("abc", 3)` يجب أن ينتج المقطع `abcabcabc`.

```js
assert(repeatStringNumTimes('abc', 3) === 'abcabcabc');
```

`repeatStringNumTimes("abc", 4)` يجب أن ينتج المقطع `abcabcabcabc`.

```js
assert(repeatStringNumTimes('abc', 4) === 'abcabcabcabc');
```

`repeatStringNumTimes("abc", 1)` يجب أن ينتج المقطع `abc`.

```js
assert(repeatStringNumTimes('abc', 1) === 'abc');
```

`repeatStringNumTimes("*", 8)` يجب أن ينتج المقطع `********`.

```js
assert(repeatStringNumTimes('*', 8) === '********');
```

`repeatStringNumTimes("abc", -2)` يجب أن ينتج مقطع فارغة (`""`).

```js
assert(repeatStringNumTimes('abc', -2) === '');
```

لا ينبغي استخدام الوظيفة `repeat()` المدمجة.

```js
assert(!/\.repeat/g.test(code));
```

`repeatStringNumTimes("abc", 0)` يجب أن ينتج `""`.

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
