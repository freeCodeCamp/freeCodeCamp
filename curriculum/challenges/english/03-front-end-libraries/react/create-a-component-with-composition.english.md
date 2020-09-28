---
id: 5a24c314108439a4d4036164
title: Create a Component with Composition
challengeType: 6
forumTopicId: 301383
---

## Description
<section id='description'>
Now we will look at how we can compose multiple React components together. Imagine you are building an App and have created three components, a <code>Navbar</code>, <code>Dashboard</code>, and <code>Footer</code>.
To compose these components together, you could create an <code>App</code> <i>parent</i> component which renders each of these three components as <i>children</i>. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. For example, in the <code>render</code> method you could write:

```jsx
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```

When React encounters a custom HTML tag that references another component (a component name wrapped in <code>&lt; /&gt;</code> like in this example), it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the <code>App</code> component and the <code>Navbar</code>, <code>Dashboard</code>, and <code>Footer</code>.
</section>

## Instructions
<section id='instructions'>
In the code editor, there is a simple functional component called <code>ChildComponent</code> and a class component called <code>ParentComponent</code>. Compose the two together by rendering the <code>ChildComponent</code> within the <code>ParentComponent</code>. Make sure to close the <code>ChildComponent</code> tag with a forward slash.
<strong>Note:</strong>&nbsp;<code>ChildComponent</code> is defined with an ES6 arrow function because this is a very common practice when using React. However, know that this is just a function. If you aren't familiar with the arrow function syntax, please refer to the JavaScript section.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The React component should return a single <code>div</code> element.
    testString: assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.type() === 'div'; })());
  - text: The component should return two nested elements.
    testString: assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.children().length === 2; })());
  - text: The component should return the ChildComponent as its second child.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ParentComponent)); return mockedComponent.find('ParentComponent').find('ChildComponent').length === 1; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
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
ReactDOM.render(<ParentComponent />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```jsx
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
        <ChildComponent />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

</section>
