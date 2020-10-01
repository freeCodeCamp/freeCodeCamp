---
id: 5a24c314108439a4d4036152
challengeType: 6
forumTopicId: 301450
title: 使用 const 声明 Action Types
---

## Description
<section id='description'>
在使用 Redux 时的一个常见做法是将操作类型指定为只读，然后在任何使用它们的地方引用这些常量。你可以通过将 action types 使用<code>const</code>声明重构你正在使用的代码。
</section>

## Instructions
<section id='instructions'>
将<code>LOGIN</code>和<code>LOGOUT</code>声明为<code>const</code>类型的值，并为它们分别分配字符串<code>'LOGIN'</code>和<code>'LOGOUT'</code>。然后，编辑<code>authReducer()</code>和 action creators 来引用这些常量而不是字符串值。
<strong>注意：</strong>&nbsp;通常以全部大写形式写出常量，这也是 Redux 的标准做法。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '调用<code>loginUser</code>函数应该返回一个 {type:"LOGIN"} 对象。'
    testString: assert(loginUser().type === 'LOGIN');
  - text: '调用<code>logoutUser</code>函数应该返回一个 {type:\"LOGOUT\"} 对象。'
    testString: assert(logoutUser().type === 'LOGOUT');
  - text: store 应该初始化一个对象 {login：false}。
    testString: assert(store.getState().authenticated === false);
  - text: dispatch <code>loginUser</code>以后应将 store 中的 state 的<code>login</code>值更新为<code>true</code>。
    testString: assert((function() {  const initialState = store.getState(); store.dispatch(loginUser()); const afterLogin = store.getState(); return initialState.authenticated === false && afterLogin.authenticated === true })());
  - text: dispatch <code>logoutUser</code>应将 store 中的 state 的<code>login</code>值更新为<code>false</code>。
    testString: assert((function() {  store.dispatch(loginUser()); const loggedIn = store.getState(); store.dispatch(logoutUser()); const afterLogout = store.getState(); return loggedIn.authenticated === true && afterLogout.authenticated === false })());
  - text: <code>authReducer</code>函数应该使用 switch 语句处理多个 action 类型。
    testString: getUserInput => assert((function() { return typeof authReducer === 'function' && getUserInput('index').toString().includes('switch') && getUserInput('index').toString().includes('case') && getUserInput('index').toString().includes('default') })());
  - text: '应该使用<code>const LOGIN="LOGIN"</code>和<code>const LOGOUT="LOGOUT"</code>的方式声明<code>LOGIN</code>和<code>LOGOUT</code>。'
    testString: const noWhiteSpace = code.replace(/\s/g, ''); assert(/constLOGIN=(['"`])LOGIN\1/.test(noWhiteSpace) && /constLOGOUT=(['"`])LOGOUT\1/.test(noWhiteSpace));
  - text: action creator 和 reducer 中应该引用<code>LOGIN</code>和<code>LOGOUT</code>常量。
    testString: getUserInput => assert((function() { const noWhiteSpace = getUserInput('index').toString().replace(/\s/g,''); return noWhiteSpace.includes('caseLOGIN:') && noWhiteSpace.includes('caseLOGOUT:') && noWhiteSpace.includes('type:LOGIN') && noWhiteSpace.includes('type:LOGOUT') })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// 修改此行下方的代码

// 修改此行上方的代码

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

</div>



</section>

## Solution
<section id='solution'>


```js
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
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
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
```

</section>
