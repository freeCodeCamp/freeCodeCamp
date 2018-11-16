---
id: 5a24c314108439a4d4036152
title: Use const for Action Types
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Использование констант для типов действий
---

## Description
<section id="description"> Общей практикой при работе с Redux является присваивать типы действий константам, а затем ссылаться на эти константы везде, где они используются. Вы можете реорганизовать код, с которым работаете, чтобы описать типы действий константами <code>const</code> . </section>

## Instructions
<section id="instructions"> Объявите <code>LOGIN</code> и <code>LOGOUT</code> как константы <code>const</code> и присвойте им строковые значения <code>&#39;LOGIN&#39;</code> и <code>&#39;LOGOUT&#39;</code> соответственно. Затем отредактируйте <code>authReducer()</code> и создателей действия, чтобы они ссылались на эти константы вместо строковых значений. <strong>Примечание.</strong> Обычно принято писать константы прописными буквами, и это стандартная практика в Redux. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Вызов функции <code>loginUser</code> должен вернуть объект со свойством <code>type</code> , установленным в строку <code>LOGIN</code> .
    testString: 'assert(loginUser().type === "LOGIN", "Calling the function <code>loginUser</code> should return an object with <code>type</code> property set to the string <code>LOGIN</code>.");'
  - text: Вызов функции <code>logoutUser</code> должен вернуть объект со свойством <code>type</code> , установленным в строку <code>LOGOUT</code> .
    testString: 'assert(logoutUser().type === "LOGOUT", "Calling the function <code>logoutUser</code> should return an object with <code>type</code> property set to the string <code>LOGOUT</code>.");'
  - text: Хранилище должно быть инициализировано объектом с идентификатором <code>login</code> , установленным в значение <code>false</code> .
    testString: 'assert(store.getState().authenticated === false, "The store should be initialized with an object with property <code>login</code> set to <code>false</code>.");'
  - text: Отправка <code>loginUser</code> должна обновить свойство <code>login</code> в состоянии хранилища до <code>true</code> .
    testString: 'assert((function() {  const initialState = store.getState(); store.dispatch(loginUser()); const afterLogin = store.getState(); return initialState.authenticated === false && afterLogin.authenticated === true })(), "Dispatching <code>loginUser</code> should update the <code>login</code> property in the store state to <code>true</code>.");'
  - text: Отправка <code>logoutUser</code> должна обновить свойство <code>login</code> в состоянии хранилища до <code>false</code> .
    testString: 'assert((function() {  store.dispatch(loginUser()); const loggedIn = store.getState(); store.dispatch(logoutUser()); const afterLogout = store.getState(); return loggedIn.authenticated === true && afterLogout.authenticated === false })(), "Dispatching <code>logoutUser</code> should update the <code>login</code> property in the store state to <code>false</code>.");'
  - text: Функция <code>authReducer</code> должна обрабатывать разные типы действий с помощью оператора switch.
    testString: 'getUserInput => assert((function() { return typeof authReducer === "function" && getUserInput("index").toString().includes("switch") && getUserInput("index").toString().includes("case") && getUserInput("index").toString().includes("default") })(), "The <code>authReducer</code> function should handle multiple action types with a switch statement.");'
  - text: <code>LOGIN</code> и <code>LOGOUT</code> должны быть объявлены как значения <code>const</code> и должны быть проинициализированы строками <code>LOGIN</code> и <code>LOGOUT</code> .
    testString: 'getUserInput => assert((function() {  const noWhiteSpace = getUserInput("index").toString().replace(/\s/g,""); return (noWhiteSpace.includes("constLOGIN=\"LOGIN\"") || noWhiteSpace.includes("constLOGIN="LOGIN"")) && (noWhiteSpace.includes("constLOGOUT=\"LOGOUT\"") || noWhiteSpace.includes("constLOGOUT="LOGOUT"")) })(), "<code>LOGIN</code> and <code>LOGOUT</code> should be declared as <code>const</code> values and should be assigned strings of <code>LOGIN</code>and <code>LOGOUT</code>.");'
  - text: Создатели действий и редуктор должны ссылаться на константы <code>LOGIN</code> и <code>LOGOUT</code> .
    testString: 'getUserInput => assert((function() { const noWhiteSpace = getUserInput("index").toString().replace(/\s/g,""); return noWhiteSpace.includes("caseLOGIN:") && noWhiteSpace.includes("caseLOGOUT:") && noWhiteSpace.includes("type:LOGIN") && noWhiteSpace.includes("type:LOGOUT") })(), "The action creators and the reducer should reference the <code>LOGIN</code> and <code>LOGOUT</code> constants.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// измените код ниже этой линии

// измените код выше этой линии

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case 'LOGIN':
      return {
        authenticated: true
      }

    case 'LOGOUT':
      return {
        authenticated: false
      }

    default:
      return state;

  }

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
</section>
