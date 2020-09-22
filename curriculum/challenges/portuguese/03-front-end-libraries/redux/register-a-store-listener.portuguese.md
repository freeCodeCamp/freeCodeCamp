---
id: 5a24c314108439a4d4036153
title: Register a Store Listener
challengeType: 6
videoUrl: ''
localeTitle: Registrar um ouvinte da loja
---

## Description
<section id="description"> Outro método que você tem acesso no objeto de <code>store</code> do Redux é o <code>store.subscribe()</code> . Isso permite que você assine as funções do ouvinte na loja, que são chamadas sempre que uma ação é despachada na loja. Um uso simples para esse método é inscrever uma função em sua loja que simplesmente registra uma mensagem toda vez que uma ação é recebida e a loja é atualizada. </section>

## Instructions
<section id="instructions"> Escreva uma função de retorno de chamada que aumente a <code>count</code> variáveis ​​globais toda vez que a loja receber uma ação e passe essa função para o método <code>store.subscribe()</code> . Você verá que <code>store.dispatch()</code> é chamado três vezes seguidas, passando cada vez diretamente em um objeto de ação. Observe a saída do console entre os despachos de ação para ver as atualizações acontecerem. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Despachar a ação <code>ADD</code> no armazenamento deve incrementar o estado em <code>1</code> .
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch({ type: "ADD" }); const newState = store.getState(); return newState === (initialState + 1); })(), "Dispatching the <code>ADD</code> action on the store should increment the state by <code>1</code>.");'
  - text: Deve haver uma função de ouvinte inscrita na loja usando <code>store.subscribe</code> .
    testString: 'getUserInput => assert(getUserInput("index").includes("store.subscribe("), "There should be a listener function subscribed to the store using <code>store.subscribe</code>.");'
  - text: O retorno de chamada para <code>store.subscribe</code> também deve incrementar a variável de <code>count</code> global à medida que a loja é atualizada.
    testString: 'assert(store.getState() === count, "The callback to <code>store.subscribe</code> should also increment the global <code>count</code> variable as the store is updated.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// global count variable:
let count = 0;

// change code below this line

// change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
count = 0;

```

</div>


</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
