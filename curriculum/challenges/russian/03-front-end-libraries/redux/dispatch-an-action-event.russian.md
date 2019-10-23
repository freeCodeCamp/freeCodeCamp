---
id: 5a24c314108439a4d403614f
title: Dispatch an Action Event
challengeType: 6
isRequired: false
forumTopicId: 301442
localeTitle: Отправка события
---

## Description
<section id='description'>
Метод <code>dispatch</code> - это то, что вы используете для отправки действий в хранилище Redux. Вызов <code>store.dispatch()</code> со значением, которое получено из создателя действия, посылает действие обратно в хранилище. Напомним, что создатель действия возвращает объект со свойством type, который определяет произошедшее действие. Потом метод отправляет объект действия в хранилище Redux. Основываясь на примере из предыдущего упражнения, следующие строки эквивалентны, и обе отправляют действие типа <code>LOGIN</code> : <blockquote>store.dispatch(actionCreator()); <br> store.dispatch({ type: 'LOGIN' });</blockquote>
</section>

## Instructions
<section id='instructions'>
В редакторе кода в хранилище Redux инициализировано состояние в виде объекта со свойством <code>login</code> , у которого задано значение <code>false</code> . Также объявлен создатель действия <code>loginAction()</code> , который возвращает действие типа <code>LOGIN</code> . Отправьте действие <code>LOGIN</code> в хранилище Redux, вызвав метод <code>dispatch</code> и передайте ему действие, созданное функцией <code>loginAction()</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Calling the function <code>loginAction</code> should return an object with <code>type</code> property set to the string <code>LOGIN</code>.
    testString: assert(loginAction().type === 'LOGIN');
  - text: The store should be initialized with an object with property <code>login</code> set to <code>false</code>.
    testString: assert(store.getState().login === false);
  - text: The <code>store.dispatch()</code> method should be used to dispatch an action of type <code>LOGIN</code>.
    testString: 'getUserInput => assert((function() {  let noWhiteSpace = getUserInput(''index'').replace(/\s/g,''''); return noWhiteSpace.includes(''store.dispatch(loginAction())'') || noWhiteSpace.includes(''store.dispatch({type: \''LOGIN\''})'') === true })());'

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
store.dispatch(loginAction());
```

</section>
