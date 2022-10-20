---
id: bd7123c9c444eddfaeb5bdef
title: أنشاء متغيرات المقاطع نصية (Declare String Variables)
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

في السابق كنت تستخدم الكود التالي لإنشاء متغير:

```js
var myName;
```

ولكن يمكنك أيضا أنشاء متغير المقطع بهذه الطريقة:

```js
var myName = "your name";
```

`"your name"` يسمي <dfn>مقطع</dfn> <dfn>حرفي</dfn>. المقطع النصي أو مقطع هي مقطع تتكون من رمز أو أكثر، مرفقين في علامات اقتباس (Quotes) مفردة أو مزدوجة.

# --instructions--

إنشاء متغيرين مقطعين جديدين: `myFirstName` و `myLastName` وعيين قيم الاسم الأول والاسم الأخير على التوالي.

# --hints--

يجب أن يحتوي مقطع `myFirstName` على حرف واحد في الأقل.

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

يجب أن يحتوي مقطع `myLastName` على حرف واحد في الأقل.

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
