---
id: 5a24c314108439a4d403618a
title: Usar array.map() para renderizar elementos dinamicamente
challengeType: 6
forumTopicId: 301417
dashedName: use-array-map-to-dynamically-render-elements
---

# --description--

Renderização condicional é útil, mas você pode precisar de seus componentes para renderizar um número desconhecido de elementos. Muitas vezes em programação reativa, um programador não tem como saber o estado de uma aplicação até o tempo de execução, porque muito depende da interação do usuário com esse programa. Os programadores precisam escrever o seu código para lidar corretamente com esse estado desconhecido antes do tempo. Usar `Array.map()` em React ilustra este conceito.

Por exemplo, você cria um aplicativo "Lista de Coisas a Fazer" simples. Como programador, você não tem como saber quantos itens um usuário pode ter em sua lista. Você precisa configurar seu componente para renderizar dinamicamente o número correto de elementos da lista muito antes de alguém usar o programa decidir que hoje é o dia da lavagem.

# --instructions--

O editor de código tem a maioria do componente `MyToDoList` configurado. Parte deste código deve parecer familiar se você completou o desafio de formulário controlado. Você notará um `textarea` e um `button`, junto com alguns métodos que rastreiam seus estados, mas nada é renderizado na página ainda.

Dentro do `constructor`, crie um objeto `this.state` e defina dois estados: `userInput` deve ser inicializado como uma string vazia, e `toDoList` deve ser inicializado como um array vazio. Em seguida, exclua o valor `null` no método `render()` ao lado da variável `items`. Em seu lugar, mapeie sobre o array `toDoList` armazenado no estado interno do componente e renderize dinamicamente um `li` para cada item. Tente inserir a string `eat, code, sleep, repeat` dentro do `textarea`, depois clique no botão e veja o que acontece.

**Observação:** você pode saber que todos os elementos filhos do irmão criados por uma operação de mapeamento como esta precisam ser fornecidos com um atributo `key` exclusivo. Não se preocupe, este é o tema do próximo desafio.

# --hints--

O componente MyToDoList deve existir e renderizar à página.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return mockedComponent.find('MyToDoList').length === 1;
  })()
);
```

O primeiro filho do `MyToDoList` deve ser um elemento `textarea`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(0).type() ===
      'textarea'
    );
  })()
);
```

O segundo filho do `MyToDoList` deve ser um elemento `br`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(1).type() === 'br'
    );
  })()
);
```

O terceiro filho do `MyToDoList` deve ser um elemento `button`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    return (
      mockedComponent.find('MyToDoList').children().childAt(2).type() ===
      'button'
    );
  })()
);
```

O estado de `MyToDoList` deve ser inicializado com `toDoList` como um array vazio.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      Array.isArray(initialState.toDoList) === true &&
      initialState.toDoList.length === 0
    );
  })()
);
```

O estado de `MyToDoList` deve ser inicializado com `userInput` como uma string vazia.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
    const initialState = mockedComponent.state();
    return (
      typeof initialState.userInput === 'string' &&
      initialState.userInput.length === 0
    );
  })()
);
```

Quando o botão `Create List` é clicado, o componente `MyToDoList` deve retornar, dinamicamente, uma lista não ordenada que contém um elemento de item de lista para cada item de uma lista separada por vírgulas inserida no elemento `textarea`.

```js
(() => {
  const mockedComponent = Enzyme.mount(React.createElement(MyToDoList));
  const simulateChange = (el, value) =>
    el.simulate('change', { target: { value } });
  const state_1 = () => {
    return mockedComponent.find('ul').find('li');
  };
  const setInput = () => {
    return simulateChange(
      mockedComponent.find('textarea'),
      'testA, testB, testC'
    );
  };
  const click = () => {
    return mockedComponent.find('button').simulate('click');
  };
  const state_2 = () => {
    const nodes = mockedComponent.find('ul').find('li');
    return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
  };
  const setInput_2 = () => {
    return simulateChange(
      mockedComponent.find('textarea'),
      't1, t2, t3, t4, t5, t6'
    );
  };
  const click_1 = () => {
    return mockedComponent.find('button').simulate('click');
  };
  const state_3 = () => {
    const nodes = mockedComponent.find('ul').find('li');
    return { nodes, text: nodes.reduce((t, n) => t + n.text().trim(), '') };
  };
  const awaited_state_1 = state_1();
  const awaited_setInput = setInput();
  const awaited_click = click();
  const awaited_state_2 = state_2();
  const awaited_setInput_2 = setInput_2();
  const awaited_click_1 = click_1();
  const awaited_state_3 = state_3();
  assert(
    awaited_state_1.length === 0 &&
      awaited_state_2.nodes.length === 3 &&
      awaited_state_3.nodes.length === 6 &&
      awaited_state_2.text === 'testAtestBtestC' &&
      awaited_state_3.text === 't1t2t3t4t5t6'
  );
})();
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyToDoList />, document.getElementById('root'));
```

## --seed-contents--

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line

    // Change code above this line
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
    const items = null; // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```

# --solutions--

```jsx
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      userInput: ''
    };
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
    const items = this.state.toDoList.map((item, i) => {
      return <li key={i}>{item}</li>;
    });
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}
```
