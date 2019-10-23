---
id: 5a24c314108439a4d4036169
title: Pass Props to a Stateless Functional Component
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
<section id="instructions"> هناك مكونات <code>Calendar</code> و <code>CurrentDate</code> في محرر التعليمات البرمجية. عند تقديم <code>CurrentDate</code> من مكون <code>Calendar</code> ، قم بتمرير خاصية <code>date</code> المعينة للتاريخ الحالي من كائن <code>Date</code> JavaScript. ثم قم بالوصول إلى هذا <code>prop</code> في مكون <code>CurrentDate</code> ، مع إظهار قيمته داخل علامات <code>p</code> . تجدر الإشارة إلى أنه بالنسبة إلى قيم <code>prop</code> أن يتم تقييمها على هيئة JavaScript ، يجب تضمينها في أقواس متعرجة ، على سبيل المثال <code>date={Date()}</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().type() === "div"; })(), "The <code>Calendar</code> component should return a single <code>div</code> element.");'
  - text: يجب أن يكون الطفل الثاني لمكون <code>Calendar</code> مكون <code>CurrentDate</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().childAt(1).name() === "CurrentDate"; })(), "The second child of the <code>Calendar</code> component should be the <code>CurrentDate</code> component.");'
  - text: يجب أن يكون لمكون <code>CurrentDate</code> دعامة <code>date</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.children().childAt(1).props().date })(), "The <code>CurrentDate</code> component should have a prop called <code>date</code>.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); const prop = mockedComponent.children().childAt(1).props().date; return( typeof prop === "string" && prop.length > 0 ); })(), "The <code>date</code> prop of the <code>CurrentDate</code> should contain a string of text.");'
  - text: يجب أن يقوم مكون <code>CurrentDate</code> القيمة من <code>date</code> prop في علامة <code>p</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(Calendar)); return mockedComponent.find("p").html().includes(Date().substr(3)); })(), "The <code>CurrentDate</code> component should render the value from the <code>date</code> prop in the <code>p</code> tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: </p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate />
        { /* change code above this line */ }
      </div>
    );
  }
};

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
