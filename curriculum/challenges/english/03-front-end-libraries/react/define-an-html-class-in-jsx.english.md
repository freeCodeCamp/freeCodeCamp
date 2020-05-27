---
id: 5a24c314108439a4d4036160
title: Define an HTML Class in JSX
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301393
---

## Description
<section id='description'>
Now that you're getting comfortable writing JSX, you may be wondering how it differs from HTML.
So far, it may seem that HTML and JSX are exactly the same.
One key difference in JSX is that you can no longer use the word <code>class</code> to define HTML classes. This is because <code>class</code> is a reserved word in JavaScript. Instead, JSX uses <code>className</code>.
In fact, the naming convention for all HTML attributes and event references in JSX become camelCase. For example, a click event in JSX is <code>onClick</code>, instead of <code>onclick</code>. Likewise, <code>onchange</code> becomes <code>onChange</code>. While this is a subtle difference, it is an important one to keep in mind moving forward.
</section>

## Instructions
<section id='instructions'>
Apply a class of <code>myDiv</code> to the <code>div</code> provided in the JSX code.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The constant <code>JSX</code> should return a <code>div</code> element.
    testString: assert.strictEqual(JSX.type, 'div');
  - text: The <code>div</code> should have a class of <code>myDiv</code>.
    testString: assert.strictEqual(JSX.props.className, 'myDiv');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    <h1>Add a class to this div</h1>
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
<div className = 'myDiv'>
  <h1>Add a class to this div</h1>
</div>);
```

</section>
