---
id: 5a24c314108439a4d4036161
title: Learn About Self-Closing JSX Tags
challengeType: 6
isRequired: false
---

## Description
<section id='description'>
So far, you’ve seen how JSX differs from HTML in a key way with the use of <code>className</code> vs. <code>class</code> for defining HTML classes.
Another important way in which JSX differs from HTML is in the idea of the self-closing tag.

In HTML, we have too main types of Tags : 
1. Ordinary tags which needs always closing tag for good valid HMTL code like:Divs which can be written <code>&lt;div&gt;&lt;/div&gt;</code>; 
2. Self-closing tags which doesn't need a closing tag like: the line-break tag which can be written as <code>&lt;br&gt;</code> or as <code>&lt;br /&gt;</code>, but should never be written as <code>&lt;br&gt;&lt;/br&gt;</code>, since it doesn't contain any content.

In JSX, there is no defference between Ordianry tags from HTML syntax. But for Self-closing tags, you will always need to use this second syntax which is for the line-break as example is: <code>&lt;br /&gt;</code> in order to be complied. The difference is that in the first syntax version there is no way to include anything in the <code>&lt;div /&gt;</code>. You will see in later challenges that this syntax is useful when rendering React components.
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
    testString: assert.strictEqual(JSX.type, 'div', 'The constant <code>JSX</code> should return a <code>div</code> element.');
  - text: The <code>div</code> should contain a <code>br</code> tag.
    testString: assert(Enzyme.shallow(JSX).find('br').length === 1, 'The <code>div</code> should contain a <code>br</code> tag.');
  - text: The <code>div</code> should contain an <code>hr</code> tag.
    testString: assert(Enzyme.shallow(JSX).find('hr').length === 1, 'The <code>div</code> should contain an <code>hr</code> tag.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    {/* remove comment and change code below this line
    <h2>Welcome to React!</h2> <br >
    <p>Be sure to close all tags!</p>
    <hr >
    remove comment and change code above this line */}
  </div>
);

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
  {/* change code below this line */}
  <h2>Welcome to React!</h2> <br />
  <p>Be sure to close all tags!</p>
  <hr />
  {/* change code above this line */}
</div>
);
```

</section>
