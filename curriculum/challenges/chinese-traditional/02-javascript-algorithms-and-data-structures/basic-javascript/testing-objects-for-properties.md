---
id: 567af2437cbaa8c51670a16c
title: 測試對象的屬性
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

要檢查某個對象是否具有一個屬性，你可以使用 `.hasOwnProperty()` 方法。 根據對象是否具有該屬性，`someObject.hasOwnProperty(someProperty)` 返回 `true` 或 `false`。

**示例**

```js
function checkForProperty(object, property) {
  return object.hasOwnProperty(property);
}

checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false
```

第一個 `checkForProperty` 函數返回 `true`，第二個返回 `false`。

# --instructions--

修改函數 `checkObj` 以檢查傳給函數參數的對象 `obj` 是否包含傳給函數參數的屬性 `checkProp`。 如果在 `obj` 中找到傳給 `checkProp` 的屬性，則返回該屬性的值。 如果沒有，則返回 `Not Found`。

# --hints--

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` 應該返回字符串 `pony`。

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift') === 'pony'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` 應該返回字符串 `kitten`。

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'pet') === 'kitten'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` 應該返回字符串 `Not Found`。

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'house') ===
    'Not Found'
);
```

`checkObj({city: "Seattle"}, "city")` 應該返回字符串 `Seattle`。

```js
assert(checkObj({ city: 'Seattle' }, 'city') === 'Seattle');
```

`checkObj({city: "Seattle"}, "district")` 應該返回字符串 `Not Found`。

```js
assert(checkObj({ city: 'Seattle' }, 'district') === 'Not Found');
```

`checkObj({pet: "kitten", bed: "sleigh"}, "gift")` 應該返回字符串 `Not Found`。

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
