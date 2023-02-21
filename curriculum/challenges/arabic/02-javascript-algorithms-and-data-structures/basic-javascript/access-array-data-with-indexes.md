---
id: 56bbb991ad1ed5201cd392ca
title: الوصول إلى بيانات القائمة باستخدام الترتيب
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

يمكننا الوصول إلى البيانات داخل القائمات باستخدام <dfn>الترتيب</dfn>.

array indexes تكتب بنفس الأقواس التي تستخدم في المقاطع النصية (strings)، باستثناء أنه بدلاً من تحديد رمز، فإنهم يحددون عنصرا في القائمة (array). مثل المقاطع النصية، فإن القائمات تستخدم <dfn>ترتيب من الصفر</dfn>، لذا فإن رَقَم ترتيب (index) العنصر الأول في القائمة `0`.

<br>

**على سبيل المثال**

```js
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
```

`console.log(array[0])` تطبع `50` و `data` قيمتها `60`.

# --instructions--

أنشئ متغير يسمى `myData` وعيّنه ليساوي القيمة الأولى في `myArray` باستخدام bracket notation.

# --hints--

المتغير `myData` يجب أن يساوي القيمة الأولى في `myArray`.

```js
assert(
  (function () {
    if (
      typeof myArray !== 'undefined' &&
      typeof myData !== 'undefined' &&
      myArray[0] === myData
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

البيانات في المتغير `myArray` يجب الوصول إليها باستخدام bracket notation.

```js
assert(
  (function () {
    if (code.match(/\s*=\s*myArray\[0\]/g)) {
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
if(typeof myArray !== "undefined" && typeof myData !== "undefined"){(function(y,z){return 'myArray = ' + JSON.stringify(y) + ', myData = ' + JSON.stringify(z);})(myArray, myData);}
```

## --seed-contents--

```js
const myArray = [50, 60, 70];


```

# --solutions--

```js
const myArray = [50, 60, 70];
const myData = myArray[0];
```
