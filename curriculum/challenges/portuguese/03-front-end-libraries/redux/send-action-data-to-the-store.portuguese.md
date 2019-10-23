---
id: 5a24c314108439a4d4036155
title: Send Action Data to the Store
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Enviar dados de ação para a loja
---

## Description
<section id="description"> Até agora você aprendeu como despachar ações para a loja Redux, mas até agora essas ações não continham nenhuma informação além de um <code>type</code> . Você também pode enviar dados específicos junto com suas ações. Na verdade, isso é muito comum porque as ações geralmente se originam de alguma interação do usuário e tendem a carregar alguns dados com elas. A loja Redux geralmente precisa saber sobre esses dados. </section>

## Instructions
<section id="instructions"> Há um <code>notesReducer()</code> básico e um criador de ação <code>addNoteText()</code> definidos no editor de código. Conclua o corpo da função <code>addNoteText()</code> para que ele retorne um objeto de <code>action</code> . O objeto deve incluir uma propriedade de <code>type</code> com um valor de <code>ADD_NOTE</code> e também uma propriedade de <code>text</code> definida como os dados da <code>note</code> transmitidos para o criador da ação. Quando você chama o criador de ações, você passa informações de notas específicas que você pode acessar para o objeto. Em seguida, termine de escrever a instrução <code>switch</code> no <code>notesReducer()</code> . Você precisa adicionar um caso que manipule as ações <code>addNoteText()</code> . Este caso deve ser acionado sempre que houver uma ação do tipo <code>ADD_NOTE</code> e deve retornar a propriedade <code>text</code> na <code>action</code> entrada como o novo <code>state</code> . A ação é despachada na parte inferior do código. Quando terminar, execute o código e observe o console. Isso é tudo o que é necessário para enviar dados específicos da ação para a loja e usá-los quando você atualizar o <code>state</code> loja. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O criador da ação <code>addNoteText</code> deve retornar um objeto com o <code>type</code> e o <code>text</code> chaves.
    testString: 'assert((function() { const addNoteFn = addNoteText("__TEST__NOTE"); return addNoteFn.type === ADD_NOTE && addNoteFn.text === "__TEST__NOTE" })(), "The action creator <code>addNoteText</code> should return an object with keys <code>type</code> and <code>text</code>.");'
  - text: Despachar uma ação do tipo <code>ADD_NOTE</code> com o criador da ação <code>addNoteText</code> deve atualizar o <code>state</code> para a cadeia passada para o criador da ação.
    testString: 'assert((function() { const initialState = store.getState(); store.dispatch(addNoteText("__TEST__NOTE")); const newState = store.getState(); return initialState !== newState && newState === "__TEST__NOTE" })(), "Dispatching an action of type <code>ADD_NOTE</code> with the <code>addNoteText</code> action creator should update the <code>state</code> to the string passed to the action creator.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // change code below this line

    // change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // change code below this line

  // change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
