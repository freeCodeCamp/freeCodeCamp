---
id: 587d7db7367417b2b2512b9e
title: Match Ending String Patterns
challengeType: 1
forumTopicId: 301352
dashedName: match-ending-string-patterns
---

# --description--

في التحدي الأخير، تعلمت استخدام رمز الـ caret للبحث عن أنماط في بداية ال strings. وهناك أيضا طريقة للبحث عن أنماط في نهاية ال strings.

يمكنك البحث في نهاية ال strings باستخدام رمز إشارة الدولار `$` في نهاية الـ regex.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

أول استدعاء لـ `test` سيعيد `true` والثاني سيعيد `false`.

# --instructions--

استخدم رمز الدولار (`$`) لمطابقة المقطع النصي `caboose` في نهاية `caboose`.

# --hints--

يجب عليك البحث عن `caboose` باستخدام علامة الدولار `$` في نمط regex.

```js
assert(lastRegex.source == 'caboose$');
```

لا يجب أن يستخدم الـ regex الخاص بك أي flags.

```js
assert(lastRegex.flags == '');
```

يجب عليك مطابقة `caboose` في نهاية السلسلة `The last car on a train is the caboose`

```js
lastRegex.lastIndex = 0;
assert(lastRegex.test('The last car on a train is the caboose'));
```

# --seed--

## --seed-contents--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);
```

# --solutions--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```
