---
id: 5a24c314108439a4d4036152
title: Use const for Action Types
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Use const para tipos de ação
---

## Description
<section id="description"> Uma prática comum ao trabalhar com o Redux é atribuir tipos de ação como constantes somente leitura e, então, referenciar essas constantes onde quer que elas sejam usadas. Você pode refatorar o código com o qual está trabalhando para gravar os tipos de ação como declarações <code>const</code> . </section>

## Instructions
<section id="instructions"> Declare <code>LOGIN</code> e <code>LOGOUT</code> como valores <code>const</code> e atribua-os às cadeias <code>&#39;LOGIN&#39;</code> e <code>&#39;LOGOUT&#39;</code> , respectivamente. Em seguida, edite o <code>authReducer()</code> e os criadores de ações para fazer referência a essas constantes em vez de valores de string. <strong>Nota:</strong> Geralmente, é uma convenção escrever constantes em todas as letras maiúsculas, e esta também é uma prática padrão no Redux. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Chamar a função <code>loginUser</code> deve retornar um objeto com a propriedade <code>type</code> configurada para a string <code>LOGIN</code> .
    testString: 'assert(loginUser().type === "LOGIN", "Calling the function <code>loginUser</code> should return an object with <code>type</code> property set to the string <code>LOGIN</code>.");'
  - text: Chamar a função <code>logoutUser</code> deve retornar um objeto com a propriedade <code>type</code> configurada para a string <code>LOGOUT</code> .
    testString: 'assert(logoutUser().type === "LOGOUT", "Calling the function <code>logoutUser</code> should return an object with <code>type</code> property set to the string <code>LOGOUT</code>.");'
  - text: A loja deve ser inicializada com um objeto com o <code>login</code> propriedade definido como <code>false</code> .
    testString: 'assert(store.getState().authenticated === false, "The store should be initialized with an object with property <code>login</code> set to <code>false</code>.");'
  - text: Despachando <code>loginUser</code> deve atualizar a propriedade de <code>login</code> no estado da loja para <code>true</code> .
    testString: 'assert((function() {  const initialState = store.getState(); store.dispatch(loginUser()); const afterLogin = store.getState(); return initialState.authenticated === false && afterLogin.authenticated === true })(), "Dispatching <code>loginUser</code> should update the <code>login</code> property in the store state to <code>true</code>.");'
  - text: Dispatching <code>logoutUser</code> deve atualizar a propriedade de <code>login</code> no estado da loja para <code>false</code> .
    testString: 'assert((function() {  store.dispatch(loginUser()); const loggedIn = store.getState(); store.dispatch(logoutUser()); const afterLogout = store.getState(); return loggedIn.authenticated === true && afterLogout.authenticated === false })(), "Dispatching <code>logoutUser</code> should update the <code>login</code> property in the store state to <code>false</code>.");'
  - text: A função <code>authReducer</code> deve manipular vários tipos de ação com uma instrução switch.
    testString: 'getUserInput => assert((function() { return typeof authReducer === "function" && getUserInput("index").toString().includes("switch") && getUserInput("index").toString().includes("case") && getUserInput("index").toString().includes("default") })(), "The <code>authReducer</code> function should handle multiple action types with a switch statement.");'
  - text: <code>LOGIN</code> e <code>LOGOUT</code> devem ser declarados como valores <code>const</code> e devem ser atribuídos strings de <code>LOGIN</code> e <code>LOGOUT</code> .
    testString: 'getUserInput => assert((function() {  const noWhiteSpace = getUserInput("index").toString().replace(/\s/g,""); return (noWhiteSpace.includes("constLOGIN=\"LOGIN\"") || noWhiteSpace.includes("constLOGIN="LOGIN"")) && (noWhiteSpace.includes("constLOGOUT=\"LOGOUT\"") || noWhiteSpace.includes("constLOGOUT="LOGOUT"")) })(), "<code>LOGIN</code> and <code>LOGOUT</code> should be declared as <code>const</code> values and should be assigned strings of <code>LOGIN</code>and <code>LOGOUT</code>.");'
  - text: Os criadores de ações e o redutor devem referenciar as constantes <code>LOGIN</code> e <code>LOGOUT</code> .
    testString: 'getUserInput => assert((function() { const noWhiteSpace = getUserInput("index").toString().replace(/\s/g,""); return noWhiteSpace.includes("caseLOGIN:") && noWhiteSpace.includes("caseLOGOUT:") && noWhiteSpace.includes("type:LOGIN") && noWhiteSpace.includes("type:LOGOUT") })(), "The action creators and the reducer should reference the <code>LOGIN</code> and <code>LOGOUT</code> constants.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// change code below this line

// change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case 'LOGIN':
      return {
        authenticated: true
      }

    case 'LOGOUT':
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
