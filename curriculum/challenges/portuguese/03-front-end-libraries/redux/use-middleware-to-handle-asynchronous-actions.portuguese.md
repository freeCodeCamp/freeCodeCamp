---
id: 5a24c314108439a4d4036156
title: Use Middleware to Handle Asynchronous Actions
challengeType: 6
videoUrl: ''
localeTitle: Use o middleware para manipular ações assíncronas
---

## Description
<section id="description"> Até agora, esses desafios evitaram discutir ações assíncronas, mas são uma parte inevitável do desenvolvimento da web. Em algum momento, você precisará chamar endpoints assíncronos em seu aplicativo Redux, então, como você lida com esses tipos de solicitações? O Redux fornece middleware projetado especificamente para esse propósito, chamado middleware Redux Thunk. Aqui está uma breve descrição de como usar isso com o Redux. Para incluir o middleware Redux Thunk, você o passa como um argumento para <code>Redux.applyMiddleware()</code> . Esta declaração é então fornecida como um segundo parâmetro opcional para a função <code>createStore()</code> . Dê uma olhada no código na parte inferior do editor para ver isso. Em seguida, para criar uma ação assíncrona, você retorna uma função no criador de ações que toma o <code>dispatch</code> como um argumento. Dentro dessa função, você pode despachar ações e executar solicitações assíncronas. Neste exemplo, uma solicitação assíncrona é simulada com uma chamada <code>setTimeout()</code> . É comum despachar uma ação antes de iniciar qualquer comportamento assíncrono para que o estado do seu aplicativo saiba que alguns dados estão sendo solicitados (esse estado pode exibir um ícone de carregamento, por exemplo). Em seguida, depois de receber os dados, você despacha outra ação que transporta os dados como uma carga juntamente com informações de que a ação foi concluída. Lembre-se de que você está passando o <code>dispatch</code> como um parâmetro para esse criador de ações especiais. Isto é o que você usará para despachar suas ações, você simplesmente passa a ação diretamente para despachar e o middleware cuida do resto. </section>

## Instructions
<section id="instructions"> Escreva ambos os dispatches no criador de ações <code>handleAsync()</code> . Dispatch <code>requestingData()</code> antes do <code>setTimeout()</code> (a chamada da API simulada). Em seguida, depois de receber os dados (pretendidos), despache a ação <code>receivedData()</code> , passando esses dados. Agora você sabe como lidar com ações assíncronas no Redux. Tudo o resto continua a se comportar como antes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O criador da ação <code>requestingData</code> deve retornar um objeto do tipo igual ao valor de <code>REQUESTING_DATA</code> .
    testString: 'assert(requestingData().type === REQUESTING_DATA, "The <code>requestingData</code> action creator should return an object of type equal to the value of <code>REQUESTING_DATA</code>.");'
  - text: O criador da ação <code>receivedData</code> deve retornar um objeto do tipo igual ao valor de <code>RECEIVED_DATA</code> .
    testString: 'assert(receivedData("data").type === RECEIVED_DATA, "The <code>receivedData</code> action creator should return an object of type equal to the value of <code>RECEIVED_DATA</code>.");'
  - text: <code>asyncDataReducer</code> deve ser uma função.
    testString: 'assert(typeof asyncDataReducer === "function", "<code>asyncDataReducer</code> should be a function.");'
  - text: Despachar o criador da ação requestingData deve atualizar a propriedade do <code>state</code> da loja de busca para <code>true</code> .
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(requestingData()); const reqState = store.getState(); return initialState.fetching === false && reqState.fetching === true })(), "Dispatching the requestingData action creator should update the store <code>state</code> property of fetching to <code>true</code>.");'
  - text: Dispatching <code>handleAsync</code> deve despachar a ação de solicitação de dados e depois despachar a ação de dados recebidos após um atraso.
    testString: 'assert((function() { const noWhiteSpace = handleAsync.toString().replace(/\s/g,""); return noWhiteSpace.includes("dispatch(requestingData())") === true && noWhiteSpace.includes("dispatch(receivedData(data))") === true })(), "Dispatching <code>handleAsync</code> should dispatch the data request action and then dispatch the received data action after a delay.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // dispatch request action here

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // dispatch received data action here

    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
