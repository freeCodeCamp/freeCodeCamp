---
id: 5a24c314108439a4d4036162
title: Create a Stateless Functional Component
challengeType: 6
forumTopicId: 301392
---

## Description
<section id='description'>
Components are the core of React. Everything in React is a component and here you will learn how to create one.
There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a <em>stateless functional component</em>. The concept of state in an application will be covered in later challenges. For now, think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data. (We'll cover the second way to create a React component in the next challenge.)
To create a component with a function, you simply write a JavaScript function that returns either JSX or <code>null</code>. One important thing to note is that React requires your function name to begin with a capital letter. Here's an example of a stateless functional component that assigns an HTML class in JSX:

```jsx
// After being transpiled, the <div> will have a CSS class of 'customClass'
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

Because a JSX component represents HTML, you could put several components together to create a more complex HTML page. This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex user interfaces.
</section>

## Instructions
<section id='instructions'>
The code editor has a function called <code>MyComponent</code>. Complete this function so it returns a single <code>div</code> element which contains some string of text.
<strong>Note:</strong>&nbsp;The text is considered a child of the <code>div</code> element, so you will not be able to use a self-closing tag.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should return JSX.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.length === 1; })());
  - text: <code>MyComponent</code> should return a <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.children().type() === 'div' })());
  - text: The <code>div</code> element should contain a string of text.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('div').text() !== ''; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const MyComponent = function() {
  // Change code below this line



  // Change code above this line
}
```

</div>


### After Test
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```jsx
const MyComponent = function() {
  // Change code below this line
  return (
    <div>
      Demo Solution
    </div>
  );
  // Change code above this line
}
```

</section>
