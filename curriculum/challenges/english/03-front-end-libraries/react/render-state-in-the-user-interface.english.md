---
id: 5a24c314108439a4d4036171
title: Render State in the User Interface
challengeType: 6
forumTopicId: 301409
---

## Description
<section id='description'>
Once you define a component's initial state, you can display any part of it in the UI that is rendered. If a component is stateful, it will always have access to the data in <code>state</code> in its <code>render()</code> method. You can access the data with <code>this.state</code>.
If you want to access a state value within the <code>return</code> of the render method, you have to enclose the value in curly braces.
<code>State</code> is one of the most powerful features of components in React. It allows you to track important data in your app and render a UI in response to changes in this data. If your data changes, your UI will change. React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like.
Note that if you make a component stateful, no other components are aware of its <code>state</code>. Its <code>state</code> is completely encapsulated, or local to that component, unless you pass state data to a child component as <code>props</code>. This notion of encapsulated <code>state</code> is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.
</section>

## Instructions
<section id='instructions'>
In the code editor, <code>MyComponent</code> is already stateful. Define an <code>h1</code> tag in the component's render method which renders the value of <code>name</code> from the component's state.
<strong>Note:</strong>&nbsp;The <code>h1</code> should only render the value from <code>state</code> and nothing else. In JSX, any code you write with curly braces <code>{ }</code> will be treated as JavaScript. So to access the value from <code>state</code> just enclose the reference in curly braces.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should have a key <code>name</code> with value <code>freeCodeCamp</code> stored in its state.
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).state('name') === 'freeCodeCamp');
  - text: <code>MyComponent</code> should render an <code>h1</code> header enclosed in a single <code>div</code>.
    testString: assert(/<div><h1>.*<\/h1><\/div>/.test(Enzyme.mount(React.createElement(MyComponent)).html()));
  - text: The rendered <code>h1</code> header should contain text rendered from the component&apos;s state.
    testString: |
      async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: 'TestName' }); return waitForIt(() => mockedComponent.html()) }; const firstValue = await first(); const getValue = firstValue.replace(/\s/g, ''); assert(getValue === '<div><h1>TestName</h1></div>'); };

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
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
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
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

</section>
