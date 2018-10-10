---
id: 5a24c314108439a4d4036167
title: Render a Class Component to the DOM
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
<section id="instructions"> يتم تعريف كل من مكونات <code>Fruits</code> <code>Vegetables</code> لك وراء الكواليس. تقديم كل من المكونات كأطفال من المكون <code>TypesOfFood</code> ، ثم تقديم <code>TypesOfFood</code> إلى DOM. يوجد <code>div</code> به <code>id=&#39;challenge-node&#39;</code> متاح للاستخدام. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().type() === "div"; })(), "The <code>TypesOfFood</code> component should return a single <code>div</code> element.");'
  - text: يجب أن يقوم المكون <code>TypesOfFood</code> مكون <code>Fruits</code> بعد عنصر <code>h1</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(1).name() === "Fruits"; })(), "The <code>TypesOfFood</code> component should render the <code>Fruits</code> component after the <code>h1</code> element.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(TypesOfFood)); return mockedComponent.children().childAt(2).name() === "Vegetables"; })(), "The <code>TypesOfFood</code> component should render the <code>Vegetables</code> component after <code>Fruits</code>.");'
  - text: يجب أن يتم عرض المكون <code>TypesOfFood</code> إلى DOM داخل <code>div</code> مع <code>challenge-node</code> الهوية.
    testString: 'assert((function() { const html = document.getElementById("challenge-node").childNodes[0].innerHTML; return (html === "<h1>Types of Food:</h1><div><h2>Fruits:</h2><h4>Non-Citrus:</h4><ul><li>Apples</li><li>Blueberries</li><li>Strawberries</li><li>Bananas</li></ul><h4>Citrus:</h4><ul><li>Lemon</li><li>Lime</li><li>Orange</li><li>Grapefruit</li></ul></div><div><h2>Vegetables:</h2><ul><li>Brussel Sprouts</li><li>Broccoli</li><li>Squash</li></ul></div>"); })(), "The <code>TypesOfFood</code> component should render to the DOM within the <code>div</code> with the id <code>challenge-node</code>.");'

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
// solution required
```
</section>
