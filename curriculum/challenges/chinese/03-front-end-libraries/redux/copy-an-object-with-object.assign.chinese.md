---
id: 5a24c314108439a4d403615b
title: Copy an Object with Object.assign
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用Object.assign复制对象
---

## Description
<section id="description">最后几个挑战适用于数组，但是当状态是一个<code>object</code>时，有一些方法可以帮助强制执行状态不变性。处理对象的有用工具是<code>Object.assign()</code>实用程序。 <code>Object.assign()</code>接受目标对象和源对象，并将源对象中的属性映射到目标对象。任何匹配的属性都会被源对象中的属性覆盖。此行为通常用于通过将空对象作为第一个参数传递，然后传递要复制的对象来生成对象的浅副本。这是一个例子： <code>const newObject = Object.assign({}, obj1, obj2);</code>这将<code>newObject</code>创建为一个新<code>object</code> ，其中包含当前存在于<code>obj1</code>和<code>obj2</code>中的属性。 </section>

## Instructions
<section id="instructions"> Redux状态和操作被修改为处理<code>state</code>的<code>object</code> 。编辑代码以返回类型为<code>ONLINE</code>操作的新<code>state</code>对象，该<code>status</code>属性将<code>status</code>属性设置为<code>online</code>字符串。尝试使用<code>Object.assign()</code>来完成挑战。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Redux存储应该存在并使用等效于第1行声明的<code>defaultState</code>对象的状态进行初始化。
    testString: 'assert((function() { const expectedState = { user: ''CamperBot'', status: ''offline'', friends: ''732,982'', community: ''freeCodeCamp'' }; const initialState = store.getState(); return DeepEqual(expectedState, initialState); })());'
  - text: <code>wakeUp</code>和<code>immutableReducer</code>都应该是函数。
    testString: assert(typeof wakeUp === 'function' && typeof immutableReducer === 'function');
  - text: 调度<code>ONLINE</code>类型的操作应该将<code>status</code>中的属性<code>status</code>更新为<code>online</code>并且不应该改变状态。
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch({type: ''ONLINE''}); const finalState = store.getState(); const expectedState = { user: ''CamperBot'', status: ''online'', friends: ''732,982'', community: ''freeCodeCamp'' }; return isFrozen && DeepEqual(finalState, expectedState); })());'
  - text: <code>Object.assign</code>应该用于返回新状态。
    testString: getUserInput => assert(getUserInput('index').includes('Object.assign'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

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
