---
id: 5a24c314108439a4d4036179
title: Create a Controlled Form
challengeType: 6
videoUrl: ''
localeTitle: إنشاء نموذج التحكم
---

## Description
<section id="description"> أظهر التحدي الأخير أن React يمكنه التحكم في الحالة الداخلية لعناصر معينة مثل <code>input</code> و <code>textarea</code> ، مما يجعلها مكونات متحكم فيها. ينطبق هذا على عناصر النموذج الأخرى أيضًا ، بما في ذلك عنصر <code>form</code> HTML المعتاد. </section>

## Instructions
<section id="instructions"> تم إعداد المكون <code>MyForm</code> <code>form</code> فارغ باستخدام معالج إرسال. سيتم استدعاء معالج الإرسال عند إرسال النموذج. لقد أضفنا زرًا يرسل النموذج. يمكنك أن ترى أنه قد تم تعيين <code>type</code> <code>submit</code> يشير إلى أنه الزر الذي يتحكم في النموذج. إضافة عنصر <code>input</code> في <code>form</code> وتعيين <code>value</code> وخصائص <code>onChange()</code> مثل التحدي الأخير. يجب عليك ثم أكمل <code>handleSubmit</code> طريقة بحيث يضع ممتلكات الدولة المكونة <code>submit</code> إلى قيمة المدخلات الحالية في المحلية <code>state</code> . <strong>ملاحظة:</strong> يجب عليك أيضًا استدعاء <code>event.preventDefault()</code> في معالج <code>event.preventDefault()</code> ، لمنع سلوك إرسال النموذج الافتراضي الذي سيؤدي إلى تحديث صفحة الويب. وأخيرا، إنشاء <code>h1</code> بعد علامة <code>form</code> مما يجعل <code>submit</code> القيمة من المكون <code>state</code> . يمكنك بعد ذلك كتابة النموذج والنقر فوق الزر (أو الضغط على Enter) ، ويجب أن تشاهد الإدخال الخاص بك تم تقديمه إلى الصفحة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyForm)); return (mockedComponent.find("div").children().find("form").length === 1 && mockedComponent.find("div").children().find("h1").length === 1 && mockedComponent.find("form").children().find("input").length === 1 && mockedComponent.find("form").children().find("button").length === 1) })(), "<code>MyForm</code> should return a <code>div</code> element which contains a <code>form</code> and an <code>h1</code> tag. The form should include an <code>input</code> and a <code>button</code>.");'
  - text: ''
    testString: 'assert(Enzyme.mount(React.createElement(MyForm)).state("input") === "" && Enzyme.mount(React.createElement(MyForm)).state("submit") === "", "The state of <code>MyForm</code> should initialize with <code>input</code> and <code>submit</code> properties, both set to empty strings.");'
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: "" }); return waitForIt(() => mockedComponent.state("input"))}; const _2 = () => { mockedComponent.find("input").simulate("change", { target: { value: "TestInput" }}); return waitForIt(() => ({ state: mockedComponent.state("input"), inputVal: mockedComponent.find("input").props().value }))}; const before = await _1(); const after = await _2(); assert(before === "" && after.state === "TestInput" && after.inputVal === "TestInput", "Typing in the <code>input</code> element should update the <code>input</code> property of the component&apos;s state."); }; '
  - text: يجب تقديم نموذج تشغيل <code>handleSubmit</code> التي ينبغي أن تحدد <code>submit</code> العقارات في دولة تساوي المدخلات الحالية.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: "" }); mockedComponent.setState({submit: ""}); mockedComponent.find("input").simulate("change", {target: {value: "SubmitInput"}}); return waitForIt(() => mockedComponent.state("submit"))}; const _2 = () => { mockedComponent.find("form").simulate("submit"); return waitForIt(() => mockedComponent.state("submit"))}; const before = await _1(); const after = await _2(); assert(before === "" && after === "SubmitInput", "Submitting the form should run <code>handleSubmit</code> which should set the <code>submit</code> property in state equal to the current input."); };'
  - text: يجب أن يعرض رأس <code>h1</code> قيمة حقل &quot; <code>submit</code> من حالة المكوِّن.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyForm)); const _1 = () => { mockedComponent.setState({ input: "" }); mockedComponent.setState({submit: ""}); mockedComponent.find("input").simulate("change", {target: {value: "TestInput"}}); return waitForIt(() => mockedComponent.find("h1").text())}; const _2 = () => { mockedComponent.find("form").simulate("submit"); return waitForIt(() => mockedComponent.find("h1").text())}; const before = await _1(); const after = await _2(); assert(before === "" && after === "TestInput", "The <code>h1</code> header should render the value of the <code>submit</code> field from the component&apos;s state."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ",
      submit: "
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // change code below this line

    // change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          { /* change code below this line */ }

          { /* change code above this line */ }
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */ }

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
