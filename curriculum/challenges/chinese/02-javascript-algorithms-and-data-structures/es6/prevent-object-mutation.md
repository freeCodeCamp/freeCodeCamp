---
id: 598f48a36c8c40764b4e52b3
title: 防止对象改变
challengeType: 1
forumTopicId: 301207
---

# --description--

通过之前的挑战可以看出，`const`声明并不会真的保护你的数据不被改变。为了确保数据不被改变，JavaScript 提供了一个函数`Object.freeze`来防止数据改变。

当一个对象被冻结的时候，你不能再对它的属性再进行增、删、改的操作。任何试图改变对象的操作都会被阻止，却不会报错。

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}
```

# --instructions--

在这个挑战中，你将使用`Object.freeze`来防止数学常量被改变。你需要冻结`MATH_CONSTANTS`对象，使得没有人可以改变`PI`的值，抑或增加或删除属性。

# --hints--

不要替换`const`关键字。

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`MATH_CONSTANTS`应该为一个常量 (使用`const`)。

```js
(getUserInput) =>
  assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g));
```

不要改变原始的`MATH_CONSTANTS`。

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g
    )
  );
```

`PI`等于`3.14`。

```js
assert(PI === 3.14);
```

# --solutions--

