---
id: 5a24c314108439a4d4036150
title: Handle an Action in the Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 处理商店中的操作
---

## Description
<section id="description">创建并分派操作后，Redux存储需要知道如何响应该操作。这是<code>reducer</code>功能的工作。 Redux中的Reducers负责响应操作而进行的状态修改。 <code>reducer</code>将<code>state</code>和<code>action</code>作为参数，并且它总是返回一个新<code>state</code> 。重要的是要看到这是减速器的<strong>唯一</strong>作用。它没有任何副作用 - 它从不调用API端点，它从来没有任何隐藏的意外。 reducer只是一个纯函数，它接受状态和动作，然后返回新状态。 Redux的另一个关键原则是<code>state</code>是只读的。换句话说， <code>reducer</code>函数必须<strong>始终</strong>返回一个新的<code>state</code>副本，而不是直接修改状态。 Redux不强制执行状态不变性，但是，您负责在reducer函数的代码中强制执行它。你将在以后的挑战中练习这一点。 </section>

## Instructions
<section id="instructions">代码编辑器具有前面的示例以及为您启动<code>reducer</code>功能。填写<code>reducer</code>函数的主体，这样如果它收到<code>&#39;LOGIN&#39;</code>类型的动作，它将返回一个<code>login</code>设置为<code>true</code>的状态对象。否则，它返回当前<code>state</code> 。请注意，当前<code>state</code>和调度的<code>action</code>将传递给reducer，因此您可以使用<code>action.type</code>直接访问操作的类型。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 调用函数<code>loginAction</code>应该返回一个对象，其type属性设置为字符串<code>LOGIN</code> 。
    testString: assert(loginAction().type === 'LOGIN');
  - text: 应使用属性<code>login</code>设置为<code>false</code>的对象初始化存储。
    testString: assert(store.getState().login === false);
  - text: 调度<code>loginAction</code>应该将store状态中的<code>login</code>属性更新为<code>true</code> 。
    testString: assert((function() {  const initialState = store.getState(); store.dispatch(loginAction()); const afterState = store.getState(); return initialState.login === false && afterState.login === true })());
  - text: 如果操作不是<code>LOGIN</code>类型，则存储应返回当前状态。
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
  // change code below this line

  // change code above this line
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
// solution required
```

/section>
