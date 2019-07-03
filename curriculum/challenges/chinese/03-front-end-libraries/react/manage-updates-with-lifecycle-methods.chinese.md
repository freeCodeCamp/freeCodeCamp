---
id: 5a24c314108439a4d403617f
title: Manage Updates with Lifecycle Methods
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Manage Updates with Lifecycle Methods
---

## Description
<section id='description'>
另一个生命周期方法是<code>componentWillReceiveProps()</code>，只要组件将要接收新的 props 就会调用它。此方法接收新的 props（通常写为<code>nextProps</code>）作为参数。你可以使用此参数并与<code>this.props</code>进行比较，并在组件更新之前执行操作。例如，你可以在处理更新之前在本地调用<code>setState()</code>。
还有一个方法是<code>componentDidUpdate()</code>，它在组件重新渲染后立即调用。请注意，渲染和装载在组件生命周期中是不同的。当页面第一次加载时，所有组件都被装载，这就是调用<code>componentWillMount()</code>和<code>componentDidMount()</code>等方法的地方。此后，随着 state 的变化，组件会重新渲染自己。下一个挑战将更详细地讨论这一点。
</section>

## Instructions
<section id='instructions'>
子组件<code>Dialog</code>从其父组件<code>Controller</code>接收<code>message</code>props。在<code>Dialog</code>组件中编写<code>componentWillReceiveProps()</code>方法，并将<code>this.props</code>和<code>nextProps</code>记录到控制台。你需要将<code>nextProps</code>作为参数传递给此方法，虽然可以将其命名为任何名称，但请将其命名为<code>nextProps</code>。
接下来，在<code>Dialog</code>组件中添加<code>componentDidUpdate()</code>，并记录一条说明组件已更新的语句。此方法的工作方式类似于为你提供的<code>componentWillUpdate()</code>。现在单击按钮更改消息并观察浏览器控制台。控制台语句的顺序显示了调用方法的顺序。
<strong>注意：</strong>&nbsp;为了通过测试，你需要将生命周期方法编写为普通函数，而不是箭头函数（将生命周期方法编写为箭头函数也没有好处）。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Controller</code>组件应该将<code>Dialog</code>组件渲染为子组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Controller)); return mockedComponent.find('Controller').length === 1 && mockedComponent.find('Dialog').length === 1; })(), '<code>Controller</code>组件应该将<code>Dialog</code>组件渲染为子组件。');
  - text: <code>Dialog</code>组件中的<code>componentWillReceiveProps</code>方法应将<code>this.props</code>记录到控制台。
    testString: assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentWillReceiveProps.toString().replace(/ /g,''); return lifecycleChild.includes('console.log') && lifecycleChild.includes('this.props') })(), '<code>Dialog</code>组件中的<code>componentWillReceiveProps</code>方法应将<code>this.props</code>记录到控制台。');
  - text: <code>Dialog</code>组件中的<code>componentWillReceiveProps</code>方法应将<code>nextProps</code>记录到控制台。
    testString: assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentWillReceiveProps.toString().replace(/ /g,''); const nextPropsAsParameterTest = /componentWillReceiveProps(| *?= *?)(\(|)nextProps(\)|)( *?=> *?{| *?{|{)/; const nextPropsInConsoleLogTest = /console\.log\(.*?nextProps\b.*?\)/; return ( lifecycleChild.includes('console.log') && nextPropsInConsoleLogTest.test(lifecycleChild) && nextPropsAsParameterTest.test(lifecycleChild) ); })(), '<code>Dialog</code>组件中的<code>componentWillReceiveProps</code>方法应将<code>nextProps</code>记录到控制台。');
  - text: <code>Dialog</code>组件应调用<code>componentDidUpdate</code>方法并将消息记录到控制台。
    testString: assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentDidUpdate.toString().replace(/ /g,''); return lifecycleChild.length !== 'undefined' && lifecycleChild.includes('console.log'); })(), '<code>Dialog</code>组件应调用<code>componentDidUpdate</code>方法并将消息记录到控制台。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>






    <div id='jsx-seed'>
    
```jsx
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line

  // change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
      </div>
    );
  }
};
    
```
</div>


### After Test
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<Controller />, document.getElementById('root'))

```

</div>



</section>

## Solution
<section id='solution'>

```js
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log('Component is about to update...');
  }
  // change code below this line
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  componentDidUpdate() {
    console.log('Component re-rendered');
  }
  // change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
 this.changeMessage = this.changeMessage.bind(this); 
  }
  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
      </div>
    );
  }
};
```

</section>
              