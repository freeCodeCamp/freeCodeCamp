---
id: 5a24c314108439a4d4036146
title: Asigna el envío a props
challengeType: 6
forumTopicId: 301432
dashedName: map-dispatch-to-props
---

# --description--

La función `mapDispatchToProps()` se utiliza para proporcionar creadores de acción específicos a tus componentes React para que puedan enviar acciones contra el almacén Redux. Su estructura es similar a la función `mapStateToProps()` que escribiste en el último desafío. Devuelve un objeto que asigna acciones de envío a nombres de propiedades, que se convierten en `props` del componente. Sin embargo, en lugar de devolver una pieza de `state`, cada propiedad devuelve una función que llama a `dispatch` con un creador de acciones y cualquier dato relevante de la acción. Tienes acceso a este `dispatch` porque se pasa a `mapDispatchToProps()` como parámetro cuando defines la función, igual que pasaste `state` a `mapStateToProps()`. Tras bambalinas, React Redux utiliza `store.dispatch()` para realizar estos envíos con `mapDispatchToProps()`. Esto es similar a cómo se utiliza `store.subscribe()` para los componentes que se asignan a `state`.

Por ejemplo, tienes un creador de acción `loginUser()` que toma un `username` como carga útil de acción. El objeto devuelto por `mapDispatchToProps()` para este creador de acción se vería algo como:

```jsx
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```

# --instructions--

El editor de código proporciona un creador de acción llamado `addMessage()`. Escribe la función `mapDispatchToProps()` que toma `dispatch` como argumento y devuelve un objeto. El objeto debe tener una propiedad `submitNewMessage` establecida en la función de envío, que toma un parámetro para el nuevo mensaje a añadir cuando envía `addMessage()`.

# --hints--

`addMessage` debe devolver un objeto con las claves `type` y `message`.

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

`mapDispatchToProps` debe ser una función.

```js
assert(typeof mapDispatchToProps === 'function');
```

`mapDispatchToProps` debe devolver un objeto.

```js
assert(typeof mapDispatchToProps() === 'object');
```

El envío de `addMessage` con `submitNewMessage` desde `mapDispatchToProps` debe devolver un mensaje a la función de envío.

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
