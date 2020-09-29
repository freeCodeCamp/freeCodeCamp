---
id: 5a24c314108439a4d403616c
title: Override Default Props
challengeType: 6
videoUrl: ''
localeTitle: تجاوز الدعائم الافتراضية
---

## Description
<section id="description"> تعد القدرة على ضبط الأدوات الافتراضية هي ميزة مفيدة في React. تتمثل طريقة تجاوز الدعائم الافتراضية في تعيين قيم الدعامة للمكون بشكل صريح. </section>

## Instructions
<section id="instructions"> مكون <code>ShoppingCart</code> الآن يعرض <code>Items</code> مكون تابعة. يحتوي مكون <code>Items</code> هذا على <code>quantity</code> prop افتراضية تعيين إلى عدد صحيح <code>0</code> . تجاوز الدعامة الافتراضية بتمرير قيمة <code>10</code> <code>quantity</code> . <strong>ملاحظة:</strong> تذكر أن بناء الجملة لإضافة دعامة إلى أحد المكونات يشبه الطريقة التي تضيف بها سمات HTML. ومع ذلك ، نظرًا لأن القيمة <code>quantity</code> هي عدد صحيح ، فلن يتم نقلها بين علامتي اقتباس ولكن يجب أن تكون ملفوفة في أقواس معقوفة. على سبيل المثال ، <code>{100}</code> . يخبر هذا التركيب JSX بتفسير القيمة داخل الأقواس مباشرة مثل JavaScript. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("ShoppingCart").length === 1; })(), "The component <code>ShoppingCart</code> should render.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("Items").length === 1; })(), "The component <code>Items</code> should render.");'
  - text: ''
    testString: 'getUserInput => assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ShoppingCart)); return mockedComponent.find("Items").props().quantity == 10 && getUserInput("index").replace(/ /g,"").includes("<Itemsquantity={10}/>"); })(), "The <code>Items</code> component should have a prop of <code>{ quantity: 10 }</code> passed from the <code>ShoppingCart</code> component.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* change code below this line */ }
    return <Items />
    { /* change code above this line */ }
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
