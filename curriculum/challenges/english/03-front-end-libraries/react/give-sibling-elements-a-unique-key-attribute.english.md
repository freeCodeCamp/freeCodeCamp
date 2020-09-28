---
id: 5a24c314108439a4d403618b
title: Give Sibling Elements a Unique Key Attribute
challengeType: 6
forumTopicId: 301394
---

## Description
<section id='description'>
The last challenge showed how the <code>map</code> method is used to dynamically render a number of elements based on user input. However, there was an important piece missing from that example. When you create an array of elements, each one needs a <code>key</code> attribute set to a unique value. React uses these keys to keep track of which items are added, changed, or removed. This helps make the re-rendering process more efficient when the list is modified in any way.<br><br><strong>Note:</strong> Keys only need to be unique between sibling elements, they don't need to be globally unique in your application.
</section>

## Instructions
<section id='instructions'>
The code editor has an array with some front end frameworks and a stateless functional component named <code>Frameworks()</code>. <code>Frameworks()</code> needs to map the array to an unordered list, much like in the last challenge. Finish writing the <code>map</code> callback to return an <code>li</code> element for each framework in the <code>frontEndFrameworks</code> array. This time, make sure to give each <code>li</code> a <code>key</code> attribute, set to a unique value. The <code>li</code> elements should also contain text from <code>frontEndFrameworks</code>.
Normally, you want to make the key something that uniquely identifies the element being rendered. As a last resort the array index may be used, but typically you should try to use a unique identification.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>Frameworks</code> component should exist and render to the page.
    testString: assert(Enzyme.mount(React.createElement(Frameworks)).find('Frameworks').length === 1);
  - text: <code>Frameworks</code> should render an <code>h1</code> element.
    testString: assert(Enzyme.mount(React.createElement(Frameworks)).find('h1').length === 1);
  - text: <code>Frameworks</code> should render a <code>ul</code> element.
    testString: assert(Enzyme.mount(React.createElement(Frameworks)).find('ul').length === 1);
  - text: The <code>ul</code> tag should render 6 child <code>li</code> elements.
    testString: assert(Enzyme.mount(React.createElement(Frameworks)).find('ul').children().length === 6 && Enzyme.mount(React.createElement(Frameworks)).find('ul').childAt(0).name() === 'li' && Enzyme.mount(React.createElement(Frameworks)).find('li').length === 6);
  - text: Each list item element should have a unique <code>key</code> attribute.
    testString: assert((() => { const ul = Enzyme.mount(React.createElement(Frameworks)).find('ul'); const keys = new Set([ ul.childAt(0).key(), ul.childAt(1).key(), ul.childAt(2).key(), ul.childAt(3).key(), ul.childAt(4).key(), ul.childAt(5).key(), ]); return keys.size === 6; })());
  - text: Each list item element should contain text from <code>frontEndFrameworks</code>.
    testString: assert((() => {const li = Enzyme.mount(React.createElement(Frameworks)).find('ul').children(); return [...Array(5)].every((_, i) => frontEndFrameworks.includes(li.at(i).text()))})()); 

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
  const renderFrameworks = null; // Change this line
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

```jsx
ReactDOM.render(<Frameworks />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


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
  const renderFrameworks = frontEndFrameworks.map((fw, i) => <li key={i}>{fw}</li>);
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

</section>
