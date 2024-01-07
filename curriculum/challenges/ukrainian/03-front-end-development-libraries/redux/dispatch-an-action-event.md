---
id: 5a24c314108439a4d403614f
title: Відправте подію дії
challengeType: 6
forumTopicId: 301442
dashedName: dispatch-an-action-event
---

# --description--

Метод `dispatch` використовують для відправлення дій до сховища Redux. Виклик `store.dispatch()` і передача значення, повернутого від автора дії, відправляє дію назад у сховище.

Згадайте, що автори дій повертають об’єкт з властивістю типу, яка вказує тип дії, що відбулася. Потім метод відправляє об’єкт дії до сховища Redux. На основі прикладу з попереднього завдання, наступні рядки є еквівалентними, і обидва відправляють дію типу `LOGIN`:

```js
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

# --instructions--

Сховище Redux у редакторі коду має ініціалізований стан, де об’єкт містить властивість `login` з поточним значенням `false`. Існує також автор дії під назвою `loginAction()`, що повертає дію типу `LOGIN`. Відправте дію `LOGIN` до сховища Redux, викликавши метод `dispatch`, і передайте дію, яку створила `loginAction()`.

# --hints--

Виклик функції `loginAction` має повернути об’єкт з властивістю `type` зі значенням рядка `LOGIN`.

```js
assert(loginAction().type === 'LOGIN');
```

Сховище має бути ініціалізованим об’єктом, що має властивість `login` зі значенням `false`.

```js
assert(store.getState().login === false);
```

Використайте метод `store.dispatch()`, щоб відправити дію типу `LOGIN`.

```js
(getUserInput) =>
  assert(
    (function () {
      let noWhiteSpace = getUserInput('index').replace(/\s/g, '');
      return (
        noWhiteSpace.includes('store.dispatch(loginAction())') ||
        noWhiteSpace.includes("store.dispatch({type: 'LOGIN'})") === true
      );
    })()
  );
```

# --seed--

## --seed-contents--

```js
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

# --solutions--

```js
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction());
```
