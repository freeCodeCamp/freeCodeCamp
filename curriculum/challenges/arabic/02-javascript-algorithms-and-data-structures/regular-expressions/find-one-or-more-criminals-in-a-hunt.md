---
id: 587d7db7367417b2b2512b9c
title: العثور علي مجرم واحد أو أكثر في مطاردة (Find One or More Criminals in a Hunt)
challengeType: 1
forumTopicId: 301343
dashedName: find-one-or-more-criminals-in-a-hunt
---

# --description--

حان الوقت للإيقاف المؤقت واختبار مهاراتك الكتابية الجديدة لـ regex. هربت مجموعة من المجرمين من السجن وهربوا بعيدا، لكنك لا تعرف عددهم. ومع ذلك، فإنك تعلم أنهم يبقون على مقربة من بعضهم البعض عندما يكونون حول أشخاص آخرين. أنت مسؤول عن العثور على جميع المجرمين فورا.

إليك مثال لمراجعة كيفية القيام بذلك:

يطابق الـ regex الآتي `/z+/` الحرف `z` عندما يظهر مرة أو أكثر على التوالي. وسيجد مطابقات في جميع الـ strings التالية:

```js
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```

لكنه لا يجد مطابقات في الـ strings التالية لأنه لا يوجد حرف `z`:

```js
""
"ABC"
"abcabc"
```

# --instructions--

اكتب regex يجد مجرماً واحداً أو أكثر ضمن مجموعة من الناس الآخرين. ويمثّل المجرم بالحرف التالي `C`.

# --hints--

يجب أن يطابق الـ regex مع مجرم واحد (`C`) في الـ string الآتي `C`

```js
assert('C'.match(reCriminals) && 'C'.match(reCriminals)[0] == 'C');
```

يجب أن يطابق regex مع مجرمين (`CC`) في الـ string الآتي (`CC`

```js
assert('CC'.match(reCriminals) && 'CC'.match(reCriminals)[0] == 'CC');
```

يجب أن يطابق regex ثلاثة مجرمين (`CCC`) في `P1P5P4CCCcP2P6P3`.

```js
assert(
  'P1P5P4CCCcP2P6P3'.match(reCriminals) &&
    'P1P5P4CCCcP2P6P3'.match(reCriminals)[0] == 'CCC'
);
```

يجب أن يطابق الـ regex خمسة مجرمين (`CCCCC`) في `P6P2P7P4P5CCCCCP3P1`

```js
assert(
  'P6P2P7P4P5CCCCCP3P1'.match(reCriminals) &&
    'P6P2P7P4P5CCCCCP3P1'.match(reCriminals)[0] == 'CCCCC'
);
```

لا يجب أن يطابق regex أي مجرمين في الـ string الفارغ `""`

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test(''));
```

لا يجب أن يطابق regex أي مجرمين في الـ string الآتي `P1P2P3`

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test('P1P2P3'));
```

يجب ان يطابق الـ regex خمسين مجرم (`CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC`) في `P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3`.

```js
assert(
  'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
    reCriminals
  ) &&
    'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
      reCriminals
    )[0] == 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC'
);
```

# --seed--

## --seed-contents--

```js
let reCriminals = /./; // Change this line
```

# --solutions--

```js
let reCriminals = /C+/; // Change this line
```
