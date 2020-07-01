---
id: 5a24c314108439a4d403617b
title: Pass a Callback as Props
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301400
---

## Description
<section id='description'>
You can pass <code>state</code> as props to child components, but you're not limited to passing data. You can also pass handler functions or any method that's defined on a React component to a child component. This is how you allow child components to interact with their parent components. You pass methods to a child just like a regular prop. It's assigned a name and you have access to that method name under <code>this.props</code> in the child component.
</section>

## Instructions
<section id='instructions'>
There are three components outlined in the code editor. The <code>MyApp</code> component is the parent that will render the <code>GetInput</code> and <code>RenderInput</code> child components. Add the <code>GetInput</code> component to the render method in <code>MyApp</code>, then pass it a prop called <code>input</code> assigned to <code>inputValue</code> from <code>MyApp</code>&apos;s <code>state</code>. Also create a prop called <code>handleChange</code> and pass the input handler <code>handleChange</code> to it.
Next, add <code>RenderInput</code> to the render method in <code>MyApp</code>, then create a prop called <code>input</code> and pass the <code>inputValue</code> from <code>state</code> to it. Once you are finished you will be able to type in the <code>input</code> field in the <code>GetInput</code> component, which then calls the handler method in its parent via props. This updates the input in the <code>state</code> of the parent, which is passed as props to both children. Observe how the data flows between the components and how the single source of truth remains the <code>state</code> of the parent component. Admittedly, this example is a bit contrived, but should serve to illustrate how data and callbacks can be passed between React components.
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


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<MyApp />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
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
