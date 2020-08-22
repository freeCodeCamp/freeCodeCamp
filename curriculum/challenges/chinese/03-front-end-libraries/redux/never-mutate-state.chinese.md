---
id: 5a24c314108439a4d4036158
title: Never Mutate State
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 从不改变国家
---

## Description
<section id="description">这些最后的挑战描述了在Redux中实施状态不变性关键原则的几种方法。不可变状态意味着您永远不会直接修改状态，而是返回状态的新副本。如果你随着时间的推移拍摄了一个Redux应用程序状态的快照，你会看到<code>state 1</code> ， <code>state 2</code> ， <code>state 3</code> ， <code>state 4</code> ， <code>...</code>等等，其中每个状态可能与最后一个状态相似，但每个状态是一个独特的数据。事实上，这种不变性提供了您可能听说过的时间旅行调试等功能。 Redux不会在其商店或减少者中主动强制执行状态不变性，而责任落在程序员身上。幸运的是，JavaScript（尤其是ES6）提供了一些有用的工具，可用于强制执行状态的不变性，无论是<code>string</code> ， <code>number</code> ， <code>array</code>还是<code>object</code> 。请注意，字符串和数字是原始值，并且本质上是不可变的。换句话说，3总是3.您不能更改数字3的值。但是， <code>array</code>或<code>object</code>是可变的。实际上，您的状态可能包含<code>array</code>或<code>object</code> ，因为它们是用于表示许多类型信息的有用数据结构。 </section>

## Instructions
<section id="instructions">代码编辑器中有一个<code>store</code>和<code>reducer</code>器，用于管理待办事项。完成在<code>ADD_TO_DO</code>中写入<code>ADD_TO_DO</code>情况，以向状态附加新的待办事项。使用标准JavaScript或ES6可以通过几种方法实现此目的。看看是否可以找到一种方法来返回一个新数组，其中<code>action.todo</code>的项目附加到结尾。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Redux存储应该存在并使用等于代码编辑器中的<code>todos</code>数组的状态进行初始化。
    testString: assert((function() { const todos = [ 'Go to the store', 'Clean the house', 'Cook dinner', 'Learn to code' ]; const initialState = store.getState(); return Array.isArray(initialState) && initialState.join(',') === todos.join(','); })());
  - text: <code>addToDo</code>和<code>immutableReducer</code>都应该是函数。
    testString: assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
  - text: 在Redux存储上调度<code>ADD_TO_DO</code>类型的操作应该添加<code>todo</code> ，不应该改变状态。
    testString: assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addToDo('__TEST__TO__DO__')); const finalState = store.getState(); const expectedState = [ 'Go to the store', 'Clean the house', 'Cook dinner', 'Learn to code', '__TEST__TO__DO__' ]; return( isFrozen && DeepEqual(finalState, expectedState)); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
