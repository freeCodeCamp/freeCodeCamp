---
id: 5a24c314108439a4d4036184
title: Render with an If-Else Condition
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
<section id="instructions"> يحتوي MyComponent على <code>boolean</code> في حالته التي تقوم بتتبع ما إذا كنت تريد عرض بعض العناصر في واجهة المستخدم أم لا. يقوم <code>button</code> تبديل حالة هذه القيمة. حاليًا ، يتم عرض واجهة المستخدم نفسها في كل مرة. أعد كتابة طريقة <code>render()</code> مع عبارة <code>if/else</code> بحيث إذا كان <code>display</code> <code>true</code> ، فأعدت الترميز الحالي. وإلا ، فأعد الترميز بدون عنصر <code>h1</code> . <strong>ملاحظة:</strong> يجب عليك كتابة <code>if/else</code> لتمرير الاختبارات. استخدام المشغل الثلاثي لن يمر هنا. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يوجد <code>MyComponent</code> وعرض.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find("MyComponent").length === 1; })(), "<code>MyComponent</code> should exist and render.");'
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: true}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(mockedComponent.find("div").length === 1 && mockedComponent.find("div").children().length === 2 && mockedComponent.find("button").length === 1 && mockedComponent.find("h1").length === 1, "When <code>display</code> is set to <code>true</code>, a <code>div</code>, <code>button</code>, and <code>h1</code> should render."); }; '
  - text: عند تعيين <code>display</code> على <code>false</code> ، يجب أن يتم <code>display</code> فقط <code>button</code> <code>div</code> <code>button</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: false}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(mockedComponent.find("div").length === 1 && mockedComponent.find("div").children().length === 1 && mockedComponent.find("button").length === 1 && mockedComponent.find("h1").length === 0, "When <code>display</code> is set to <code>false</code>, only a <code>div</code> and <code>button</code> should render."); }; '
  - text: يجب أن تستخدم طريقة التجسيد عبارة <code>if/else</code> للتحقق من حالة <code>this.state.display</code> .
    testString: 'getUserInput => assert(getUserInput("index").includes("if") && getUserInput("index").includes("else"), "The render method should use an <code>if/else</code> statement to check the condition of <code>this.state.display</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line

    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
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
