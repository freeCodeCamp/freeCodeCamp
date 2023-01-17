---
id: bd7123c9c444eddfaeb5bdef
title: إعلان متغيرات المقاطع النصية
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

في السابق كنت تستخدم الكود التالي لإعلان متغير:

```js
var myName;
```

ولكن يمكنك أيضا إعلان متغير المقطع النصي (string) بهذه الطريقة:

```js
var myName = "your name";
```

يسمي`"your name"` <dfn>المقطع</dfn> <dfn>موضوعي</dfn>. يتكون المقطع الموضوعي أو المقطع النصي من رمز أو رموز، مرفقين في علامات اقتباس (quotes) مفردة أو مزدوجة.

# --instructions--

إنشاء متغيرين مقطعين جديدين: وعين `myFirstName` و `myLastName` بقيم اسمك والاسم عائلتك على التوالي.

# --hints--

يجب أن يحتوي مقطع `myFirstName` على رمز واحد في الأقل.

```js
assert(
  (function () {
    if (
      typeof myFirstName !== 'undefined' &&
      typeof myFirstName === 'string' &&
      myFirstName.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

يجب أن يحتوي مقطع `myLastName` على رمز واحد في الأقل.

```js
assert(
  (function () {
    if (
      typeof myLastName !== 'undefined' &&
      typeof myLastName === 'string' &&
      myLastName.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myFirstName !== "undefined" && typeof myLastName !== "undefined"){(function(){return myFirstName + ', ' + myLastName;})();}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myFirstName = "Alan";
var myLastName = "Turing";
```
