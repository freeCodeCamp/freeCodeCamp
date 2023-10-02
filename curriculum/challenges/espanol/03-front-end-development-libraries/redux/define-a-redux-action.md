---
id: 5a24c314108439a4d403614d
title: Define una acción Redux
challengeType: 6
forumTopicId: 301440
dashedName: define-a-redux-action
---

# --description--

Dado que Redux es un framework de gestión de estado, la actualización del estado es una de sus tareas principales. En Redux, todas las actualizaciones de estado se activan mediante acciones de envío. Una acción es simplemente un objeto de JavaScript que contiene información sobre un evento de acción que ha ocurrido. El almacén Redux recibe estos objetos de acción, y luego actualiza su estado de acuerdo a ello. A veces una acción Redux también lleva algunos datos. Por ejemplo, la acción lleva un nombre de usuario después de que un usuario inicia sesión. Aunque los datos son opcionales, las acciones deben llevar una propiedad `type` que especifica el "tipo" de acción que se ha producido.

Piensa en las acciones Redux como mensajeros que entregan información sobre los eventos que ocurren en tu aplicación al almacén Redux. A continuación, el almacén se encarga de actualizar el estado en función de la acción realizada.

# --instructions--

Escribir una acción Redux es tan sencillo como declarar un objeto con una propiedad de tipo. Declara un objeto `action` y dale una propiedad `type` establecida a la cadena `'LOGIN'`.

# --hints--

Debe existir un objeto `action`.

```js
assert(
  (function () {
    return typeof action === 'object';
  })()
);
```

El objeto `action` debe tener una propiedad clave `type` con valor `LOGIN`.

```js
assert(
  (function () {
    return action.type === 'LOGIN';
  })()
);
```

# --seed--

## --seed-contents--

```js
// Define an action here:
```

# --solutions--

```js
const action = {
  type: 'LOGIN'
}
```
