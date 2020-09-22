---
id: 5a24c314108439a4d4036176
title: Use State to Toggle an Element
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> يمكنك استخدام <code>state</code> في تطبيقات React بطرق أكثر تعقيدًا من تلك التي شاهدتها حتى الآن. أحد الأمثلة على ذلك هو مراقبة حالة القيمة ، ثم عرض واجهة المستخدم بشكل مشروط بناءً على هذه القيمة. هناك عدة طرق مختلفة لإنجاز هذا ، ويظهر محرر الشفرة طريقة واحدة. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).find("div").find("button").length, 1, "<code>MyComponent</code> should return a <code>div</code> element which contains a <code>button</code>.");'
  - text: يجب تهيئة حالة <code>MyComponent</code> مع تعيين خاصية <code>visibility</code> إلى <code>false</code> .
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).state("visibility"), false, "The state of <code>MyComponent</code> should initialize with a <code>visibility</code> property set to <code>false</code>.");'
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ visibility: false }); return waitForIt(() => mockedComponent.state("visibility")); }; const second = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("visibility")); }; const third = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("visibility")); }; const firstValue = await first(); const secondValue = await second(); const thirdValue = await third(); assert(!firstValue && secondValue && !thirdValue, "Clicking the button element should toggle the <code>visibility</code> property in state between <code>true</code> and <code>false</code>."); }; '

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
      visibility: false
    };
    // change code below this line

    // change code above this line
  }
  // change code below this line

  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
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
