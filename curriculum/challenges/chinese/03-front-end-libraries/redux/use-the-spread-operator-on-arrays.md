---
id: 5a24c314108439a4d4036159
challengeType: 6
forumTopicId: 301452
title: 在数组中使用扩展运算符
---

## Description
<section id='description'>
ES6 中有助于在 Redux 中强制执行状态不变性的一个解决方案是扩展运算符：<code>...</code>。扩展运算符具有很多的应用，其中一种非常适合通过一个已有的数组生成一个新数组。这是相对较新的，但常用的语法。例如，如果你有一个数组<code>myArray</code>并写：
<code>let newArray = [...myArray];</code>
<code>newArray</code>现在是<code>myArray</code>的克隆。两个数组仍然在内存中单独存在。如果你执行像<code>newArray.push(5)</code>这样的突变，<code>myArray</code>不会改变。<code>...</code>有效<i>将<code>myArray</code>中的值</i>传播到新数组中。要克隆数组但在新数组中添加其他值，可以编写<code>[... myArray，'new value']</code>。这将返回一个由<code>中的值组成的新数组。</code>myArray</code>和字符串<code>'new value'</code>作为最后一个值。扩展语法可以像这样在数组组合中多次使用，但重要的是要注意它只做一个浅拷贝这就是说，它只为一维数组提供了不可变的数组操作。
</section>

## Instructions
<section id='instructions'>
添加待办事项时，使用 spread 运算符返回新的状态副本。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Redux store 应该存在并初始化一个<code>[Do not mutate state！]</code>的状态。
    testString: assert((function() { const initialState = store.getState(); return ( Array.isArray(initialState) === true && initialState[0] === 'Do not mutate state!'); })());
  - text: <code>addToDo</code>和<code>immutableReducer</code>都应该是一个函数。
    testString: assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
  - text: 在 Redux store 上 dispatch 一个类型为<code>ADD_TO_DO</code> aciton 应该添加一个<code>todo</code>项，并且不应该改变 state。
    testString: assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addToDo('__TEST__TO__DO__')); const finalState = store.getState(); const expectedState = [ 'Do not mutate state!', '__TEST__TO__DO__' ]; return( isFrozen && DeepEqual(finalState, expectedState)); })());
  - text: 应使用扩展运算符返回新的 state。
    testString: getUserInput => assert(getUserInput('index').includes('...state'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // 不要在这里改变 state 否则测试会失败。
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
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
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      return [
        ...state,
        action.todo
      ];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

</section>
