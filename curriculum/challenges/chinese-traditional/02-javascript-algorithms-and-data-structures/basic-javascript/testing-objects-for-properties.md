---
id: 567af2437cbaa8c51670a16c
title: 測試對象的屬性
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

有時檢查一個對象屬性是否存在是非常有用的。 我們可以用對象的 `.hasOwnProperty(propname)` 方法來檢查對象是否有指定的屬性。 `.hasOwnProperty()` 找到該屬性時返回 `true`，找不到該屬性時返回 `false`。

**示例**

```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```

第一個 `hasOwnProperty` 返回 `true`，第二個返回 `false`。

# --instructions--

修改函數 `checkObj` 檢查 `obj` 是否有 `checkProp` 屬性。 如果屬性存在，返回屬性對應的值。 如果不存在，返回`"Not Found"`。

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
