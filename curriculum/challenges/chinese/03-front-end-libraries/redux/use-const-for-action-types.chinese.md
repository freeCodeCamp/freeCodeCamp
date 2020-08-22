---
id: 5a24c314108439a4d4036152
title: Use const for Action Types
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将const用于Action Types
---

## Description
<section id="description">使用Redux时的一种常见做法是将操作类型指定为只读常量，然后在使用它们的任何地方引用这些常量。您可以重构您正在使用的代码，将操作类型编写为<code>const</code>声明。 </section>

## Instructions
<section id="instructions">将<code>LOGIN</code>和<code>LOGOUT</code>声明为<code>const</code>值，并将它们分别分配给字符串<code>&#39;LOGIN&#39;</code>和<code>&#39;LOGOUT&#39;</code> 。然后，编辑<code>authReducer()</code>和动作创建者以引用这些常量而不是字符串值。 <strong>注意：</strong>通常以全部大写形式写常量，这也是Redux中的标准做法。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 调用函数<code>loginUser</code>应该返回一个对象，其<code>type</code>属性设置为字符串<code>LOGIN</code> 。
    testString: assert(loginUser().type === 'LOGIN');
  - text: 调用函数<code>logoutUser</code>应该返回一个对象，其<code>type</code>属性设置为字符串<code>LOGOUT</code> 。
    testString: assert(logoutUser().type === 'LOGOUT');
  - text: 应使用属性<code>login</code>设置为<code>false</code>的对象初始化存储。
    testString: assert(store.getState().authenticated === false);
  - text: 调度<code>loginUser</code>应该将store状态中的<code>login</code>属性更新为<code>true</code> 。
    testString: assert((function() {  const initialState = store.getState(); store.dispatch(loginUser()); const afterLogin = store.getState(); return initialState.authenticated === false && afterLogin.authenticated === true })());
  - text: 调度<code>logoutUser</code>应将store状态中的<code>login</code>属性更新为<code>false</code> 。
    testString: assert((function() {  store.dispatch(loginUser()); const loggedIn = store.getState(); store.dispatch(logoutUser()); const afterLogout = store.getState(); return loggedIn.authenticated === true && afterLogout.authenticated === false })());
  - text: <code>authReducer</code>函数应该使用switch语句处理多个动作类型。
    testString: getUserInput => assert((function() { return typeof authReducer === 'function' && getUserInput('index').toString().includes('switch') && getUserInput('index').toString().includes('case') && getUserInput('index').toString().includes('default') })());
  - text: <code>LOGIN</code>和<code>LOGOUT</code>应声明为<code>const</code>值，并应分配<code>LOGIN</code>和<code>LOGOUT</code>字符串。
    testString: getUserInput => assert((function() {  const noWhiteSpace = getUserInput('index').toString().replace(/\s/g,''); return (noWhiteSpace.includes('constLOGIN=\'LOGIN\'') || noWhiteSpace.includes('constLOGIN="LOGIN"')) && (noWhiteSpace.includes('constLOGOUT=\'LOGOUT\'') || noWhiteSpace.includes('constLOGOUT="LOGOUT"')) })());
  - text: 动作创建者和减速器应该引用<code>LOGIN</code>和<code>LOGOUT</code>常量。
    testString: getUserInput => assert((function() { const noWhiteSpace = getUserInput('index').toString().replace(/\s/g,''); return noWhiteSpace.includes('caseLOGIN:') && noWhiteSpace.includes('caseLOGOUT:') && noWhiteSpace.includes('type:LOGIN') && noWhiteSpace.includes('type:LOGOUT') })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// change code below this line

// change code above this line

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
// solution required
```

/section>
