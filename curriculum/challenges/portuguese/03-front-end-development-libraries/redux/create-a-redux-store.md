---
id: 5a24c314108439a4d403614b
title: Criar uma store do Redux
challengeType: 6
forumTopicId: 301439
dashedName: create-a-redux-store
---

# --description--

Redux é um framework de gerenciamento do state que pode ser usada com uma série de diferentes tecnologias web, incluindo React.

No Redux, há um único objeto state responsável por todo o estado de sua aplicação. Isto significa que se você tinha um aplicativo React com dez componentes, e cada componente tinha seu próprio estado local, todo o estado do seu aplicativo seria definido por um único objeto de estado alojado na `store` do Redux. Este é o primeiro princípio importante a ser entendido ao aprender Redux: o armazenamento do Redux é a única fonte da verdade quando se trata do estado do aplicativo.

Isso também significa que, a qualquer momento que qualquer parte de seu aplicativo queira atualizar state, **deve** fazer isso através do store do Redux. O fluxo de dados unidirecional torna mais fácil rastrear o gerenciamento de estado em seu aplicativo.

# --instructions--

O `store` do Redux é um objeto que contém e gerencia o `state` da aplicação. Há um método chamado `createStore()` no objeto do Redux, que você usa para criar a `store` do Redux. Este método recebe uma função `reducer` como um argumento necessário. A função `reducer` é coberta em um desafio posterior, e já está definida para você no editor de código. Ele simplesmente recebe o `state` como um argumento e retorna o `state`.

Declare uma variável `store` e atribua-a ao método `createStore()`, passando no `reducer` como argumento.

**Observação:** o código no editor usa a sintaxe de argumento padrão ES6 para inicializar este estado para ter um valor de `5`. Se você não está familiarizado com os argumentos padrão, você pode se referir <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions" target="_blank" rel="noopener noreferrer nofollow"> à seção sobre ES6 do currículo</a> que aborda este tópico.

# --hints--

A store do Redux deve existir.

```js
assert(typeof store.getState === 'function');
```

A store do Redux deve ter um valor de 5 para o estado.

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
