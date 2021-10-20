---
id: 598f48a36c8c40764b4e52b3
title: 防止對象改變
challengeType: 1
forumTopicId: 301207
dashedName: prevent-object-mutation
---

# --description--

通過之前的挑戰可以看出，`const` 聲明並不會真的保護數據不被改變。 爲了確保數據不被改變，JavaScript 提供了一個函數 `Object.freeze`。

任何更改對象的嘗試都將被拒絕，如果腳本在嚴格模式下運行，將拋出錯誤。

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
```

`obj.review` 和 `obj.newProp` 賦值將導致錯誤，因爲我們的編輯器默認在嚴格模式下運行，控制檯將顯示值 `{ name: "FreeCodeCamp", review: "Awesome" }`。

# --instructions--

在這個挑戰中，你將使用 `Object.freeze` 來防止數學常量被改變。 你需要凍結 `MATH_CONSTANTS` 對象，使得沒有人可以改變 `PI` 的值，或增加或刪除屬性。

# --hints--

不要替換 `const` 關鍵字。

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`MATH_CONSTANTS` 應該爲一個常量（使用 `const`）。

```js
(getUserInput) =>
  assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g));
```

不要改變 `MATH_CONSTANTS` 的原始聲明。

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g
    )
  );
```

`PI` 應等於 `3.14`。

```js
assert(PI === 3.14);
```

# --seed--

## --seed-contents--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line


  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

# --solutions--

```js
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```
