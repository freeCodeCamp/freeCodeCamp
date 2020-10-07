---
id: 5a24c314108439a4d4036189
challengeType: 6
forumTopicId: 301380
title: 根据组件状态有条件地更改内联 CSS
---

## Description
<section id='description'>
此时，你已经看到了一些条件渲染的应用程序和内联样式的使用。这里还有一个将这两个主题结合在一起的例子。你也可以根据 React 组件的 state 有条件地渲染 CSS。要执行此操作，请检查条件，如果满足该条件，则修改在 render 方法中分配给 JSX 元素的样式对象。
这个范例对于更加容易理解，因为相比传统的通过直接修改 DOM 元素来应用样式的方法（这在 jQuery 中非常常见），这种方法是一个戏剧性的转变。在传统方法中，你必须跟踪元素何时发生变化，并直接处理实际操作，这使得跟踪变化变得很困难，也可能会让你的用户界面变得不可预测。当你根据一个条件设置一个样式对象时，你描述了 UI 作为应用程序的状态函数应当如何展现。如此便有一个清晰的单向流动的信息流。这是使用 React 编写应用程序时的首选方法。
</section>

## Instructions
<section id='instructions'>
代码编辑器有一个简单的带有边框样式的受控 input 组件。如果用户在输入框中键入超过 15 个字符的文本，你希望将此边框变成红色。添加一个条件来检查这一点，如果条件有效，则将 input 的边框样式设置为<code>3px solid red</code>。你可以通过在 input 中输入文本来尝试。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>GateKeeper</code>组件应该渲染一个de>div</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.find('div').length === 1; })());
  - text: <code>GateKeeper</code>组件应使用设置为空字符串的 state <code>input</code>进行初始化。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.state().input === ''; })());
  - text: <code>GateKeeper</code>组件应该渲染一个<code>h3</code>标签和一个<code>input</code>标签。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.find('h3').length === 1 && mockedComponent.find('input').length === 1; })());
  - text: <code>input</code>标签<code>border</code>属性的样式应该初始化为<code>1px solid black</code>。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(GateKeeper)); return mockedComponent.find('input').props().style.border === '1px solid black'; })());
  - text: 如果 state 中 input 的值超过 15 个字符，则 <code>input</code> 标签的 border 样式应为<code>3px solid red</code>。
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


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<GateKeeper />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
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
