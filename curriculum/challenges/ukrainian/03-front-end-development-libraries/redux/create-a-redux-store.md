---
id: 5a24c314108439a4d403614b
title: Створіть сховище Redux
challengeType: 6
forumTopicId: 301439
dashedName: create-a-redux-store
---

# --description--

Redux — це фреймворк керування станами, який може використовуватися з низкою різних вебтехнологій, включно з React.

У Redux існує єдиний об’єкт стану, який відповідає за весь стан застосунку. Це означає, що якби ви мали застосунок React з десятьма компонентами, і кожен компонент мав би власний внутрішній стан, то весь стан застосунку визначався б єдиним об’єктом стану, розміщеному в сховищі Redux (`store`). Це перший важливий принцип, який варто розуміти під час вивчення Redux: сховище Redux — це єдине джерело даних, коли йдеться про стан застосунку.

Це також означає, що якщо у будь-який час будь-яка частина застосунку забажає оновити стан, то вона **повинна** зробити це через сховище Redux. Односпрямований потік даних дозволяє значно легше відстежувати управління станом в застосунку.

# --instructions--

Сховище Redux (`store`) є об’єктом, який містить та керує станом застосунку. В об’єкті Redux існує метод `createStore()`, який використовують для створення сховища Redux. Цей метод приймає функцію `reducer` як обов’язковий аргумент. Функцію `reducer` розглянуто в наступних завданнях, а зараз її вже визначено за вас. Вона просто приймає `state` як аргумент та повертає `state`.

Оголосіть змінну `store` та призначте її до методу `createStore()`, передавши `reducer` як аргумент.

**Примітка:** код в редакторі використовує синтаксис аргументів ES6 за замовчуванням, щоб ініціалізувати цей стан для утримання значення `5`. Якщо ви не знайомі з аргументами за замовчуванням, ви можете дізнатися більше у <a href="https://www.freecodecamp.org/ukrainian/learn/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions" target="_blank" rel="noopener noreferrer nofollow">розділі навчальної програми ES6</a>, що охоплює цю тему.

# --hints--

Сховище Redux має існувати.

```js
assert(typeof store.getState === 'function');
```

Сховище Redux повинне мати значення 5 для стану.

```js
assert(store.getState() === 5);
```

# --seed--

## --seed-contents--

```js
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
```

# --solutions--

```js
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer);
```
