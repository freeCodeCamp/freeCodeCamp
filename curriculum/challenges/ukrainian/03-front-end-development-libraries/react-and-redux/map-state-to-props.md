---
id: 5a24c314108439a4d4036145
title: Схема розподілу State (стану) в Props
challengeType: 6
forumTopicId: 301433
dashedName: map-state-to-props
---

# --description--

The `Provider` дозволяє забезпечення надходження `state` і `dispatch` до компонентів React, але ви повинні точно вказати, який state та дії ви хочете. Таким чином, ви переконаєтесь, що кожен компонент має доступ лише до state, який йому потрібен. Ви досягнете цього, створюючи дві функції: `mapStateToProps()` і `mapDispatchToProps()`.

У цих функціях ви декларуєте, до яких частин state ви хочете мати доступ і до яких авторів дій потрібно надіслати. Після того, як ці функції будуть встановлені, ви побачите, як за допомогою методу React Redux `connect` з'єднати їх зі своїми компонентами в іншому виклику.

**Note:**За межами React Redux використовується метод `store.subscribe()` для реалізації `mapStateToProps()`.

# --instructions--

Створіть функцію `mapStateToProps()`. Ця функція повинна приймати `state` в якості аргумента, а потім повертати об’єкт, який відображає цей стан з конкретними іменами властивостей. Ці властивості стають доступними для компонента за допомогою `props`. З того моменту коли в прикладі зберігається весь state програми в одному масиві, ви можете передати весь цей state своєму компоненту. Створіть властивість `messages` в об’єкті, який повертається, і встановіть для нього `state`.

# --hints--

The const `state` має бути порожнім масивом.

```js
assert(Array.isArray(state) && state.length === 0);
```

`mapStateToProps` має бути функцією.

```js
assert(typeof mapStateToProps === 'function');
```

`mapStateToProps` повинна повертатися як об'єкт.

```js
assert(typeof mapStateToProps() === 'object');
```

Передача масиву як state `mapStateToProps` має повернути цей масив, призначений ключу `messages`.

```js
assert(mapStateToProps(['messages']).messages.pop() === 'messages');
```

# --seed--

## --seed-contents--

```jsx
const state = [];

// Change code below this line
```

# --solutions--

```jsx
const state = [];

// Change code below this line

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};
```
