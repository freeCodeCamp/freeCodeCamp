---
id: bd7123c9c448eddfaeb5bdef
title: العثور على طول مقطع نصي (Find the Length of a String)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
dashedName: find-the-length-of-a-string
---

# --description--

يمكنك العثور على قيمة طول `String` بكتابة `.length` بعد متغير المقطع (string) أو المقطع النصي (string literal).

```js
console.log("Alan Peter".length);
```

سوف يتم عرض القيمة `10` في وحدة التحكم. لاحظ أن رمز المسافة بين "Alan" و "Peter" يتم حسابه أيضا.

على سبيل المثال، إذا أنشئت متغير `const firstName = "Ada"`، يمكننا معرفة طول المقطع (string) الآتي `Ada` باستخدام `firstName.length`.

# --instructions--

استخدم خاصية `.length` لتعيين `lastNameLength` إلى عدد الأحرف في `lastName`.

# --hints--

لا يجب عليك تغيير إعلانات المتغيرات في قسم `// Setup`.

```js
assert(
  code.match(/let lastNameLength = 0;/) &&
    code.match(/const lastName = "Lovelace";/)
);
```

يجب أن يساوي `lastNameLength` ثمانية.

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

يجب الحصول على الطول `lastName` باستخدام `.length` مثل: `lastName.length`.

```js
assert(code.match(/=\s*lastName\.length/g) && !code.match(/lastName\s*=\s*8/));
```

# --seed--

## --seed-contents--

```js
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName;
```

# --solutions--

```js
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
```
