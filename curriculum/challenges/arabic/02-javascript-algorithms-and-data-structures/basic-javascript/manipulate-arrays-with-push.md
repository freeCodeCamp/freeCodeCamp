---
id: 56bbb991ad1ed5201cd392cb
title: تغيير القوائم باستخدام طريقة push
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnqmVtJ'
forumTopicId: 18237
dashedName: manipulate-arrays-with-push
---

# --description--

يوجد طريقة سهلة لإضافة البيانات إلى نهاية القائمة و هي عن طريق وظيفة `push()`.

تأخذ `.push()` واحد أو أكثر من <dfn>الوسائط</dfn> و "تدفعها" إلى نهاية القائمة.

على سبيل المثال:

```js
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
```

ألأن `arr1` لديه قيمة `[1, 2, 3, 4]` ولدي `arr2` قيمة `["Stimpson", "J", "cat", ["happy", "joy"]]`.

# --instructions--

ضف `["dog", 3]` إلي نهاية المتغير `myArray`.

# --hints--

يجب أن يساوي `myArray` قيمة `[["John", 23], ["cat", 2], ["dog", 3]]` الآن.

```js
assert(
  (function (d) {
    if (
      d[2] != undefined &&
      d[0][0] == 'John' &&
      d[0][1] === 23 &&
      d[2][0] == 'dog' &&
      d[2][1] === 3 &&
      d[2].length == 2
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
(function(z){return 'myArray = ' + JSON.stringify(z);})(myArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3]);
```
