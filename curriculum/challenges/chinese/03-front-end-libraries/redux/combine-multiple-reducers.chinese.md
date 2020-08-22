---
id: 5a24c314108439a4d4036154
title: Combine Multiple Reducers
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 结合多个减速器
---

## Description
<section id="description">当您的应用程序的状态开始变得更加复杂时，可能很容易将状态分成多个部分。相反，请记住Redux的第一个原则：所有应用程序状态都保存在商店中的单个状态对象中。因此，Redux提供减速器组合作为复杂状态模型的解决方案。您可以定义多个reducers来处理应用程序状态的不同部分，然后将这些reducer组合成一个根reducer。然后将根reducer传递给Redux <code>createStore()</code>方法。为了让我们将多个reducer组合在一起，Redux提供了<code>combineReducers()</code>方法。此方法接受一个对象作为参数，您可以在其中定义将键与特定reducer函数关联的属性。 Redux将使用您为密钥指定的名称作为相关状态的名称。通常，当每个应用程序状态以某种方式不同或唯一时，为每个应用程序状态创建一个减速器是一个好习惯。例如，在具有用户身份验证的笔记记录应用程序中，一个reducer可以处理身份验证，而另一个reducer处理用户正在提交的文本和备注。对于这样的应用程序，我们可能会像这样编写<code>combineReducers()</code>方法： <blockquote> const rootReducer = Redux.combineReducers（{ <br> auth：authenticationReducer， <br>笔记：notesReducer <br> }）; </blockquote>现在，关键<code>notes</code>将包含与我们的注释相关联的所有状态，并由<code>notesReducer</code>处理。这就是如何组合多个reducers来管理更复杂的应用程序状态。在此示例中，Redux存储中保存的状态将是包含<code>auth</code>和<code>notes</code>属性的单个对象。 </section>

## Instructions
<section id="instructions">代码编辑器中提供了<code>authReducer()</code> <code>counterReducer()</code>和<code>authReducer()</code>函数以及Redux存储。使用<code>Redux.combineReducers()</code>方法完成<code>rootReducer()</code>函数的<code>Redux.combineReducers()</code> 。指定<code>counterReducer</code>一键叫<code>count</code>和<code>authReducer</code>一个叫关键<code>auth</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>counterReducer</code>应该递增和递减<code>state</code> 。
    testString: 'assert((function() { const initialState = store.getState().count; store.dispatch({type: INCREMENT}); store.dispatch({type: INCREMENT}); const firstState = store.getState().count; store.dispatch({type: DECREMENT}); const secondState = store.getState().count; return firstState === initialState + 2 && secondState === firstState - 1  })());'
  - text: <code>authReducer</code>应切换在<code>true</code>和<code>false</code>之间进行<code>authenticated</code>的<code>state</code> 。
    testString: 'assert((function() {  store.dispatch({type: LOGIN}); const loggedIn = store.getState().auth.authenticated; store.dispatch({type: LOGOUT}); const loggedOut = store.getState().auth.authenticated; return loggedIn === true && loggedOut === false  })());'
  - text: 存储<code>state</code>应该有两个键： <code>count</code> ，它包含一个数字， <code>auth</code> ，它包含一个对象。 <code>auth</code>对象应具有<code>authenticated</code>属性，该属性包含布尔值。
    testString: "assert((function() { const state = store.getState(); return typeof state.auth === 'object' && typeof state.auth.authenticated === 'boolean' && typeof state.count === 'number' })());"
  - text: 该<code>rootReducer</code>应该是结合了功能<code>counterReducer</code>和<code>authReducer</code> 。
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

const rootReducer = // define the root reducer here

const store = Redux.createStore(rootReducer);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
