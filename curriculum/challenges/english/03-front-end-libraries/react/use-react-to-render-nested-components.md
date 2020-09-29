---
id: 5a24c314108439a4d4036165
title: Use React to Render Nested Components
challengeType: 6
forumTopicId: 301420
---

## Description
<section id='description'>
The last challenge showed a simple way to compose two components, but there are many different ways you can compose components with React.
Component composition is one of React's powerful features. When you work with React, it is important to start thinking about your user interface in terms of components like the App example in the last challenge. You break down your UI into its basic building blocks, and those pieces become the components. This helps to separate the code responsible for the UI from the code responsible for handling your application logic. It can greatly simplify the development and maintenance of complex projects.
</section>

## Instructions
<section id='instructions'>
There are two functional components defined in the code editor, called <code>TypesOfFruit</code> and <code>Fruits</code>. Take the <code>TypesOfFruit</code> component and compose it, or <em>nest</em> it, within the <code>Fruits</code> component. Then take the <code>Fruits</code> component and nest it within the <code>TypesOfFood</code> component. The result should be a child component, nested within a parent component, which is nested within a parent component of its own!
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>TypesOfFood</code> component should return a single <code>div</code> element.
    testString: assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === 'div');
  - text: The <code>TypesOfFood</code> component should return the <code>Fruits</code> component.
    testString: assert(Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type.name === 'Fruits');
  - text: The <code>Fruits</code> component should return the <code>TypesOfFruit</code> component.
    testString: assert(Enzyme.mount(React.createElement(TypesOfFood)).find('h2').html() === '<h2>Fruits:</h2>');
  - text: The <code>TypesOfFruit</code> component should return the <code>h2</code> and <code>ul</code> elements.
    testString: assert(Enzyme.mount(React.createElement(TypesOfFood)).find('ul').text() === 'ApplesBlueberriesStrawberriesBananas');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }

      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
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
ReactDOM.render(<TypesOfFood />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```jsx
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      { /* Change code below this line */ }
        <TypesOfFruit />
      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
        <Fruits />
        { /* Change code above this line */ }
      </div>
    );
  }
};
```

</section>
