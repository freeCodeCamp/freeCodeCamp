---
id: 5a24c314108439a4d4036178
title: Create a Controlled Input
challengeType: 6
videoUrl: ''
localeTitle: Criar uma entrada controlada
---

## Description
undefined

## Instructions
<section id="instructions"> O editor de código tem o esqueleto de um componente chamado <code>ControlledInput</code> para criar um elemento de <code>input</code> controlado. O <code>state</code> do componente já foi inicializado com uma propriedade de <code>input</code> que contém uma cadeia vazia. Este valor representa o texto que um usuário digita no campo de <code>input</code> . Primeiro, crie um método chamado <code>handleChange()</code> que tenha um parâmetro chamado <code>event</code> . Quando o método é chamado, ele recebe um objeto de <code>event</code> que contém uma cadeia de texto do elemento de <code>input</code> . Você pode acessar essa string com <code>event.target.value</code> dentro do método. Atualize a propriedade de <code>input</code> do <code>state</code> do componente com essa nova cadeia. No método render, crie o elemento de <code>input</code> acima da tag <code>h4</code> . Adicione um atributo de <code>value</code> que seja igual à propriedade de <code>input</code> do <code>state</code> do componente. Em seguida, adicione um manipulador de eventos <code>onChange()</code> ao método <code>handleChange()</code> . Quando você digita na caixa de entrada, esse texto é processado pelo método <code>handleChange()</code> , definido como a propriedade de <code>input</code> no <code>state</code> local e renderizado como o valor na caixa de <code>input</code> na página. O <code>state</code> componente é a única fonte de verdade em relação aos dados de entrada. Por último, mas não menos importante, não se esqueça de adicionar as ligações necessárias no construtor. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ControlledInput</code> deve retornar um elemento <code>div</code> que contém uma <code>input</code> e uma tag <code>p</code> .
    testString: 'assert(Enzyme.mount(React.createElement(ControlledInput)).find("div").children().find("input").length === 1 && Enzyme.mount(React.createElement(ControlledInput)).find("div").children().find("p").length === 1, "<code>ControlledInput</code> should return a <code>div</code> element which contains an <code>input</code> and a <code>p</code> tag.");'
  - text: O estado de <code>ControlledInput</code> deve ser inicializado com uma propriedade de <code>input</code> definida como uma cadeia vazia.
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(ControlledInput)).state("input"), "", "The state of <code>ControlledInput</code> should initialize with an <code>input</code> property set to an empty string.");'
  - text: 'Digitar no elemento de entrada deve atualizar o estado e o valor da entrada, e o elemento <code>p</code> deve renderizar esse estado conforme você digita.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(ControlledInput)); const _1 = () => { mockedComponent.setState({ input: "" }); return waitForIt(() => mockedComponent.state("input"))}; const _2 = () => { mockedComponent.find("input").simulate("change", { target: { value: "TestInput" }}); return waitForIt(() => ({ state: mockedComponent.state("input"), text: mockedComponent.find("p").text(), inputVal: mockedComponent.find("input").props().value }))}; const before = await _1(); const after = await _2(); assert(before === "" && after.state === "TestInput" && after.text === "TestInput" && after.inputVal === "TestInput", "Typing in the input element should update the state and the value of the input, and the <code>p</code> element should render this state as you type."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "
    };
    // change code below this line

    // change code above this line
  }
  // change code below this line

  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}

        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
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
