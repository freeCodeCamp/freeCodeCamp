---
id: 587d7db9367417b2b2512ba6
title: Specify Only the Lower Number of Matches
challengeType: 1
forumTopicId: 301366
dashedName: specify-only-the-lower-number-of-matches
---

# --description--

يمكنك تحديد العدد الأدنى والأعلى من الأنماط باستخدام محددات الكمية باستخدام الأقواس المتعرجة. في بعض الأحيان تريد فقط تحديد العدد الأدنى من الأنماط بدون حد أعلى.

لتحديد العدد الأدنى فقط من الأنماط، حافظ على أول رقم يتبعه فاصلة.

على سبيل المثال لمطابقة كلمة `hah` فقط مع ظهور الحرف `a` علي الاقل `3` مرات، سيكون الـ regex الخاص بك `/ha{3,}h/`.

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
```

بالترتيب، الاستدعائات الثلاث لـ `test` ستعيد `true` و `false` و `true`.

# --instructions--

قم بتغيير `haRegex` ليطابق الكلمة `Hazzah` فقط عندما يكون لديه أربعة حروف `z` أو أكثر.

# --hints--

يجب أن يستخدم الـ regex الخاص بك الأقواس المتعرجة.

```js
assert(haRegex.source.match(/{.*?}/).length > 0);
```

يجب أن لا يطابق الـ regex الخاص بك السلسلة `Hazzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzah'));
```

يجب أن لا يطابق الـ regex الخاص بك السلسلة `Hazzzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzzah'));
```

يجب أن يطابق الـ regex الخاص بك السلسلة `Hazzzzah`

```js
assert('Hazzzzah'.match(haRegex)[0].length === 8);
```

يجب أن يطابق الـ regex الخاص بك السلسلة `Hazzzzzah`

```js
assert('Hazzzzzah'.match(haRegex)[0].length === 9);
```

يجب أن يطابق الـ regex الخاص بك السلسلة `Hazzzzzzah`

```js
assert('Hazzzzzzah'.match(haRegex)[0].length === 10);
```

يجب أن يطابق الـ regex الخاص بك السلسلة `Hazzah` مع 30 حرف `z` بداخله.

```js
assert('Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah'.match(haRegex)[0].length === 34);
```

# --seed--

## --seed-contents--

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
```

# --solutions--

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```
