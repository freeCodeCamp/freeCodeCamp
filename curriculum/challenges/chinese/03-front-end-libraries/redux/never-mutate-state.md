---
id: 5a24c314108439a4d4036158
title: 永不改变状态
challengeType: 6
forumTopicId: 301445
---

# --description--

这些最后的挑战描述了在 Redux 中强制执行状态不变性关键原则的几种方法。不可变状态意味着你永远不会直接修改状态，而是返回一个新的状态副本。

如果你拍摄 Redux 应用程序状态的快照，你会看到类似`state 1`，`state 2`，`state 3`，`state 4`，`...`等等，每个状态可能与最后一个状态相似，但每个状态都是一个独特的数据。事实上，这种不变性是什么提供了你可能听说过的时间旅行调试等功能。

Redux 并没有积极地在其 store 或者 reducer 中强制执行状态不变性，责任落在程序员身上。幸运的是，JavaScript（尤其是 ES6）提供了一些有用的工具，可以用来强制执行状态的不变性，无论是`string`，`number`，`array`或`object`。请注意，字符串和数字是原始值，并且本质上是不可变的。换句话说，3 总是 3，你不能改变数字 3 的值。然而，`array`或`object`是可变的。实际上，你的状态可能包括`array`或`object`，因为它们在表示许多类型信息的数据结构时非常有用。

# --instructions--

代码编辑器中有一个`store`和`reducer`，用于管理待办事项。完成在 reducer 中编写`ADD_TO_DO`的情况，使用标准 JavaScript 或 ES6 可以通过几种方法来实现这一目标。看看是否可以找到一种方法来返回一个新数组，其中来自`action.todo`的项目添加到数组的末尾。

# --hints--

Redux store 应该在代码编辑器中存在并使用名字为`todos`的数组进行状态初始化。

```js
assert(
  (function () {
    const todos = [
      'Go to the store',
      'Clean the house',
      'Cook dinner',
      'Learn to code'
    ];
    const initialState = store.getState();
    return (
      Array.isArray(initialState) && initialState.join(',') === todos.join(',')
    );
  })()
);
```

`addToDo`和`immutableReducer`都应该是函数。

```js
assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
```

在 Redux store 上 dispatch 一个类型为`ADD_TO_DO`的aciton应该添加一个`todo`项，并且不应该改变 state。

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(addToDo('__TEST__TO__DO__'));
    const finalState = store.getState();
    const expectedState = [
      'Go to the store',
      'Clean the house',
      'Cook dinner',
      'Learn to code',
      '__TEST__TO__DO__'
    ];
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

# --solutions--

