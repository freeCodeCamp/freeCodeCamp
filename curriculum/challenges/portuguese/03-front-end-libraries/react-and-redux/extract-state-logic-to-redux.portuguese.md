---
id: 5a24c314108439a4d4036143
title: Extract State Logic to Redux
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Extraia a lógica de estado para Redux
---

## Description
<section id="description"> Agora que você terminou o componente React, você precisa mover a lógica que está executando localmente em seu <code>state</code> para o Redux. Este é o primeiro passo para conectar o simples aplicativo React ao Redux. A única funcionalidade do seu aplicativo é adicionar novas mensagens do usuário a uma lista não ordenada. O exemplo é simples para demonstrar como o React e o Redux funcionam juntos. </section>

## Instructions
<section id="instructions"> Primeiro, defina um tipo de ação &#39;ADD&#39; e configure-o para um const <code>ADD</code> . Em seguida, defina um criador de ação <code>addMessage()</code> que cria a ação para adicionar uma mensagem. Você precisará passar uma <code>message</code> para este criador de ações e incluir a mensagem na <code>action</code> retornada. Em seguida, crie um redutor chamado <code>messageReducer()</code> que manipule o estado das mensagens. O estado inicial deve ser igual a um array vazio. Esse redutor deve adicionar uma mensagem à matriz de mensagens contidas no estado ou retornar o estado atual. Finalmente, crie sua loja Redux e passe o redutor. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O const <code>ADD</code> deve existir e conter um valor igual ao da string <code>ADD</code>
    testString: 'assert(ADD === "ADD", "The const <code>ADD</code> should exist and hold a value equal to the string <code>ADD</code>");'
  - text: O criador da ação <code>addMessage</code> deve retornar um objeto com o <code>type</code> igual a <code>ADD</code> e mensagem igual à mensagem que é passada.
    testString: 'assert((function() { const addAction = addMessage("__TEST__MESSAGE__"); return addAction.type === ADD && addAction.message === "__TEST__MESSAGE__"; })(), "The action creator <code>addMessage</code> should return an object with <code>type</code> equal to <code>ADD</code> and message equal to the message that is passed in.");'
  - text: <code>messageReducer</code> deve ser uma função.
    testString: 'assert(typeof messageReducer === "function", "<code>messageReducer</code> should be a function.");'
  - text: A loja deve existir e ter um estado inicial definido como uma matriz vazia.
    testString: 'assert((function() { const initialState = store.getState(); return typeof store === "object" && initialState.length === 0; })(), "The store should exist and have an initial state set to an empty array.");'
  - text: Despachando <code>addMessage</code> contra o armazenamento deve imutável adicionar uma nova mensagem para a matriz de mensagens mantidas em estado.
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addMessage("__A__TEST__MESSAGE")); const addState = store.getState(); return (isFrozen && addState[0] === "__A__TEST__MESSAGE"); })(), "Dispatching <code>addMessage</code> against the store should immutably add a new message to the array of messages held in state.");'
  - text: O <code>messageReducer</code> deve retornar o estado atual se for chamado com qualquer outra ação.
    testString: 'assert((function() { const addState = store.getState(); store.dispatch({type: "FAKE_ACTION"}); const testState = store.getState(); return (addState === testState); })(), "The <code>messageReducer</code> should return the current state if called with any other actions.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// define ADD, addMessage(), messageReducer(), and store here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
