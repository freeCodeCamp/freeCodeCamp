---
id: 5a24c314108439a4d4036159
title: 在数组中使用扩展运算符
challengeType: 6
forumTopicId: 301452
---

# --description--

ES6 中有助于在 Redux 中强制执行状态不变性的一个解决方案是扩展运算符：`...`。扩展运算符具有很多的应用，其中一种非常适合通过一个已有的数组生成一个新数组。这是相对较新的，但常用的语法。例如，如果你有一个数组`myArray`并写：

`let newArray = [...myArray];`

`newArray`现在是`myArray`的克隆。两个数组仍然在内存中单独存在。如果你执行像`newArray.push(5)`这样的突变，`myArray`不会改变。`...`有效*将`myArray`中的值*传播到新数组中。要克隆数组但在新数组中添加其他值，可以编写`[... myArray，'new value']`。这将返回一个由`中的值组成的新数组。`myArray和字符串`'new value'`作为最后一个值。扩展语法可以像这样在数组组合中多次使用，但重要的是要注意它只做一个浅拷贝这就是说，它只为一维数组提供了不可变的数组操作。

# --instructions--

添加待办事项时，使用 spread 运算符返回新的状态副本。

# --hints--

Redux store 应该存在并初始化一个`[Do not mutate state！]`的状态。

```js
assert(
  (function () {
    const initialState = store.getState();
    return (
      Array.isArray(initialState) === true &&
      initialState[0] === 'Do not mutate state!'
    );
  })()
);
```

`addToDo`和`immutableReducer`都应该是一个函数。

```js
assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
```

在 Redux store 上 dispatch 一个类型为`ADD_TO_DO` aciton 应该添加一个`todo`项，并且不应该改变 state。

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(addToDo('__TEST__TO__DO__'));
    const finalState = store.getState();
    const expectedState = ['Do not mutate state!', '__TEST__TO__DO__'];
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

应使用扩展运算符返回新的 state。

```js
(getUserInput) => assert(getUserInput('index').includes('...state'));
```

# --solutions--

