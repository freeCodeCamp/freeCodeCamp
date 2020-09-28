---
id: 5a24bbe0dba28a8d3cbd4c5e
title: Add Comments in JSX
challengeType: 6
forumTopicId: 301376
---

## Description
<section id='description'>
JSX is a syntax that gets compiled into valid JavaScript. Sometimes, for readability, you might need to add comments to your code. Like most programming languages, JSX has its own way to do this.
To put comments inside JSX, you use the syntax <code>{/* */}</code> to wrap around the comment text.
</section>

## Instructions
<section id='instructions'>
The code editor has a JSX element similar to what you created in the last challenge. Add a comment somewhere within the provided <code>div</code> element, without modifying the existing <code>h1</code> or <code>p</code> elements.
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
  - text: The existing <code>h1</code> and <code>p</code> elements should not be modified.
    testString: assert(JSX.props.children[0].props.children === 'This is a block of JSX' && JSX.props.children[1].props.children === 'Here\'s a subtitle');     
  - text: The <code>JSX</code> should use valid comment syntax.
    testString: assert(/<div>[\s\S]*{\s*\/\*[\s\S]*\*\/\s*}[\s\S]*<\/div>/.test(code));
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
```

</div>


### After Test
<div id='jsx-teardown'>

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```jsx
const JSX = (
<div>
  <h1>This is a block of JSX</h1>
  { /* this is a JSX comment */ }
  <p>Here's a subtitle</p>
</div>);
```

</section>
