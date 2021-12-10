---
id: 5a24c314108439a4d4036153
title: Реєстрація слухача Сховища
challengeType: 6
forumTopicId: 301446
dashedName: register-a-store-listener
---

# --description--

Інший метод, до якого ви маєте доступ на сховищі Redux `store` це `store.subscribe()`. Він дозволяє прив'язати функції слухача до сховища, які викликаються коли дія відбувається у сховищі. Одне просте використання цього методу це прив'язка функції до сховища, що просто записує повідомлення кожен раз, коли дія отримується і сховище оновлюється.

# --instructions--

Напишіть функцію зворотного зв'язку, яка збільшує глобальну змінну `count` кожен раз коли сховище отримує дію, і передайте цю функцію в методі `store.subscribe()`. Ви побачите, що `store.dispatch()` викликається три рази підряд, кожен раз безпосереднього проходячи в об'єкт дії. Спостерігайте вихідні дані консолі під час відправлення дії, щоб побачити оновлення які відбуваються.

# --hints--

Відправлення дії `ADD` до сховище має збільшити стан на `1`.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch({ type: 'ADD' });
    const newState = store.getState();
    return newState === initialState + 1;
  })()
);
```

Використовуючи `store.subscribe` має бути функція слухача прив'язна до сховища.

```js
(getUserInput) => assert(getUserInput('index').match(/store\s*\.\s*subscribe\(/gm));
```

Дія `store.subscribe` має отримувати функцію.

```js
(getUserInput) => assert(getUserInput('index').match(/(\s*function\s*)|(\s*\(\s*\)\s*=>)/gm)) 
```

Зворотний виклик до `store.subscribe` повинен також збільшити глобальну змінну `count`, оскільки сховище оновлюється.

```js
assert(store.getState() === count);
```

# --seed--

## --before-user-code--

```js
count = 0;
```

## --seed-contents--

```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line

// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
```

# --solutions--

```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
 let count = 0;
// Change code below this line

store.subscribe( () =>
 {
 count++;
 }
);

// Change code above this line

store.dispatch({type: ADD});
store.dispatch({type: ADD});
store.dispatch({type: ADD});
```
