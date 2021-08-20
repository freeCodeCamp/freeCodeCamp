---
id: 5a24c314108439a4d403615b
title: Copiar um objeto com Object.assign
challengeType: 6
forumTopicId: 301437
dashedName: copy-an-object-with-object-assign
---

# --description--

Os últimos desafios funcionaram com arrays, mas também existem maneiras de ajudar a impor a imutabilidade do state quando o state for um `object`. Uma ferramenta útil para lidar com objetos é a utilidade do `Object.assign()`. `Object.assign()` recebe um objeto alvo e objetos fonte e mapeia propriedades dos objetos de origem para o objeto alvo. Qualquer propriedades correspondentes são substituídas por propriedades nos objetos de origem. Esse comportamento é comumente usado para fazer cópias rasas de objetos, passando um objeto vazio como o primeiro argumento seguido do(s) objeto(s) que você deseja copiar. Exemplo:

```js
const newObject = Object.assign({}, obj1, obj2);
```

Isso cria `newObject` como um novo `object`, que contém as propriedades que atualmente existem em `obj1` e `obj2`.

# --instructions--

O estado e ações do Redux foram modificados para manipular um `object` para o `state`. Edite o código para retornar um novo objeto `state` para ações com tipo `ONLINE`, que define a propriedade `status` para a string `online`. Tente usar `Object.assign()` para completar o desafio.

# --hints--

A store do Redux deve existir e inicializar com um estado equivalente ao objeto `defaultState` declarado na linha 1.

```js
assert(
  (function () {
    const expectedState = {
      user: 'CamperBot',
      status: 'offline',
      friends: '732,982',
      community: 'freeCodeCamp'
    };
    const initialState = store.getState();
    return DeepEqual(expectedState, initialState);
  })()
);
```

`wakeUp` e `immutableReducer` devem ser funções.

```js
assert(typeof wakeUp === 'function' && typeof immutableReducer === 'function');
```

Despachar uma ação do tipo `ONLINE` deve atualizar a propriedade `status` no estado para `online` e NÃO deve alterar o estado.

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch({ type: 'ONLINE' });
    const finalState = store.getState();
    const expectedState = {
      user: 'CamperBot',
      status: 'online',
      friends: '732,982',
      community: 'freeCodeCamp'
    };
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

`Object.assign` deve ser usado para retornar um novo estado.

```js
(getUserInput) => assert(getUserInput('index').includes('Object.assign'));
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      return Object.assign({}, state, {
        status: 'online'
      });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```
