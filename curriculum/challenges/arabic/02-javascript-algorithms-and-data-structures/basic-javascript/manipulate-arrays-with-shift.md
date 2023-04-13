---
id: 56bbb991ad1ed5201cd392cd
title: تغيير القوائم باستخدام طريقة shift
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVETW'
forumTopicId: 18238
dashedName: manipulate-arrays-with-shift
---

# --description--

يزيل `pop()` العنصر الأخير من القائمة دائما. ولكن ماذا لو كنت تريد إزالة الأول؟

هنا يأتي دور `.shift()`. يعمل تماما مثل `.pop()`، ولكنه يزيل (أو يزيح - shift) العنصر الأول بدلا من العنصر الأخير.

مثال:

```js
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
```

ستحتوي `removedFromOurArray` قيمة المقطع `Stimpson`، وستحتوي `ourArray` على `["J", ["cat"]]`.

# --instructions--

استخدم الوظيفة `.shift()` لإزالة العنصر الأول من `myArray` وعيّن القيمة التي "أزيحت للخارج" إلى متغير جديد `removedFromMyArray`.

# --hints--

يجب أن يساوي `myArray` قيمة `[["dog", 3]]` الآن.

```js
assert(
  (function (d) {
    if (d[0][0] == 'dog' && d[0][1] === 3 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

يجب أن يحتوي `removedFromMyArray` على `["John", 23]`.

```js
assert(
  (function (d) {
    if (
      d[0] == 'John' &&
      d[1] === 23 &&
      typeof removedFromMyArray === 'object'
    ) {
      return true;
    } else {
      return false;
    }
  })(removedFromMyArray)
);
```

# --seed--

## --after-user-code--

```js
if (typeof removedFromMyArray !== 'undefined') (function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();
```
