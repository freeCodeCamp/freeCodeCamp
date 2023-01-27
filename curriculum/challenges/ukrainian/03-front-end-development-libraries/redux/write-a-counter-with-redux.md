---
id: 5a24c314108439a4d4036157
title: Створіть лічильник із Redux
challengeType: 6
forumTopicId: 301453
dashedName: write-a-counter-with-redux
---

# --description--

Тепер ви освоїли всі основні принципи Redux! Ви побачили як створювати дії та генератори дії, сховище Redux, як відправляти дії у сховище та як розробляти оновлення станів за допомогою чистих перетворювачів. Ви навіть побачили, як керувати складним станом за допомогою елементів перетворювача та обробляти асинхронні дії. Ці приклади є прості, але ці концепти є ключовими принципами Redux. Якщо ви їх добре розумієте, тоді ви вже готові розпочати створення власного додатка Redux. Наступні завдання охоплюють деякі деталі щодо незмінності `state`, але для початку ось огляд усього, що ви вивчили до цього часу.

# --instructions--

У цьому уроці ви створите простий лічильник із допомогою Redux з нуля. Основна частина надана в редакторі коду, але вам доведеться заповнити деталі! Використовуйте назви, що надаються, і визначте генератори дії `incAction` та `decAction`, типи дії `counterReducer()`, `INCREMENT` та `DECREMENT`, і зрештою `store` Redux. Після завершення ви зможете надіслати дії `INCREMENT` чи `DECREMENT` для того, щоб збільшити чи зменшити стан, який зберігається у `store`. Удачі вам у створенні першого додатку Redux!

# --hints--

Генератор дії `incAction` має повернути об'єкт дії з `type`, рівним значенню `INCREMENT`

```js
assert(incAction().type === INCREMENT);
```

Генератор дії `decAction` має повернути об'єкт дії з `type`, рівним значенню `DECREMENT`

```js
assert(decAction().type === DECREMENT);
```

Сховище Redux повинне ініціалізуватися із `state`, що дорівнює 0.

```js
assert(_store.getState() === 0);
```

Відправлення `incAction` у сховище Redux має збільшити `state` на 1.

```js
assert(
  (function () {
    const initialState = _store.getState();
    _store.dispatch(incAction());
    const incState = _store.getState();
    return initialState + 1 === incState;
  })()
);
```

Відправлення `decAction` у сховище Redux має зменшити `state` на 1.

```js
assert(
  (function () {
    const initialState = _store.getState();
    _store.dispatch(decAction());
    const decState = _store.getState();
    return initialState - 1 === decState;
  })()
);
```

`counterReducer` має бути функцією

```js
assert(typeof counterReducer === 'function');
```

# --seed--

## --seed-contents--

```js
const INCREMENT = null; // Define a constant for increment action types
const DECREMENT = null; // Define a constant for decrement action types

const counterReducer = null; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = null; // Define an action creator for incrementing

const decAction = null; // Define an action creator for decrementing

const store = null; // Define the Redux store here, passing in your reducers
```

## --after-user-code--

```js
const _store = Redux.createStore(counterReducer)
```

# --solutions--

```js
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

const incAction = () => {
  return {
    type: INCREMENT
  }
};

const decAction = () => {
  return {
    type: DECREMENT
  }
};

const store = Redux.createStore(counterReducer);
```
