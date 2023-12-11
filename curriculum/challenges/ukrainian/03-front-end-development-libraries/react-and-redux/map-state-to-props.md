---
id: 5a24c314108439a4d4036145
title: Мапуйте стан до пропсів
challengeType: 6
forumTopicId: 301433
dashedName: map-state-to-props
---

# --description--

Компонент `Provider` дозволяє надати `state` та `dispatch` до компонентів React, але ви маєте вказати потрібні стан та дії. Таким чином ви переконаєтесь, що кожен компонент має доступ лише до потрібного стану. Це виконують, створюючи дві функції: `mapStateToProps()` та `mapDispatchToProps()`.

У цих функціях ви оголошуєте, до яких частин стану ви хочете отримати доступ і яких авторів дій вам потрібно надіслати. Як тільки ці функції будуть на місці, ви дізнаєтесь, як за допомогою методу React Redux `connect` приєднати їх до компонентів в іншому завданні.

**Примітка:** React Redux використовує метод `store.subscribe()` за кулісами, щоб імплементувати `mapStateToProps()`.

# --instructions--

Створіть функцію `mapStateToProps()`. Ця функція має приймати `state` як аргумент, а потім повернути об’єкт, який мапує цей стан з назвами певних властивостей. Ці властивості стають доступними для компонента за допомогою `props`. Оскільки приклад містить весь стан застосунку в одному масиві, ви можете передати цілий стан до компонента. Створіть властивість `messages` в об’єкті, який повертається, і встановіть його на `state`.

# --hints--

Константа `state` має бути порожнім масивом.

```js
assert(Array.isArray(state) && state.length === 0);
```

`mapStateToProps` має бути функцією.

```js
assert(typeof mapStateToProps === 'function');
```

`mapStateToProps` має повернути об’єкт.

```js
assert(typeof mapStateToProps() === 'object');
```

Передача масиву як стан до `mapStateToProps` має повернути цей масив, призначеним до ключа `messages`.

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
