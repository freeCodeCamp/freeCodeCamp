---
id: 5a24c314108439a4d4036146
title: Мапуйте відправлення до пропсів
challengeType: 6
forumTopicId: 301432
dashedName: map-dispatch-to-props
---

# --description--

Функцію `mapDispatchToProps()` використовують, щоб надати певних авторів дій до компонентів React, щоб вони змогли відправити дії до сховища Redux. За структурою вона схожа на функцію `mapStateToProps()`, яку ви написали в попередньому завданні. Вона повертає об’єкт, який мапує дії відправлення до назв властивостей, які стають пропсами компонентів. Однак, замість того, щоб повернути частину стану, кожна властивість повертає функцію, яка викликає `dispatch` з автором дії та будь-якими відповідними даними дії. Ви маєте доступ до `dispatch`, оскільки він передається до `mapDispatchToProps()` як параметр, коли ви визначаєте функцію, так само, як ви передали `state` до `mapStateToProps()`. React Redux використовує `store.dispatch()` від Redux, щоб провести відправлення з `mapDispatchToProps()`. Це схоже на те, як він використовує `store.subscribe()` для компонентів, мапованих до `state`.

Наприклад, у вас є автор дій `loginUser()`, який приймає `username` як корисне навантаження дії. Об’єкт, повернений від `mapDispatchToProps()`, для цього автора дій виглядатиме приблизно так:

```jsx
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```

# --instructions--

Редактор коду надає автора дії під назвою `addMessage()`. Напишіть функцію `mapDispatchToProps()`, яка приймає `dispatch` як аргумент, а потім повертає об’єкт. Об’єкт повинен мати властивість `submitNewMessage` зі значенням функції відправлення, яка приймає параметр для додавання нового повідомлення, коли відправляє `addMessage()`.

# --hints--

`addMessage` має повернути об’єкт з ключами `type` та `message`.

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

`mapDispatchToProps` має повернути об’єкт.

```js
assert(typeof mapDispatchToProps() === 'object');
```

Відправлення `addMessage` з `submitNewMessage` від `mapDispatchToProps` має повернути повідомлення до функції відправлення.

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
