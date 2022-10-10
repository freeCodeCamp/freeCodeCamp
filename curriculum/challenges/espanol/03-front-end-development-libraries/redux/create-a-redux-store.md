---
id: 5a24c314108439a4d403614b
title: Crea un almacén Redux
challengeType: 6
forumTopicId: 301439
dashedName: create-a-redux-store
---

# --description--

Redux es un framework de gestión de estados que se puede utilizar con un número de diferentes tecnologías web, incluyendo React.

En Redux, hay un único objeto de estado que es responsable de todo el estado de tu aplicación. Esto significa que si tuvieras una aplicación React con diez componentes, y cada componente tuviera su propio estado local, todo el estado de tu aplicación estaría definido por un único objeto de estado alojado en el `store` (almacén) de Redux. Este es el primer principio importante a entender cuando se aprende Redux: el almacén Redux es la única fuente de verdad cuando se trata del estado de la aplicación.

Esto también significa que cada vez que cualquier pieza de tu aplicación quiera actualizar el estado, **debe** hacerlo a través del almacén Redux. El flujo de datos unidireccional facilita el seguimiento de la gestión de estados en tu aplicación.

# --instructions--

El `store` (almacén) de Redux es un objeto que guarda y gestiona el `state` (estado) de la aplicación. Hay un método llamado `createStore()` en el objeto Redux, que se utiliza para crear el `store` Redux. Este método toma una función `reducer` como argumento obligatorio. La función `reducer` se trata en un desafío posterior, y ya está definida para ti en el editor de código. Simplemente toma `state` como argumento y devuelve `state`.

Declara una variable `store` y asígnala al método `createStore()`, pasando el `reducer` como argumento.

**Nota:** El código del editor utiliza la sintaxis de los argumentos por defecto de ES6 para inicializar este estado y mantener un valor de `5`. Si no está familiarizado con los argumentos predeterminados, puede consultar el<a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions" target="_blank" rel="noopener noreferrer nofollow">ES6 section in the Curriculum</a> que cubre este tema.

# --hints--

El almacén Redux debe existir.

```js
assert(typeof store.getState === 'function');
```

El almacén Redux debe tener un valor de 5 para el estado.

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
