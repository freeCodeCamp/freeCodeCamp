---
id: 5a24c314108439a4d403617b
challengeType: 6
forumTopicId: 301400
title: 传递回调作为 Props
---

## Description
<section id='description'>
你可以将<code>state</code>作为 props 传递给子组件，但不仅限于传递数据。你也可以将处理函数或在 React 组件中定义的任何方法传递给子组件。这就是允许子组件与父组件交互的方式。你可以把方法像普通 prop 一样传递给子组件，它会被分配一个名字，你可以在子组件中的<code>this.props</code>下访问该方法的名字。
</section>

## Instructions
<section id='instructions'>
代码编辑器中列出了三个组件。<code>MyApp</code>是父组件，<code>GetInput</code>和<code>RenderInput</code>是它的子组件。将<code>GetInput</code>组件添加到<code>MyApp</code>的 render 方法，然后将<code>MyApp</code>的<code>state</code>中的<code>inputValue</code>传入名为<code>input</code>的 prop。还要创建一个名为<code>handleChange</code>的 prop，并将输入处理程序<code>handleChange</code>传递给它。
接下来，将<code>RenderInput</code>添加到<code>MyApp</code>中的 render 方法中，然后创建一个名为<code>input</code>的 prop，并将<code>state</code>中的<code>inputValue</code>传递给它。完成后，你将能够在<code>GetInput</code>组件中的<code>input</code>字段中键入内容，然后该组件通过 props 调用其父组件中的处理函数方法。这将更新处于父组件<code>state</code>中的 input，该 input 将作为 props 传递给两个子组件。观察数据如何在组件之间流动，以及单一数据源如何保持父组件<code>state</code>。诚然，这个示例有点做作，但是应该能用来说明数据和回调是如何在 React 组件之间传递的。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该渲染<code>MyApp</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('MyApp').length === 1; })());
  - text: 应该渲染<code>GetInput</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('GetInput').length === 1; })());
  - text: 应该渲染<code>RenderInput</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('RenderInput').length === 1; })());
  - text: <code>GetInput</code>组件应该接收<code>MyApp</code>的 state 属性<code>inputValue</code>作为 props，并包含一个修改<code>MyApp</code>state 的<code>input</code>元素。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const state_1 = () => { mockedComponent.setState({inputValue: ''''}); return waitForIt(() => mockedComponent.state() )}; const state_2 = () => { mockedComponent.find(''input'').simulate(''change'', {target: {value: ''TestInput''}}); return waitForIt(() => mockedComponent.state() )}; const updated_1 = await state_1(); const updated_2 = await state_2(); assert(updated_1.inputValue === '''' && updated_2.inputValue === ''TestInput''); }; '
  - text: <code>RenderInput</code>组件应该接收<code>MyApp</code>state 属性<code>inputValue</code>作为 props。
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
