---
id: 5a24c314108439a4d403617b
title: Pass a Callback as Props
challengeType: 6
isRequired: false
forumTopicId: 301400
localeTitle: Передача обратного вызова в качестве реквизита
---

## Description
<section id='description'>
Вы можете передать <code>state</code> качестве реквизита дочерних компонентов, но вы не ограничены передачей данных. Вы также можете передавать функции обработчика или любой метод, определенный в компоненте React для дочернего компонента. Так вы позволяете дочерним компонентам взаимодействовать со своими родительскими компонентами. Вы передаете методы ребенку точно так же, как обычный пропеллер. Ему назначено имя, и у вас есть доступ к этому имени метода под <code>this.props</code> в дочернем компоненте.
</section>

## Instructions
<section id='instructions'>
В редакторе кода есть три компонента. <code>MyApp</code> компонент является родителем , который будет оказывать <code>GetInput</code> и <code>RenderInput</code> дочерние компоненты. Добавьте <code>GetInput</code> компонент к методу визуализации в <code>MyApp</code> , а затем передать его на опору называется <code>input</code> , назначенный <code>inputValue</code> из <code>MyApp</code> «s <code>state</code> . Также создайте <code>handleChange</code> называемое <code>handleChange</code> и передайте ему обработчик <code>handleChange</code> ввода. Затем добавьте <code>RenderInput</code> в метод рендеринга в <code>MyApp</code> , затем создайте <code>inputValue</code> с именем <code>input</code> и передайте <code>inputValue</code> из <code>state</code> в него. После того, как вы закончите, вы сможете <code>input</code> поле <code>input</code> в компоненте <code>GetInput</code> , которое затем вызывает метод обработчика в своем родителе через реквизиты. Это обновляет ввод в <code>state</code> родителя, который передается как реквизит для обоих детей. Наблюдайте за тем, как данные передаются между компонентами и как единственный источник истины остается в <code>state</code> родительского компонента. По общему признанию, этот пример немного надуман, но должен служить для иллюстрации того, как данные и обратные вызовы могут быть переданы между компонентами React.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>MyApp</code> component should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('MyApp').length === 1; })());
  - text: The <code>GetInput</code> component should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('GetInput').length === 1; })());
  - text: The <code>RenderInput</code> component should render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('RenderInput').length === 1; })());
  - text: The <code>GetInput</code> component should receive the <code>MyApp</code> state property <code>inputValue</code> as props and contain an <code>input</code> element which modifies <code>MyApp</code> state.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const state_1 = () => { mockedComponent.setState({inputValue: ''''}); return waitForIt(() => mockedComponent.state() )}; const state_2 = () => { mockedComponent.find(''input'').simulate(''change'', {target: {value: ''TestInput''}}); return waitForIt(() => mockedComponent.state() )}; const updated_1 = await state_1(); const updated_2 = await state_2(); assert(updated_1.inputValue === '''' && updated_2.inputValue === ''TestInput''); }; '
  - text: The <code>RenderInput</code> component should receive the <code>MyApp</code> state property <code>inputValue</code> as props.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const state_1 = () => { mockedComponent.setState({inputValue: ''TestName''}); return waitForIt(() => mockedComponent )}; const updated_1 = await state_1(); assert(updated_1.find(''p'').text().includes(''TestName'')); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* change code below this line */ }

        { /* change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

```

</div>

### After Tests
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<MyApp />, document.getElementById('root'))

```

</div>

</section>

## Solution
<section id='solution'>

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
         <GetInput
           input={this.state.inputValue}
           handleChange={this.handleChange}/>
         <RenderInput
           input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
```

</section>
