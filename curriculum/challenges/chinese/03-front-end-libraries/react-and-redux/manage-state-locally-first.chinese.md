---
id: 5a24c314108439a4d4036142
title: Manage State Locally First
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 在当地管理国家
---

## Description
<section id="description">在这里，您将完成创建<code>DisplayMessages</code>组件。 </section>

## Instructions
<section id="instructions">首先，在<code>render()</code>方法中，让组件呈现<code>input</code>元素， <code>button</code>元素和<code>ul</code>元素。当<code>input</code>元素改变时，它应该触发<code>handleChange()</code>方法。此外， <code>input</code>元素应该呈现处于组件状态的<code>input</code>值。 <code>button</code>元素应在单击时触发<code>submitMessage()</code>方法。其次，写下这两种方法。该<code>handleChange()</code>方法应该更新<code>input</code>与用户正在打字。 <code>submitMessage()</code>方法应将当前消息（存储在<code>input</code> ）连接到本地状态的<code>messages</code>数组，并清除<code>input</code>的值。最后，使用<code>ul</code>映射<code>messages</code>数组并将其作为<code>li</code>元素列表呈现给屏幕。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>DisplayMessages</code>组件应使用等于<code>{ input: &quot;&quot;, messages: [] }</code>的状态进行初始化。'
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const initialState = mockedComponent.state(); return ( typeof initialState === "object" && initialState.input === "" && initialState.messages.length === 0); })());
  - text: <code>DisplayMessages</code>组件应该呈现包含<code>h2</code>元素， <code>button</code>元素， <code>ul</code>元素和<code>li</code>元素作为子元素的<code>div</code> 。
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const state = () => { mockedComponent.setState({messages: ["__TEST__MESSAGE"]}); return waitForIt(() => mockedComponent )}; const updated = await state(); assert(updated.find("div").length === 1 && updated.find("h2").length === 1 && updated.find("button").length === 1 && updated.find("ul").length === 1, "The <code>DisplayMessages</code> component should render a <code>div</code> containing an <code>h2</code> element, a <code>button</code> element, a <code>ul</code> element, and <code>li</code> elements as children."); }; '
  - text: <code>input</code>元素应该以本地状态呈现<code>input</code>值。
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const testValue = "__TEST__EVENT__INPUT"; const changed = () => { causeChange(mockedComponent, testValue); return waitForIt(() => mockedComponent )}; const updated = await changed(); assert(updated.find("input").props().value === testValue, "The <code>input</code> element should render the value of <code>input</code> in local state."); }; '
  - text: 调用方法<code>handleChange</code>应该将状态中的<code>input</code>值更新为当前输入。
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage = "__TEST__EVENT__MESSAGE__"; const changed = () => { causeChange(mockedComponent, testMessage); return waitForIt(() => mockedComponent )}; const afterInput = await changed(); assert(initialState.input === "" && afterInput.state().input === "__TEST__EVENT__MESSAGE__", "Calling the method <code>handleChange</code> should update the <code>input</code> value in state to the current input.");  }; '
  - text: 单击“ <code>Add message</code>按钮应调用方法<code>submitMessage</code> ，该方法<code>submitMessage</code>当前<code>input</code>添加到状态中的<code>messages</code>数组。
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 100)); const causeChange = (c, v) => c.find("input").simulate("change", { target: { value: v }}); const initialState = mockedComponent.state(); const testMessage_1 = "__FIRST__MESSAGE__"; const firstChange = () => { causeChange(mockedComponent, testMessage_1); return waitForIt(() => mockedComponent )}; const firstResult = await firstChange(); const firstSubmit = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent )}; const afterSubmit_1 = await firstSubmit(); const submitState_1 = afterSubmit_1.state(); const testMessage_2 = "__SECOND__MESSAGE__"; const secondChange = () => { causeChange(mockedComponent, testMessage_2); return waitForIt(() => mockedComponent )}; const secondResult = await secondChange(); const secondSubmit = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent )}; const afterSubmit_2 = await secondSubmit(); const submitState_2 = afterSubmit_2.state(); assert(initialState.messages.length === 0 && submitState_1.messages.length === 1 && submitState_2.messages.length === 2 && submitState_2.messages[1] === testMessage_2, "Clicking the <code>Add message</code> button should call the method <code>submitMessage</code> which should add the current <code>input</code> to the <code>messages</code> array in state."); }; '
  - text: <code>submitMessage</code>方法应该清除当前输入。
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

/section>
