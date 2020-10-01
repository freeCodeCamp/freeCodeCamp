---
id: 5a24c314108439a4d4036174
challengeType: 6
forumTopicId: 301379
title: 将 this 绑定到 Class 方法
---

## Description
<section id='description'>
除了设置和更新<code>state</code>之外，你还可以为组件类定义方法。类方法通常需要使用<code>this</code>关键字，以便它可以访问方法中类的属性（例如<code>state</code>和<code>props </code>）。有几种方法可以让你的类方法访问<code>this</code>。
一种常见的方法是在构造函数中显式地绑定<code>this</code>，这样当组件初始化时，<code>this</code>就会绑定到类方法。你可能已经注意到上一个挑战使用了<code>this.handleClick = this.handleClick.bind(this)</code>用于其在构造函数中的<code>handleClick</code>方法。然后，当你在类方法中调用像<code>this.setState()</code>这样的函数时，<code>this</code>指的是这个类，而不是<code>undefined</code>。
<strong>注意：</strong>&nbsp;<code>this</code>关键字是 JavaScript 中最令人困惑的方面之一，但它在 React 中扮演着重要的角色。虽然它的行为在这里是完全正常的，但是这些课程并不深入研究<code>this</code>，所以如果以上内容令你感到困惑，请参考其他课程！
</section>

## Instructions
<section id='instructions'>
代码编辑器有一个带有<code>state</code>的组件，用于跟踪项目计数。它还有一个方法，允许你增加此项目计数。但是，该方法不起作用，因为它使用了未定义的<code>this</code>关键字。可以通过将<code>this</code>显式绑定到组件构造函数中的<code>addItem()</code>方法来修复它。
接下来，向 render 方法中的<code>button</code>元素添加一个单击处理程序。当按钮接收到单击事件时，它应该触发<code>addItem()</code>方法。记住，传递给<code>onClick</code>处理程序的方法需要使用花括号，因为它应该直接被解释为 JavaScript。
完成上述步骤后，你应该可以单击按钮并查看 HTML 中的项目计数增量。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应返回<code>div</code>元素，该元素按顺序包含两个元素，一个按钮和一个<code>h1</code>元素。
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).find('div').length === 1 && Enzyme.mount(React.createElement(MyComponent)).find('div').childAt(0).type() === 'button' && Enzyme.mount(React.createElement(MyComponent)).find('div').childAt(1).type() === 'h1');
  - text: '<code>MyComponent</code>的 state 应该使用键值对<code>{ itemCount: 0 }</code>进行初始化。'
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state(''text'') === ''Hello'');'
  - text: 单击<code>button</code>元素应该运行<code>addItem</code>方法，并使 state<code>itemCount</code>的计数增加<code>1</code>。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ text: ''Hello'' }); return waitForIt(() => mockedComponent.state(''text'')); }; const second = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent.state(''text'')); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === ''Hello'' && secondValue === ''You clicked!''); };'

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
      text: "Hello"
    };
    // change code below this line

    // change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button>Click Me</button>
        { /* change code above this line */ }
        <h1>{this.state.text}</h1>
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
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
```

</section>
