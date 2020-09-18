---
id: 5a24c314108439a4d4036164
title: Create a Component with Composition
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
  - text: يجب أن يقوم مكون React بإرجاع عنصر <code>div</code> مفرد.
    testString: 'assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.type() === "div"; })(), "The React component should return a single <code>div</code> element.");'
  - text: ''
    testString: 'assert((function() { var shallowRender = Enzyme.shallow(React.createElement(ParentComponent)); return shallowRender.children().length === 2; })(), "The component should return two nested elements.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ParentComponent)); return mockedComponent.find("ParentComponent").find("ChildComponent").length === 1; })(), "The component should return the ChildComponent as its second child.");'

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
