---
id: 5a24c314108439a4d4036158
title: Manter o state inalterado
challengeType: 6
forumTopicId: 301445
dashedName: never-mutate-state
---

# --description--

Estes desafios finais descrevem vários métodos de aplicação do princípio fundamental da imutabilidade do state em Redux. O state imutável significa que você nunca modifica o estado diretamente, em vez disso, você retorna uma nova cópia do estado.

Se você tirasse um snapshot do estado de um aplicativo Redux ao longo do tempo, você veria algo como `state 1`, `state 2`, `state 3`,`state 4`, `...` e assim por diante onde cada estado pode ser semelhante ao último, mas cada um é um dado distinto. Esta imutabilidade, na verdade, é o que fornece recursos como a depuração de viagem no tempo (time-travel debugging) sobre o qual você pode ter ouvido a respeito.

Redux não impõe ativamente a imutabilidade do state em sua store ou nos reducers. Essa responsabilidade é do programador. Felizmente, o JavaScript (especialmente ES6) fornece várias ferramentas úteis que você pode usar para impor a imutabilidade do seu estado, seja ele uma `string`, `number`, `array` ou `object`. Observe que as strings e números são valores primitivos e são imutáveis por natureza. Em outras palavras, 3 é sempre 3. Você não pode alterar o valor do número 3. Um `array` ou `object`, no entanto, é mutável. Na prática, seu estado provavelmente consistirá em um `array` ou `object`, visto que se trata de estruturas de dados úteis para a representação de muitos tipos de informação.

# --instructions--

Há uma `store` e um `reducer` no editor de código para gerenciar itens a fazer. Termine de escrever o caso `ADD_TO_DO` no reducer para adicionar um novo 'a fazer' (to-do) ao state. Existem algumas maneiras de realizar isso com JavaScript padrão ou ES6. Veja se você pode encontrar uma maneira de retornar um novo array com o item do `action.todo` anexado ao final.

# --hints--

A store do Redux deve existir e inicializar com um estado igual ao array `todos` no editor de código.

```js
assert(
  (function () {
    const todos = [
      'Go to the store',
      'Clean the house',
      'Cook dinner',
      'Learn to code'
    ];
    const initialState = store.getState();
    return (
      Array.isArray(initialState) && initialState.join(',') === todos.join(',')
    );
  })()
);
```

`addToDo` e `immutableReducer` ambas devem ser funções.

```js
assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
```

Despachar uma ação do tipo `ADD_TO_DO` na store do Redux deve adicionar um item `todo` e NÃO deve modificar o state.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(addToDo('__TEST__TO__DO__'));
    const finalState = store.getState();
    const expectedState = [
      'Go to the store',
      'Clean the house',
      'Cook dinner',
      'Learn to code',
      '__TEST__TO__DO__'
    ];
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

# --seed--

## --seed-contents--

```js
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const ADD_TO_DO = 'ADD_TO_DO';

const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```
