---
id: 5a24c314108439a4d4036151
challengeType: 6
forumTopicId: 301449
title: 使用 Switch 语句处理多个 Actions
---

## Description
<section id='description'>
你可以定义 Redux store 如何处理多种 action 类型。比如你正在 Redux store 中进行用户身份验证，如果你希望用户在登录和注销时具有状态的响应，你可以使用具有<code>authenticated</code>属性的单个的 state 对象。你还需要使用 action creators 创建与用户登录和用户注销相对应的 action，以及 action 对象本身。
</section>

## Instructions
<section id='instructions'>
代码编辑器为你创建了 store、actions、action creators。通过编写<code>reducer</code>函数来处理多个身份验证操作。可以在<code>reducer</code>通过使用 JavaScript 的<code>switch</code>来响应不同的 action 事件。这是编写 Redux reducer 时的标准模式，switch 语句选择<code>action.type</code>中的一个值并返回相应的身份验证状态。
<strong>注意：</strong>&nbsp;此时，不要担心 state 的不变性，因为在这个示例中它很小而且很简单。所以对于每个操作你都可以返回一个新对象，比如<code>{authenticated:true}</code>。另外，不要忘记在 switch 语句中写一个<code>default</code> case，返回当前的<code>state</code>。这是很重要的，因为一旦你的程序有多个 reducer，当一个 action 被 dispatch 时它们都会运行，即使 action 与该 reducer 无关。在这种情况下，你要确保返回当前的<code>state</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '调用<code>loginUser</code>函数应该返回一个 {type:"LOGIN"} 对象。'
    testString: assert(loginUser().type === 'LOGIN');
  - text: '调用<code>logoutUser</code>函数应该返回一个 {type:"LOGOUT"} 对象。'
    testString: assert(logoutUser().type === 'LOGOUT');
  - text: 'store 应该设置一个初始化对象 {authenticated:false}。'
    testString: assert(store.getState().authenticated === false);
  - text: dispatch <code>loginUser</code>应该将 store 中的 state 的<code>authenticated</code>值更新为<code>true</code>。
    testString: assert((function() {  const initialState = store.getState(); store.dispatch(loginUser()); const afterLogin = store.getState(); return initialState.authenticated === false && afterLogin.authenticated === true })());
  - text: dispatch <code>logoutUser</code>应该将 store 中的 state 的<code>authenticated</code>值更新为<code>false</code>。
    testString: assert((function() {  store.dispatch(loginUser()); const loggedIn = store.getState(); store.dispatch(logoutUser()); const afterLogout = store.getState(); return loggedIn.authenticated === true && afterLogout.authenticated === false  })());
  - text: <code>authReducer</code>函数应该使用<code>switch</code>语句处理多个 action 类型。
    testString: getUserInput => assert( getUserInput('index').toString().includes('switch') && getUserInput('index').toString().includes('case') && getUserInput('index').toString().includes('default'));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
// 修改此行下方的代码

// 修改此行上方的代码
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```

</div>



</section>

## Solution
<section id='solution'>


```js
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case 'LOGIN':
      return {
        authenticated: true
      }

    case 'LOGOUT':
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```

</section>
