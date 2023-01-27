---
id: 567af2437cbaa8c51670a16c
title: اختبار الكائنات للخصائص (Testing Objects for Properties)
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

في بعض الأحيان يكون من المفيد التحقق مما إذا كانت خاصية كائن (object property) معين موجودة أم لا. يمكننا استخدام وظيفة `.hasOwnProperty(propname)` لتحديد ما إذا كان لهذا الكائن اسم خاصية معين. يرجع `.hasOwnProperty()` حالة `true` أو `false` إذا تم العثور على الخاصية أو لا.

**مثال**

```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```

يرجع أول `hasOwnProperty` حالة `true`، في حين أن يرجع الثاني `false`.

# --instructions--

عدّل الوظيفة `checkObj` لاختبار ما إذا كان كائن تم تمريره إلى الوظيفة (`obj`) يحتوي على خاصية محددة (`checkProp`). إذا تم العثور على الخاصية، قم إرجاع قيمة تلك الخاصية. إذا لم يكن الأمر كذلك، قم إرجاع `"Not Found"`.

# --hints--

يجب أن ينتج `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` مقطع `pony`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift') === 'pony'
);
```

يجب أن ينتج `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` مقطع `kitten`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'pet') === 'kitten'
);
```

يجب أن ينتج `checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` مقطع `Not Found`.

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'house') ===
    'Not Found'
);
```

يجب أن ينتج `checkObj({city: "Seattle"}, "city")` مقطع `Seattle`.

```js
assert(checkObj({ city: 'Seattle' }, 'city') === 'Seattle');
```

يجب أن ينتج `checkObj({city: "Seattle"}, "district")` مقطع`Not Found`.

```js
assert(checkObj({ city: 'Seattle' }, 'district') === 'Not Found');
```

يجب أن ينتج `checkObj({pet: "kitten", bed: "sleigh"}, "gift")` مقطع `Not Found`.

```js
assert(checkObj({ pet: 'kitten', bed: 'sleigh' }, 'gift') === 'Not Found');
```

# --seed--

## --seed-contents--

```js
function checkObj(obj, checkProp) {
  // Only change code below this line
  return "Change Me!";
  // Only change code above this line
}
```

# --solutions--

```js
function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
```
