---
id: 5a24c314108439a4d4036151
title: Use a Switch Statement to Handle Multiple Actions
challengeType: 6
isRequired: false
forumTopicId: 301449
localeTitle: Использование инструкции Switch для обработки нескольких действий
---

## Description
<section id='description'>
Вы можете сказать хранилищу Redux, как обрабатывать несколько типов действий. Предположим, что вы управляете аутентификацией пользователя в своем хранилище Redux. Вы хотите,чтобы у вас было состояние, показывающее когда пользователи вошли в систему и когда они вышли из системы. Вы представляете это единственным объектом состояния со свойством <code>authenticated</code>. Вам также нужны создатели действий, которые создают действия, отвечающие за вход пользователя и за выход пользователя из системы, а также сами объекты действий.
</section>

## Instructions
<section id='instructions'>
В редакторе кода для вас уже описаны хранилище, действия и создатели действия. Заполните функцию <code>reducer</code> для обработки различных действий аутентификации. Используйте JavaScript оператор <code>switch</code> в <code>reducer</code> чтобы реагировать на различные события действий. Это стандартный паттерн при описание редукторов Redux. Оператор switch должен переключаться между <code>action.type</code> и возвращать соответствующее состояние аутентификации. <strong>Примечание.</strong> На этом этапе не беспокойтесь о неизменности состояния, поскольку это маленький и простой пример. Для каждого действия вы можете вернуть новый объект - например, <code>{authenticated: true}</code> . Кроме того, не забудьте написать случай по умолчанию <code>default</code> в вашем операторе switch, который возвращает текущее <code>state</code> . Это важно, потому что когда в вашем приложении несколько редукторов, все они запускаются, когда происходит отправка действий, даже если действие не связано с этим редуктором. В таком случае вы хотите убедиться, что вы вернете текущее <code>state</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Calling the function <code>loginUser</code> should return an object with type property set to the string <code>LOGIN</code>.
    testString: assert(loginUser().type === 'LOGIN');
  - text: Calling the function <code>logoutUser</code> should return an object with type property set to the string <code>LOGOUT</code>.
    testString: assert(logoutUser().type === 'LOGOUT');
  - text: The store should be initialized with an object with an <code>authenticated</code> property set to <code>false</code>.
    testString: assert(store.getState().authenticated === false);
  - text: Dispatching <code>loginUser</code> should update the <code>authenticated</code> property in the store state to <code>true</code>.
    testString: assert((function() {  const initialState = store.getState(); store.dispatch(loginUser()); const afterLogin = store.getState(); return initialState.authenticated === false && afterLogin.authenticated === true })());
  - text: Dispatching <code>logoutUser</code> should update the <code>authenticated</code> property in the store state to <code>false</code>.
    testString: assert((function() {  store.dispatch(loginUser()); const loggedIn = store.getState(); store.dispatch(logoutUser()); const afterLogout = store.getState(); return loggedIn.authenticated === true && afterLogout.authenticated === false  })());
  - text: The <code>authReducer</code> function should handle multiple action types with a <code>switch</code> statement.
    testString: getUserInput => assert( getUserInput('index').toString().includes('switch') && getUserInput('index').toString().includes('case') && getUserInput('index').toString().includes('default'));

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

```jsx
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

</section>
