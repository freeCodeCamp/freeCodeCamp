---
id: 5a24c314108439a4d403617a
challengeType: 6
forumTopicId: 301403
title: 将 State 作为 Props 传递给子组件
---

## Description
<section id='description'>
在之前的挑战中，你看到了很多将 props 传递给子 JSX 元素和子 React 组件的例子。你可能想知道那些 props 是从哪里来的。一个常见的模式是：有状态组件中包含对应用程序很重要的<code>state</code>，然后用它渲染子组件。你希望这些组件能够访问该<code>state</code>的某些部分，就把这些部分作为 props 传入。
例如，也许你有一个<code>App</code>组件可以渲染<code>Navbar</code>以及其他组件。在你的<code>App</code>中，你的<code>state</code>中包含大量用户信息，但是<code>Navbar</code>只需要访问用户的用户名就可以显示出来，这时你将该<code>state</code>作为一个 prop 传递给<code>Navbar</code>组件即可。
这个模式说明了 React 中的一些重要范例。第一个是<em>单向数据流</em>，state 沿着应用程序组件树的一个方向流动，从有状态父组件到子组件，子组件只接收它们需要的 state 数据。第二，复杂的有状态应用程序可以分解成几个，或者可能是一个单一的有状态组件。其余组件只是从父组件简单的接收 state 作为 props，并从该 state 渲染 UI。它开始创建一种分离，在这种分离中，state 管理在代码的一部分中处理，而 UI 渲染在另一部分中处理。将 state 逻辑与 UI 逻辑分离是 React 的关键原则之一。当它被正确使用时，它使得复杂的、有状态的应用程序的设计变得更容易管理。
</section>

## Instructions
<section id='instructions'>
<code>MyApp</code>组件是有状态的，它将<code>Navbar</code>组件渲染成它的为子组件。将<code>MyApp</code>组件<code>state</code>中的<code>name</code>属性向下传递给子组件，然后在<code>h1</code>标签中显示<code>name</code>，<code>name</code>是<code>Navbar</code>render 方法的一部分。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyApp</code>组件应该在内部渲染一个<code>Navbar</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find('MyApp').length === 1 && mockedComponent.find('Navbar').length === 1; })());
  - text: <code>Navbar</code>组件应该接收<code>Navbar</code>的 state 中的<code>name</code>属性作为 props。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const setState = () => { mockedComponent.setState({name: ''TestName''}); return waitForIt(() => mockedComponent.find(''Navbar'').props() )}; const navProps = await setState(); assert(navProps.name === ''TestName''); }; '
  - text: <code>Navbar</code>中的<code>h1</code>元素应该渲染 prop<code>name</code>。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const navH1Before = mockedComponent.find(''Navbar'').find(''h1'').text(); const setState = () => { mockedComponent.setState({name: ''TestName''}); return waitForIt(() => mockedComponent.find(''Navbar'').find(''h1'').text() )}; const navH1After = await setState(); assert(new RegExp(''TestName'').test(navH1After) && navH1After !== navH1Before); }; '

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
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar /* your code here */ />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {/* your code here */} </h1>
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
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
```

</section>
