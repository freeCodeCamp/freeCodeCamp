---
id: 5a24c314108439a4d4036167
title: Render a Class Component to the DOM
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301404
---

## Description
<section id='description'>
You may remember using the ReactDOM API in an earlier challenge to render JSX elements to the DOM. The process for rendering React components will look very similar. The past few challenges focused on components and composition, so the rendering was done for you behind the scenes. However, none of the React code you write will render to the DOM without making a call to the ReactDOM API.
Here's a refresher on the syntax: <code>ReactDOM.render(componentToRender, targetNode)</code>. The first argument is the React component that you want to render. The second argument is the DOM node that you want to render that component within.
React components are passed into <code>ReactDOM.render()</code> a little differently than JSX elements. For JSX elements, you pass in the name of the element that you want to render. However, for React components, you need to use the same syntax as if you were rendering a nested component, for example <code>ReactDOM.render(&lt;ComponentToRender /&gt;, targetNode)</code>. You use this syntax for both ES6 class components and functional components.
</section>

## Instructions
<section id='instructions'>
Both the <code>Fruits</code> and <code>Vegetables</code> components are defined for you behind the scenes. Render both components as children of the <code>TypesOfFood</code> component, then render <code>TypesOfFood</code> to the DOM. There is a <code>div</code> with <code>id='challenge-node'</code> available for you to use.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>TypesOfFood</code> component should return a single <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().type() === 'div'; })());
  - text: The <code>TypesOfFood</code> component should render the <code>Fruits</code> component after the <code>h1</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(1).name() === 'Fruits'; })());
  - text: The <code>TypesOfFood</code> component should render the <code>Vegetables</code> component after <code>Fruits</code>.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(2).name() === 'Vegetables'; })());
  - text: The <code>TypesOfFood</code> component should render to the DOM within the <code>div</code> with the id <code>challenge-node</code>.
    testString: assert((function() { const html = document.getElementById('challenge-node').childNodes[0].innerHTML; return html.includes('<div><h2>Fruits:</h2><h4>Non-Citrus:</h4><ul><li>Apples</li><li>Blueberries</li><li>Strawberries</li><li>Bananas</li></ul><h4>Citrus:</h4><ul><li>Lemon</li><li>Lime</li><li>Orange</li><li>Grapefruit</li></ul></div>') && html.includes('<div><h2>Vegetables:</h2><ul><li>Brussel Sprouts</li><li>Broccoli</li><li>Squash</li></ul></div>'); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}

        {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx

const Fruits = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <h4>Non-Citrus:</h4>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      <h4>Citrus:</h4>
        <ul>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ul>
    </div>
  );
};
const Vegetables = () => {
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
};

```

</div>


</section>

## Solution
<section id='solution'>


```js
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
          <Fruits />
           <Vegetables />
         {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'));
```

</section>
