---
id: 5a24c314108439a4d4036179
title: Create a Controlled Form
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Создание управляемой формы
---

## Description
<section id="description"> Последняя задача показала, что React может управлять внутренним состоянием для определенных элементов, таких как <code>input</code> и <code>textarea</code> , что делает их контролируемыми компонентами. Это относится и к другим элементам формы, включая обычный элемент <code>form</code> HTML. </section>

## Instructions
<section id="instructions"> Компонент <code>MyForm</code> настроен с пустой <code>form</code> с обработчиком отправки. Обработчик отправки будет вызываться при отправке формы. Мы добавили кнопку, которая представляет форму. Вы можете видеть, что у него есть <code>type</code> установленный для <code>submit</code> указывающий, что это кнопка, управляющая формой. Добавьте элемент <code>input</code> в <code>form</code> и установите его <code>value</code> и <code>onChange()</code> как последний вызов. Затем вы должны завершить <code>handleSubmit</code> метод так , чтобы он устанавливает компонент государственной собственности <code>submit</code> к текущему значению входного в локальном <code>state</code> . <strong>Примечание.</strong> Вы также должны вызвать <code>event.preventDefault()</code> в обработчике отправки, чтобы предотвратить поведение отправки формы по умолчанию, которое обновит веб-страницу. И, наконец, создать <code>h1</code> тег после <code>form</code> , который придающая <code>submit</code> значение из компонента <code>state</code> . Затем вы можете ввести форму и нажать кнопку (или нажать «Ввод»), и вы увидите, что ваш вход отображается на странице. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyForm</code> должен возвращать элемент <code>div</code> который содержит <code>form</code> и тег <code>h1</code> . Форма должна содержать <code>input</code> и <code>button</code> .
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyForm)); return (mockedComponent.find("div").children().find("form").length === 1 && mockedComponent.find("div").children().find("h1").length === 1 && mockedComponent.find("form").children().find("input").length === 1 && mockedComponent.find("form").children().find("button").length === 1) })(), "<code>MyForm</code> should return a <code>div</code> element which contains a <code>form</code> and an <code>h1</code> tag. The form should include an <code>input</code> and a <code>button</code>.");'
  - text: 'Состояние <code>MyForm</code> должно инициализироваться с <code>input</code> свойств <code>input</code> и <code>submit</code> , оба устанавливаются в пустые строки.'
    testString: 'assert(Enzyme.mount(React.createElement(MyForm)).state("input") === "" && Enzyme.mount(React.createElement(MyForm)).state("submit") === "", "The state of <code>MyForm</code> should initialize with <code>input</code> and <code>submit</code> properties, both set to empty strings.");'
  - text: Ввод <code>input</code> элемент <code>input</code> должен обновить свойство <code>input</code> состояния компонента.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: "" }); return waitForIt(() => mockedComponent.state("input"))}; const _2 = () => { mockedComponent.find("input").simulate("change", { target: { value: "TestInput" }}); return waitForIt(() => ({ state: mockedComponent.state("input"), inputVal: mockedComponent.find("input").props().value }))}; const before = await _1(); const after = await _2(); assert(before === "" && after.state === "TestInput" && after.inputVal === "TestInput", "Typing in the <code>input</code> element should update the <code>input</code> property of the component&apos;s state."); }; '
  - text: 'Отправка формы должна запускать <code>handleSubmit</code> который должен установить свойство <code>submit</code> в состоянии, равном текущему вводу.'
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: "" }); mockedComponent.setState({submit: ""}); mockedComponent.find("input").simulate("change", {target: {value: "SubmitInput"}}); return waitForIt(() => mockedComponent.state("submit"))}; const _2 = () => { mockedComponent.find("form").simulate("submit"); return waitForIt(() => mockedComponent.state("submit"))}; const before = await _1(); const after = await _2(); assert(before === "" && after === "SubmitInput", "Submitting the form should run <code>handleSubmit</code> which should set the <code>submit</code> property in state equal to the current input."); };'
  - text: Заголовок <code>h1</code> должен отображать значение поля <code>submit</code> из состояния компонента.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: "" }); mockedComponent.setState({submit: ""}); mockedComponent.find("input").simulate("change", {target: {value: "TestInput"}}); return waitForIt(() => mockedComponent.find("h1").text())}; const _2 = () => { mockedComponent.find("form").simulate("submit"); return waitForIt(() => mockedComponent.find("h1").text())}; const before = await _1(); const after = await _2(); assert(before === "" && after === "TestInput", "The <code>h1</code> header should render the value of the <code>submit</code> field from the component&apos;s state."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ",
      submit: "
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // change code below this line

    // change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { /* change code below this line */ }

          { /* change code above this line */ }
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */ }

        { /* change code above this line */ }
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
