---
id: 5a24c314108439a4d403614f
title: Dispatch an Action Event
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Отправка события
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: Вызов функции <code>loginAction</code> должен возвращать объект с свойством <code>type</code> установленным в строку <code>LOGIN</code> .
    testString: 'assert(loginAction().type === "LOGIN", "Calling the function <code>loginAction</code> should return an object with <code>type</code> property set to the string <code>LOGIN</code>.");'
  - text: Магазин должен быть инициализирован объектом с идентификатором <code>login</code> установленным в значение <code>false</code> .
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

// Dispatch the action here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
