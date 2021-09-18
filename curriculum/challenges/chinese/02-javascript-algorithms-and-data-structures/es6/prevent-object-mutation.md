---
id: 598f48a36c8c40764b4e52b3
title: 防止对象改变
challengeType: 1
forumTopicId: 301207
dashedName: prevent-object-mutation
---

# --description--

通过之前的挑战可以看出，`const` 声明并不会真的保护数据不被改变。 为了确保数据不被改变，JavaScript 提供了一个函数 `Object.freeze`。

任何更改对象的尝试都将被拒绝，如果脚本在严格模式下运行，将抛出错误。

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

`obj.review` 和 `obj.newProp` 赋值将导致错误，因为我们的编辑器默认在严格模式下运行，控制台将显示值 `{ name: "FreeCodeCamp", review: "Awesome" }`。

# --instructions--

在这个挑战中，你将使用 `Object.freeze` 来防止数学常量被改变。 你需要冻结 `MATH_CONSTANTS` 对象，使得没有人可以改变 `PI` 的值，或增加或删除属性。

# --hints--

不要替换 `const` 关键字。

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`MATH_CONSTANTS` 应该为一个常量（使用 `const`）。

```js
(getUserInput) =>
  assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g));
```

不要改变 `MATH_CONSTANTS` 的原始声明。

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g
    )
  );
```

`PI` 应等于 `3.14`。

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
