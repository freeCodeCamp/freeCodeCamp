---
id: 5a24c314108439a4d4036151
title: Use a Switch Statement to Handle Multiple Actions
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Используйте инструкцию Switch для обработки нескольких действий
---

## Description
<section id="description"> Вы можете сказать магазину Redux, как обрабатывать несколько типов действий. Скажите, что вы управляете аутентификацией пользователя в своем хранилище Redux. Вы хотите иметь представление состояния, когда пользователи вошли в систему и когда они вышли из системы. Вы представляете это с единственным объектом состояния с <code>authenticated</code> свойством. Вам также нужны создатели действий, которые создают действия, соответствующие логину пользователя и пользователю, а также сами объекты действий. </section>

## Instructions
<section id="instructions"> В редакторе кода есть создатели хранилища, действия и действия. Заполните функцию <code>reducer</code> для обработки нескольких действий аутентификации. Используйте оператор <code>switch</code> JavaScript в <code>reducer</code> чтобы реагировать на различные события действий. Это стандартный образец при записи редукторов Redux. Оператор switch должен переключать <code>action.type</code> и возвращать соответствующее состояние аутентификации. <strong>Примечание.</strong> На этом этапе не беспокойтесь о неизменности состояния, поскольку в этом примере оно мало и просто. Для каждого действия вы можете вернуть новый объект - например <code>{authenticated: true}</code> . Кроме того, не забудьте написать случай по <code>default</code> в вашем операторе switch, который возвращает текущее <code>state</code> . Это важно, потому что, как только ваше приложение имеет несколько редукторов, все они запускаются в любое время, когда происходит отправка действий, даже если действие не связано с этим редуктором. В таком случае вы хотите убедиться, что вы вернете текущее <code>state</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Вызов функции <code>loginUser</code> должен вернуть объект с свойством type, установленным в строку <code>LOGIN</code> .'
    testString: 'assert(loginUser().type === "LOGIN", "Calling the function <code>loginUser</code> should return an object with type property set to the string <code>LOGIN</code>.");'
  - text: 'Вызов функции <code>logoutUser</code> должен вернуть объект с свойством типа, установленным в строку <code>LOGOUT</code> .'
    testString: 'assert(logoutUser().type === "LOGOUT", "Calling the function <code>logoutUser</code> should return an object with type property set to the string <code>LOGOUT</code>.");'
  - text: 'Магазин должен быть инициализирован объектом с <code>authenticated</code> свойством, установленным на <code>false</code> .'
    testString: 'assert(store.getState().authenticated === false, "The store should be initialized with an object with an <code>authenticated</code> property set to <code>false</code>.");'
  - text: Dispatching <code>loginUser</code> должен обновить <code>authenticated</code> свойство в состоянии хранилища до <code>true</code> .
    testString: 'assert((function() {  const initialState = store.getState(); store.dispatch(loginUser()); const afterLogin = store.getState(); return initialState.authenticated === false && afterLogin.authenticated === true })(), "Dispatching <code>loginUser</code> should update the <code>authenticated</code> property in the store state to <code>true</code>.");'
  - text: Dispatching <code>logoutUser</code> должен обновить <code>authenticated</code> свойство в состоянии хранилища до <code>false</code> .
    testString: 'assert((function() {  store.dispatch(loginUser()); const loggedIn = store.getState(); store.dispatch(logoutUser()); const afterLogout = store.getState(); return loggedIn.authenticated === true && afterLogout.authenticated === false  })(), "Dispatching <code>logoutUser</code> should update the <code>authenticated</code> property in the store state to <code>false</code>.");'
  - text: Функция <code>authReducer</code> должна обрабатывать несколько типов действий с помощью оператора <code>switch</code> .
    testString: 'getUserInput => assert( getUserInput("index").toString().includes("switch") && getUserInput("index").toString().includes("case") && getUserInput("index").toString().includes("default"), "The <code>authReducer</code> function should handle multiple action types with a <code>switch</code> statement.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // change code below this line

  // change code above this line
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
