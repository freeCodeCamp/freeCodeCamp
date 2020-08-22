---
id: 5a24c314108439a4d4036159
title: Use the Spread Operator on Arrays
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 在阵列上使用Spread Operator
---

## Description
<section id="description"> ES6的一个解决方案是帮助在Redux中强制执行状态不变性，它是扩展运算符： <code>...</code>扩展运算符具有各种应用程序，其中一个非常适合于从现有阵列生成新阵列的先前挑战。这是相对较新的，但常用的语法。例如，如果你有一个数组<code>myArray</code>并且写： <code>let newArray = [...myArray];</code> <code>newArray</code>现在是<code>myArray</code>的克隆。两个阵列仍然分别存在于内存中。如果你执行像<code>newArray.push(5)</code>这样的变异， <code>myArray</code>不会改变。 <code>...</code>有效地<i>将</i> <code>myArray</code>的值<i>展开</i>到一个新数组中。要克隆数组但在新数组中添加其他值，可以编写<code>[...myArray, &#39;new value&#39;]</code> 。这将返回一个由<code>myArray</code>中的值和字符串<code>&#39;new value&#39;</code>组成的新数组作为最后一个值。扩展语法可以像这样在数组组合中多次使用，但重要的是要注意它只是生成数组的浅表副本。也就是说，它只为一维数组提供不可变的数组操作。 </section>

## Instructions
<section id="instructions">添加待办事项时，使用spread运算符返回新的状态副本。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Redux存储应该存在并初始化为等于<code>[Do not mutate state!]</code> 。'
    testString: assert((function() { const initialState = store.getState(); return ( Array.isArray(initialState) === true && initialState[0] === 'Do not mutate state!'); })());
  - text: <code>addToDo</code>和<code>immutableReducer</code>都应该是函数。
    testString: assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
  - text: 在Redux存储上调度<code>ADD_TO_DO</code>类型的操作应该添加<code>todo</code> ，不应该改变状态。
    testString: assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addToDo('__TEST__TO__DO__')); const finalState = store.getState(); const expectedState = [ 'Do not mutate state!', '__TEST__TO__DO__' ]; return( isFrozen && DeepEqual(finalState, expectedState)); })());
  - text: 应使用扩展运算符返回新状态。
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
      // don't mutate state here or the tests will fail
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
// solution required
```

/section>
