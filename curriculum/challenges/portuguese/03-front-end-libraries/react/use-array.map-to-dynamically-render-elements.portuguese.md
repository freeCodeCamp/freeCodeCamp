---
id: 5a24c314108439a4d403618a
title: Use Array.map() to Dynamically Render Elements
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Use Array.map () para renderizar elementos dinamicamente
---

## Description
<section id="description"> A renderização condicional é útil, mas você pode precisar que seus componentes renderizem um número desconhecido de elementos. Muitas vezes, na programação reativa, um programador não tem como saber qual é o estado de um aplicativo até o tempo de execução, porque muito depende da interação do usuário com esse programa. Os programadores precisam escrever seu código para lidar corretamente com esse estado desconhecido antes do tempo. O uso do <code>Array.map()</code> no React ilustra esse conceito. Por exemplo, você cria um aplicativo &quot;To Do List&quot; simples. Como programador, você não tem como saber quantos itens um usuário pode ter em sua lista. Você precisa configurar seu componente para <em><strong>renderizar dinamicamente</strong></em> o número correto de elementos da lista muito antes de alguém usar o programa decidir que hoje é dia da lavanderia. </section>

## Instructions
<section id="instructions"> O editor de código tem a maior parte do componente <code>MyToDoList</code> configurado. Algum deste código deve parecer familiar se você tiver concluído o desafio do formulário controlado. Você notará uma área de <code>textarea</code> e um <code>button</code> , juntamente com alguns métodos que rastreiam seus estados, mas nada é renderizado para a página ainda. Dentro do <code>constructor</code> , crie um objeto <code>this.state</code> e defina dois estados: <code>userInput</code> deve ser inicializado como uma string vazia e <code>toDoList</code> deve ser inicializado como uma matriz vazia. Em seguida, exclua o comentário no método <code>render()</code> ao lado da variável <code>items</code> . Em seu lugar, mapeie a matriz <code>toDoList</code> armazenada no estado interno do componente e renderize dinamicamente um <code>li</code> para cada item. Tente digitar a string <code>eat, code, sleep, repeat</code> na área de <code>textarea</code> , clicar no botão e ver o que acontece. <strong>Nota:</strong> Você pode saber que todos os elementos filho irmãos criados por uma operação de mapeamento como essa precisam ser fornecidos com um atributo- <code>key</code> exclusivo. Não se preocupe, este é o tópico do próximo desafio. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O componente MyToDoList deve existir e renderizar para a página.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find("MyToDoList").length === 1; })(), "The MyToDoList component should exist and render to the page.");'
  - text: O primeiro filho de <code>MyToDoList</code> deve ser um elemento <code>textarea</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find("MyToDoList").children().childAt(0).type() === "textarea"; })(), "The first child of <code>MyToDoList</code> should be a <code>textarea</code> element.");'
  - text: O terceiro filho de <code>MyToDoList</code> deve ser um elemento de <code>button</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); return mockedComponent.find("MyToDoList").children().childAt(2).type() === "button"; })(), "The third child of <code>MyToDoList</code> should be a <code>button</code> element.");'
  - text: O estado de <code>MyToDoList</code> deve ser inicializado com <code>toDoList</code> como uma matriz vazia.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const initialState = mockedComponent.state(); return Array.isArray(initialState.toDoList) === true && initialState.toDoList.length === 0; })(), "The state of <code>MyToDoList</code> should be initialized with <code>toDoList</code> as an empty array.");'
  - text: O estado de <code>MyToDoList</code> deve ser inicializado com <code>userInput</code> como uma string vazia.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const initialState = mockedComponent.state(); return typeof initialState.userInput === "string" && initialState.userInput.length === 0; })(), "The state of <code>MyToDoList</code> should be initialized with <code>userInput</code> as an empty string.");'
  - text: 'Quando o botão <code>Create List</code> é clicado, o componente <code>MyToDoList</code> deve retornar dinamicamente uma lista não ordenada que contenha um elemento de item de lista para cada item de uma lista separada por vírgula inserida no elemento <code>textarea</code> .'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const mockedComponent = Enzyme.mount(React.createElement(MyToDoList)); const simulateChange = (el, value) => el.simulate("change", {target: {value}}); const state_1 = () => { return waitForIt(() => mockedComponent.find("ul").find("li"))}; const setInput = () => { return waitForIt(() => simulateChange(mockedComponent.find("textarea"), "testA, testB, testC"))}; const click = () => { return waitForIt(() => mockedComponent.find("button").simulate("click"))}; const state_2 = () => { return waitForIt(() => { const nodes = mockedComponent.find("ul").find("li"); return { nodes, text: nodes.reduce((t, n) => t + n.text(), "") }; })}; const setInput_2 = () => { return waitForIt(() => simulateChange(mockedComponent.find("textarea"), "t1, t2, t3, t4, t5, t6"))}; const click_1 = () => { return waitForIt(() => mockedComponent.find("button").simulate("click"))}; const state_3 = () => { return waitForIt(() => { const nodes = mockedComponent.find("ul").find("li"); return { nodes, text: nodes.reduce((t, n) => t + n.text(), "") }; })}; const awaited_state_1 = await state_1(); const awaited_setInput = await setInput(); const awaited_click = await click(); const awaited_state_2 = await state_2(); const awaited_setInput_2 = await setInput_2(); const awaited_click_1 = await click_1(); const awaited_state_3 = await state_3(); assert(awaited_state_1.length === 0 && awaited_state_2.nodes.length === 3 && awaited_state_3.nodes.length === 6 && awaited_state_2.text === "testA testB testC" && awaited_state_3.text === "t1 t2 t3 t4 t5 t6", "When the <code>Create List</code> button is clicked, the <code>MyToDoList</code> component should dynamically return an unordered list that contains a list item element for every item of a comma-separated list entered into the <code>textarea</code> element."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line

    // change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = null; // change code here
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};

```

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
