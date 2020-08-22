---
id: 5a24c314108439a4d403617b
title: Pass a Callback as Props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将回调作为道具传递
---

## Description
<section id="description">您可以将<code>state</code>作为道具传递给子组件，但您不仅限于传递数据。您还可以将处理函数或在React组件上定义的任何方法传递给子组件。这是允许子组件与其父组件交互的方式。您可以将方法传递给孩子，就像常规道具一样。它被分配了一个名称，您可以在子组件中的<code>this.props</code>下访问该方法名称。 </section>

## Instructions
<section id="instructions">代码编辑器中列出了三个组件。 <code>MyApp</code>组件是将呈现<code>GetInput</code>和<code>RenderInput</code>子组件的父组件。将<code>GetInput</code>组件添加到<code>MyApp</code>的render方法，然后从<code>MyApp</code>的<code>state</code>向它传递一个名为<code>input</code>的prop，该<code>input</code>分配给<code>inputValue</code> 。还要创建一个名为<code>handleChange</code>的prop，并将输入处理程序<code>handleChange</code>给它。接下来，将<code>RenderInput</code>添加到<code>MyApp</code>的render方法，然后创建一个名为<code>input</code>的prop，并将<code>inputValue</code>从<code>state</code>传递给它。完成后，您将能够在<code>GetInput</code>组件中<code>input</code>字段，然后通过props调用其父级中的处理程序方法。这将更新父级<code>state</code>的输入，该输入作为props传递给两个子级。观察数据如何在组件之间流动以及单个事实源如何保持父组件的<code>state</code> 。不可否认，这个例子有点人为，但应该用来说明如何在React组件之间传递数据和回调。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyApp</code>组件应该呈现。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('MyApp').length === 1; })());
  - text: <code>GetInput</code>组件应该呈现。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('GetInput').length === 1; })());
  - text: <code>RenderInput</code>组件应该呈现。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('RenderInput').length === 1; })());
  - text: <code>GetInput</code>组件应该将<code>MyApp</code>状态属性<code>inputValue</code>作为props接收，并包含一个修改<code>MyApp</code>状态的<code>input</code>元素。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const state_1 = () => { mockedComponent.setState({inputValue: ''''}); return waitForIt(() => mockedComponent.state() )}; const state_2 = () => { mockedComponent.find(''input'').simulate(''change'', {target: {value: ''TestInput''}}); return waitForIt(() => mockedComponent.state() )}; const updated_1 = await state_1(); const updated_2 = await state_2(); assert(updated_1.inputValue === '''' && updated_2.inputValue === ''TestInput''); }; '
  - text: <code>RenderInput</code>组件应该将<code>MyApp</code>状态属性<code>inputValue</code>作为props接收。
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
      inputValue: "
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
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
