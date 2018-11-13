---
id: 5a24c314108439a4d403614f
title: Dispatch an Action Event
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Отправка события
---

## Description
<section id="description"> Метод <code>dispatch</code> - это то, что вы используете для отправки действий в хранилище Redux. Вызов <code>store.dispatch()</code> со значением, которое получено из создателя действия, посылает действие обратно в хранилище. Напомним, что создатель действия возвращает объект со свойством type, который определяет произошедшее действие. Потом метод отправляет объект действия в хранилище Redux. Основываясь на примере из предыдущего упражнения, следующие строки эквивалентны, и обе отправляют действие типа <code>LOGIN</code> : <blockquote>store.dispatch(actionCreator()); <br> store.dispatch({ type: 'LOGIN' });</blockquote> </section>

## Instructions
<section id="instructions"> В редакторе кода в хранилище Redux инициализировано состояние в виде объекта со свойством <code>login</code> , у которого задано значение <code>false</code> . Также объявлен создатель действия <code>loginAction()</code> , который возвращает действие типа <code>LOGIN</code> . Отправьте действие <code>LOGIN</code> в хранилище Redux, вызвав метод <code>dispatch</code> и передайте ему действие, созданное функцией <code>loginAction()</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Вызов функции <code>loginAction</code> должен возвращать объект со свойством <code>type</code> , у которого установлено значение <code>LOGIN</code> .
    testString: 'assert(loginAction().type === "LOGIN", "Calling the function <code>loginAction</code> should return an object with <code>type</code> property set to the string <code>LOGIN</code>.");'
  - text: Хранилище должно быть инициализировано объектом с идентификатором <code>login</code> , установленным в значение <code>false</code> .
    testString: 'assert(store.getState().login === false, "The store should be initialized with an object with property <code>login</code> set to <code>false</code>.");'
  - text: Метод <code>store.dispatch()</code> должен использоваться для отправки действия типа <code>LOGIN</code> .
    testString: 'getUserInput => assert((function() {  let noWhiteSpace = getUserInput("index").replace(/\s/g,""); return noWhiteSpace.includes("store.dispatch(loginAction())") || noWhiteSpace.includes("store.dispatch({type: \"LOGIN\"})") === true })(), "The <code>store.dispatch()</code> method should be used to dispatch an action of type <code>LOGIN</code>.");'

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

// Отправьте действие здесь:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
