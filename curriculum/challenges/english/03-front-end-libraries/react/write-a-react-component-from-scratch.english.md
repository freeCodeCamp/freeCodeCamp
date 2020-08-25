---
id: 5a24c314108439a4d4036168
title: Write a React Component from Scratch
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301424
---

## Description
<section id='description'>
Now that you've learned the basics of JSX and React components, it's time to write a component on your own. React components are the core building blocks of React applications so it's important to become very familiar with writing them. Remember, a typical React component is an ES6 <code>class</code> which extends <code>React.Component</code>. It has a render method that returns HTML (from JSX) or <code>null</code>. This is the basic form of a React component. Once you understand this well, you will be prepared to start building more complex React projects.
</section>

## Instructions
<section id='instructions'>
Define a class <code>MyComponent</code> that extends <code>React.Component</code>. Its render method should return a <code>div</code> that contains an <code>h1</code> tag with the text: <code>My First React Component!</code> in it. Use this text exactly, the case and punctuation matter. Make sure to call the constructor for your component, too.
Render this component to the DOM using <code>ReactDOM.render()</code>. There is a <code>div</code> with <code>id='challenge-node'</code> available for you to use.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: There should be a React component called <code>MyComponent</code>.
    testString: getUserInput => assert(getUserInput('index').replace(/\s/g, '').includes('classMyComponentextendsReact.Component{'));
  - text: <code>MyComponent</code> should contain an <code>h1</code> tag with text <code>My First React Component!</code> Case and punctuation matter.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('h1').text() === 'My First React Component!'; })());
  - text: <code>MyComponent</code> should render to the DOM.
    testString: assert(document.getElementById('challenge-node').childNodes.length === 1);
  - text: <code>MyComponent</code> should have a constructor calling <code>super</code> with <code>props</code>.
    testString: assert(MyComponent.toString().includes('MyComponent(props)') && MyComponent.toString().includes('_super.call(this, props)'));
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>


```js
// change code below this line
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'));
```

</section>
