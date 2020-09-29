---
id: 5a24c314108439a4d4036178
title: Create a Controlled Input
challengeType: 6
forumTopicId: 301385
---

## Description
<section id='description'>
Your application may have more complex interactions between <code>state</code> and the rendered UI. For example, form control elements for text input, such as <code>input</code> and <code>textarea</code>, maintain their own state in the DOM as the user types. With React, you can move this mutable state into a React component's <code>state</code>. The user's input becomes part of the application <code>state</code>, so React controls the value of that input field. Typically, if you have React components with input fields the user can type into, it will be a controlled input form.
</section>

## Instructions
<section id='instructions'>
The code editor has the skeleton of a component called <code>ControlledInput</code> to create a controlled <code>input</code> element. The component's <code>state</code> is already initialized with an <code>input</code> property that holds an empty string. This value represents the text a user types into the <code>input</code> field.
First, create a method called <code>handleChange()</code> that has a parameter called <code>event</code>. When the method is called, it receives an <code>event</code> object that contains a string of text from the <code>input</code> element. You can access this string with <code>event.target.value</code> inside the method. Update the <code>input</code> property of the component's <code>state</code> with this new string.
In the render method, create the <code>input</code> element above the <code>h4</code> tag. Add a <code>value</code> attribute which is equal to the <code>input</code> property of the component's <code>state</code>. Then add an <code>onChange()</code> event handler set to the <code>handleChange()</code> method.
When you type in the input box, that text is processed by the <code>handleChange()</code> method, set as the <code>input</code> property in the local <code>state</code>, and rendered as the value in the <code>input</code> box on the page. The component <code>state</code> is the single source of truth regarding the input data.
Last but not least, don't forget to add the necessary bindings in the constructor.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ControlledInput</code> should return a <code>div</code> element which contains an <code>input</code> and a <code>p</code> tag.
    testString: assert(Enzyme.mount(React.createElement(ControlledInput)).find('div').children().find('input').length === 1 && Enzyme.mount(React.createElement(ControlledInput)).find('div').children().find('p').length === 1);
  - text: The state of <code>ControlledInput</code> should initialize with an <code>input</code> property set to an empty string.
    testString: assert.strictEqual(Enzyme.mount(React.createElement(ControlledInput)).state('input'), '');
  - text: Typing in the input element should update the state and the value of the input, and the <code>p</code> element should render this state as you type.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(ControlledInput)); const _1 = () => { mockedComponent.setState({ input: '''' }); return waitForIt(() => mockedComponent.state(''input''))}; const _2 = () => { mockedComponent.find(''input'').simulate(''change'', { target: { value: ''TestInput'' }}); return waitForIt(() => ({ state: mockedComponent.state(''input''), text: mockedComponent.find(''p'').text(), inputVal: mockedComponent.find(''input'').props().value }))}; const before = await _1(); const after = await _2(); assert(before === '''' && after.state === ''TestInput'' && after.text === ''TestInput'' && after.inputVal === ''TestInput''); }; '

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
      input: ''
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}

        { /* Change code above this line */}
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

```jsx
ReactDOM.render(<ControlledInput />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```jsx
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={this.handleChange} />
        <h4>Controlled Input:</h4>

        <p>{this.state.input}</p>
      </div>
    );
  }
};
```

</section>
