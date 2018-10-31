---
id: 5a24c314108439a4d4036187
title: Use a Ternary Expression for Conditional Rendering
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
    testString: 'assert(Enzyme.mount(React.createElement(CheckUserAge)).find("div").find("input").length === 1 && Enzyme.mount(React.createElement(CheckUserAge)).find("div").find("button").length === 1, "The <code>CheckUserAge</code> component should render with a single <code>input</code> element and a single <code>button</code> element.");'
  - text: يجب تهيئة حالة مكون <code>CheckUserAge</code> مع خاصية <code>userAge</code> و خاصية <code>input</code> ، كلاهما تم <code>userAge</code> على قيمة سلسلة فارغة.
    testString: 'assert(Enzyme.mount(React.createElement(CheckUserAge)).state().input === "" && Enzyme.mount(React.createElement(CheckUserAge)).state().userAge === "", "The <code>CheckUserAge</code> component&apos;s state should be initialized with a property of <code>userAge</code> and a property of <code>input</code>, both set to a value of an empty string.");'
  - text: ''
    testString: 'assert(Enzyme.mount(React.createElement(CheckUserAge)).find("button").text() === "Submit", "When the <code>CheckUserAge</code> component is first rendered to the DOM, the <code>button</code>&apos;s inner text should be Submit.");'
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge)); const initialButton = mockedComponent.find("button").text(); const enter3AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "3" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const enter17AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "17" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const userAge3 = await enter3AndClickButton(); const userAge17 = await enter17AndClickButton(); assert(initialButton === "Submit" && userAge3 === "You Shall Not Pass" && userAge17 === "You Shall Not Pass", "When a number of less than 18 is entered into the <code>input</code> element and the <code>button</code> is clicked, the <code>button</code>&apos;s inner text should read <code>You Shall Not Pass</code>."); }; '
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge)); const initialButton = mockedComponent.find("button").text(); const enter18AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "18" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const enter35AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "35" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const userAge18 = await enter18AndClickButton(); const userAge35 = await enter35AndClickButton(); assert(initialButton === "Submit" && userAge18 === "You May Enter" && userAge35 === "You May Enter", "When a number greater than or equal to 18 is entered into the <code>input</code> element and the <code>button</code> is clicked, the <code>button</code>&apos;s inner text should read <code>You May Enter</code>."); }; '
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge)); const enter18AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "18" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const changeInputDontClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "5" }}); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const enter10AndClickButton = () => { mockedComponent.find("input").simulate("change", {target: { value: "10" }}); mockedComponent.find("button").simulate("click"); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find("button").text(); }); }; const userAge18 = await enter18AndClickButton(); const changeInput1 = await changeInputDontClickButton(); const userAge10 = await enter10AndClickButton(); const changeInput2 = await changeInputDontClickButton(); assert(userAge18 === "You May Enter" && changeInput1 === "Submit" && userAge10 === "You Shall Not Pass" && changeInput2 === "Submit", "Once a number has been submitted, and the value of the <code>input</code> is once again changed, the <code>button</code> should return to reading <code>Submit</code>."); }; '
  - text: ''
    testString: 'assert(new RegExp(/(\s|;)if(\s|\()/).test(Enzyme.mount(React.createElement(CheckUserAge)).instance().render.toString()) === false, "Your code should not contain any <code>if/else</code> statements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const inputStyle = {
  width: 235,
  margin: 5
}

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line

    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: "
    });
  }
  submit() {
    this.setState({
      userAge: this.state.input
    });
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
        {
          /* change code here */
        }
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
