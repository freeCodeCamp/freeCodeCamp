---
id: 5a24c314108439a4d4036176
title: Use State to Toggle an Element
challengeType: 6
forumTopicId: 301421
---

## Description

<section id='description'>
Sometimes you might need to know the previous state when updating the state. However, state updates may be asynchronous - this means React may batch multiple <code>setState()</code> calls into a single update. This means you can't rely on the previous value of <code>this.state</code> or <code>this.props</code> when calculating the next value. So, you should not use code like this:

```jsx
this.setState({
  counter: this.state.counter + this.props.increment
});
```

Instead, you should pass <code>setState</code> a function that allows you to access state and props. Using a function with <code>setState</code> guarantees you are working with the most current values of state and props. This means that the above should be rewritten as:

```jsx
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

You can also use a form without `props` if you need only the `state`:

```jsx
this.setState(state => ({
  counter: state.counter + 1
}));
```

Note that you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code.

</section>

## Instructions

<section id='instructions'>
<code>MyComponent</code> has a <code>visibility</code> property which is initialized to <code>false</code>. The render method returns one view if the value of <code>visibility</code> is true, and a different view if it is false.
Currently, there is no way of updating the <code>visibility</code> property in the component's <code>state</code>. The value should toggle back and forth between true and false. There is a click handler on the button which triggers a class method called <code>toggleVisibility()</code>. Pass a function to <code>setState</code> to define this method so that the <code>state</code> of <code>visibility</code> toggles to the opposite value when the method is called. If <code>visibility</code> is <code>false</code>, the method sets it to <code>true</code>, and vice versa.
Finally, click the button to see the conditional rendering of the component based on its <code>state</code>.
<strong>Hint:</strong>&nbsp;Don't forget to bind the <code>this</code> keyword to the method in the constructor!
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should return a <code>div</code> element which contains a <code>button</code>.
    testString: assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).find('div').find('button').length, 1);
  - text: The state of <code>MyComponent</code> should initialize with a <code>visibility</code> property set to <code>false</code>.
    testString: assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).state('visibility'), false);
  - text: Clicking the button element should toggle the <code>visibility</code> property in state between <code>true</code> and <code>false</code>.
    testString: "(() => {
      const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
      const first = () => {
      mockedComponent.setState({ visibility: false });
      return mockedComponent.state('visibility');
      };
      const second = () => {
      mockedComponent.find('button').simulate('click');
      return mockedComponent.state('visibility');
      };
      const third = () => {
      mockedComponent.find('button').simulate('click');
      return mockedComponent.state('visibility');
      };
      const firstValue = first();
      const secondValue = second();
      const thirdValue = third();
      assert(!firstValue && secondValue && !thirdValue);
      })();"
  - text: An anonymous function should be passed to <code>setState</code>.
    testString: const paramRegex = '[a-zA-Z$_]\\w*(,[a-zA-Z$_]\\w*)?'; assert(new RegExp('this\\.setState\\((function\\(' + paramRegex + '\\){|([a-zA-Z$_]\\w*|\\(' + paramRegex + '\\))=>)').test(__helpers.removeWhiteSpace(code)));
  - text: <code>this</code> should not be used inside <code>setState</code>
    testString: assert(!/this\.setState\([^}]*this/.test(code));
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line

  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```

</div>

### After Test

<div id='jsx-teardown'>

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'));
```

</div>

</section>

## Solution

<section id='solution'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```

</section>
