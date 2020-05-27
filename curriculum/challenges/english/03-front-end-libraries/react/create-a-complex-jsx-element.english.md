---
id: 5a24bbe0dba28a8d3cbd4c5d
title: Create a Complex JSX Element
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301382
---

## Description
<section id='description'>
The last challenge was a simple example of JSX, but JSX can represent more complex HTML as well.
One important thing to know about nested JSX is that it must return a single element.
This one parent element would wrap all of the other levels of nested elements.
For instance, several JSX elements written as siblings with no parent wrapper element will not transpile.
Here's an example:
<b>Valid JSX:</b>

```jsx
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```

<b>Invalid JSX:</b>

```jsx
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```

</section>

## Instructions
<section id='instructions'>
Define a new constant <code>JSX</code> that renders a <code>div</code> which contains the following elements in order:
An <code>h1</code>, a <code>p</code>, and an unordered list that contains three <code>li</code> items. You can include any text you want within each element.
<strong>Note:</strong>&nbsp;When rendering multiple elements like this, you can wrap them all in parentheses, but it's not strictly required. Also notice this challenge uses a <code>div</code> tag to wrap all the child elements within a single parent element. If you remove the <code>div</code>, the JSX will no longer transpile. Keep this in mind, since it will also apply when you return JSX elements in React components.
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
  - text: The <code>div</code> should contain a <code>ul</code> tag as the third element.
    testString: assert(JSX.props.children[2].type === 'ul');
  - text: The <code>ul</code> should contain three <code>li</code> elements.
    testString: assert(JSX.props.children.filter(ele => ele.type === 'ul')[0].props.children.filter(ele => ele.type === 'li').length === 3);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// write your code here

```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(JSX, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
const JSX = (
<div>
  <h1>Hello JSX!</h1>
  <p>Some info</p>
  <ul>
    <li>An item</li>
    <li>Another item</li>
    <li>A third item</li>
  </ul>
</div>);
```

</section>
