---
id: 5a24c314108439a4d4036151
title: Use a Switch Statement to Handle Multiple Actions
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用Switch语句处理多个操作
---

## Description
<section id="description">您可以告诉Redux商店如何处理多种操作类型。假设您在Redux商店中管理用户身份验证。您希望在用户登录和注销时具有状态表示。您使用经过<code>authenticated</code>的属性的单个状态对象来表示它。您还需要动作创建者创建与用户登录和用户注销相对应的操作，以及操作对象本身。 </section>

## Instructions
<section id="instructions">代码编辑器为您设置了商店，操作和操作创建器。填写<code>reducer</code>函数以处理多个身份验证操作。在<code>reducer</code>使用JavaScript <code>switch</code>语句来响应不同的操作事件。这是编写Redux减速器的标准模式。 switch语句应该切换<code>action.type</code>并返回适当的身份验证状态。 <strong>注意：</strong>此时，不要担心状态不变性，因为在这个例子中它很小而且简单。对于每个操作，您可以返回一个新对象 - 例如， <code>{authenticated: true}</code> 。另外，不要忘记在switch语句中写一个返回当前<code>state</code>的<code>default</code>大小写。这很重要，因为一旦您的应用程序有多个Reducer，它们都会在执行操作调度时运行，即使操作与该reducer无关。在这种情况下，您需要确保返回当前<code>state</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 调用函数<code>loginUser</code>应该返回一个对象，其type属性设置为字符串<code>LOGIN</code> 。
    testString: assert(loginUser().type === 'LOGIN');
  - text: 调用函数<code>logoutUser</code>应该返回一个对象，其type属性设置为字符串<code>LOGOUT</code> 。
    testString: assert(logoutUser().type === 'LOGOUT');
  - text: 应使用经过<code>authenticated</code>属性设置为<code>false</code>的对象初始化存储。
    testString: assert(store.getState().authenticated === false);
  - text: 调度<code>loginUser</code>应该将store状态中的<code>authenticated</code>属性更新为<code>true</code> 。
    testString: assert((function() {  const initialState = store.getState(); store.dispatch(loginUser()); const afterLogin = store.getState(); return initialState.authenticated === false && afterLogin.authenticated === true })());
  - text: 调度<code>logoutUser</code>应将store状态中的<code>authenticated</code>属性更新为<code>false</code> 。
    testString: assert((function() {  store.dispatch(loginUser()); const loggedIn = store.getState(); store.dispatch(logoutUser()); const afterLogout = store.getState(); return loggedIn.authenticated === true && afterLogout.authenticated === false  })());
  - text: <code>authReducer</code>函数应该使用<code>switch</code>语句处理多个动作类型。
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
  // change code below this line

  // change code above this line
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
