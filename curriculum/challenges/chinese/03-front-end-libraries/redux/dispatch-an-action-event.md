---
id: 5a24c314108439a4d403614f
challengeType: 6
forumTopicId: 301442
title: 分发 Action Event
---

## Description
<section id='description'>
<code>dispatch</code>方法用于将 action 分派给 Redux store，调用<code>store.dispatch()</code>将从 action creator 返回的值发送回 store。
action creator 返回一个具有 type 属性的对象，该属性指定已发生的 action，然后，该方法将 action 对象 dispatch 到 Redux store，根据之前的挑战示例，以下内容是等效的，并且都 dispatch 类型为<code>LOGIN</code>的 action：

```js
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

</section>

## Instructions
<section id='instructions'>
代码编辑器中的 Redux store 具有初始化状态对象{login:'false'}，还有一个名为<code>loginAction()</code>的 action creator，它返回类型为<code>LOGIN</code>的 action，然后通过调用<code>dispatch</code>方法将<code>LOGIN</code>的 action dispatch 给 Redux store，并传递<code>loginAction()</code>创建的 action。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '调用函数<code>loginAction</code>应该返回一个对象{type:"LOGIN"}。'
    testString: assert(loginAction().type === 'LOGIN');
  - text: 'store 应该初始化一个对象 {login:false}。'
    testString: assert(store.getState().login === false);
  - text: <code>store.dispatch()</code>方法应该被用于 dispatch 一个类型为<code>LOGIN</code>的 action。
    testString: "getUserInput => assert((function() {  let noWhiteSpace = getUserInput('index').replace(/\\s/g,''); return noWhiteSpace.includes('store.dispatch(loginAction())') || noWhiteSpace.includes('store.dispatch({type: \\'LOGIN\\'})') === true })());"

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// 在这里 dispatch action

```

</div>



</section>

## Solution
<section id='solution'>


```js
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());
```

</section>
