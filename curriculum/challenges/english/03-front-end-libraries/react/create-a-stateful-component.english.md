---
id: 5a24c314108439a4d4036170
title: Create a Stateful Component
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301391
---

## Description
<section id='description'>
One of the most important topics in React is <code>state</code>. State consists of any data your application needs to know about, that can change over time. You want your apps to respond to state changes and present an updated UI when necessary. React offers a nice solution for the state management of modern web applications.
You create state in a React component by declaring a <code>state</code> property on the component class in its <code>constructor</code>. This initializes the component with <code>state</code> when it is created. The <code>state</code> property must be set to a JavaScript <code>object</code>. Declaring it looks like this:

```jsx
this.state = {
  // describe your state here
}
```

You have access to the <code>state</code> object throughout the life of your component. You can update it, render it in your UI, and pass it as props to child components. The <code>state</code> object can be as complex or as simple as you need it to be. Note that you must create a class component by extending <code>React.Component</code> in order to create <code>state</code> like this.
</section>

## Instructions
<section id='instructions'>
There is a component in the code editor that is trying to render a <code>name</code> property from its <code>state</code>. However, there is no <code>state</code> defined. Initialize the component with <code>state</code> in the <code>constructor</code> and assign your name to a property of <code>name</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>StatefulComponent</code> should exist and render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); return mockedComponent.find('StatefulComponent').length === 1; })());
  - text: <code>StatefulComponent</code> should render a <code>div</code> and an <code>h1</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); return mockedComponent.find('div').length === 1 && mockedComponent.find('h1').length === 1; })());
  - text: The state of <code>StatefulComponent</code> should be initialized with a property <code>name</code> set to a string.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); const initialState = mockedComponent.state(); return ( typeof initialState === 'object' && typeof initialState.name === 'string'); })());
  - text: The property <code>name</code> in the state of <code>StatefulComponent</code> should render in the <code>h1</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); const initialState = mockedComponent.state(); return mockedComponent.find('h1').text() === initialState.name; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here

  }
  render() {
    return (
      <div>
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
ReactDOM.render(<StatefulComponent />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp!'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
```

</section>
