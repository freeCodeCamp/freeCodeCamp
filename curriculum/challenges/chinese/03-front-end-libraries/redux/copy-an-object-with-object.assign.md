---
id: 5a24c314108439a4d403615b
challengeType: 6
forumTopicId: 301437
title: 使用 Object.assign 拷贝对象
---

## Description
<section id='description'>
最后几个挑战适用于数组，但是当状态是<code>object</code>时，有一些方法可以帮助强制执行状态不变性。处理对象的一个方法是<code>Object.assign()</code>。<code> Object.assign()</code>获取目标对象和源对象，并将源对象中的属性映射到目标对象。任何匹配的属性都会被源对象中的属性覆盖。通常用于通过传递一个空对象作为第一个参数，然后是要用复制的对象来制作对象的浅表副本。这是一个例子：
<code>const newObject = Object.assign({}, obj1, obj2);</code>
这会创建<code>newObject</code>作为新的<code>object</code>，其中包含<code>obj1</code>和<code>obj2</code>中当前存在的属性。
</section>

## Instructions
<section id='instructions'>
Redux 状态和 action 被修改为处理<code>state</code>的<code>对象</code>。编辑代码以返回一个新的<code>state</code>对象，用于类型的 action<code>ONLINE</code>，它将<code>status</code>属性设置为字符串<code>online</code>。尝试使用<code>Object.assign()</code>来完成挑战。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Redux store 应该存在并使用与第 1 行声明的<code>defaultState</code>对象相同的状态进行初始化。
    testString: 'assert((function() { const expectedState = { user: ''CamperBot'', status: ''offline'', friends: ''732,982'', community: ''freeCodeCamp'' }; const initialState = store.getState(); return DeepEqual(expectedState, initialState); })());'
  - text: <code>wakeUp</code>和<code>immutableReducer</code>都应该是函数。
    testString: assert(typeof wakeUp === 'function' && typeof immutableReducer === 'function');
  - text: dispatch 一个类型为<code>ONLINE</code>的 action 应该将状态<code>status</code>更新为<code>online</code>，并且不应该改变状态。
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch({type: ''ONLINE''}); const finalState = store.getState(); const expectedState = { user: ''CamperBot'', status: ''online'', friends: ''732,982'', community: ''freeCodeCamp'' }; return isFrozen && DeepEqual(finalState, expectedState); })());'
  - text: <code>Object.assign</code>应该被用于返回一个新状态。
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
      // 不要在这里改变 state 否则测试会失败。
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
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      return Object.assign({}, state, {
        status: 'online'
      });
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

</section>
