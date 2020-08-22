---
id: 5a24c314108439a4d4036166
title: Compose React Components
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301381
---

## Description
<section id='description'>
As the challenges continue to use more complex compositions with React components and JSX, there is one important point to note. Rendering ES6 style class components within other components is no different than rendering the simple components you used in the last few challenges. You can render JSX elements, stateless functional components, and ES6 class components within other components.
</section>

## Instructions
<section id='instructions'>
In the code editor, the <code>TypesOfFood</code> component is already rendering a component called <code>Vegetables</code>. Also, there is the <code>Fruits</code> component from the last challenge.
Nest two components inside of <code>Fruits</code> &mdash; first <code>NonCitrus</code>, and then <code>Citrus</code>. Both of these components are provided for you behind the scenes. Next, nest the <code>Fruits</code> class component into the <code>TypesOfFood</code> component, below the <code>h1</code> header and above <code>Vegetables</code>. The result should be a series of nested components, which uses two different component types.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>TypesOfFood</code> component should return a single <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().type() === 'div'; })());
  - text: The <code>TypesOfFood</code> component should return the <code>Fruits</code> component.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(1).name() === 'Fruits'; })());
  - text: The <code>Fruits</code> component should return the <code>NonCitrus</code> component and the <code>Citrus</code> component.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return (mockedComponent.find('Fruits').children().find('NonCitrus').length === 1 && mockedComponent.find('Fruits').children().find('Citrus').length === 1); })());
  - text: The <code>TypesOfFood</code> component should return the <code>Vegetables</code> component below the <code>Fruits</code> component.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(2).name() === 'Vegetables'; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* change code below this line */ }

        { /* change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* change code below this line */ }

        { /* change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};
```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
class NonCitrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  }
};
class Citrus extends React.Component {
  render() {
    return (
      <div>
        <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
      </div>
    );
  }
};
class Vegetables extends React.Component {
  render() {
    return (
      <div>
        <h2>Vegetables:</h2>
        <ul>
          <li>Brussel Sprouts</li>
          <li>Broccoli</li>
          <li>Squash</li>
        </ul>
      </div>
    );
     }
};
```

</div>

### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* change code below this line */ }
        <NonCitrus />
        <Citrus />
        { /* change code above this line */ }
      </div>
    )
  }
}

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
    render() {
      return (
        <div>
        <h1>Types of Food:</h1>
          { /* change code below this line */ }
          <Fruits />
          { /* change code above this line */ }
          <Vegetables />
        </div>
      );
    }
};
```

</section>
