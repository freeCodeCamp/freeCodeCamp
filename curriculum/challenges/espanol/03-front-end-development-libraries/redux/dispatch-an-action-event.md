---
id: 5a24c314108439a4d403614f
title: Envía un evento de acción
challengeType: 6
forumTopicId: 301442
dashedName: dispatch-an-action-event
---

# --description--

El método `dispatch` (enviar) es el que se utiliza para enviar acciones al almacén Redux. Llamar a `store.dispatch()` y pasar el valor devuelto por un creador de acción envía una acción de regreso al almacén.

Recordemos que los creadores de acción devuelven un objeto con una propiedad de tipo que especifica la acción que se ha producido. Luego, el método envía un objeto de acción al almacén Redux. Basándonos en el ejemplo del desafío anterior, las siguientes líneas son equivalentes, y ambas envían la acción de tipo `LOGIN`:

```js
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

# --instructions--

El almacén Redux en el editor de código tiene un estado inicializado que es un objeto que contiene una propiedad `login` actualmente establecida a `false`. También hay un creador de acción llamado `loginAction()` que devuelve una acción de tipo `LOGIN`. Envía la acción `LOGIN` al almacén Redux llamando al método `dispatch`, y pasa la acción creada por `loginAction()`.

# --hints--

La llamada a la función `loginAction` debe devolver un objeto con la propiedad `type` establecida a la cadena `LOGIN`.

```js
assert(loginAction().type === 'LOGIN');
```

El almacén debe ser inicializado con un objeto con la propiedad `login` establecida a `false`.

```js
assert(store.getState().login === false);
```

El método `store.dispatch()` debe utilizarse para enviar una acción de tipo `LOGIN`.

```js
(getUserInput) =>
  assert(
    (function () {
      let noWhiteSpace = getUserInput('index').replace(/\s/g, '');
      return (
        noWhiteSpace.includes('store.dispatch(loginAction())') ||
        noWhiteSpace.includes("store.dispatch({type: 'LOGIN'})") === true
      );
    })()
  );
```

# --seed--

## --seed-contents--

```js
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
```

# --solutions--

```js
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction());
```
