---
id: 5a24c314108439a4d4036173
challengeType: 6
forumTopicId: 301412
title: 用 this.setState 设置状态
---

## Description
<section id='description'>
前面的挑战涵盖了组件的<code>state</code>以及如何在<code>constructor</code>中初始化 state。还有一种方法可以更改组件的<code>state</code>，React 提供了<code>setState</code>方法来更新组件的<code>state</code>。在组件类中调用<code>setState</code>方法如下所示：<code>this.setState()</code>，传入键值对的对象，其中键是 state 属性，值是更新后的 state 数据。例如，如果我们在 state 中存储<code>username</code>，并想要更新它，代码如下所示：

```jsx
this.setState({
  username: 'Lewis'
});
```

React 希望你永远不要直接修改<code>state</code>，而是在 state 发生改变时始终使用<code>this.setState()</code>。此外，你应该注意，React 可以批量处理多个 state 更新以提高性能。这意味着通过<code>setState</code>方法进行的 state 更新可以是异步的。<code>setState</code>方法有一种替代语法可以解决异步问题，虽然这很少用到，但是最好还是记住它！有关详细信息，请参阅<a target="_blank" href="https://facebook.github.io/react/docs/state-and-lifecycle.html">React 文档</a>。
</section>

## Instructions
<section id='instructions'>
代码编辑器中有一个<code>button</code>元素，它有一个<code>onClick()</code>处理程序。当<code>button</code>在浏览器中接收到单击事件时触发此处理程序，并运行<code>MyComponent</code>中定义的<code>handleClick</code>方法。在<code>handleClick</code>方法中，使用<code>this.setState()</code>更新组件的<code>state</code>。设置<code>state</code>中的<code>name</code>属性为字符串<code>React Rocks!</code>。
单击按钮查看渲染的 state 的更新。如果你不完全理解单击处理程序代码在此时的工作方式，请不要担心。在接下来的挑战中会有讲述。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>MyComponent</code>的 state 应该使用键值对 <code>{ name: Initial State }</code> 来初始化。'
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state(''name'') === ''Initial State'');'
  - text: <code>MyComponent</code>应该渲染一个<code>h1</code>标题。
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).find('h1').length === 1);
  - text: 渲染的<code>h1</code>标题中应该包含一段文本，这段文本是从组件的 state 中渲染出来的。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: ''TestName'' }); return waitForIt(() => mockedComponent.html()); }; const firstValue = await first(); assert(/<h1>TestName<\/h1>/.test(firstValue)); };'
  - text: 调用<code>MyComponent</code>的<code>handleClick</code>方法应该将 state 的 name 属性设置为<code>React Rocks!</code>。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: ''Before'' }); return waitForIt(() => mockedComponent.state(''name'')); }; const second = () => { mockedComponent.instance().handleClick(); return waitForIt(() => mockedComponent.state(''name'')); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === ''Before'' && secondValue === ''React Rocks!''); };'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line

    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
     // change code below this line
    this.setState({
      name: 'React Rocks!'
    });
    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

</section>
