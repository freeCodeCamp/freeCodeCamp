---
id: 5a24bbe0dba28a8d3cbd4c5e
title: Add Comments in JSX
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
<section id="instructions"> يحتوي محرر التعليمة البرمجية على عنصر JSX مشابه لما قمت بإنشائه في التحدي الأخير. أضف تعليقًا في مكان ما داخل عنصر <code>div</code> المقدم ، بدون تعديل عناصر <code>h1</code> أو <code>p</code> الحالية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب على <code>JSX</code> المستمر إرجاع عنصر <code>div</code> .
    testString: 'assert(JSX.type === "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: يجب أن يحتوي <code>div</code> على علامة <code>h1</code> باعتبارها العنصر الأول.
    testString: 'assert(JSX.props.children[0].type === "h1", "The <code>div</code> should contain an <code>h1</code> tag as the first element.");'
  - text: يجب أن يحتوي <code>div</code> على علامة <code>p</code> كعنصر ثانٍ.
    testString: 'assert(JSX.props.children[1].type === "p", "The <code>div</code> should contain a <code>p</code> tag as the second element.");'
  - text: يجب أن تتضمن <code>JSX</code> تعليقًا.
    testString: 'getUserInput => assert(getUserInput("index").includes("/*") && getUserInput("index").includes("*/"), "The <code>JSX</code> should include a comment.");'

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
