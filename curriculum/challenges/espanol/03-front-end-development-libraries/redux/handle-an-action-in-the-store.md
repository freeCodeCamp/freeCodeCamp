---
id: 5a24c314108439a4d4036150
title: Maneja una acción en el almacén
challengeType: 6
forumTopicId: 301444
dashedName: handle-an-action-in-the-store
---

# --description--

Después de crear y enviar una acción, el almacén Redux necesita saber cómo responder a esa acción. Este es el trabajo de una función `reducer` (reductor). Los reductores en Redux son responsables de las modificaciones de estado que tienen lugar en respuesta a las acciones. Un `reducer` toma `state` y `action` como argumentos, y siempre devuelve un nuevo `state`. Es importante ver que esta es la **única** función del reductor. No tiene efectos secundarios: nunca llama a un endpoint del API y nunca tiene sorpresas ocultas. El reductor es simplemente una función pura que toma el estado y la acción, y luego devuelve el nuevo estado.

Otro principio clave en Redux es que `state` es de sólo lectura. En otras palabras, la función `reducer` debe **siempre** devolver una nueva copia de `state` y nunca modificar el estado directamente. Redux no impone la inmutabilidad del estado, sin embargo, tú eres responsable de imponerla en el código de tus funciones reductoras. Practicarás esto en desafíos posteriores.

# --instructions--

El editor de código tiene el ejemplo anterior, así como el inicio de una función `reducer` para ti. Rellena el cuerpo de la función `reducer` para que si recibe una acción de tipo `'LOGIN'` devuelva un objeto de estado con `login` establecido a `true`. De lo contrario, devuelve el `state` actual. Ten en cuenta que el `state` actual y la `action` enviada se pasan al reductor, por lo que puedes acceder al tipo de la acción directamente con `action.type`.

# --hints--

La llamada a la función `loginAction` debe devolver un objeto con la propiedad type establecida a la cadena `LOGIN`.

```js
assert(loginAction().type === 'LOGIN');
```

El almacén debe ser inicializado con un objeto con la propiedad `login` establecida a `false`.

```js
assert(store.getState().login === false);
```

El envío de `loginAction` debe actualizar la propiedad `login` en el estado del almacén a `true`.

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(loginAction());
    const afterState = store.getState();
    return initialState.login === false && afterState.login === true;
  })()
);
```

Si la acción no es de tipo `LOGIN`, el almacén debe devolver el estado actual.

```js
assert(
  (function () {
    store.dispatch({ type: '__TEST__ACTION__' });
    let afterTest = store.getState();
    return typeof afterTest === 'object' && afterTest.hasOwnProperty('login');
  })()
);
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```

# --solutions--

```js
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {

  if (action.type === 'LOGIN') {
    return {login: true}
  }

  else {
    return state
  }

};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```
