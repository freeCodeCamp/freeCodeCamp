---
id: 5a24c314108439a4d403614f
title: Dispatch an Action Event
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 派遣行动事件
---

## Description
<section id="description"> <code>dispatch</code>方法是您用于将操作分派给Redux存储的方法。调用<code>store.dispatch()</code>并传递从操作创建者返回的值会将操作发送回商店。回想一下，动作创建者返回一个具有type属性的对象，该属性指定已发生的动作。然后，该方法将操作对象调度到Redux存储。根据之前的挑战示例，以下行是等效的，并且都调度<code>LOGIN</code>类型的操作： <blockquote> store.dispatch（actionCreator（））; <br> store.dispatch（{type：&#39;LOGIN&#39;}）; </blockquote></section>

## Instructions
<section id="instructions">代码编辑器中的Redux存储具有初始化状态，该状态是包含当前设置为<code>false</code>的<code>login</code>属性的对象。还有一个名为<code>loginAction()</code>的动作创建器，它返回<code>LOGIN</code>类型的动作。通过调用<code>dispatch</code>方法将<code>LOGIN</code>操作发送到Redux存储，并传入<code>loginAction()</code>创建的操作。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 调用函数<code>loginAction</code>应该返回一个对象，其<code>type</code>属性设置为字符串<code>LOGIN</code> 。
    testString: assert(loginAction().type === 'LOGIN');
  - text: 应使用属性<code>login</code>设置为<code>false</code>的对象初始化存储。
    testString: assert(store.getState().login === false);
  - text: <code>store.dispatch()</code>方法应该用于调度<code>LOGIN</code>类型的操作。
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

// Dispatch the action here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
