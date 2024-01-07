---
id: 587d7db5367417b2b2512b94
title: Match Anything with Wildcard Period
challengeType: 1
forumTopicId: 301348
dashedName: match-anything-with-wildcard-period
---

# --description--

في بعض الأحيان لن (أو لا تحتاج إلى) معرفة الأحرف بالضبط في أنماطك. التفكير في كل الكلمات المطابقة، على سبيل المثال لخطأ إملائي، سيستغرق وقتًا طويلاً. لحسن الحظ، يمكنك توفير الوقت باستخدام الـ wildcard character الآتي: `.`

الـ wildcard character الآتي `.` سيطابق اي حرف واحد. يدعى الـ wildcard أيضًا `dot` و `period`. يمكنك استخدام الـ wildcard تماما مثل أي رمز آخر في regex. على سبيل المثال، إذا كنت ترغب في مطابقة `hug` و `huh` و `hut` و `hum`، يمكنك استخدام الـ regex الآتي `/hu./` لمطابقة جميع الكلمات الأربعة.

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
```

كل من هذه الاستدعائات لـ `test` ستعيد `true`.

# --instructions--

أكمل الـ regex الآتي `unRegex` بحيث يتطابق مع السلاسل `run` و `sun` و `fun` و `pun` و `nun` و `bun`. يجب أن يستخدم الـ regex الخاص بك الـ wildcard character.

# --hints--

يجب أن يستخدم الكود الخاص بك دالة `.test()`.

```js
assert(code.match(/\.test\(.*\)/));
```

يجب عليك استخدام الـ wildcard character في الـ regex الخاص بك `unRegex`

```js
assert(/\./.test(unRegex.source));
```

`unRegex` يجب أن يطابق `run` في السلسلة `Let us go on a run.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Let us go on a run.'));
```

`unRegex` يجب أن يطابق `sun` في السلسلة `The sun is out today.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('The sun is out today.'));
```

`unRegex` يجب أن يطابق `fun` في السلسلة `Coding is a lot of fun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Coding is a lot of fun.'));
```

`unRegex` يجب أن يطابق `pun` في السلسلة `Seven days without a pun makes one weak.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Seven days without a pun makes one weak.'));
```

`unRegex` يجب أن يطابق `nun` في السلسلة `One takes a vow to be a nun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('One takes a vow to be a nun.'));
```

`unRegex` يجب أن يطابق `bun` في السلسلة `She got fired from the hot dog stand for putting her hair in a bun.`

```js
unRegex.lastIndex = 0;
assert(
  unRegex.test(
    'She got fired from the hot dog stand for putting her hair in a bun.'
  )
);
```

`unRegex` يجب أن لا يطابق السلسلة `There is a bug in my code.`

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('There is a bug in my code.'));
```

`unRegex` يجب أن لا يطابق السلسلة `Catch me if you can.`

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('Catch me if you can.'));
```

# --seed--

## --seed-contents--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
```

# --solutions--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
```
