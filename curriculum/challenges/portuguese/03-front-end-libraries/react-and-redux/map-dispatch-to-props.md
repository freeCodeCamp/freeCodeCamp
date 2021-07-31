---
id: 5a24c314108439a4d4036146
title: Mapear dispatch para props
challengeType: 6
forumTopicId: 301432
dashedName: map-dispatch-to-props
---

# --description--

A função `mapDispatchToProps()` é usada para fornecer criadores de ação específicos para seus componentes React, para que eles possam despachar ações à store Redux. É semelhante em estrutura à função `mapStateToProps()` que você escreveu no último desafio. Isso retorna um objeto que mapeia as ações de despache para nomes de propriedades, o que se torna `props` do componente. No entanto, em vez de retornar um pedaço do `state`, cada propriedade retorna uma função que chama `dispatch` com um criador de ação e quaisquer dados de ação relevantes. Você tem acesso a este `dispatch` porque ele foi passado para `mapDispatchToProps()` como um parâmetro quando você define a função, assim como você passou o `state` para `mapStateToProps()`. Nos bastidores, React Redux está usando `store.dispatch()` do Redux para realizar estes despachos com `mapDispatchToProps()`. Isso é semelhante a como ele usa `store.subscribe()` para componentes que são mapeados para o `state`.

Por exemplo, você tem o criador de ação `loginUser()` que recebe um `username` como um payload de ação. O objeto retornado do `mapDispatchToProps()` para este criador da ação pareceria algo como:

```jsx
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
```

# --instructions--

O editor de código fornece um criador de ação chamado `addMessage()`. Escreva a função `mapDispatchToProps()` que recebe `dispatch` como um argumento, e então retorna um objeto. O objeto deve ter a propriedade `submitNewMessage` definida para a função de despacho, que recebe um parâmetro para a nova mensagem a ser adicionada quando despachar `addMessage()`.

# --hints--

`addMessage` deve retornar um objeto com chaves `type` e `message`.

```js
assert(
  (function () {
    const addMessageTest = addMessage();
    return (
      addMessageTest.hasOwnProperty('type') &&
      addMessageTest.hasOwnProperty('message')
    );
  })()
);
```

`mapDispatchToProps` deve ser uma função.

```js
assert(typeof mapDispatchToProps === 'function');
```

`mapDispatchToProps` deve retornar um objeto.

```js
assert(typeof mapDispatchToProps() === 'object');
```

Despachar `addMessage` com `submitNewMessage` do `mapDispatchToProps` deve retornar uma mensagem para a função de envio.

```js
assert(
  (function () {
    let testAction;
    const dispatch = (fn) => {
      testAction = fn;
    };
    let dispatchFn = mapDispatchToProps(dispatch);
    dispatchFn.submitNewMessage('__TEST__MESSAGE__');
    return (
      testAction.type === 'ADD' && testAction.message === '__TEST__MESSAGE__'
    );
  })()
);
```

# --seed--

## --seed-contents--

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line
```

# --solutions--

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message));
    }
  }
};
```
