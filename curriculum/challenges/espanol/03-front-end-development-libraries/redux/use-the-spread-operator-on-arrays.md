---
id: 5a24c314108439a4d4036159
title: Usa el operador de propagación en arreglos
challengeType: 6
forumTopicId: 301452
dashedName: use-the-spread-operator-on-arrays
---

# --description--

Una solución de ES6 para ayudar a reforzar la inmutabilidad del estado en Redux es el operador de propagación: `...`. El operador de propagación tiene una variedad de aplicaciones, una de las cuales es muy adecuada para el desafío anterior de producir un nuevo arreglo a partir de un arreglo existente. Se trata de una sintaxis relativamente nueva, pero de uso común. Por ejemplo, si tienes un arreglo `myArray` y escribes:

```js
let newArray = [...myArray];
```

`newArray` es ahora un clon de `myArray`. Ambos arreglos siguen existiendo por separado en la memoria. Si realizas una mutación como `newArray.push(5)`, `myArray` no cambia. El `...` efectivamente *distribuye* los valores de `myArray` en un nuevo arreglo. Para clonar un arreglo pero añadir valores adicionales en el nuevo arreglo, se podría escribir `[...myArray, 'new value']`. Esto devolvería un nuevo arreglo compuesto por los valores de `myArray` y la cadena `new value` como último valor. La sintaxis de propagación se puede utilizar varias veces en la composición de arreglos como este, pero es importante tener en cuenta que sólo hace una copia superficial del arreglo. Es decir, sólo proporciona operaciones de arreglos inmutables para arreglos unidimensionales.

# --instructions--

Utiliza el operador de propagación para devolver una nueva copia del estado cuando se añade una tarea.

# --hints--

El almacén Redux debe existir e inicializarse con un estado igual a `["Do not mutate state!"]`.

```js
assert(
  (function () {
    const initialState = store.getState();
    return (
      Array.isArray(initialState) === true &&
      initialState[0] === 'Do not mutate state!'
    );
  })()
);
```

`addToDo` e `immutableReducer` deben ser funciones.

```js
assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
```

Enviar una acción de tipo `ADD_TO_DO` en el almacén Redux debe añadir un elemento `todo` y NO debe mutar el estado.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(addToDo('__TEST__TO__DO__'));
    const finalState = store.getState();
    const expectedState = ['Do not mutate state!', '__TEST__TO__DO__'];
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

El operador de propagación debe utilizarse para devolver el nuevo estado.

```js
(getUserInput) => assert(getUserInput('index').includes('...state'));
```

# --seed--

## --seed-contents--

```js
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      return [
        ...state,
        action.todo
      ];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```
