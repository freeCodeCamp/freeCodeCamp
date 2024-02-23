---
id: 567af2437cbaa8c51670a16c
title: 测试对象的属性
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

要检查某个对象是否具有一个属性，你可以使用 `.hasOwnProperty()` 方法。 根据对象是否具有该属性，`someObject.hasOwnProperty(someProperty)` 返回 `true` 或 `false`。

**示例**

```js
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
```

第一个 `checkForProperty` 函数返回 `true`，第二个返回 `false`。

# --instructions--

修改函数 `checkObj` 以检查传给函数参数的对象 `obj` 是否包含传给函数参数的属性 `checkProp`。 如果在 `obj` 中找到传给 `checkProp` 的属性，则返回该属性的值。 如果没有，则返回 `Not Found`。

# --hints--

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` 应该返回字符串 `pony`。

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift') === 'pony'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` 应该返回字符串 `kitten`。

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'pet') === 'kitten'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` 应该返回字符串 `Not Found`。

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'house') ===
    'Not Found'
);
```

`checkObj({city: "Seattle"}, "city")` 应该返回字符串 `Seattle`。

```js
assert(checkObj({ city: 'Seattle' }, 'city') === 'Seattle');
```

`checkObj({city: "Seattle"}, "district")` 应该返回字符串 `Not Found`。

```js
assert(checkObj({ city: 'Seattle' }, 'district') === 'Not Found');
```

`checkObj({pet: "kitten", bed: "sleigh"}, "gift")` 应该返回字符串 `Not Found`。

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
