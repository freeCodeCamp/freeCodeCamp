---
id: 5a24c314108439a4d4036146
title: Versand Eigenschaften zuordnen
challengeType: 6
forumTopicId: 301432
dashedName: map-dispatch-to-props
---

# --description--

Die Funktion `mapDispatchToProps()` wird verwendet, um deinen React-Komponenten bestimmte Action Creator zur Verfügung zu stellen, damit sie Aktionen an den Redux-Store senden können. Sie ist ähnlich aufgebaut wie die `mapStateToProps()` Funktion, die du in der letzten Aufgabe geschrieben hast. Sie gibt ein Objekt zurück, das Versandaktionen den Eigenschaftsnamen zuordnet, die zu `props` der Komponente werden. Anstatt jedoch einen `state` zurückzugeben, gibt jede Eigenschaft eine Funktion zurück, die `dispatch` mit einem Action Creator und allen relevanten Aktionsdaten aufruft. Du hast Zugriff auf dieses `dispatch`, weil es als Parameter an `mapDispatchToProps()` übergeben wird, wenn du die Funktion definierst, genauso wie du `state` an `mapStateToProps()` übergeben hast. Hinter den Kulissen nutzt React Redux `store.dispatch()`, um diese Versendungen mit `mapDispatchToProps()` durchzuführen. Das ist ähnlich wie bei der Verwendung von `store.subscribe()` für Komponenten, die `state` zugeordnet sind.

Du hast zum Beispiel einen `loginUser()` Action Creator, der einen `username` als Action Payload benötigt. Das Objekt, das von `mapDispatchToProps()` für diesen Action Creator zurückgegeben wird, würde etwa so aussehen:

```jsx
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```

# --instructions--

Der Code-Editor stellt einen Action Creator namens `addMessage()` zur Verfügung. Schreibe die Funktion `mapDispatchToProps()`, die `dispatch` als Argument nimmt und dann ein Objekt zurückgibt. Das Objekt sollte eine Eigenschaft `submitNewMessage` haben, die auf die Dispatch-Funktion gesetzt ist. Diese nimmt einen Parameter für die neue Nachricht, die hinzugefügt werden soll, wenn sie `addMessage()` versendet.

# --hints--

`addMessage` sollte ein Objekt mit den Schlüsseln `type` und `message` zurückgeben.

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

`mapDispatchToProps` sollte eine Funktion sein.

```js
assert(typeof mapDispatchToProps === 'function');
```

`mapDispatchToProps` sollte ein Objekt zurückgeben.

```js
assert(typeof mapDispatchToProps() === 'object');
```

Der Versand von `addMessage` mit `submitNewMessage` von `mapDispatchToProps` sollte eine Nachricht an die Dispatch-Funktion zurückgeben.

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
