---
id: 5a24c314108439a4d4036182
title: Add Inline Styles in React
challengeType: 6
forumTopicId: 301378
---

## Description
<section id='description'>
You may have noticed in the last challenge that there were several other syntax differences from HTML inline styles in addition to the <code>style</code> attribute set to a JavaScript object. First, the names of certain CSS style properties use camel case. For example, the last challenge set the size of the font with <code>fontSize</code> instead of <code>font-size</code>. Hyphenated words like <code>font-size</code> are invalid syntax for JavaScript object properties, so React uses camel case. As a rule, any hyphenated style properties are written using camel case in JSX.
All property value length units (like <code>height</code>, <code>width</code>, and <code>fontSize</code>) are assumed to be in <code>px</code> unless otherwise specified. If you want to use <code>em</code>, for example, you wrap the value and the units in quotes, like <code>{fontSize: "4em"}</code>. Other than the length values that default to <code>px</code>, all other property values should be wrapped in quotes.
</section>

## Instructions
<section id='instructions'>
If you have a large set of styles, you can assign a style <code>object</code> to a constant to keep your code organized. Initialize a <code>styles</code> constant and assign an <code>object</code> with three style properties and their values to it. Give the <code>div</code> a color of <code>"purple"</code>, a font-size of <code>40</code>, and a border of <code>"2px solid purple"</code>. Then set the <code>style</code> attribute equal to the <code>styles</code> constant.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>styles</code> variable should be an <code>object</code> with three properties.
    testString: assert(Object.keys(styles).length === 3);
  - text: The <code>styles</code> variable should have a <code>color</code> property set to a value of <code>purple</code>.
    testString: assert(styles.color === 'purple');
  - text: The <code>styles</code> variable should have a <code>fontSize</code> property set to a value of <code>40</code>.
    testString: assert(styles.fontSize === 40);
  - text: The <code>styles</code> variable should have a <code>border</code> property set to a value of <code>2px solid purple</code>.
    testString: assert(styles.border === "2px solid purple");
  - text: The component should render a <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.shallow(React.createElement(Colorful)); return mockedComponent.type() === 'div'; })());
  - text: The <code>div</code> element should have its styles defined by the <code>styles</code> object.
    testString: assert((function() { const mockedComponent = Enzyme.shallow(React.createElement(Colorful)); return (mockedComponent.props().style.color === "purple" && mockedComponent.props().style.fontSize === 40 && mockedComponent.props().style.border === "2px solid purple"); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx


// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div>
    );
    // Change code above this line
  }
};

```

</div>


### After Test
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<Colorful />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```jsx
const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
};
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};

```

</section>
