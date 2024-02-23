---
id: 5a24c314108439a4d4036155
title: Надішліть дані дій до сховища
challengeType: 6
forumTopicId: 301448
dashedName: send-action-data-to-the-store
---

# --description--

Ви вже дізнались, як відправляти дії до сховища Redux, але ці дії не містили ніякої інформації, окрім `type`. Ви також можете надсилати певні дані разом з діями. Насправді це досить поширено, оскільки дії зазвичай виникають з певних взаємодій користувача, і вони, як правило, містять деякі дані. Сховище Redux зазвичай має знати про ці дані.

# --instructions--

В редакторі коду визначені `notesReducer()` та автор дії `addNoteText()`. Допишіть тіло функції `addNoteText()`, щоб вона повернула об’єкт `action`. Об’єкт має містити властивість `type` зі значенням `ADD_NOTE`, а також властивість `text` зі значенням даних `note`, переданих до автора дії. При виклику автора дій, ви передаєте особливу інформацію, доступ до якої можна отримати для об’єкта.

Потім допишіть інструкцію `switch` в `notesReducer()`. Ви повинні додати випадок, який опрацьовує дії `addNoteText()`. Цей випадок має спрацьовувати щоразу, коли існує дія типу `ADD_NOTE`, і він має повернути властивість `text` у вхідній дії як новий стан.

Ця дія відправлена у нижній частині коду. Щойно закінчите, запустіть код і зверніть увагу на консоль. Це все, що потрібно, щоб надіслати особливі дані про дії до сховища та використовувати їх під час оновлення стану.

# --hints--

Автор дій `addNoteText` має повернути об’єкт з ключами `type` та `text`.

```js
assert(
  (function () {
    const addNoteFn = addNoteText('__TEST__NOTE');
    return addNoteFn.type === ADD_NOTE && addNoteFn.text === '__TEST__NOTE';
  })()
);
```

Відправлення дії типу `ADD_NOTE` з автором дії `addNoteText` має оновити стан на рядок, переданий автору дій.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(addNoteText('__TEST__NOTE'));
    const newState = store.getState();
    return initialState !== newState && newState === '__TEST__NOTE';
  })()
);
```

# --seed--

## --seed-contents--

```js
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line

    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
```

# --solutions--

```js
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello Redux!'));
console.log(store.getState());
```
