---
id: 5a24c314108439a4d403614e
title: Define un creador de acción
challengeType: 6
forumTopicId: 301441
dashedName: define-an-action-creator
---

# --description--

Después de crear una acción, el siguiente paso es enviar la acción al almacén Redux para que pueda actualizar su estado. En Redux, se definen creadores de acción para lograr esto. Un creador de acción es simplemente una función de JavaScript que devuelve una acción. En otras palabras, los creadores de acción crean objetos que representan eventos de acción.

# --instructions--

Define una función llamada `actionCreator()` que devuelve el objeto `action` cuando es llamado.

# --hints--

La función `actionCreator` debe existir.

```js
assert(typeof actionCreator === 'function');
```

La ejecución de la función `actionCreator` debe devolver el objeto `action`.

```js
assert(typeof action === 'object');
```

La `action` devuelta debe tener una propiedad clave `type` con valor `LOGIN`.

```js
assert(action.type === 'LOGIN');
```

# --seed--

## --seed-contents--

```js
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
```

# --solutions--

```js
const action = {
  type: 'LOGIN'
}
const actionCreator = () => {
  return action;
};
```
