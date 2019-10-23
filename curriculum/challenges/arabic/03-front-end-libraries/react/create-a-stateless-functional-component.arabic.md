---
id: 5a24c314108439a4d4036162
title: Create a Stateless Functional Component
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: إنشاء مكون وظيفي عديم الحالة
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب على <code>MyComponent</code> إرجاع JSX.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.length === 1; })(), "<code>MyComponent</code> should return JSX.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.children().type() === "div" })(), "<code>MyComponent</code> should return a <code>div</code> element.");'
  - text: يجب أن يحتوي عنصر <code>div</code> على سلسلة من النص.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("div").text() !== ""; })(), "The <code>div</code> element should contain a string of text.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const MyComponent = function() {
  // change code below this line



  // change code above this line
}

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
