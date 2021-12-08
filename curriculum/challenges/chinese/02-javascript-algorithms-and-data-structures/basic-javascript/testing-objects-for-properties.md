---
id: 567af2437cbaa8c51670a16c
title: 测试对象的属性
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

有时检查一个对象属性是否存在是非常有用的。 我们可以用对象的 `.hasOwnProperty(propname)` 方法来检查对象是否有指定的属性。 `.hasOwnProperty()` 找到该属性时返回 `true`，找不到该属性时返回 `false`。

**示例**

```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```

第一个 `hasOwnProperty` 返回 `true`，第二个返回 `false`。

# --instructions--

修改函数 `checkObj` 检查 `obj` 是否有 `checkProp` 属性。 如果属性存在，返回属性对应的值。 如果不存在，返回`"Not Found"`。

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
