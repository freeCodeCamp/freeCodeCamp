---
id: 5a24c314108439a4d4036187
title: Use a Ternary Expression for Conditional Rendering
challengeType: 6
isHidden: false
isRequired: false
forumTopicId: 301414
---

## Description

<section id='description'>
Before moving on to dynamic rendering techniques, there's one last way to use built-in JavaScript conditionals to render what you want: the <dfn>ternary operator</dfn>. The ternary operator is often utilized as a shortcut for <code>if/else</code> statements in JavaScript. They're not quite as robust as traditional <code>if/else</code> statements, but they are very popular among React developers. One reason for this is because of how JSX is compiled, <code>if/else</code> statements can't be inserted directly into JSX code. You might have noticed this a couple challenges ago &mdash; when an <code>if/else</code> statement was required, it was always <em>outside</em> the <code>return</code> statement. Ternary expressions can be an excellent alternative if you want to implement conditional logic within your JSX. Recall that a ternary operator has three parts, but you can combine several ternary expressions together. Here's the basic syntax:

```js
condition ? expressionIfTrue : expressionIfFalse;
```

</section>

## Instructions

<section id='instructions'>
The code editor has three constants defined within the <code>CheckUserAge</code> component's <code>render()</code> method. They are called <code>buttonOne</code>, <code>buttonTwo</code>, and <code>buttonThree</code>. Each of these is assigned a simple JSX expression representing a button element. First, initialize the state of <code>CheckUserAge</code> with <code>input</code> and <code>userAge</code> both set to values of an empty string.
Once the component is rendering information to the page, users should have a way to interact with it. Within the component's <code>return</code> statement, set up a ternary expression that implements the following logic: when the page first loads, render the submit button, <code>buttonOne</code>, to the page. Then, when a user enters their age and clicks the button, render a different button based on the age. If a user enters a number less than <code>18</code>, render <code>buttonThree</code>. If a user enters a number greater than or equal to <code>18</code>, render <code>buttonTwo</code>.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: The <code>CheckUserAge</code> component should render with a single <code>input</code> element and a single <code>button</code> element.
    testString: assert(Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('input').length === 1 && Enzyme.mount(React.createElement(CheckUserAge)).find('div').find('button').length === 1);
  - text: The <code>CheckUserAge</code> component&apos;s state should be initialized with a property of <code>userAge</code> and a property of <code>input</code>, both set to a value of an empty string.
    testString: assert(Enzyme.mount(React.createElement(CheckUserAge)).state().input === '' && Enzyme.mount(React.createElement(CheckUserAge)).state().userAge === '');
  - text: When the <code>CheckUserAge</code> component is first rendered to the DOM, the <code>button</code>&apos;s inner text should be Submit.
    testString: assert(Enzyme.mount(React.createElement(CheckUserAge)).find('button').text() === 'Submit');
  - text: When a number of less than 18 is entered into the <code>input</code> element and the <code>button</code> is clicked, the <code>button</code>&apos;s inner text should read <code>You Shall Not Pass</code>.
    testString: "(() => {
      const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
      const initialButton = mockedComponent.find('button').text();
      const enter3AndClickButton = () => {
        mockedComponent
          .find('input')
          .simulate('change', { target: { value: '3' } });
        mockedComponent.find('button').simulate('click');
        mockedComponent.update();
        return mockedComponent.find('button').text();
      };
      const enter17AndClickButton = () => {
        mockedComponent
          .find('input')
          .simulate('change', { target: { value: '17' } });
        mockedComponent.find('button').simulate('click');
        mockedComponent.update();
        return mockedComponent.find('button').text();
      };
      const userAge3 = enter3AndClickButton();
      const userAge17 = enter17AndClickButton();
      assert(
        initialButton === 'Submit' &&
          userAge3 === 'You Shall Not Pass' &&
          userAge17 === 'You Shall Not Pass'
      );
    })();
    "
  - text: When a number greater than or equal to 18 is entered into the <code>input</code> element and the <code>button</code> is clicked, the <code>button</code>&apos;s inner text should read <code>You May Enter</code>.
    testString: "(() => {
      const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
      const initialButton = mockedComponent.find('button').text();
      const enter18AndClickButton = () => {
        mockedComponent
          .find('input')
          .simulate('change', { target: { value: '18' } });
        mockedComponent.find('button').simulate('click');
        mockedComponent.update();
        return mockedComponent.find('button').text();
      };
      const enter35AndClickButton = () => {
        mockedComponent
          .find('input')
          .simulate('change', { target: { value: '35' } });
        mockedComponent.find('button').simulate('click');
        mockedComponent.update();
        return mockedComponent.find('button').text();
      };
      const userAge18 = enter18AndClickButton();
      const userAge35 = enter35AndClickButton();
      assert(
        initialButton === 'Submit' &&
          userAge18 === 'You May Enter' &&
          userAge35 === 'You May Enter'
      );
    })();
    "
  - text: Once a number has been submitted, and the value of the <code>input</code> is once again changed, the <code>button</code> should return to reading <code>Submit</code>.
    testString: "(() => {
      const mockedComponent = Enzyme.mount(React.createElement(CheckUserAge));
      const enter18AndClickButton = () => {
        mockedComponent
          .find('input')
          .simulate('change', { target: { value: '18' } });
        mockedComponent.find('button').simulate('click');
        mockedComponent.update();
        return mockedComponent.find('button').text();
      };
      const changeInputDontClickButton = () => {
        mockedComponent
          .find('input')
          .simulate('change', { target: { value: '5' } });
        mockedComponent.update();
        return mockedComponent.find('button').text();
      };
      const enter10AndClickButton = () => {
        mockedComponent
          .find('input')
          .simulate('change', { target: { value: '10' } });
        mockedComponent.find('button').simulate('click');
        mockedComponent.update();
        return mockedComponent.find('button').text();
      };
      const userAge18 = enter18AndClickButton();
      const changeInput1 = changeInputDontClickButton();
      const userAge10 = enter10AndClickButton();
      const changeInput2 = changeInputDontClickButton();
      assert(
        userAge18 === 'You May Enter' &&
          changeInput1 === 'Submit' &&
          userAge10 === 'You Shall Not Pass' &&
          changeInput2 === 'Submit'
      );
    })();
    "
  - text: Your code should not contain any <code>if/else</code> statements.
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
};

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
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* change code here */}
      </div>
    );
  }
}
```

</div>

### After Test

<div id='jsx-teardown'>

```js
ReactDOM.render(<CheckUserAge />, document.getElementById('root'));
```

</div>

</section>

## Solution

<section id='solution'>

```js
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAge: '',
      input: ''
    };
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
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge === ''
          ? buttonOne
          : this.state.userAge >= 18
          ? buttonTwo
          : buttonThree}
      </div>
    );
  }
}
```

</section>
