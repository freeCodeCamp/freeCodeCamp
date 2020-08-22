---
id: 5a24c314108439a4d4036187
title: Use a Ternary Expression for Conditional Rendering
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用三元表达式进行条件渲染
---

## Description
<section id="description">在继续使用动态渲染技术之前，最后一种方法是使用内置的JavaScript条件来渲染你想要的东西： <em><strong>三元运算符</strong></em> 。三元运算符通常用作JavaScript中<code>if/else</code>语句的快捷方式。它们不像传统的<code>if/else</code>语句那样健壮，但它们在React开发人员中非常受欢迎。这样做的一个原因是因为JSX是如何编译的， <code>if/else</code>语句不能直接插入到JSX代码中。您可能已经注意到这几个挑战 - 当需要<code>if/else</code>语句时，它总是在<code>return</code>语句<em>之外</em> 。如果要在JSX中实现条件逻辑，三元表达式可能是一个很好的选择。回想一下，三元运算符有三个部分，但是你可以将几个三元表达式组合在一起。这是基本语法： <blockquote>条件？ expressionIfTrue：expressionIfFalse </blockquote></section>

## Instructions
<section id="instructions">代码编辑器在<code>CheckUserAge</code>组件的<code>render()</code>方法中定义了三个常量。它们被称为<code>buttonOne</code> ， <code>buttonTwo</code>和<code>buttonThree</code> 。每个都分配了一个表示按钮元素的简单JSX表达式。首先，使用<code>input</code>和<code>userAge</code>初始化<code>CheckUserAge</code>的状态， <code>userAge</code>其设置为空字符串的值。一旦组件向页面呈现信息，用户就应该有办法与它进行交互。在组件的<code>return</code>语句中，设置一个实现以下逻辑的三元表达式：当页面首次加载时，将提交按钮<code>buttonOne</code>呈现给页面。然后，当用户输入他们的年龄并单击该按钮时，根据年龄呈现不同的按钮。如果用户输入的数字小于<code>18</code> ，则渲染<code>buttonThree</code> 。如果用户输入的数字大于或等于<code>18</code> ，则渲染<code>buttonTwo</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>CheckUserAge</code>组件应使用单个<code>input</code>元素和单个<code>button</code>元素进行渲染。
    testString: assert(Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('input').length === 1 && Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('button').length === 1);
  - text: 应使用<code>userAge</code>属性和<code>input</code>属性初始化<code>CheckUserAge</code>组件的状态，两者都设置为空字符串的值。
    testString: assert(Enzyme.mount(React.createElement(CheckUserAge)).state().input === '' && Enzyme.mount(React.createElement(CheckUserAge)).state().userAge === '');
  - text: 当<code>CheckUserAge</code>组件首次呈现给DOM时， <code>button</code>的内部文本应该是Submit。
    testString: assert(Enzyme.mount(React.createElement(CheckUserAge)).find('button').text() === 'Submit');
  - text: 当进入一个数小于18 <code>input</code>元件和<code>button</code>被点击， <code>button</code>的内部文本应该读<code>You Shall Not Pass</code> 。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge)); const initialButton = mockedComponent.find(''button'').text(); const enter3AndClickButton = () => { mockedComponent.find(''input'').simulate(''change'', {target: { value: ''3'' }}); mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find(''button'').text(); }); }; const enter17AndClickButton = () => { mockedComponent.find(''input'').simulate(''change'', {target: { value: ''17'' }}); mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find(''button'').text(); }); }; const userAge3 = await enter3AndClickButton(); const userAge17 = await enter17AndClickButton(); assert(initialButton === ''Submit'' && userAge3 === ''You Shall Not Pass'' && userAge17 === ''You Shall Not Pass''); }; '
  - text: 当数大于或等于18输入到<code>input</code>元件和<code>button</code>被点击， <code>button</code>的内部文本应该阅读<code>You May Enter</code> 。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge)); const initialButton = mockedComponent.find(''button'').text(); const enter18AndClickButton = () => { mockedComponent.find(''input'').simulate(''change'', {target: { value: ''18'' }}); mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find(''button'').text(); }); }; const enter35AndClickButton = () => { mockedComponent.find(''input'').simulate(''change'', {target: { value: ''35'' }}); mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find(''button'').text(); }); }; const userAge18 = await enter18AndClickButton(); const userAge35 = await enter35AndClickButton(); assert(initialButton === ''Submit'' && userAge18 === ''You May Enter'' && userAge35 === ''You May Enter''); }; '
  - text: 一旦提交了一个数字，并再次更改了<code>input</code>的值，该<code>button</code>应返回到<code>Submit</code> 。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge)); const enter18AndClickButton = () => { mockedComponent.find(''input'').simulate(''change'', {target: { value: ''18'' }}); mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find(''button'').text(); }); }; const changeInputDontClickButton = () => { mockedComponent.find(''input'').simulate(''change'', {target: { value: ''5'' }}); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find(''button'').text(); }); }; const enter10AndClickButton = () => { mockedComponent.find(''input'').simulate(''change'', {target: { value: ''10'' }}); mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find(''button'').text(); }); }; const userAge18 = await enter18AndClickButton(); const changeInput1 = await changeInputDontClickButton(); const userAge10 = await enter10AndClickButton(); const changeInput2 = await changeInputDontClickButton(); assert(userAge18 === ''You May Enter'' && changeInput1 === ''Submit'' && userAge10 === ''You Shall Not Pass'' && changeInput2 === ''Submit''); }; '
  - text: 您的代码不应包含任何<code>if/else</code>语句。
    testString: assert(new RegExp(/(\s|;)if(\s|\()/).test(Enzyme.mount(React.createElement(CheckUserAge)).instance().render.toString()) === false);

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

/section>
