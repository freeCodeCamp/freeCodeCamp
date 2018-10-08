---
id: 5a24c314108439a4d4036169
title: Pass Props to a Stateless Functional Component
challengeType: 6
isRequired: false
---

## Description
<section id='description'>
The previous challenges covered a lot about creating and composing JSX elements, functional components, and ES6 style class components in React. With this foundation, it's time to look at another feature very common in React: <b>props</b>. In React, you can pass props, or properties, to child components. Say you have an <code>App</code> component which renders a child component called <code>Welcome</code> that is a stateless functional component. You can pass <code>Welcome</code> a <code>user</code> property by writing:
<blockquote>&lt;App&gt;<br>&nbsp;&nbsp;&lt;Welcome user='Mark' /&gt;<br>&lt;/App&gt;</blockquote>
You use <strong>custom HTML attributes</strong> that React provides support for to pass the property <code>user</code> to the component <code>Welcome</code>. Since <code>Welcome</code> is a stateless functional component, it has access to this value like so:
<blockquote>const Welcome = (props) => &lt;h1&gt;Hello, {props.user}!&lt;/h1&gt;</blockquote>
It is standard to call this value <code>props</code> and when dealing with stateless functional components, you basically consider it as an argument to a function which returns JSX. You can access the value of the argument in the function body. With class components, you will see this is a little different.
</section>

## Instructions
<section id='instructions'>
There are <code>Calendar</code> and <code>CurrentDate</code> components in the code editor. When rendering <code>CurrentDate</code> from the <code>Calendar</code> component, pass in a property of <code>date</code> assigned to the current date from JavaScript's <code>Date</code> object. Then access this <code>prop</code> in the <code>CurrentDate</code> component, showing its value within the <code>p</code> tags. Note that for <code>prop</code> values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance <code>date={Date()}</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>Calendar</code> component should return a single <code>div</code> element.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().type() === "div"; })(), "The <code>Calendar</code> component should return a single <code>div</code> element.");'
  - text: The second child of the <code>Calendar</code> component should be the <code>CurrentDate</code> component.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().childAt(1).name() === "CurrentDate"; })(), "The second child of the <code>Calendar</code> component should be the <code>CurrentDate</code> component.");'
  - text: The <code>CurrentDate</code> component should have a prop called <code>date</code>.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().childAt(1).props().date })(), "The <code>CurrentDate</code> component should have a prop called <code>date</code>.");'
  - text: The <code>date</code> prop of the <code>CurrentDate</code> should contain a string of text.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); const prop = mockedComponent.children().childAt(1).props().date; return( typeof prop === "string" && prop.length > 0 ); })(), "The <code>date</code> prop of the <code>CurrentDate</code> should contain a string of text.");'
  - text: The <code>CurrentDate</code> component should render the value from the <code>date</code> prop in the <code>p</code> tag.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.find("p").html().includes(Date().substr(3)); })(), "The <code>CurrentDate</code> component should render the value from the <code>date</code> prop in the <code>p</code> tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx

const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: </p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate />
        { /* change code above this line */ }
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
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate date={Date()} />
        { /* change code above this line */ }
      </div>
    );
  }
};
```

</section>
