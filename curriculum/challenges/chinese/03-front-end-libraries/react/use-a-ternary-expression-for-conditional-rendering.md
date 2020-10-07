---
id: 5a24c314108439a4d4036187
challengeType: 6
forumTopicId: 301414
title: 使用三元表达式进行条件渲染
---

## Description
<section id='description'>
在继续使用动态渲染技术之前，还有最后一种方法可以渲染你想要的东西，它使用内置的 JavaScript 条件：<em><strong>三元运算符</strong></em>。三元运算符经常被用作 JavaScript 中<code>if/else</code>语句的缩写。它们不像传统的<code>if/else</code>语句那样健壮，但是在 React 开发人员中非常流行，原因之一就是 JSX 的编译原理，<code>if/else</code>语句不能直接插入到 JSX 代码中。你可能在前几个挑战就注意到了这一点--当需要<code>if/else</code>语句时，它总是在<code>return</code>语句<em>外面</em>。如果你想在 JSX 中实现条件逻辑，三元表达式是一个很好的选择。回想一下，三元运算符有三个部分，但是你可以将多个三元表达式组合在一起。以下是基本语法：

```js
condition ? expressionIfTrue : expressionIfFalse
```

</section>

## Instructions
<section id='instructions'>
代码编辑器在<code>CheckUserAge</code>组件的<code>render()</code>方法中定义了三个常量，它们分别是<code>buttonOne</code>、<code>buttonTwo</code>和<code>buttonThree</code>。每个都分配了一个表示按钮元素的简单 JSX 表达式。首先，使用<code>input</code>和<code>userAge</code>初始化<code>CheckUserAge</code>的 state，并将其值设置为空字符串。
一旦组件将信息渲染给页面，用户应该有一种方法与之交互。在组件的<code>return</code>语句中，设置一个实现以下逻辑的三元表达式：当页面首次加载时，将提交按钮<code>buttonOne</code>渲染到页面。然后，当用户输入年龄并点击该按钮时，根据年龄渲染不同的按钮。如果用户输入的数字小于<code>18</code>，则渲染<code>buttonThree</code>。如果用户输入的数字大于或等于<code>18</code>，则渲染<code>buttonTwo</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>CheckUserAge</code>组件应该渲染出单个<code>input</code>元素和单个<code>button</code>元素。
    testString: assert(Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('input').length === 1 && Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('button').length === 1);
  - text: <code>CheckUserAge</code>组件的 state 应该用<code>userAge</code>属性和<code>input</code>属性初始化，并且这两个属性的值都被设置为空字符串。
    testString: assert(Enzyme.mount(React.createElement(CheckUserAge)).state().input === '' && Enzyme.mount(React.createElement(CheckUserAge)).state().userAge === '');
  - text: 当<code>CheckUserAge</code>组件首次渲染到 DOM 时，<code>按钮</code>内部的文本应为 Submit。
    testString: assert(Enzyme.mount(React.createElement(CheckUserAge)).find('button').text() === 'Submit');
  - text: 当小于 18 的数字输入到<code>input</code>元素中并点击该<code>按钮</code>时，该<code>按钮</code>的内部文本应该是<code>You Shall Not Pass</code>。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge)); const initialButton = mockedComponent.find(''button'').text(); const enter3AndClickButton = () => { mockedComponent.find(''input'').simulate(''change'', {target: { value: ''3'' }}); mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find(''button'').text(); }); }; const enter17AndClickButton = () => { mockedComponent.find(''input'').simulate(''change'', {target: { value: ''17'' }}); mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find(''button'').text(); }); }; const userAge3 = await enter3AndClickButton(); const userAge17 = await enter17AndClickButton(); assert(initialButton === ''Submit'' && userAge3 === ''You Shall Not Pass'' && userAge17 === ''You Shall Not Pass''); }; '
  - text: 当大于或等于 18 的数字输入到<code>input</code>元素中并点击该<code>按钮</code>时，该<code>按钮</code>的内部文本应该是<code>You May Enter</code>。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge)); const initialButton = mockedComponent.find(''button'').text(); const enter18AndClickButton = () => { mockedComponent.find(''input'').simulate(''change'', {target: { value: ''18'' }}); mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find(''button'').text(); }); }; const enter35AndClickButton = () => { mockedComponent.find(''input'').simulate(''change'', {target: { value: ''35'' }}); mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find(''button'').text(); }); }; const userAge18 = await enter18AndClickButton(); const userAge35 = await enter35AndClickButton(); assert(initialButton === ''Submit'' && userAge18 === ''You May Enter'' && userAge35 === ''You May Enter''); }; '
  - text: 一旦提交了一个数字，并再次更改了<code>input</code>的值，该<code>按钮</code>内部文本应该变回<code>Submit</code>。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge)); const enter18AndClickButton = () => { mockedComponent.find(''input'').simulate(''change'', {target: { value: ''18'' }}); mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find(''button'').text(); }); }; const changeInputDontClickButton = () => { mockedComponent.find(''input'').simulate(''change'', {target: { value: ''5'' }}); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find(''button'').text(); }); }; const enter10AndClickButton = () => { mockedComponent.find(''input'').simulate(''change'', {target: { value: ''10'' }}); mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => { mockedComponent.update(); return mockedComponent.find(''button'').text(); }); }; const userAge18 = await enter18AndClickButton(); const changeInput1 = await changeInputDontClickButton(); const userAge10 = await enter10AndClickButton(); const changeInput2 = await changeInputDontClickButton(); assert(userAge18 === ''You May Enter'' && changeInput1 === ''Submit'' && userAge10 === ''You Shall Not Pass'' && changeInput2 === ''Submit''); }; '
  - text: 你的代码不应该包含任何<code>if/else</code>语句。
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
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
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
ReactDOM.render(<CheckUserAge />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
const inputStyle = {
  width: 235,
  margin: 5
}

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAge: '',
      input: ''
    }
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
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
            this.state.userAge === '' ?
            buttonOne :
            this.state.userAge >= 18 ?
            buttonTwo :
            buttonThree
          }
      </div>
    );
  }
};
```

</section>
