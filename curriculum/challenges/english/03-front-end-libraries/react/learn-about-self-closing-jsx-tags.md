---
id: 5a24c314108439a4d4036161
title: Learn About Self-Closing JSX Tags
challengeType: 6
forumTopicId: 301396
---

## Description
<section id='description'>
So far, you’ve seen how JSX differs from HTML in a key way with the use of <code>className</code> vs. <code>class</code> for defining HTML classes.
Another important way in which JSX differs from HTML is in the idea of the self-closing tag.
In HTML, almost all tags have both an opening and closing tag: <code>&lt;div&gt;&lt;/div&gt;</code>; the closing tag always has a forward slash before the tag name that you are closing. However, there are special instances in HTML called “self-closing tags”, or tags that don’t require both an opening and closing tag before another tag can start.
For example the line-break tag can be written as <code>&lt;br&gt;</code> or as <code>&lt;br /&gt;</code>, but should never be written as <code>&lt;br&gt;&lt;/br&gt;</code>, since it doesn't contain any content.
In JSX, the rules are a little different. Any JSX element can be written with a self-closing tag, and every element must be closed. The line-break tag, for example, must always be written as <code>&lt;br /&gt;</code> in order to be valid JSX that can be transpiled. A <code>&lt;div&gt;</code>, on the other hand, can be written as <code>&lt;div /&gt;</code> or <code>&lt;div&gt;&lt;/div&gt;</code>. The difference is that in the first syntax version there is no way to include anything in the <code>&lt;div /&gt;</code>. You will see in later challenges that this syntax is useful when rendering React components.
</section>

## Instructions
<section id='instructions'>
Fix the errors in the code editor so that it is valid JSX and successfully transpiles. Make sure you don't change any of the content - you only need to close tags where they are needed.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The constant <code>JSX</code> should return a <code>div</code> element.
    testString: assert.strictEqual(JSX.type, 'div');
  - text: The <code>div</code> should contain a <code>br</code> tag.
    testString: assert(Enzyme.shallow(JSX).find('br').length === 1);
  - text: The <code>div</code> should contain an <code>hr</code> tag.
    testString: assert(Enzyme.shallow(JSX).find('hr').length === 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br >
    <p>Be sure to close all tags!</p>
    <hr >
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
  <h2>Welcome to React!</h2> <br />
  <p>Be sure to close all tags!</p>
  <hr />
</div>
);
```

</section>
