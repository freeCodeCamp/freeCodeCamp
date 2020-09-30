---
id: 5a24c314108439a4d4036173
title: Set State with this.setState
challengeType: 6
forumTopicId: 301412
---

## Description
<section id='description'>
The previous challenges covered component <code>state</code> and how to initialize state in the <code>constructor</code>. There is also a way to change the component's <code>state</code>. React provides a method for updating component <code>state</code> called <code>setState</code>. You call the <code>setState</code> method within your component class like so: <code>this.setState()</code>, passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data. For instance, if we were storing a <code>username</code> in state and wanted to update it, it would look like this:

```jsx
this.setState({
  username: 'Lewis'
});
```

React expects you to never modify <code>state</code> directly, instead always use <code>this.setState()</code> when state changes occur. Also, you should note that React may batch multiple state updates in order to improve performance. What this means is that state updates through the <code>setState</code> method can be asynchronous. There is an alternative syntax for the <code>setState</code> method which provides a way around this problem. This is rarely needed but it's good to keep it in mind! Please consult the <a target="_blank" href="https://facebook.github.io/react/docs/state-and-lifecycle.html">React documentation</a> for further details.
</section>

## Instructions
<section id='instructions'>
There is a <code>button</code> element in the code editor which has an <code>onClick()</code> handler. This handler is triggered when the <code>button</code> receives a click event in the browser, and runs the <code>handleClick</code> method defined on <code>MyComponent</code>. Within the <code>handleClick</code> method, update the component <code>state</code> using <code>this.setState()</code>. Set the <code>name</code> property in <code>state</code> to equal the string <code>React Rocks!</code>.
Click the button and watch the rendered state update. Don't worry if you don't fully understand how the click handler code works at this point. It's covered in upcoming challenges.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'The state of <code>MyComponent</code> should initialize with the key value pair <code>{ name: Initial State }</code>.'
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state(''name'') === ''Initial State'');'
  - text: <code>MyComponent</code> should render an <code>h1</code> header.
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).find('h1').length === 1);
  - text: The rendered <code>h1</code> header should contain text rendered from the component&apos;s state.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: ''TestName'' }); return waitForIt(() => mockedComponent.html()); }; const firstValue = await first(); assert(/<h1>TestName<\/h1>/.test(firstValue)); };'
  - text: Calling the <code>handleClick</code> method on <code>MyComponent</code> should set the name property in state to equal <code>React Rocks!</code>.
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
    // Change code below this line

    // Change code above this line
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

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


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
     // Change code below this line
    this.setState({
      name: 'React Rocks!'
    });
    // Change code above this line
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
