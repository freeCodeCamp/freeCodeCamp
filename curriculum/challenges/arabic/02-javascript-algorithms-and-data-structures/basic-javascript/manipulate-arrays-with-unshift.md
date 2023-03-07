---
id: 56bbb991ad1ed5201cd392ce
title: تغيير القوائم باستخدام طريقة unshift
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckNDESv'
forumTopicId: 18239
dashedName: manipulate-arrays-with-unshift
---

# --description--

ليس فقط تسطيع أن تستخدم `shift` لتزيح العناصر من بداية قائمة إلى خارجها، ولكن أيضاً يمكنك استخدام `unshift` لتزيح عناصر إلى بداية القائمة أيضًا، أي يمكنك أن تضيف عناصر في بداية القائمة.

يعمل `.unshift()` تماما مثل `.push()`، ولكن بدلا من إضافة العنصر في نهاية القائمة، يضيف `unshift()` العنصر إلى بداية القائمة.

مثال:

```js
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
```

بعد `shift` سيحتوي `ourArray` على قيمة `["J", "cat"]`. بعد `unshift` سيحتوي `ourArray` على قيمة `["Happy", "J", "cat"]`.

# --instructions--

أضف `["Paul", 35]` إلى بداية المتغير `myArray` باستخدام `unshift()`.

# --hints--

يجب أن يساوي `myArray` قيمة `[["Paul", 35], ["dog", 3]]` الآن.

```js
assert(
  (function (d) {
    if (
      typeof d[0] === 'object' &&
      d[0][0] == 'Paul' &&
      d[0][1] === 35 &&
      d[1][0] != undefined &&
      d[1][0] == 'dog' &&
      d[1][1] != undefined &&
      d[1][1] == 3
    ) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

# --seed--

## --after-user-code--

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y);})(myArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
```
