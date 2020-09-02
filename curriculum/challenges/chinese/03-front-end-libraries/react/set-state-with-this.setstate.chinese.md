---
id: 5a24c314108439a4d4036173
title: Set State with this.setState
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用this.setState设置State
---

## Description
<section id="description">之前的挑战包括组件<code>state</code>以及如何在<code>constructor</code>初始化状态。还有一种方法可以改变组件的<code>state</code> 。 React提供了一种更新名为<code>setState</code>组件<code>state</code>的方法。您可以在组件类中调用<code>setState</code>方法，如下所示： <code>this.setState()</code> ，传入一个具有键值对的对象。键是您的状态属性，值是更新的状态数据。例如，如果我们在状态中存储<code>username</code>并想要更新它，它将如下所示： <blockquote> this.setState（{ <br>用户名：&#39;Lewis&#39; <br> }）; </blockquote> React希望你永远不要直接修改<code>state</code> ，而是在状态发生变化时总是使用<code>this.setState()</code> 。此外，您应该注意React可以批量处理多个状态更新以提高性能。这意味着通过<code>setState</code>方法的状态更新可以是异步的。 <code>setState</code>方法有一种替代语法，它提供了解决此问题的方法。这很少需要，但记住它是件好事！有关更多详细信息，请参阅<a target="_blank" href="https://facebook.github.io/react/docs/state-and-lifecycle.html">React文档</a> 。 </section>

## Instructions
<section id="instructions">代码编辑器中有一个<code>button</code>元素，它有一个<code>onClick()</code>处理程序。当<code>button</code>在浏览器中收到单击事件时，将触发此处理程序，并运行<code>MyComponent</code>定义的<code>handleClick</code>方法。在<code>handleClick</code>方法中，使用<code>this.setState()</code>更新组件<code>state</code> 。设置<code>name</code>的属性<code>state</code>为等于字符串<code>React Rocks!</code> 。单击按钮并观察呈现的状态更新。如果您还不完全了解点击处理程序代码在此时的工作原理，请不要担心。它涵盖了即将到来的挑战。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>MyComponent</code>的状态应使用键值对<code>{ name: Initial State }</code> 。'
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state(''name'') === ''Initial State'');'
  - text: <code>MyComponent</code>应该呈现一个<code>h1</code>标头。
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).find('h1').length === 1);
  - text: 渲染的<code>h1</code>标头应包含从组件状态呈现的文本。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: ''TestName'' }); return waitForIt(() => mockedComponent.html()); }; const firstValue = await first(); assert(/<h1>TestName<\/h1>/.test(firstValue)); };'
  - text: 在<code>MyComponent</code>上调用<code>handleClick</code>方法应该将state属性设置为等于<code>React Rocks!</code> 。
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
