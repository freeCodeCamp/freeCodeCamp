---
id: 5a24c314108439a4d4036150
title: Handle an Action in the Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Lidar com uma ação na loja
---

## Description
<section id="description"> Depois que uma ação é criada e enviada, o repositório do Redux precisa saber como responder a essa ação. Este é o trabalho de uma função <code>reducer</code> . Redutores no Redux são responsáveis ​​pelas modificações de estado que ocorrem em resposta a ações. Um <code>reducer</code> usa <code>state</code> e <code>action</code> como argumentos e sempre retorna um novo <code>state</code> . É importante observar que esse é o <strong>único</strong> papel do redutor. Não tem efeitos colaterais - nunca chama um endpoint da API e nunca tem surpresas ocultas. O redutor é simplesmente uma função pura que toma o estado e a ação, depois retorna um novo estado. Outro princípio fundamental no Redux é que o <code>state</code> é somente leitura. Em outras palavras, a função de <code>reducer</code> deve <strong>sempre</strong> retornar uma nova cópia de <code>state</code> e nunca modificar o estado diretamente. O Redux não reforça a imutabilidade do estado, no entanto, você é responsável por aplicá-lo no código de suas funções de redutor. Você vai praticar isso em desafios posteriores. </section>

## Instructions
<section id="instructions"> O editor de código tem o exemplo anterior, bem como o início de uma função de <code>reducer</code> para você. Preencha o corpo da função <code>reducer</code> para que, se receber uma ação do tipo <code>&#39;LOGIN&#39;</code> ele retorne um objeto de estado com o <code>login</code> definido como <code>true</code> . Caso contrário, retorna o <code>state</code> atual. Observe que o <code>state</code> atual e a <code>action</code> despachada são passados ​​para o redutor, para que você possa acessar o tipo de ação diretamente com <code>action.type</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Chamar a função <code>loginAction</code> deve retornar um objeto com a propriedade type configurada para a string <code>LOGIN</code> .
    testString: 'assert(loginAction().type === "LOGIN", "Calling the function <code>loginAction</code> should return an object with type property set to the string <code>LOGIN</code>.");'
  - text: A loja deve ser inicializada com um objeto com o <code>login</code> propriedade definido como <code>false</code> .
    testString: 'assert(store.getState().login === false, "The store should be initialized with an object with property <code>login</code> set to <code>false</code>.");'
  - text: Despachando <code>loginAction</code> deve atualizar a propriedade de <code>login</code> no estado de armazenamento para <code>true</code> .
    testString: 'assert((function() {  const initialState = store.getState(); store.dispatch(loginAction()); const afterState = store.getState(); return initialState.login === false && afterState.login === true })(), "Dispatching <code>loginAction</code> should update the <code>login</code> property in the store state to <code>true</code>.");'
  - text: 'Se a ação não for do tipo <code>LOGIN</code> , o armazenamento deve retornar o estado atual.'
    testString: 'assert((function() { store.dispatch({type: "__TEST__ACTION__"}); let afterTest = store.getState(); return typeof afterTest === "object" && afterTest.hasOwnProperty("login") })(), "If the action is not of type <code>LOGIN</code>, the store should return the current state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line

  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
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
