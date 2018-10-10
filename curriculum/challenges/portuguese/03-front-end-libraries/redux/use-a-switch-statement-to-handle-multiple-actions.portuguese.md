---
id: 5a24c314108439a4d4036151
title: Use a Switch Statement to Handle Multiple Actions
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Use uma instrução de troca para lidar com várias ações
---

## Description
<section id="description"> Você pode dizer ao repositório do Redux como lidar com vários tipos de ação. Digamos que você esteja gerenciando a autenticação do usuário em sua loja Redux. Você deseja ter uma representação de estado para quando os usuários estão conectados e quando estão desconectados. Você representa isso com um único objeto de estado com a propriedade <code>authenticated</code> . Você também precisa de criadores de ações que criem ações correspondentes ao login do usuário e ao logout do usuário, juntamente com os próprios objetos de ação. </section>

## Instructions
<section id="instructions"> O editor de código tem uma loja, ações e criadores de ações configurados para você. Preencha a função <code>reducer</code> para lidar com várias ações de autenticação. Use uma instrução <code>switch</code> JavaScript no <code>reducer</code> para responder a diferentes eventos de ação. Este é um padrão padrão na reducção de redutores Redux. A instrução switch deve alternar <code>action.type</code> e retornar o estado de autenticação apropriado. <strong>Nota:</strong> Neste ponto, não se preocupe com a imutabilidade do estado, já que é pequeno e simples neste exemplo. Para cada ação, você pode retornar um novo objeto - por exemplo, <code>{authenticated: true}</code> . Além disso, não esqueça de escrever um caso <code>default</code> na instrução switch que retorne o <code>state</code> atual. Isso é importante porque, depois que seu aplicativo tiver vários redutores, todos eles serão executados a qualquer momento em que um envio de ação for feito, mesmo quando a ação não estiver relacionada a esse redutor. Nesse caso, você deseja certificar-se de retornar o <code>state</code> atual. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Chamar a função <code>loginUser</code> deve retornar um objeto com a propriedade type configurada para a string <code>LOGIN</code> .
    testString: 'assert(loginUser().type === "LOGIN", "Calling the function <code>loginUser</code> should return an object with type property set to the string <code>LOGIN</code>.");'
  - text: Chamar a função <code>logoutUser</code> deve retornar um objeto com a propriedade type configurada para a string <code>LOGOUT</code> .
    testString: 'assert(logoutUser().type === "LOGOUT", "Calling the function <code>logoutUser</code> should return an object with type property set to the string <code>LOGOUT</code>.");'
  - text: A loja deve ser inicializada com um objeto com uma propriedade <code>authenticated</code> configurada como <code>false</code> .
    testString: 'assert(store.getState().authenticated === false, "The store should be initialized with an object with an <code>authenticated</code> property set to <code>false</code>.");'
  - text: Despachando <code>loginUser</code> deve atualizar a propriedade <code>authenticated</code> no estado de armazenamento para <code>true</code> .
    testString: 'assert((function() {  const initialState = store.getState(); store.dispatch(loginUser()); const afterLogin = store.getState(); return initialState.authenticated === false && afterLogin.authenticated === true })(), "Dispatching <code>loginUser</code> should update the <code>authenticated</code> property in the store state to <code>true</code>.");'
  - text: Dispatching <code>logoutUser</code> deve atualizar a propriedade <code>authenticated</code> no estado de armazenamento para <code>false</code> .
    testString: 'assert((function() {  store.dispatch(loginUser()); const loggedIn = store.getState(); store.dispatch(logoutUser()); const afterLogout = store.getState(); return loggedIn.authenticated === true && afterLogout.authenticated === false  })(), "Dispatching <code>logoutUser</code> should update the <code>authenticated</code> property in the store state to <code>false</code>.");'
  - text: A função <code>authReducer</code> deve manipular vários tipos de ação com uma instrução <code>switch</code> .
    testString: 'getUserInput => assert( getUserInput("index").toString().includes("switch") && getUserInput("index").toString().includes("case") && getUserInput("index").toString().includes("default"), "The <code>authReducer</code> function should handle multiple action types with a <code>switch</code> statement.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // change code below this line

  // change code above this line
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
