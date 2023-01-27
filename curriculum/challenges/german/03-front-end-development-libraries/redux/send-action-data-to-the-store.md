---
id: 5a24c314108439a4d4036155
title: Aktionsdaten an den Store senden
challengeType: 6
forumTopicId: 301448
dashedName: send-action-data-to-the-store
---

# --description--

Inzwischen hast du gelernt, wie man Aktionen an den Redux-Store sendet, aber bis jetzt haben diese Aktionen keine anderen Informationen als einen `type` enthalten. Du kannst auch bestimmte Daten zusammen mit deinen Aktionen senden. Das ist sogar sehr häufig der Fall, da Aktionen in der Regel auf eine Benutzerinteraktion zurückgehen und einige Daten mit sich bringen. Der Redux-Store muss oft über diese Daten Bescheid wissen.

# --instructions--

Es gibt einen einfachen `notesReducer()` und einen `addNoteText()` Action Creator, die im Code-Editor definiert sind. Stelle den Körper der `addNoteText()`-Funktion fertig, damit sie ein `action`-Objekt zurückgibt. Das Objekt sollte eine `type`-Eigenschaft mit dem Wert `ADD_NOTE` und eine `text`-Eigenschaft enthalten, die auf die `note`-Daten gesetzt ist, die an den Action Creator übergeben werden. Wenn du den Action Creator aufrufst, übergibst du bestimmte Notizinformationen, auf die du für das Objekt zugreifen kannst.

Als Nächstes schreibst du die `switch`-Anweisung im `notesReducer()` fertig. Du musst einen Fall hinzufügen, der die `addNoteText()`-Aktionen behandelt. Dieser Fall sollte immer dann ausgelöst werden, wenn es eine Aktion vom Typ `ADD_NOTE` gibt und er sollte die `text`-Eigenschaft der eingehenden `action` als neuen `state` zurückgeben.

Die Aktion wird im letzten Teil des Codes gesendet. Wenn du fertig bist, führe den Code aus und beobachte die Konsole. Das ist alles, was du brauchst, um aktionsspezifische Daten an den Store zu senden und sie zu verwenden, wenn du den `state` des Stores aktualisierst.

# --hints--

Der Action Creator `addNoteText` sollte ein Objekt mit den Schlüsseln `type` und `text` zurückgeben.

```js
assert(
  (function () {
    const addNoteFn = addNoteText('__TEST__NOTE');
    return addNoteFn.type === ADD_NOTE && addNoteFn.text === '__TEST__NOTE';
  })()
);
```

Wenn du eine Aktion des Typs `ADD_NOTE` mit dem Action Creator `addNoteText` versendest, sollte der `state` auf den String aktualisiert werden, der dem Action Creator übergeben wurde.

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
