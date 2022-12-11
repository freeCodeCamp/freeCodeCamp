---
id: 587d7db8367417b2b2512ba3
title: مطابقة الـ Whitespace (المسافة الفارغة)
challengeType: 1
forumTopicId: 301359
dashedName: match-whitespace
---

# --description--

غطت التحديات حتى الآن الرموز المطابقة للحروف الأبجدية والأرقام. يمكنك أيضا مطابقة الـ Whitespace (المسافة الفارغة) أو المسافات بين الحروف.

يمكنك البحث عن الـ whitespace باستخدام `\s`، وهو حرف `s` صغير بمعني lowercase. هذا النمط لا يتطابق مع الـ whitespace فحسب، بل أيضا مع رموز الـ carriage return و tab و form feed و new line. يمكنك أن تفكر فيها مثل مجموعة الرموز الآتية `[ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

هذا الاستدعاء لـ `match` سيرجع الآتي `[" ", " "]`.
# --instructions--

قم بتغيير الـ regex الآتي `countWhiteSpace` ليقوم بالبحث عن عدة رموز للـ whitespace في string.

# --hints--

يجب أن يستخدم regex الخاص بك الـ global flag.

```js
assert(countWhiteSpace.global);
```

يجب أن يستخدم regex الخاص بك الرمز `\s` لمطابقة جميع رموز الـ whitespace.

```js
assert(/\\s/.test(countWhiteSpace.source));
```

يجب أن يجد الـ regex ثمانية مسافات في الـ string الآتي `Men are from Mars and women are from Venus.`

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countWhiteSpace).length ==
    8
);
```

يجب أن يجد الـ regex ثلاثة مسافات في الـ string الآتي `Space: the final frontier.`

```js
assert('Space: the final frontier.'.match(countWhiteSpace).length == 3);
```

يجب أن لا يجد الـ regex اي مسافات في الـ string الآتي `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countWhiteSpace) == null);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```
