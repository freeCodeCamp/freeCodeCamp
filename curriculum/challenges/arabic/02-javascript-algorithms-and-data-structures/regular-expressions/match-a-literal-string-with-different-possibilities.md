---
id: 587d7db4367417b2b2512b90
title: طابق مقطع نصي حرفي (Literal String) مع احتمالات مختلفة
challengeType: 1
forumTopicId: 301345
dashedName: match-a-literal-string-with-different-possibilities
---

# --description--

باستخدام regexes مثل `/coding/`، يمكنك البحث عن النمط `coding` في مقطع نصي أخر.

هذا جيد للبحث في مقطع نصي (string) واحد، لكنه يقتصر على نمط واحد فقط. يمكنك البحث عن أنماط متعددة باستخدام `alternation` أو رمز `OR` التالي: `|`.

هذا المشغل يطابق الأنماط قبله أو بعده. على سبيل المثال، إذا كنت ترغب في مطابقة السلاسل (strings) باسم `yes` أو `no`، تريد regex إن يكون `/yes|no/`.

يمكنك أيضا البحث عن أكثر من نمطين فقط. يمكنك القيام بذلك عن طريق إضافة المزيد من الأنماط مع المزيد من رموز `OR` الذين يفصلونهم، مثل `/yes|no|maybe/`.

# --instructions--

أكمل الـ regex الآتي `petRegex` لمطابقة الحيوانات الأليفة `dog`، `cat`، `bird`، او `fish`.

# --hints--

نمطـ regex الآتي `petRegex` يجب أن يرجع `true` للمقطع النصي `John has a pet dog.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('John has a pet dog.'));
```

نمط regex الآتي `petRegex` يجب أن يرجع `false` للمقطع النصي `Emma has a pet rock.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Emma has a pet rock.'));
```

نمط regex الآتي `petRegex` يجب أن يرجع `true` للمقطع النصي `Emma has a pet bird.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Emma has a pet bird.'));
```

نمطـ regex الآتي `petRegex` يجب أن يرجع `true` للمقطع النصي `Liz has a pet cat.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Liz has a pet cat.'));
```

نمط regex الآتي `petRegex` يجب أن يرجع `false` للمقطع النصي `Kara has a pet dolphin.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Kara has a pet dolphin.'));
```

نمط regex الآتي `petRegex` يجب أن يرجع `true` للمقطع النصي `Alice has a pet fish.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Alice has a pet fish.'));
```

نمط regex الآتي `petRegex` يجب أن يرجع `false` للمقطع النصي `Jimmy has a pet computer.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Jimmy has a pet computer.'));
```

# --seed--

## --seed-contents--

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
```

# --solutions--

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
```
