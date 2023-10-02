---
id: 587d7db9367417b2b2512ba4
title: مطابقة رموز ليست بمسافة فارغة (Match Non-Whitespace Characters)
challengeType: 1
forumTopicId: 18210
dashedName: match-non-whitespace-characters
---

# --description--

لقد تعلمت البحث عن الـ whitespace باستخدام `\s`، وهو حرف `s` صغير بمعني lowercase. يمكنك أيضًا البحث عن كل شيء باستثناء الـ whitespace.

البحث عن whitespace باستخدام `\S`، وهو نسخة الحرف الكبير من الـ `s`. لن يتطابق هذا النمط الـ whitespace، و الـ carriage return و tab و form feed و new line. يمكنك أن تفكر فيها مثل مجموعة الرموز الآتية `[^ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
```

القيمة التي تم إرجاعها بواسطة دالة `.length` ستكون `32`.

# --instructions--

قم بتغيير الـ regex الآتي `countNonWhiteSpace` ليقوم بالبحث عن عدة رموز غير الـ whitespace في string.

# --hints--

يجب أن يستخدم regex الخاص بك الـ global flag.

```js
assert(countNonWhiteSpace.global);
```

يجب أن يستخدم regex الخاص بك الرمز `\S` لمطابقة جميع الرموز ماعدا الـ whitespace.

```js
assert(/\\S/.test(countNonWhiteSpace.source));
```

يجب أن يجد الـ regex ٣٥ رمز يكون ليس مسافة في الـ string الآتي `Men are from Mars and women are from Venus.`

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countNonWhiteSpace)
    .length == 35
);
```

يجب أن يجد الـ regex ٢٣ رمز يكون ليس مسافة في الـ string الآتي `Space: the final frontier.`

```js
assert('Space: the final frontier.'.match(countNonWhiteSpace).length == 23);
```

يجب أن يجد الـ regex ٢١ رمز يكون ليس مسافة في الـ string الآتي `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countNonWhiteSpace).length == 21);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```
