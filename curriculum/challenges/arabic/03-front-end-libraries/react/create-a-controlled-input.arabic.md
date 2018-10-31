---
id: 5a24c314108439a4d4036178
title: Create a Controlled Input
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
  - text: يجب أن يعرض <code>ControlledInput</code> عنصر <code>div</code> يحتوي على <code>input</code> وعلامة <code>p</code> .
    testString: 'assert(Enzyme.mount(React.createElement(ControlledInput)).find("div").children().find("input").length === 1 && Enzyme.mount(React.createElement(ControlledInput)).find("div").children().find("p").length === 1, "<code>ControlledInput</code> should return a <code>div</code> element which contains an <code>input</code> and a <code>p</code> tag.");'
  - text: يجب تهيئة حالة <code>ControlledInput</code> مع خاصية <code>input</code> لتعيين سلسلة فارغة.
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(ControlledInput)).state("input"), "", "The state of <code>ControlledInput</code> should initialize with an <code>input</code> property set to an empty string.");'
  - text: يجب أن تؤدي الكتابة في عنصر الإدخال إلى تحديث الحالة وقيمة الإدخال ، ويجب أن يعرض العنصر <code>p</code> هذه الحالة أثناء الكتابة.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(ControlledInput)); const _1 = () => { mockedComponent.setState({ input: "" }); return waitForIt(() => mockedComponent.state("input"))}; const _2 = () => { mockedComponent.find("input").simulate("change", { target: { value: "TestInput" }}); return waitForIt(() => ({ state: mockedComponent.state("input"), text: mockedComponent.find("p").text(), inputVal: mockedComponent.find("input").props().value }))}; const before = await _1(); const after = await _2(); assert(before === "" && after.state === "TestInput" && after.text === "TestInput" && after.inputVal === "TestInput", "Typing in the input element should update the state and the value of the input, and the <code>p</code> element should render this state as you type."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "
    };
    // change code below this line

    // change code above this line
  }
  // change code below this line

  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}

        { /* change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
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
