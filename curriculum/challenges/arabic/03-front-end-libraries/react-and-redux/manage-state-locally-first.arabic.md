---
id: 5a24c314108439a4d4036142
title: Manage State Locally First
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: إدارة الدولة محليا أولا
---

## Description
<section id="description"> هنا ستنتهي من إنشاء مكون <code>DisplayMessages</code> . </section>

## Instructions
<section id="instructions"> أولاً ، في الطريقة <code>render()</code> ، اجعل المكون يعرض عنصر <code>input</code> ، عنصر <code>button</code> ، وعنصر <code>ul</code> . عندما يتغير عنصر <code>input</code> ، يجب أن يقوم بتشغيل أسلوب <code>handleChange()</code> . أيضًا ، يجب أن يعرض عنصر <code>input</code> قيمة <code>input</code> في حالة المكوِّن. يجب أن يقوم عنصر <code>button</code> بتشغيل طريقة <code>submitMessage()</code> عند النقر عليها. ثانيًا ، اكتب هذين الأسلوبين. يجب أن تقوم الطريقة <code>handleChange()</code> بتحديث <code>input</code> بما <code>handleChange()</code> المستخدم. يجب أن تسلسل طريقة <code>submitMessage()</code> الرسالة الحالية (المخزنة في <code>input</code> ) إلى مصفوفة <code>messages</code> في الحالة المحلية ، ومسح قيمة <code>input</code> . وأخيرًا ، استخدم <code>ul</code> لتعيين أكثر من مجموعة من <code>messages</code> وعرضها على الشاشة كقائمة من عناصر <code>li</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب تهيئة مكون <code>DisplayMessages</code> بحالة مساوية <code>{ input: &quot;&quot;, messages: [] }</code> .'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const initialState = mockedComponent.state(); return ( typeof initialState === "object" && initialState.input === "" && initialState.messages.length === 0); })(), "The <code>DisplayMessages</code> component should initialize with a state equal to <code>{ input: "", messages: [] }</code>.");'
  - text: يجب أن يقوم مكون <code>DisplayMessages</code> بعرض <code>div</code> يحتوي على عنصر <code>h2</code> ، وعنصر <code>button</code> ، وعنصر <code>ul</code> ، وعناصر <code>li</code> كأطفال.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const state = () => { mockedComponent.setState({messages: ["__TEST__MESSAGE"]}); return waitForIt(() => mockedComponent )}; const updated = await state(); assert(updated.find("div").length === 1 && updated.find("h2").length === 1 && updated.find("button").length === 1 && updated.find("ul").length === 1, "The <code>DisplayMessages</code> component should render a <code>div</code> containing an <code>h2</code> element, a <code>button</code> element, a <code>ul</code> element, and <code>li</code> elements as children."); }; '
  - text: يجب أن يؤدي عنصر <code>input</code> عرض قيمة <code>input</code> في الحالة المحلية.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const testValue = "__TEST__EVENT__INPUT"; const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const updated = await changed(); assert(updated.find("input").props().value === testValue, "The <code>input</code> element should render the value of <code>input</code> in local state."); }; '
  - text: يجب استدعاء الأسلوب <code>handleChange</code> تحديث قيمة <code>input</code> في الحالة إلى الإدخال الحالي.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage = "__TEST__EVENT__MESSAGE__"; const changed = () => { causeChange(mockedComponent, testMessage); return waitForIt(() => mockedComponent )}; const afterInput = await changed(); assert(initialState.input === "" && afterInput.state().input === "__TEST__EVENT__MESSAGE__", "Calling the method <code>handleChange</code> should update the <code>input</code> value in state to the current input.");  }; '
  - text: يجب النقر فوق الزر  <code>Add message</code> استدعاء الأسلوب <code>submitMessage</code> الذي يجب إضافة <code>input</code> الحالي إلى صفيف <code>messages</code> في الحالة.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage_1 = "__FIRST__MESSAGE__"; const firstChange = () => { causeChange(mockedComponent, testMessage_1); return waitForIt(() => mockedComponent )}; const firstResult = await firstChange(); const firstSubmit = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent )}; const afterSubmit_1 = await firstSubmit(); const submitState_1 = afterSubmit_1.state(); const testMessage_2 = "__SECOND__MESSAGE__"; const secondChange = () => { causeChange(mockedComponent, testMessage_2); return waitForIt(() => mockedComponent )}; const secondResult = await secondChange(); const secondSubmit = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent )}; const afterSubmit_2 = await secondSubmit(); const submitState_2 = afterSubmit_2.state(); assert(initialState.messages.length === 0 && submitState_1.messages.length === 1 && submitState_2.messages.length === 2 && submitState_2.messages[1] === testMessage_2, "Clicking the <code>Add message</code> button should call the method <code>submitMessage</code> which should add the current <code>input</code> to the <code>messages</code> array in state."); }; '
  - text: يجب أن تقوم طريقة <code>submitMessage</code> بمسح الإدخال الحالي.
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage = "__FIRST__MESSAGE__"; const firstChange = () => { causeChange(mockedComponent, testMessage); return waitForIt(() => mockedComponent )}; const firstResult = await firstChange(); const firstState = firstResult.state(); const firstSubmit = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent )}; const afterSubmit = await firstSubmit(); const submitState = afterSubmit.state(); assert(firstState.input === testMessage && submitState.input === "", "The <code>submitMessage</code> method should clear the current input."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ",
      messages: []
    }
  }
  // add handleChange() and submitMessage() methods here

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }

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
