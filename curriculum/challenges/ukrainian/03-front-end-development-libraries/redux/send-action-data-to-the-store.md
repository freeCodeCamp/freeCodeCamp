---
id: 5a24c314108439a4d4036155
title: Надсилання даних про дії до сховища
challengeType: 6
forumTopicId: 301448
dashedName: send-action-data-to-the-store
---

# --description--

Ви вже дізнались як виконувати дії зі сховищем Redux, але досі ці дії не містили ніякої інформації, крім `type`. Ви також можете надсилати певні дані разом з вашими діями. Насправді це дуже поширене явище, тому що дії зазвичай виникають з певних взаємодій, і вони, як правило, мають у собі деякі дані. Сховище Redux зазвичай має знати про ці дані.

# --instructions--

Є основний виконавець дій `notesReducer()` та `addNoteText()`, визначені в редакторі коду. Завершіть основну частину функції `addNoteText()`, щоб вона повернула об'єкт `action`. Об'єкт має включати властивість `type` зі значенням `ADD_NOTE`, а також набір властивостей `text` для даних `note`, які призначені для виконавця дій. При виклику виконавця дій, ви передаєте особливу інформацію, що маєте доступ до об'єкта.

Далі, завершіть написання команди `switch` у `notesReducer()`. Ви маєте додати випадок, який опрацьовує дії `addNoteText()`. Цей випадок має спрацьовувати щоразу, коли є дія типу `ADD_NOTE` і вона повинен повертатися як властивість `text` у вхідній `action` як новий `state`.

Ця дія виконується у нижній частині коду. Щойно закінчите, запустіть код і зверніть увагу на консоль. Це все, що потрібно, щоб надіслати особливі дані про дії у сховище та використовувати під час оновлення сховища `state`.

# --hints--

Виконавець дій `addNoteText` повинен повертатися як об'єкт з ключами `type` та `text`.

```js
assert(
  (function () {
    const addNoteFn = addNoteText('__TEST__NOTE');
    return addNoteFn.type === ADD_NOTE && addNoteFn.text === '__TEST__NOTE';
  })()
);
```

Запуск дії типу `ADD_NOTE` з виконавцем дії `addNoteText` має оновлювати `state` до рядка, переданого виконавцю дій.

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
