---
id: 5a24c314108439a4d4036189
title: Change Inline CSS Conditionally Based on Component State
challengeType: 6
isRequired: false
forumTopicId: 301380
localeTitle: Изменение встроенного CSS, условно основанного на состоянии компонента
---

## Description
<section id='description'>
На этом этапе вы видели несколько приложений условного рендеринга и использование встроенных стилей. Вот еще один пример, который объединяет обе эти темы. Вы также можете визуализировать CSS на основе состояния компонента React. Для этого вы проверяете условие, и если это условие выполнено, вы изменяете объект стилей, назначенный элементам JSX в методе рендеринга. Эта парадигма важна для понимания, потому что это драматический переход от более традиционного подхода применения стилей, изменяя непосредственно элементы DOM (что очень часто встречается с jQuery, например). В этом подходе вы должны отслеживать, когда элементы меняются, а также обрабатывать фактическую манипуляцию напрямую. Может быть сложно отслеживать изменения, потенциально делая ваш пользовательский интерфейс непредсказуемым. Когда вы устанавливаете объект стиля на основе условия, вы описываете, как пользовательский интерфейс должен выглядеть как функция состояния приложения. Существует четкий поток информации, который движется только в одном направлении. Это предпочтительный метод при написании приложений с помощью React.
</section>

## Instructions
<section id='instructions'>
The code editor has a simple controlled input component with a styled border. You want to style this border red if the user types more than 15 characters of text in the input box. Add a condition to check for this and, if the condition is valid, set the input border style to <code>3px solid red</code>. You can try it out by entering text in the input.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>GateKeeper</code> component should render a <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.find('div').length === 1; })());
  - text: The <code>GateKeeper</code> component should be initialized with a state key <code>input</code> set to an empty string.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.state().input === ''; })());
  - text: The <code>GateKeeper</code> component should render an <code>h3</code> tag and an <code>input</code> tag.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.find('h3').length === 1 && mockedComponent.find('input').length === 1; })());
  - text: The <code>input</code> tag should initially have a style of <code>1px solid black</code> for the <code>border</code> property.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.find('input').props().style.border === '1px solid black'; })());
  - text: The <code>input</code> tag should be styled with a border of <code>3px solid red</code> if the input value in state is longer than 15 characters.
    testString: 'async () => {  const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); const simulateChange = (el, value) => el.simulate(''change'', {target: {value}}); let initialStyle = mockedComponent.find(''input'').props().style.border; const state_1 = () => { mockedComponent.setState({input: ''this is 15 char'' }); return waitForIt(() => mockedComponent.find(''input'').props().style.border )}; const state_2 = () => { mockedComponent.setState({input: ''A very long string longer than 15 characters.'' }); return waitForIt(() => mockedComponent.find(''input'').props().style.border )}; const style_1 = await state_1(); const style_2 = await state_2(); assert(initialStyle === ''1px solid black'' && style_1 === ''1px solid black'' && style_2 === ''3px solid red''); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // change code below this line

    // change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<GateKeeper />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    if (this.state.input.length > 15) {
      inputStyle.border = '3px solid red';
    };
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};
```

</section>
