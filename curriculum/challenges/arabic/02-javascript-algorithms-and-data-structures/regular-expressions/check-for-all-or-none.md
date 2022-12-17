---
id: 587d7dba367417b2b2512ba8
title: تحقق من الكل أو لا شيء (Check for All or None)
challengeType: 1
forumTopicId: 301338
dashedName: check-for-all-or-none
---

# --description--

في بعض الأحيان قد تحتوي الأنماط التي تريد البحث عنها على أجزاء قد تكون موجودة أو غير موجودة. ومع ذلك، قد يكون من المهم التحقق من هؤلاء.

يمكنك تحديد احتمالية وجود عنصر ما باستخدام علامة استفهام `?`. هذا يتحقق من وجود صفر أو واحد من العناصر التي تسبقة. يمكنك أن تفكر في هذا الرمز على أنه يقول أن العنصر السابق اختياري.

على سبيل المثال هناك اختلافات طفيفة في الإنجليزية الأمريكية والبريطانية ويمكنك استخدام علامة الاستفهام لمطابقة التهجئة.

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```

كل من استدعاءات طريقة (method) مسمى `test` سيرجعان `true`.

# --instructions--

غيّر `favRegex` ليقوم بمطابقة كل من النسخة الإنجليزية الأمريكية (`favorite`) و الإنجليزية البريطانية (`favourite`) من الكلمة.

# --hints--

يجب أن يستخدم الـ regex علامة الاستفهام، `?`.

```js
favRegex.lastIndex = 0;
assert(favRegex.source.match(/\?/).length > 0);
```

يجب أن يطابق الـ regex الخاص بك `favorite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favorite'));
```

يجب أن يطابق الـ regex الخاص بك `favourite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favourite'));
```

يجب أن لا يطابق الـ regex الخاص بك `fav`

```js
favRegex.lastIndex = 0;
assert(!favRegex.test('fav'));
```

# --seed--

## --seed-contents--

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
```

# --solutions--

```js
let favWord = "favorite";
let favRegex = /favou?r/;
let result = favRegex.test(favWord);
```
