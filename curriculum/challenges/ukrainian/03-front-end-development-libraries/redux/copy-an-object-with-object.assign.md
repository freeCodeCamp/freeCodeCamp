---
id: 5a24c314108439a4d403615b
title: Копіювання об'єкта за допомогою функції Object.assign
challengeType: 6
forumTopicId: 301437
dashedName: copy-an-object-with-object-assign
---

# --description--

Останні кілька завдань стосувалися роботи з масивами, проте є способи допомогти забезпечити незмінність стану, коли стан є також `object`. Корисним інструментом для роботи з об'єктами є функція `Object.assign()`. Функція `Object.assign()` бере цільовий об'єкт та вихідні об'єкти та призначає властивості вихідних об'єктів цільовим. Будь-які властивості, що збігаються, перезаписуються властивостями у вихідних об’єктах. Це поводження об'єкта зазвичай використовується задля створення поверхневих копій об'єктів, що здійснюється за допомогою передачі порожніх об'єктів у ролі першого аргумента, за яким слідує об'єкт(-и), які ви хочете зкопіювати. Наприклад:

```js
const newObject = Object.assign({}, obj1, obj2);
```

Це створює `newObject` як новий `object`, що містить властивості, які вже існують у `obj1` та `obj2`.

# --instructions--

Стан та дії Redux були змінені для обробки `object` для `state`. Відредагуйте код для повернення нового `state` об'єкта для дій з типом `ONLINE`, який встановлює властивість `status` рядку `online`. Спробуйте використати `Object.assign()` для завершення завдання.

# --hints--

Сховище Redux має існувати та запускатися зі станом, еквівалентним об'єкту `defaultState`, заявленому у рядку 1.

```js
assert(
  (function () {
    const expectedState = {
      user: 'CamperBot',
      status: 'offline',
      friends: '732,982',
      community: 'freeCodeCamp'
    };
    const initialState = store.getState();
    return DeepEqual(expectedState, initialState);
  })()
);
```

`wakeUp` та `immutableReducer` - обидві мають бути функціями.

```js
assert(typeof wakeUp === 'function' && typeof immutableReducer === 'function');
```

Розміщення дії типу `ONLINE` має оновлювати властивості `status` у стані до `online`, проте НЕ може змінювати стан.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch({ type: 'ONLINE' });
    const finalState = store.getState();
    const expectedState = {
      user: 'CamperBot',
      status: 'online',
      friends: '732,982',
      community: 'freeCodeCamp'
    };
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

`Object.assign` слід використовувати для повернення нового стану.

```js
(getUserInput) => assert(getUserInput('index').includes('Object.assign'));
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      return Object.assign({}, state, {
        status: 'online'
      });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```
