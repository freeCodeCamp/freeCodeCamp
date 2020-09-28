---
id: 5a24c314108439a4d4036174
title: Bind 'this' to a Class Method
challengeType: 6
forumTopicId: 301379
---

## Description
<section id='description'>
In addition to setting and updating <code>state</code>, you can also define methods for your component class. A class method typically needs to use the <code>this</code> keyword so it can access properties on the class (such as <code>state</code> and <code>props</code>) inside the scope of the method. There are a few ways to allow your class methods to access <code>this</code>.
One common way is to explicitly bind <code>this</code> in the constructor so <code>this</code> becomes bound to the class methods when the component is initialized. You may have noticed the last challenge used <code>this.handleClick = this.handleClick.bind(this)</code> for its <code>handleClick</code> method in the constructor. Then, when you call a function like <code>this.setState()</code> within your class method, <code>this</code> refers to the class and will not be <code>undefined</code>.
<strong>Note:</strong>&nbsp;The <code>this</code> keyword is one of the most confusing aspects of JavaScript but it plays an important role in React. Although its behavior here is totally normal, these lessons aren't the place for an in-depth review of <code>this</code> so please refer to other lessons if the above is confusing!
</section>

## Instructions
<section id='instructions'>
The code editor has a component with a <code>state</code> that keeps track of the text. It also has a method which allows you to set the text to <code>"You clicked!"</code>. However, the method doesn't work because it's using the <code>this</code> keyword that is undefined. Fix it by explicitly binding <code>this</code> to the <code>handleClick()</code> method in the component's constructor.
Next, add a click handler to the <code>button</code> element in the render method. It should trigger the <code>handleClick()</code> method when the button receives a click event. Remember that the method you pass to the <code>onClick</code> handler needs curly braces because it should be interpreted directly as JavaScript.
Once you complete the above steps you should be able to click the button and see <code>You clicked!</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should return a <code>div</code> element which wraps two elements, a button and an <code>h1</code> element, in that order.
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).find('div').length === 1 && Enzyme.mount(React.createElement(MyComponent)).find('div').childAt(0).type() === 'button' && Enzyme.mount(React.createElement(MyComponent)).find('div').childAt(1).type() === 'h1');
  - text: 'The state of <code>MyComponent</code> should initialize with the key value pair <code>{ text: "Hello" }</code>.'
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state(''text'') === ''Hello'');'
  - text: Clicking the <code>button</code> element should run the <code>handleClick</code> method and set the state <code>text</code> to <code>"You clicked!"</code>.
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
    // Change code below this line

    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
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
