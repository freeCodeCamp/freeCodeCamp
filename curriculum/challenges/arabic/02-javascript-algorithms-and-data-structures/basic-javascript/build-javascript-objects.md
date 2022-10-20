---
id: 56bbb991ad1ed5201cd392d0
title: بناء الكائنات في JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
dashedName: build-javascript-objects
---

# --description--

ربما قد سمعت عن مصطلح `object` من قبل.

الكائنات تشبه `arrays`، باستثناء انه بدلا من استخدام الترتيب للوصول إلى بياناتها وتعديلها، يمكنك الوصول إلى البيانات في الكائنات بواسطة `properties`.

تكون الكائنات مفيدة لتخزين البيانات بطريقة منظمة، ويمكن تمثل الكائن في الواقع، مثل القطة.

هذا مثال مبسط عن كائن القطة:

```js
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

في المثال، يتم تخزين جميع الخصائص كمقاطع مثل `name`، و`legs`، و `tails`. ومع ذلك، يمكنك استخدام الأرقام كالخواص أيضاً. يمكنك حذف علامتان التنصيص (" ") لخصائص النص المكون من كلمة واحدة، على النحو التالي:

```js
const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

ومع ذلك، إذا كان الكائن الخاص بك يحتوي على خصائص غير المقطع النصي، فإن JavaScript سيحتسبها تلقائياً كمقاطع.

# --instructions--

أنشئ كائن يمثل كلبا يسمى `myDog` الذي يحتوي على الخواص `name` (مقطع نصي)، `legs`, و `tails`, و `friends`.

يمكنك وضع خصائص الكائن الذي تريدها، مادام أن `name` هو مقطع، `legs` و `tails` هي أرقام، و`friends` هو قائمة (array).

# --hints--

يجب أن يحتوي `myDog` على الخاصية `name`, ويجب أن تكون الخاصية بنوع `string`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('name') &&
      z.name !== undefined &&
      typeof z.name === 'string'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

يجب أن يحتوي `myDog` على الخاصية `legs`, ويجب أن تكون الخاصية بنوع `number`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('legs') &&
      z.legs !== undefined &&
      typeof z.legs === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

يجب أن يحتوي `myDog` على الخاصية `tails`, ويجب أن تكون الخاصية بنوع `number`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('tails') &&
      z.tails !== undefined &&
      typeof z.tails === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

يجب أن يحتوي `myDog` على الخاصية `friends`, ويجب أن تكون الخاصية بنوع `array`.

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('friends') &&
      z.friends !== undefined &&
      Array.isArray(z.friends)
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

يجب أن يحتوي `myDog` على جميع الخصائص المعطاة فقط.

```js
assert(
  (function (z) {
    return Object.keys(z).length === 4;
  })(myDog)
);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
const myDog = {
  // Only change code below this line


  // Only change code above this line
};
```

# --solutions--

```js
const myDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```
