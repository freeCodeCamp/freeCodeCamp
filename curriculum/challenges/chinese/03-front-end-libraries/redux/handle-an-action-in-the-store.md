---
id: 5a24c314108439a4d4036150
challengeType: 6
forumTopicId: 301444
title: 在 Store 里处理 Action
---

## Description
<section id='description'>
在一个 action 被创建并 dispatch 之后，Redux store 需要知道如何响应该操作。这就是<code>reducer</code>函数存在的意义。Redux 中的 Reducers 负责响应 action 然后进行状态的修改。<code>reducer</code>将<code>state</code>和<code>action</code>作为参数，并且它总是返回一个新的<code>state</code>。我们要知道这是 reducer 的<strong>唯一</strong>的作用。它不应有任何其他的作用：比如它不应调用 API 接口，也不应存在任何潜在的副作用。reducer 只是一个接受状态和动作，然后返回新状态的纯函数。
Redux 的另一个关键原则是<code>state</code>是只读的。换句话说，<code>reducer</code>函数必须<strong>始终</strong>返回一个新的<code>state</code>，并且永远不会直接修改状态。Redux 不强制改变状态，但是你需要在你的 reducer 函数的代码中强制执行它，你将在以后的挑战中练习这一点。
</section>

## Instructions
<section id='instructions'>
代码编辑器中具有前面的示例以及一个<code>reducer</code>函数。你需要完善<code>reducer</code>函数的内容，使得它如果收到类型为<code>'LOGIN'</code>的action，它将返回一个将<code>login</code>设置为<code>true</code>的 state 对象。否则，它就返回当前的<code>state</code>。请注意，当前<code>state</code>和dispatch的<code>action</code>将被传递给reducer，因此你可以使用<code>action.type</code>直接获取 action 的类型。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '调用<code>loginAction</code>函数应该返回一个对象 {type:"LOGIN"}。'
    testString: assert(loginAction().type === 'LOGIN');
  - text: 'store 应该初始化一个对象 {login:false}。'
    testString: assert(store.getState().login === false);
  - text: dispatch <code>loginAction</code>后应将 store 中 state 的<code>login</code>值更新为<code>true</code>。
    testString: assert((function() {  const initialState = store.getState(); store.dispatch(loginAction()); const afterState = store.getState(); return initialState.login === false && afterState.login === true })());
  - text: 如果 action 的类型不是<code>LOGIN</code>，那么 store 应返回当前的 state。
    testString: 'assert((function() { store.dispatch({type: ''__TEST__ACTION__''}); let afterTest = store.getState(); return typeof afterTest === ''object'' && afterTest.hasOwnProperty(''login'') })());'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // 修改此行下方的代码

  // 修改此行上方的代码
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```

</div>



</section>

## Solution
<section id='solution'>


```js
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {

  if (action.type === 'LOGIN') {
    return {login: true}
  }

  else {
    return state
  }

};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```

</section>
