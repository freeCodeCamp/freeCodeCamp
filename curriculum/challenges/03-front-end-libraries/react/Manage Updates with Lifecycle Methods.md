---
id: 5a24c314108439a4d403617f
title: Manage Updates with Lifecycle Methods
challengeType: 6
isRequired: false
---

## Description
<section id='description'>
Another lifecycle method is <code>componentWillReceiveProps()</code> which is called whenever a component is receiving new props. This method receives the new props as an argument, which is usually written as <code>nextProps</code>. You can use this argument and compare with <code>this.props</code> and perform actions before the component updates. For example, you may call <code>setState()</code> locally before the update is processed.
Another method is <code>componentDidUpdate()</code>, and is called immediately after a component re-renders. Note that rendering and mounting are considered different things in the component lifecycle. When a page first loads, all components are mounted and this is where methods like <code>componentWillMount()</code> and <code>componentDidMount()</code> are called. After this, as state changes, components re-render themselves. The next challenge covers this in more detail.
</section>

## Instructions
<section id='instructions'>
The child component <code>Dialog</code> receives <code>message</code> props from its parent, the <code>Controller</code> component. Write the <code>componentWillReceiveProps()</code> method in the <code>Dialog</code> component and have it log <code>this.props</code> and <code>nextProps</code> to the console. You'll need to pass <code>nextProps</code> as an argument to this method and although it's possible to name it anything, name it <code>nextProps</code> here.
Next, add <code>componentDidUpdate()</code> in the <code>Dialog</code> component, and log a statement that says the component has updated. This method works similar to <code>componentWillUpdate()</code>, which is provided for you. Now click the button to change the message and watch your browser console. The order of the console statements show the order the methods are called.
<strong>Note:</strong>&nbsp;You'll need to write the lifecycle methods as normal functions and not as arrow functions to pass the tests (there is also no advantage to writing lifecycle methods as arrow functions).
</section>

## Tests
<section id='tests'>

```yml
- text: The <code>Controller</code> component should render the <code>Dialog</code> component as a child.
  testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Controller)); return mockedComponent.find("Controller").length === 1 && mockedComponent.find("Dialog").length === 1; })(), "The <code>Controller</code> component should render the <code>Dialog</code> component as a child.");'
- text: The <code>componentWillReceiveProps</code> method in the <code>Dialog</code> component should log <code>this.props</code> to the console.
  testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentWillReceiveProps.toString().replace(/ /g,""); return lifecycleChild.includes("console.log") && lifecycleChild.includes("this.props") })(), "The <code>componentWillReceiveProps</code> method in the <code>Dialog</code> component should log <code>this.props</code> to the console.");'
- text: The <code>componentWillReceiveProps</code> method in the <code>Dialog</code> component should log <code>nextProps</code> to the console.
  testString: 'assert((function() { const lifecycleChild = React.createElement(Dialog).type.prototype.componentWillReceiveProps.toString().replace(/ /g,""); const nextPropsAsParameterTest = /componentWillReceiveProps(| *?= *?)(\(|)nextProps(\)|)( *?=> *?{| *?{|{)/; const nextPropsInConsoleLogTest = /console\.log\(.*?nextProps\b.*?\)/; return ( lifecycleChild.includes("console.log") && nextPropsInConsoleLogTest.test(lifecycleChild) && nextPropsAsParameterTest.test(lifecycleChild) ); })(), "The <code>componentWillReceiveProps</code> method in the <code>Dialog</code> component should log <code>nextProps</code> to the console.");'
- text: The <code>Dialog</code> component should call the <code>componentDidUpdate</code> method and log a message to the console.
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
