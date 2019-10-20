---
id: 5a24c314108439a4d403617f
title: Manage Updates with Lifecycle Methods
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用生命周期方法管理更新
---

## Description
<section id="description">另一个生命周期方法是<code>componentWillReceiveProps()</code> ，只要组件正在接收新的道具就会调用它。此方法接收新的props作为参数，通常写为<code>nextProps</code> 。您可以使用此参数并与<code>this.props</code>进行比较，并在组件更新之前执行操作。例如，您可以在处理更新之前在本地调用<code>setState()</code> 。另一种方法是<code>componentDidUpdate()</code> ，并在组件重新渲染后立即调用。请注意，渲染和安装在组件生命周期中被视为不同的东西。首次加载页面时，将挂载所有组件，这是调用<code>componentWillMount()</code>和<code>componentDidMount()</code>位置。在此之后，随着状态的改变，组件会重新渲染自己。下一个挑战将更详细地介绍这一点。 </section>

## Instructions
<section id="instructions">子组件<code>Dialog</code>从其父组件<code>Controller</code>组件接收<code>message</code>道具。在<code>Dialog</code>组件中编写<code>componentWillReceiveProps()</code>方法，并将<code>this.props</code>和<code>nextProps</code>到控制台。您需要将<code>nextProps</code>作为参数传递给此方法，虽然可以将其命名为任何名称，但<code>nextProps</code>其命名为<code>nextProps</code> 。接下来，在<code>Dialog</code>组件中添加<code>componentDidUpdate()</code> ，并记录一条说明组件已更新的语句。此方法的工作方式类似于为您提供的<code>componentWillUpdate()</code> 。现在单击按钮更改消息并观察浏览器控制台。控制台语句的顺序显示调用方法的顺序。 <strong>注意：</strong>您需要将生命周期方法编写为普通函数而不是箭头函数来传递测试（将生命周期方法编写为箭头函数也没有优势）。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Controller</code>组件应将<code>Dialog</code>组件呈现为子组件。
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Controller)); return mockedComponent.find("Controller").length === 1 && mockedComponent.find("Dialog").length === 1; })(), "The <code>Controller</code> component should render the <code>Dialog</code> component as a child.");'
  - text: <code>Dialog</code>组件中的<code>componentWillReceiveProps</code>方法应将<code>this.props</code>记录到控制台。
    testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentWillReceiveProps.toString().replace(/ /g,""); return lifecycleChild.includes("console.log") && lifecycleChild.includes("this.props") })(), "The <code>componentWillReceiveProps</code> method in the <code>Dialog</code> component should log <code>this.props</code> to the console.");'
  - text: <code>Dialog</code>组件中的<code>componentWillReceiveProps</code>方法应将<code>nextProps</code>记录到控制台。
    testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentWillReceiveProps.toString().replace(/ /g,""); const nextPropsAsParameterTest = /componentWillReceiveProps(| *?= *?)(\(|)nextProps(\)|)( *?=> *?{| *?{|{)/; const nextPropsInConsoleLogTest = /console\.log\(.*?nextProps\b.*?\)/; return ( lifecycleChild.includes("console.log") && nextPropsInConsoleLogTest.test(lifecycleChild) && nextPropsAsParameterTest.test(lifecycleChild) ); })(), "The <code>componentWillReceiveProps</code> method in the <code>Dialog</code> component should log <code>nextProps</code> to the console.");'
  - text: <code>Dialog</code>组件应调用<code>componentDidUpdate</code>方法并将消息记录到控制台。
    testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentDidUpdate.toString().replace(/ /g,""); return lifecycleChild.length !== "undefined" && lifecycleChild.includes("console.log"); })(), "The <code>Dialog</code> component should call the <code>componentDidUpdate</code> method and log a message to the console.");'

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
</section>
