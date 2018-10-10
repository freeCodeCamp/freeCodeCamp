---
id: 5a24c314108439a4d4036158
title: Never Mutate State
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Nunca Mute Estado
---

## Description
<section id="description"> Esses desafios finais descrevem vários métodos de impor o princípio-chave da imutabilidade do estado no Redux. Estado imutável significa que você nunca modifica o estado diretamente; em vez disso, você retorna uma nova cópia do estado. Se você tirasse uma foto do estado de um aplicativo do Redux com o passar do tempo, veria algo como <code>state 1</code> , <code>state 2</code> , <code>state 3</code> , <code>state 4</code> , <code>...</code> e assim por diante, onde cada estado pode ser semelhante ao último, mas cada é um dado distinto. Essa imutabilidade, na verdade, é o que fornece recursos como depuração de viagem no tempo que você pode ter ouvido falar. O Redux não aplica ativamente a imutabilidade do estado em suas lojas ou redutores, essa responsabilidade recai sobre o programador. Felizmente, o JavaScript (especialmente o ES6) fornece várias ferramentas úteis que você pode usar para impor a imutabilidade do seu estado, seja uma <code>string</code> , um <code>number</code> , uma <code>array</code> ou um <code>object</code> . Observe que strings e números são valores primitivos e são imutáveis ​​por natureza. Em outras palavras, 3 é sempre 3. Você não pode alterar o valor do número 3. Uma <code>array</code> ou <code>object</code> , no entanto, é mutável. Na prática, seu estado provavelmente consistirá em uma <code>array</code> ou <code>object</code> , pois essas são estruturas de dados úteis para representar muitos tipos de informações. </section>

## Instructions
<section id="instructions"> Há uma <code>store</code> e <code>reducer</code> no editor de código para gerenciar itens de tarefas. Termine de escrever o caso <code>ADD_TO_DO</code> no redutor para acrescentar uma nova <code>ADD_TO_DO</code> ao estado. Existem algumas maneiras de conseguir isso com JavaScript padrão ou ES6. Veja se você pode encontrar uma maneira de retornar um novo array com o item de <code>action.todo</code> anexado ao final. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O repositório do Redux deve existir e inicializar com um estado igual ao array <code>todos</code> no editor de código.
    testString: 'assert((function() { const todos = [ "Go to the store", "Clean the house", "Cook dinner", "Learn to code" ]; const initialState = store.getState(); return Array.isArray(initialState) && initialState.join(",") === todos.join(","); })(), "The Redux store should exist and initialize with a state equal to the <code>todos</code> array in the code editor.");'
  - text: <code>addToDo</code> e <code>immutableReducer</code> ambos devem ser funções.
    testString: 'assert(typeof addToDo === "function" && typeof immutableReducer === "function", "<code>addToDo</code> and <code>immutableReducer</code> both should be functions.");'
  - text: Despachar uma ação do tipo <code>ADD_TO_DO</code> no repositório Redux deve adicionar um item <code>todo</code> e NÃO deve sofrer mutação.
    testString: 'assert((function() { const initialState = store.getState(); const isFrozen = DeepFreeze(initialState); store.dispatch(addToDo("__TEST__TO__DO__")); const finalState = store.getState(); const expectedState = [ "Go to the store", "Clean the house", "Cook dinner", "Learn to code", "__TEST__TO__DO__" ]; return( isFrozen && DeepEqual(finalState, expectedState)); })(), "Dispatching an action of type <code>ADD_TO_DO</code> on the Redux store should add a <code>todo</code> item and should NOT mutate state.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
