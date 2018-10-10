---
id: 5a24bbe0dba28a8d3cbd4c5d
title: Create a Complex JSX Element
challengeType: 6
isRequired: false
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
    testString: 'assert(JSX.type === "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: ''
    testString: 'assert(JSX.props.children[1].type === "p", "The <code>div</code> should contain a <code>p</code> tag as the second element.");'
  - text: ''
    testString: 'assert(JSX.props.children[2].type === "ul", "The <code>div</code> should contain a <code>ul</code> tag as the third element.");'
  - text: ''
    testString: 'assert(JSX.props.children[0].type === "h1", "The <code>div</code> should contain an <code>h1</code> tag as the first element.");'
  - text: يجب أن يحتوي الـ <code>ul</code> على ثلاثة عناصر من <code>li</code> .
    testString: 'assert(JSX.props.children[2].props.children.length === 3, "The <code>ul</code> should contain three <code>li</code> elements.");'

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
