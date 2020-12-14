---
id: 5a24c314108439a4d4036154
challengeType: 6
forumTopicId: 301436
title: 组合多个 Reduces
---

## Description
<section id='description'>
当你应用程序的状态开始变得越来越复杂时，将状态划分为多个部分可能是个更好的选择。相反，请记住 Redux 的第一个原则：所有应用程序状态都保存在 store 中的一个简单的 state 对象中。因此，Redux 提供 reducer 组合作为复杂状态模型的解决方案。定义多个 reducer 来处理应用程序状态的不同部分，然后将这些 reducer 组合成一个 root reducer。然后将 root reducer 传递给 Redux <code>createStore()</code>方法。
为了让我们将可以将多个 reducer 组合在一起，Redux 提供了<code>combineReducers()</code>方法。该方法接受一个对象作为参数，在该参数中定义一个将键与特定 reducer 函数关联的属性。Redux 将使用你给的键值作为关联状态的名称。
通常情况下，当它们在某种程度上是独一无二的，为每个应用程序的 state 创建一个减少器是一个很好的做法。例如，在一个带有用户身份验证的记笔记应用程序中，一个 reducer 可以处理身份验证而另一个处理用户提交的文本和注释。对于这样的应用程序，我们可能会编写<code>combineReducers()</code>方法，如下所示：

```js
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```

现在，<code>notes</code>键将包含与我们的注释相关联的所有状态，并由我们的<code>notesReducer</code>处理。这就是如何组合多个 reducer 来管理更复杂的应用程序状态，在此示例中，Redux store 中保存的状态将是一个包含<code>auth</code>和<code>notes</code>属性的简单对象。
</section>

## Instructions
<section id='instructions'>
代码编辑器中提供了<code>counterReducer()</code>和<code>authReducer()</code>函数以及 Redux store。使用<code>Redux.combineReducers()</code>方法编写完成<code>rootReducer()</code>函数。将<code>counterReducer</code>分配给一个叫做<code>count</code>的键，将<code>authReducer</code>分配给一个叫做<code>auth</code>的键。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>counterReducer</code>应该递增和递减<code>state</code>。
    testString: 'assert((function() { const initialState = store.getState().count; store.dispatch({type: INCREMENT}); store.dispatch({type: INCREMENT}); const firstState = store.getState().count; store.dispatch({type: DECREMENT}); const secondState = store.getState().count; return firstState === initialState + 2 && secondState === firstState - 1  })());'
  - text: <code>authenticated</code>的<code>state</code>值应该在<code>true</code>和<code>false</code>之间切换。
    testString: 'assert((function() {  store.dispatch({type: LOGIN}); const loggedIn = store.getState().auth.authenticated; store.dispatch({type: LOGOUT}); const loggedOut = store.getState().auth.authenticated; return loggedIn === true && loggedOut === false  })());'
  - text: store <code>state</code>应该有两个 key：一个是<code>count</code>，它包含一个数字。另一个<code>auth</code>，它包含一个对象。<code>auth</code>对象应该具有<code>authenticated</code>的属性，该属性的值应该为布尔值。
    testString: "assert((function() { const state = store.getState(); return typeof state.auth === 'object' && typeof state.auth.authenticated === 'boolean' && typeof state.count === 'number' })());"
  - text: <code>rootReducer</code>应该是一个合并了<code>counterReducer</code>和<code>authReducer</code>的函数。
    testString: getUserInput => assert((function() {  const noWhiteSpace = getUserInput('index').replace(/\s/g,''); return typeof rootReducer === 'function' && noWhiteSpace.includes('Redux.combineReducers')  })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
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

const rootReducer = // 在这里定义 root reducer

const store = Redux.createStore(rootReducer);

```

</div>



</section>

## Solution
<section id='solution'>


```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
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

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

const store = Redux.createStore(rootReducer);
```

</section>
