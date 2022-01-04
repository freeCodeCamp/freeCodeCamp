---
id: 5a24c314108439a4d403614f
title: Відправлення події дії
challengeType: 6
forumTopicId: 301442
dashedName: dispatch-an-action-event
---

# --description--

Метод `dispatch` це те, що ви використовуєте для відправлення дій до сховища Redux. Виклик `store.dispatch()` і передача значення, повернутого від виконавця дії, відправляє дію назад у сховище.

Згадайте що виконавці дій повертають об'єкт з властивістю типу, яка вказує дію, що відбулася. Тоді метод відправляє об'єкт дії до сховища Redux. На підставі прикладу з попереднього завдання, наступні рядки є еквівалентними, і обидва відправляють дію типу `LOGIN`:

```js
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

# --instructions--

Сховище Redux у редакторі коду має ініціалізований стан, де об'єкт містить властивість `login`, яка в даний момент встановлена на `false`. Існує також виконавець дії з назвою `loginAction()`, що повертає дію типу `LOGIN`. Відправте дію `LOGIN` до сховища Redux шляхом виклику методу `dispatch`, і передайте в дію створену `loginAction()`.

# --hints--

Виклик функції `loginAction` повинен повернути об'єкт з набором параметрів `type` до рядку `LOGIN`.

```js
assert(loginAction().type === 'LOGIN');
```

Сховище має бути ініціалізованим з об'єктом, що має параметр `login` встановлений на `false`.

```js
assert(store.getState().login === false);
```

Метод `store.dispatch()` використовується для відправлення дії типу `LOGIN`.

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
