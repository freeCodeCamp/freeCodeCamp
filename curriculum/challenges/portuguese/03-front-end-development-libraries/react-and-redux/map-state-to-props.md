---
id: 5a24c314108439a4d4036145
title: Mapear state para props
challengeType: 6
forumTopicId: 301433
dashedName: map-state-to-props
---

# --description--

O componente `Provider` permite que você forneça `state` e `dispatch` para seus componentes React, mas você deve especificar exatamente que state e actions deseja. Desta forma, você tem certeza que cada componente só tem acesso ao state de que precisa. Você consegue isso criando duas funções: `mapStateToProps()` e `mapDispatchToProps()`.

Nessas funções, você declara quais pedaços do state você quer ter acesso e quais criadores de ação você precisa ser capaz de despachar. Quando essas funções estiverem no lugar, você verá como usar o método `connect` do React Redux para conectá-los aos seus componentes em outro desafio.

**Observação:** nos bastidores, o React Redux usa o método `store.subscribe()` para implementar `mapStateToProps()`.

# --instructions--

Crie a função `mapStateToProps()`. Esta função deve receber `state` como um argumento, em seguida, retornar um objeto que mapeia esse state para nomes de propriedade específicos. Essas propriedades se tornarão acessíveis para o componente via `props`. Uma vez que esse exemplo mantém o estado inteiro do app em um único array, você pode passar todo o state para o seu componente. Cria uma propriedade `messages` no objeto que está sendo retornado e defina-a no `state`.

# --hints--

A const `state` deve ser um array vazio.

```js
assert(Array.isArray(state) && state.length === 0);
```

`mapStateToProps` deve ser uma função.

```js
assert(typeof mapStateToProps === 'function');
```

`mapStateToProps` deve retornar um objeto.

```js
assert(typeof mapStateToProps() === 'object');
```

Passar um array como state para `mapStateToProps` deve retornar esse array atribuído à chave `messages`.

```js
assert(mapStateToProps(['messages']).messages.pop() === 'messages');
```

# --seed--

## --seed-contents--

```jsx
const state = [];

// Change code below this line
```

# --solutions--

```jsx
const state = [];

// Change code below this line

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};
```
