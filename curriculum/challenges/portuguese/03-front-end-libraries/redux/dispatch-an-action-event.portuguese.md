---
id: 5a24c314108439a4d403614f
title: Dispatch an Action Event
challengeType: 6
videoUrl: ''
localeTitle: Despachar um Evento de Ação
---

## Description
<section id="description"> <code>dispatch</code> método de <code>dispatch</code> é o que você usa para despachar ações para o armazenamento do Redux. Chamar <code>store.dispatch()</code> e passando o valor retornado de um criador de ação envia uma ação de volta ao armazenamento. Lembre-se de que os criadores de ações retornam um objeto com uma propriedade de tipo que especifica a ação que ocorreu. Em seguida, o método despacha um objeto de ação para o armazenamento do Redux. Com base no exemplo do desafio anterior, as seguintes linhas são equivalentes e ambas enviam a ação do tipo <code>LOGIN</code> : <blockquote> store.dispatch (actionCreator ()); <br> store.dispatch ({type: &#39;LOGIN&#39;}); </blockquote></section>

## Instructions
<section id="instructions"> O repositório Redux no editor de código possui um estado inicializado que é um objeto que contém uma propriedade de <code>login</code> atualmente definida como <code>false</code> . Há também um criador de ações chamado <code>loginAction()</code> que retorna uma ação do tipo <code>LOGIN</code> . Despache a ação <code>LOGIN</code> para o armazenamento Redux chamando o método de <code>dispatch</code> e passe a ação criada por <code>loginAction()</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Chamar a função <code>loginAction</code> deve retornar um objeto com a propriedade <code>type</code> configurada para a string <code>LOGIN</code> .
    testString: 'assert(loginAction().type === "LOGIN", "Calling the function <code>loginAction</code> should return an object with <code>type</code> property set to the string <code>LOGIN</code>.");'
  - text: A loja deve ser inicializada com um objeto com o <code>login</code> propriedade definido como <code>false</code> .
    testString: 'assert(store.getState().login === false, "The store should be initialized with an object with property <code>login</code> set to <code>false</code>.");'
  - text: O método <code>store.dispatch()</code> deve ser usado para despachar uma ação do tipo <code>LOGIN</code> .
    testString: 'getUserInput => assert((function() {  let noWhiteSpace = getUserInput("index").replace(/\s/g,""); return noWhiteSpace.includes("store.dispatch(loginAction())") || noWhiteSpace.includes("store.dispatch({type: \"LOGIN\"})") === true })(), "The <code>store.dispatch()</code> method should be used to dispatch an action of type <code>LOGIN</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
