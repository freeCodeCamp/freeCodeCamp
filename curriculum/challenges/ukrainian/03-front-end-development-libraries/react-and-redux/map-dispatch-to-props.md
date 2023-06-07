---
id: 5a24c314108439a4d4036146
title: Перетворіть дані Dispatch в Props
challengeType: 6
forumTopicId: 301432
dashedName: map-dispatch-to-props
---

# --description--

Функція `mapDispatchToProps()` використовується для забезпечення певних авторів дій для ваших компонентів React, щоб вони могли відправляти дії за рахунок сховища Redux. Вона схожа по структурі на функцію `mapStateToProps()`, яку ви написали в останньому завданні. Вона повертає об'єкт, який зіставляє дії відправлення з назвами параметрів, які стають компонентами `props`. Тим не менш, замість того, щоб повертати частину `state`, кожен параметр повертає функцію, що викликає `dispatch` з творцем дії та будь-якими відповідними данними дії. Ви маєте доступ до `dispatch`, тому що він передається в `mapDispatchToProps()` як параметр, коли ви визначаєте функцію, так само, як ви пройшли від `state` до `mapStateToProps()`. По секрету, React Redux використовує Redux `store.dispatch()` для проведення цих відправлень за допомогою `mapDispatchToProps()`. Це схоже на те, як він використовує `store.subscribe()` для компонентів, зіставлених на `state`.

Наприклад, у вас є творець дій `loginUser()`, який приймає `username`, як корисну дію. Об'єкт, повернений з `mapDispatchToProps()` для цього творця дій виглядатиме приблизно так:

```jsx
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```

# --instructions--

Редактор коду надає творця дії, який називається `addMessage()`. Запишіть функцію `mapDispatchToProps()`, яка приймає `dispatch` як аргумент, а потім повертає об'єкт. Об'єкт повинен мати встановлену власність `submitNewMessage` на функцію відправлення, яка приймає параметр додавання для нового повідомлення, щоб надіслати `addMessage()`.

# --hints--

`addMessage` повинен повертати об'єкт за допомогою ключів `type` та `message`.

```js
assert(
  (function () {
    const addMessageTest = addMessage();
    return (
      addMessageTest.hasOwnProperty('type') &&
      addMessageTest.hasOwnProperty('message')
    );
  })()
);
```

`mapDispatchToProps` має бути функцією.

```js
assert(typeof mapDispatchToProps === 'function');
```

`mapDispatchToProps` повинен повертати об'єкт.

```js
assert(typeof mapDispatchToProps() === 'object');
```

Надсилання `addMessage` разом з `submitNewMessage` від `mapDispatchToProps` повинне повернути повідомлення до функції відправлення.

```js
assert(
  (function () {
    let testAction;
    const dispatch = (fn) => {
      testAction = fn;
    };
    let dispatchFn = mapDispatchToProps(dispatch);
    dispatchFn.submitNewMessage('__TEST__MESSAGE__');
    return (
      testAction.type === 'ADD' && testAction.message === '__TEST__MESSAGE__'
    );
  })()
);
```

# --seed--

## --seed-contents--

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line
```

# --solutions--

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message));
    }
  }
};
```
