---
id: 5a24c314108439a4d4036179
title: Create a Controlled Form
challengeType: 6
forumTopicId: 301384
---

## Description

<section id='description'>
The last challenge showed that React can control the internal state for certain elements like <code>input</code> and <code>textarea</code>, which makes them controlled components. This applies to other form elements as well, including the regular HTML <code>form</code> element.
</section>

## Instructions

<section id='instructions'>
The <code>MyForm</code> component is set up with an empty <code>form</code> with a submit handler. The submit handler will be called when the form is submitted.
We've added a button which submits the form. You can see it has the <code>type</code> set to <code>submit</code> indicating it is the button controlling the form. Add the <code>input</code> element in the <code>form</code> and set its <code>value</code> and <code>onChange()</code> attributes like the last challenge. You should then complete the <code>handleSubmit</code> method so that it sets the component state property <code>submit</code> to the current input value in the local <code>state</code>.
<strong>Note:</strong>&nbsp; You also must call <code>event.preventDefault()</code> in the submit handler, to prevent the default form submit behavior which will refresh the web page.
Finally, create an <code>h1</code> tag after the <code>form</code> which renders the <code>submit</code> value from the component's <code>state</code>. You can then type in the form and click the button (or press enter), and you should see your input rendered to the page.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>MyForm</code> should return a <code>div</code> element which contains a <code>form</code> and an <code>h1</code> tag. The form should include an <code>input</code> and a <code>button</code>.
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyForm)); return (mockedComponent.find('div').children().find('form').length === 1 && mockedComponent.find('div').children().find('h1').length === 1 && mockedComponent.find('form').children().find('input').length === 1 && mockedComponent.find('form').children().find('button').length === 1) })());
  - text: The state of <code>MyForm</code> should initialize with <code>input</code> and <code>submit</code> properties, both set to empty strings.
    testString: assert(Enzyme.mount(React.createElement(MyForm)).state('input') === '' && Enzyme.mount(React.createElement(MyForm)).state('submit') === '');
  - text: Typing in the <code>input</code> element should update the <code>input</code> property of the component&apos;s state.
    testString: "(() => {
      const mockedComponent = Enzyme.mount(React.createElement(MyForm));
      const _1 = () => {
        mockedComponent.setState({ input: '' });
        return mockedComponent.state('input');
      };
      const _2 = () => {
        mockedComponent
          .find('input')
          .simulate('change', { target: { value: 'TestInput' } });
        return {
          state: mockedComponent.state('input'),
          inputVal: mockedComponent.find('input').props().value,
        };
      };
      const before = _1();
      const after = _2();
      assert(
        before === '' &&
          after.state === 'TestInput' &&
          after.inputVal === 'TestInput'
      );
    })();
    "
  - text: Submitting the form should run <code>handleSubmit</code> which should set the <code>submit</code> property in state equal to the current input.
    testString: "(() => {
      const mockedComponent = Enzyme.mount(React.createElement(MyForm));
      const _1 = () => {
        mockedComponent.setState({ input: '' });
        mockedComponent.setState({ submit: '' });
        mockedComponent
          .find('input')
          .simulate('change', { target: { value: 'SubmitInput' } });
        return mockedComponent.state('submit');
      };
      const _2 = () => {
        mockedComponent.find('form').simulate('submit');
        return mockedComponent.state('submit');
      };
      const before = _1();
      const after = _2();
      assert(before === '' && after === 'SubmitInput');
    })();
    "
  - text: The <code>h1</code> header should render the value of the <code>submit</code> field from the component&apos;s state.
    testString: "(() => {
      const mockedComponent = Enzyme.mount(React.createElement(MyForm));
      const _1 = () => {
        mockedComponent.setState({ input: '' });
        mockedComponent.setState({ submit: '' });
        mockedComponent
          .find('input')
          .simulate('change', { target: { value: 'TestInput' } });
        return mockedComponent.find('h1').text();
      };
      const _2 = () => {
        mockedComponent.find('form').simulate('submit');
        return mockedComponent.find('h1').text();
      };
      const before = _1();
      const after = _2();
      assert(before === '' && after === 'TestInput');
    })();
    "

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
      input: '',
      submit: ''
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
    // Change code below this line
    
    // Change code above this line
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}

          {/* Change code above this line */}
          <button type='submit'>Submit!</button>
        </form>
        {/* Change code below this line */}

        {/* Change code above this line */}
      </div>
    );
  }
}
```

</div>

### After Test

<div id='jsx-teardown'>

```jsx
ReactDOM.render(<MyForm />, document.getElementById('root'));
```

</div>

</section>

## Solution

<section id='solution'>

```jsx
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
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
    event.preventDefault();
    this.setState(state => ({
      submit: state.input
    }));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
```

</section>
