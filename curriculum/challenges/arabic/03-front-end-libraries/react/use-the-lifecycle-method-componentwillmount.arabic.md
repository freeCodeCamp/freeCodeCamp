---
id: 5a24c314108439a4d403617c
title: Use the Lifecycle Method componentWillMount
challengeType: 6
isRequired: false
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
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("div").length === 1; })(), "<code>MyComponent</code> should render a <code>div</code> element.");'
  - text: ''
    testString: 'assert((function() { const lifecycle = React.createElement(MyComponent).type.prototype.componentWillMount.toString().replace(/ /g,""); return lifecycle.includes("console.log("); })(), "<code>console.log</code> should be called in <code>componentWillMount</code>.");'

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
    // change code below this line

    // change code above this line
  }
  render() {
    return <div />
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
