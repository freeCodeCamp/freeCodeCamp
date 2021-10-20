---
id: 5a24c314108439a4d4036159
title: Usar o operador spread em arrays
challengeType: 6
forumTopicId: 301452
dashedName: use-the-spread-operator-on-arrays
---

# --description--

Uma solução da ES6 para ajudar a impor imutabilidade do estado no Redux é o operador spread: `...`. O operador spread tem uma variedade de aplicações, uma das quais é adequada ao desafio anterior de produzir um novo array a partir de um array existente. Trata-se de uma sintaxe relativamente nova, mas comumente usada. Por exemplo, se você tem um array `myArray` e escreve:

```js
let newArray = [...myArray];
```

`newArray` agora é um clone de `myArray`. Os dois arrays ainda existem separadamente na memória. Se você executar uma mutação como `newArray.push(5)`, `myArray` não muda. O `...` efetivamente *espalha* os valores em `myArray` em um novo array. Para clonar um array, mas adicionar valores adicionais no novo array, você pode escrever `[...myArray, 'new value']`. Isso retornaria um novo array composto pelos valores em `myArray` e a string `new value` como o último valor. A sintaxe de spread pode ser usada várias vezes na composição de um array desta maneira, mas é importante notar que ele só faz uma cópia superficial do array. Ou seja, apenas proporciona operações de array imutáveis para arrays unidimensionais.

# --instructions--

Use o operador spread para retornar uma nova cópia do state quando uma tarefa (to-do) for adicionada.

# --hints--

A store do Redux deve existir e inicializar com um estado igual a `["Do not mutate state!"]`.

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

`addToDo` e `immutableReducer` ambos devem ser funções.

```js
assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
```

Despachar uma ação do tipo `ADD_TO_DO` no store Redux deve adicionar um item `todo` e NÃO deve modificar o state.

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

O operador spread deve ser usado para retornar um novo estado.

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
