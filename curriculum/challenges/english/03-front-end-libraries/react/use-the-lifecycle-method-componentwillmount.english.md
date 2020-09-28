---
id: 5a24c314108439a4d403617c
title: Use the Lifecycle Method componentWillMount
challengeType: 6
forumTopicId: 301423
---

## Description

<section id='description'>

React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time. This can be before they are rendered, before they update, before they receive props, before they unmount, and so on. Here is a list of some of the main lifecycle methods:
<code>componentWillMount()</code>
<code>componentDidMount()</code>
<code>shouldComponentUpdate()</code>
<code>componentDidUpdate()</code>
<code>componentWillUnmount()</code>
The next several lessons will cover some of the basic use cases for these lifecycle methods.

<strong>Note:</strong> The `componentWillMount` Lifecycle method will be deprecated in a future version of 16.X and removed in version 17. [(Source)](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)
</section>

## Instructions
<section id='instructions'>

The <code>componentWillMount()</code> method is called before the <code>render()</code> method when a component is being mounted to the DOM. Log something to the console within <code>componentWillMount()</code> - you may want to have your browser console open to see the output.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should render a <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('div').length === 1; })());
  - text: <code>console.log</code> should be called in <code>componentWillMount</code>.
    testString: assert((function() { const lifecycle = React.createElement(MyComponent).type.prototype.componentWillMount.toString().replace(/ /g,''); return lifecycle.includes('console.log('); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line

    // Change code above this line
  }
  render() {
    return <div />
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
  }
  componentWillMount() {
    // Change code below this line
    console.log('Component is mounting...');
    // Change code above this line
  }
  render() {
    return <div />
  }
};
```

</section>
