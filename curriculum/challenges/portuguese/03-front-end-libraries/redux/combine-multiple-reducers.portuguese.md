---
id: 5a24c314108439a4d4036154
title: Combine Multiple Reducers
challengeType: 6
videoUrl: ''
localeTitle: Combine vários redutores
---

## Description
<section id="description"> Quando o estado do seu aplicativo começa a ficar mais complexo, pode ser tentador dividir o estado em várias partes. Em vez disso, lembre-se do primeiro princípio do Redux: todo o estado do aplicativo é mantido em um único objeto de estado na loja. Portanto, o Redux fornece a composição do redutor como uma solução para um modelo de estado complexo. Você define vários redutores para manipular diferentes partes do estado de sua aplicação e, então, compõe esses redutores juntos em um redutor de raiz. O redutor de raiz é então passado para o método <code>createStore()</code> do Redux. Para nos permitir combinar vários redutores juntos, o Redux fornece o método <code>combineReducers()</code> . Esse método aceita um objeto como um argumento no qual você define propriedades que associam chaves a funções específicas do redutor. O nome que você dá às chaves será usado pelo Redux como o nome do pedaço de estado associado. Normalmente, é uma boa prática criar um redutor para cada estado de aplicativo quando eles são distintos ou exclusivos de alguma forma. Por exemplo, em um aplicativo de anotações com autenticação de usuário, um redutor pode manipular a autenticação enquanto outro manipula o texto e as anotações que o usuário está enviando. Para tal aplicação, podemos escrever o método <code>combineReducers()</code> desta forma: <blockquote> const rootReducer = Redux.combineReducers ({ <br> auth: authenticationReducer, <br> notas: notesReducer <br> }); </blockquote> Agora, as <code>notes</code> principais conterão todo o estado associado às nossas anotações e <code>notesReducer</code> manipuladas pelo nosso <code>notesReducer</code> . É assim que vários redutores podem ser compostos para gerenciar um estado de aplicativo mais complexo. Neste exemplo, o estado mantido no repositório do Redux seria, então, um único objeto contendo as propriedades <code>auth</code> e <code>notes</code> . </section>

## Instructions
<section id="instructions"> Existem as <code>counterReducer()</code> e <code>authReducer()</code> fornecidas no editor de código, junto com um repositório Redux. Termine de escrever a função <code>rootReducer()</code> usando o método <code>Redux.combineReducers()</code> . Atribua <code>counterReducer</code> a uma chave chamada <code>count</code> e <code>authReducer</code> a uma chave chamada <code>auth</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O <code>counterReducer</code> deve incrementar e decrementar o <code>state</code> .
    testString: 'assert((function() { const initalState = store.getState().count; store.dispatch({type: INCREMENT}); store.dispatch({type: INCREMENT}); const firstState = store.getState().count; store.dispatch({type: DECREMENT}); const secondState = store.getState().count; return firstState === initalState + 2 && secondState === firstState - 1  })(), "The <code>counterReducer</code> should increment and decrement the <code>state</code>.");'
  - text: O <code>authReducer</code> deve alternar o <code>state</code> de <code>authenticated</code> entre <code>true</code> e <code>false</code> .
    testString: 'assert((function() {  store.dispatch({type: LOGIN}); const loggedIn = store.getState().auth.authenticated; store.dispatch({type: LOGOUT}); const loggedOut = store.getState().auth.authenticated; return loggedIn === true && loggedOut === false  })(), "The <code>authReducer</code> should toggle the <code>state</code> of <code>authenticated</code> between <code>true</code> and <code>false</code>.");'
  - text: 'O <code>state</code> loja deve ter duas chaves: <code>count</code> , que contém um número, e <code>auth</code> , que contém um objeto. O objeto <code>auth</code> deve ter uma propriedade de <code>authenticated</code> , que contém um booleano.'
    testString: 'assert((function() { const state = store.getState(); return typeof state.auth === "object" && typeof state.auth.authenticated === "boolean" && typeof state.count === "number" })(), "The store <code>state</code> should have two keys: <code>count</code>, which holds a number, and <code>auth</code>, which holds an object. The <code>auth</code> object should have a property of <code>authenticated</code>, which holds a boolean.");'
  - text: O <code>rootReducer</code> deve ser uma função que combina o <code>counterReducer</code> e o <code>authReducer</code> .
    testString: 'getUserInput => assert((function() {  const noWhiteSpace = getUserInput("index").replace(/\s/g,""); return typeof rootReducer === "function" && noWhiteSpace.includes("Redux.combineReducers")  })(), "The <code>rootReducer</code> should be a function that combines the <code>counterReducer</code> and the <code>authReducer</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = // define the root reducer here

const store = Redux.createStore(rootReducer);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
