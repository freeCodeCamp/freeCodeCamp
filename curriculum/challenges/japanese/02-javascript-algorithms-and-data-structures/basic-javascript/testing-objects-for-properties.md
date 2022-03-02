---
id: 567af2437cbaa8c51670a16c
title: オブジェクトにプロパティがあるかどうかをテストする
challengeType: 1
forumTopicId: 18324
dashedName: testing-objects-for-properties
---

# --description--

指定されたオブジェクトにプロパティが存在するかどうかをチェックできると便利なことがあります。 オブジェクトの `.hasOwnProperty(propname)` メソッドを使用すると、そのオブジェクトが指定されたプロパティ名を持っているかどうかを確認することができます。 `.hasOwnProperty()` はプロパティの有無に応じて、`true` または `false` を返します。

**例**

```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```

最初の `hasOwnProperty` は `true` を返し、2 つ目は `false` を返します。

# --instructions--

関数に渡されたオブジェクト (`obj`) に特定のプロパティ (`checkProp`) が含まれているかどうかをテストするように、関数 `checkObj` を変更してください。 プロパティが見つかった場合は、そのプロパティの値を返してください。 見つからなかった場合は、`"Not Found"` を返してください。

# --hints--

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")` は文字列 `pony` を返す必要があります。

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'gift') === 'pony'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")` は文字列 `kitten` を返す必要があります。

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'pet') === 'kitten'
);
```

`checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")` は文字列 `Not Found` を返す必要があります。

```js
assert(
  checkObj({ gift: 'pony', pet: 'kitten', bed: 'sleigh' }, 'house') ===
    'Not Found'
);
```

`checkObj({city: "Seattle"}, "city")` は文字列 `Seattle` を返す必要があります。

```js
assert(checkObj({ city: 'Seattle' }, 'city') === 'Seattle');
```

`checkObj({city: "Seattle"}, "district")` は文字列 `Not Found` を返す必要があります。

```js
assert(checkObj({ city: 'Seattle' }, 'district') === 'Not Found');
```

`checkObj({pet: "kitten", bed: "sleigh"}, "gift")` は文字列 `Not Found` を返す必要があります。

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
