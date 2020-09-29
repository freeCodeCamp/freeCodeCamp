---
id: 5a24c314108439a4d403618b
title: Give Sibling Elements a Unique Key Attribute
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
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("Frameworks").length === 1, "The <code>Frameworks</code> component should exist and render to the page.");'
  - text: <code>Frameworks</code> يجب ان يجعل <code>h1</code> عنصر.
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("h1").length === 1, "<code>Frameworks</code> should render an <code>h1</code> element.");'
  - text: ''
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("ul").length === 1, "<code>Frameworks</code> should render a <code>ul</code> element.");'
  - text: ''
    testString: 'assert(Enzyme.mount(React.createElement(Frameworks)).find("ul").children().length === 6 && Enzyme.mount(React.createElement(Frameworks)).find("ul").childAt(0).name() === "li" && Enzyme.mount(React.createElement(Frameworks)).find("li").length === 6, "The <code>ul</code> tag should render 6 child <code>li</code> elements.");'
  - text: يجب أن يكون كل عنصر قائمة البند فريدة من نوعها <code>key</code> السمة.
    testString: 'assert((() => { const ul = Enzyme.mount(React.createElement(Frameworks)).find("ul"); const keys = new Set([ ul.childAt(0).key(), ul.childAt(1).key(), ul.childAt(2).key(), ul.childAt(3).key(), ul.childAt(4).key(), ul.childAt(5).key(), ]); return keys.size === 6; })(), "Each list item element should have a unique <code>key</code> attribute.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = null; // change code here
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
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
