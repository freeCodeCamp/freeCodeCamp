---
id: 5a24c314108439a4d403617b
title: Pass a Callback as Props
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> يمكنك تمرير <code>state</code> كدعائم إلى مكونات <code>state</code> ، ولكنك لا تقتصر على تمرير البيانات. يمكنك أيضًا تمرير وظائف معالج أو أي طريقة يتم تعريفها في مكون React إلى مكون فرعي. هذه هي الطريقة التي تسمح للمكونات الفرعية بالتفاعل مع المكونات الأساسية الخاصة بها. تمر الطرق لطفل مثل الدعامة العادية. يتم تعيين اسم له ولديك إمكانية الوصول إلى اسم هذا الأسلوب ضمن <code>this.props</code> في المكون التابع. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يتم عرض مكون <code>MyApp</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find("MyApp").length === 1; })(), "The <code>MyApp</code> component should render.");'
  - text: يجب أن يتم تقديم المكون <code>GetInput</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find("GetInput").length === 1; })(), "The <code>GetInput</code> component should render.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find("RenderInput").length === 1; })(), "The <code>RenderInput</code> component should render.");'
  - text: يجب أن يتلقى المكون <code>GetInput</code> خاصية حالة حالة <code>MyApp</code> <code>inputValue</code> ويحتوي على عنصر <code>input</code> بتعديل حالة <code>MyApp</code> .
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const state_1 = () => { mockedComponent.setState({inputValue: ""}); return waitForIt(() => mockedComponent.state() )}; const state_2 = () => { mockedComponent.find("input").simulate("change", {target: {value: "TestInput"}}); return waitForIt(() => mockedComponent.state() )}; const updated_1 = await state_1(); const updated_2 = await state_2(); assert(updated_1.inputValue === "" && updated_2.inputValue === "TestInput", "The <code>GetInput</code> component should receive the <code>MyApp</code> state property <code>inputValue</code> as props and contain an <code>input</code> element which modifies <code>MyApp</code> state."); }; '
  - text: و <code>RenderInput</code> ينبغي أن يتلقى المكون <code>MyApp</code> ممتلكات الدولة <code>inputValue</code> كما الدعائم.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const state_1 = () => { mockedComponent.setState({inputValue: "TestName"}); return waitForIt(() => mockedComponent )}; const updated_1 = await state_1(); assert(updated_1.find("p").text().includes("TestName"), "The <code>RenderInput</code> component should receive the <code>MyApp</code> state property <code>inputValue</code> as props."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* change code below this line */ }

        { /* change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
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
