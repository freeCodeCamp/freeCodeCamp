---
id: 5a24c314108439a4d4036165
title: Use React to Render Nested Components
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(Enzyme.shallow(React.createElement(TypesOfFood)).type() === "div", "The <code>TypesOfFood</code> component should return a single <code>div</code> element.");'
  - text: ''
    testString: 'assert(Enzyme.shallow(React.createElement(TypesOfFood)).props().children[1].type.name === "Fruits", "The <code>TypesOfFood</code> component should return the <code>Fruits</code> component.");'
  - text: ''
    testString: 'assert(Enzyme.mount(React.createElement(TypesOfFood)).find("h2").html() === "<h2>Fruits:</h2>", "The <code>Fruits</code> component should return the <code>TypesOfFruit</code> component.");'
  - text: ''
    testString: 'assert(Enzyme.mount(React.createElement(TypesOfFood)).find("ul").text() === "ApplesBlueberriesStrawberriesBananas", "The <code>TypesOfFruit</code> component should return the <code>h2</code> and <code>ul</code> elements.");'

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
      { /* change code below this line */ }

      { /* change code above this line */ }
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
        { /* change code below this line */ }

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
// solution required
```
</section>
