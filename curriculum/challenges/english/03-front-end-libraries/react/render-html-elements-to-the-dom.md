---
id: 5a24bbe0dba28a8d3cbd4c5f
title: Render HTML Elements to the DOM
challengeType: 6
forumTopicId: 301406
---

## Description
<section id='description'>
So far, you've learned that JSX is a convenient tool to write readable HTML within JavaScript. With React, we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM.
ReactDOM offers a simple method to render React elements to the DOM which looks like this: <code>ReactDOM.render(componentToRender, targetNode)</code>, where the first argument is the React element or component that you want to render, and the second argument is the DOM node that you want to render the component to.
As you would expect, <code>ReactDOM.render()</code> must be called after the JSX element declarations, just like how you must declare variables before using them.
</section>

## Instructions
<section id='instructions'>
The code editor has a simple JSX component. Use the <code>ReactDOM.render()</code> method to render this component to the page. You can pass defined JSX elements directly in as the first argument and use <code>document.getElementById()</code> to select the DOM node to render them to. There is a <code>div</code> with <code>id='challenge-node'</code> available for you to use. Make sure you don't change the <code>JSX</code> constant.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The constant <code>JSX</code> should return a <code>div</code> element.
    testString: assert(JSX.type === 'div');
  - text: The <code>div</code> should contain an <code>h1</code> tag as the first element.
    testString: assert(JSX.props.children[0].type === 'h1');
  - text: The <code>div</code> should contain a <code>p</code> tag as the second element.
    testString: assert(JSX.props.children[1].type === 'p');
  - text: The provided JSX element should render to the DOM node with id <code>challenge-node</code>.
    testString: assert(document.getElementById('challenge-node').childNodes[0].innerHTML === '<h1>Hello World</h1><p>Lets render this to the DOM</p>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line

```

</div>



</section>

## Solution
<section id='solution'>


```jsx
const JSX = (
<div>
  <h1>Hello World</h1>
  <p>Lets render this to the DOM</p>
</div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```

</section>
