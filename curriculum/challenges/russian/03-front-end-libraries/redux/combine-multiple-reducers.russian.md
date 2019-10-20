---
id: 5a24c314108439a4d4036154
title: Combine Multiple Reducers
challengeType: 6
isRequired: false
forumTopicId: 301436
localeTitle: Объединение нескольких редукторов
---

## Description
<section id='description'>
Когда состояние вашего приложения начинает становиться более сложным, может возникнуть соблазн разделить состояние на несколько частей. Вместо этого запомните первый принцип Redux: все состояние приложения хранится в одном объекте состояния в хранилище. Поэтому Redux предоставляет композицию редукторов как решение для сложной модели состояния. Вы определяете несколько редукторов для обработки разных частей состояния вашего приложения, а затем объединяете эти редукторы в один корневой редуктор. Корневой редуктор затем передается в метод Redux <code>createStore()</code> . Чтобы объединить несколько редукторов вместе, в Redux есть метод <code>combineReducers()</code> . Этот метод принимает объект как аргумент, в котором вы определяете свойства, которые связывают ключи с конкретными функциями редуктора. Имя, которое вы задаёте ключам, будет использоваться Redux как имя для связанной части состояния. Как правило, хорошей практикой является создание редуктора для каждой части состояния приложения, когда они являются особенными или уникальными в некотором роде. Например, в приложении для заметок с аутентификацией пользователя один редуктор может обрабатывать аутентификацию, а другой - текст и заметки, которые пользователь отправляет. Для такого приложения мы можем написать метод <code>combineReducers()</code> следующим образом: <blockquote> const rootReducer = Redux.combineReducers ({ <br> auth: authenticationReducer, <br> notes: notesReducer <br> }); </blockquote> Теперь ключ <code>notes</code> будет содержать все состояние, связанное с нашими заметками и обрабатываемое нашим <code>notesReducer</code> . Так можно создать несколько редукторов для управления более сложным состоянием приложения. В этом примере состояние, находящееся в хранилище Redux, будет тогда единственным объектом, содержащим свойства <code>auth</code> и <code>notes</code> .
</section>

## Instructions
<section id='instructions'>
В редакторе кода заданы функции <code>counterReducer()</code> и <code>authReducer()</code> , а также хранилище Redux. Завершите написание функции <code>rootReducer()</code> , используя <code>Redux.combineReducers()</code> . Назначьте <code>counterReducer</code> ключу с именем <code>count</code> и <code>authReducer</code> - ключу с именем <code>auth</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>counterReducer</code> should increment and decrement the <code>state</code>.
    testString: 'assert((function() { const initalState = store.getState().count; store.dispatch({type: INCREMENT}); store.dispatch({type: INCREMENT}); const firstState = store.getState().count; store.dispatch({type: DECREMENT}); const secondState = store.getState().count; return firstState === initalState + 2 && secondState === firstState - 1  })());'
  - text: The <code>authReducer</code> should toggle the <code>state</code> of <code>authenticated</code> between <code>true</code> and <code>false</code>.
    testString: 'assert((function() {  store.dispatch({type: LOGIN}); const loggedIn = store.getState().auth.authenticated; store.dispatch({type: LOGOUT}); const loggedOut = store.getState().auth.authenticated; return loggedIn === true && loggedOut === false  })());'
  - text: 'The store <code>state</code> should have two keys: <code>count</code>, which holds a number, and <code>auth</code>, which holds an object. The <code>auth</code> object should have a property of <code>authenticated</code>, which holds a boolean.'
    testString: assert((function() { const state = store.getState(); return typeof state.auth === 'object' && typeof state.auth.authenticated === 'boolean' && typeof state.count === 'number' })());
  - text: The <code>rootReducer</code> should be a function that combines the <code>counterReducer</code> and the <code>authReducer</code>.
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

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

const store = Redux.createStore(rootReducer);
```

</section>
