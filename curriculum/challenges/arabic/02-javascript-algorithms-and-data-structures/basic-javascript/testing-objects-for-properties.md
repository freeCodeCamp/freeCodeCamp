---
id: 567af2437cbaa8c51670a16c
title: اختبار الكائنات للخصائص (Testing Objects for Properties)
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

To check if a property on a given object exists or not, you can use the `.hasOwnProperty()` method. `someObject.hasOwnProperty(someProperty)` returns `true` or `false` depending on if the property is found on the object or not.

**مثال**

```js
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
```

The first `checkForProperty` function call returns `true`, while the second returns `false`.

# --instructions--

Modify the function `checkObj` to test if the object passed to the function parameter `obj` contains the specific property passed to the function parameter `checkProp`. If the property passed to `checkProp` is found on `obj`, return that property's value. If not, return `Not Found`.

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
