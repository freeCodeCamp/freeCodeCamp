---
id: 5a24c314108439a4d4036146
title: Map Dispatch to Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Despacho do Mapa para Adereços
---

## Description
<section id="description"> A função <code>mapDispatchToProps()</code> é usada para fornecer criadores de ações específicas para seus componentes React para que eles possam despachar ações contra o armazenamento Redux. É semelhante em estrutura à função <code>mapStateToProps()</code> você escreveu no último desafio. Ele retorna um objeto que mapeia ações de despacho para nomes de propriedades, que se tornam <code>props</code> componentes. No entanto, em vez de retornar um pedaço de <code>state</code> , cada propriedade retorna uma função que chama <code>dispatch</code> com um criador de ações e quaisquer dados de ação relevantes. Você tem acesso a este <code>dispatch</code> porque é passado para <code>mapDispatchToProps()</code> como um parâmetro quando você define a função, assim como você passou de <code>state</code> para <code>mapStateToProps()</code> . Nos bastidores, o React Redux está usando o <code>store.dispatch()</code> do Redux para conduzir esses despachos com <code>mapDispatchToProps()</code> . Isso é semelhante a como ele usa <code>store.subscribe()</code> para componentes que são mapeados para o <code>state</code> . Por exemplo, você tem um criador de ações <code>loginUser()</code> que usa um <code>username</code> como uma carga útil de ação. O objeto retornado de <code>mapDispatchToProps()</code> para este criador de ações seria algo como: <blockquote> { <br> submitLoginUser: function (username) { <br> despacho (loginUser (username)); <br> } <br> } </blockquote></section>

## Instructions
<section id="instructions"> O editor de código fornece um criador de ações chamado <code>addMessage()</code> . Escreva a função <code>mapDispatchToProps()</code> que usa <code>dispatch</code> como argumento e retorna um objeto. O objeto deve ter uma propriedade <code>submitNewMessage</code> configurada para a função dispatch, que recebe um parâmetro para a nova mensagem adicionar quando envia <code>addMessage()</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>addMessage</code> deve retornar um objeto com <code>type</code> e <code>message</code> chaves.
    testString: 'assert((function() { const addMessageTest = addMessage(); return ( addMessageTest.hasOwnProperty("type") && addMessageTest.hasOwnProperty("message")); })(), "<code>addMessage</code> should return an object with keys <code>type</code> and <code>message</code>.");'
  - text: <code>mapDispatchToProps</code> deve ser uma função.
    testString: 'assert(typeof mapDispatchToProps === "function", "<code>mapDispatchToProps</code> should be a function.");'
  - text: <code>mapDispatchToProps</code> deve retornar um objeto.
    testString: 'assert(typeof mapDispatchToProps() === "object", "<code>mapDispatchToProps</code> should return an object.");'
  - text: Despachar <code>addMessage</code> com <code>submitNewMessage</code> de <code>mapDispatchToProps</code> deve retornar uma mensagem para a função de dispatch.
    testString: 'assert((function() { let testAction; const dispatch = (fn) => { testAction = fn; }; let dispatchFn = mapDispatchToProps(dispatch); dispatchFn.submitNewMessage("__TEST__MESSAGE__"); return (testAction.type === "ADD" && testAction.message === "__TEST__MESSAGE__"); })(), "Dispatching <code>addMessage</code> with <code>submitNewMessage</code> from <code>mapDispatchToProps</code> should return a message to the dispatch function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
