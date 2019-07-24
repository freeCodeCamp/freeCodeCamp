---
id: 5a24c314108439a4d4036176
title: Use State to Toggle an Element
challengeType: 6
isRequired: false
---

## Description
<section id='description'>
You can use <code>state</code> in React applications in more complex ways than what you've seen so far. One example is to monitor the status of a value, then render the UI conditionally based on this value. There are several different ways to accomplish this, and the code editor shows one method.
</section>

## Instructions
<section id='instructions'>
<code>MyComponent</code> has a <code>visibility</code> property which is initialized to <code>false</code>. The render method returns one view if the value of <code>visibility</code> is true, and a different view if it is false.
Currently, there is no way of updating the <code>visibility</code> property in the component's <code>state</code>. The value should toggle back and forth between true and false. There is a click handler on the button which triggers a class method called <code>toggleVisibility()</code>. Define this method so the <code>state</code> of <code>visibility</code> toggles to the opposite value when the method is called. If <code>visibility</code> is <code>false</code>, the method sets it to <code>true</code>, and vice versa.
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
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ visibility: false }); return waitForIt(() => mockedComponent.state(''visibility'')); }; const second = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent.state(''visibility'')); }; const third = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent.state(''visibility'')); }; const firstValue = await first(); const secondValue = await second(); const thirdValue = await third(); assert(!firstValue && secondValue && !thirdValue); }; '

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
    // change code below this line

    // change code above this line
  }
  // change code below this line

  // change code above this line
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
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
   }
  toggleVisibility() {
    this.setState({
      visibility: !this.state.visibility
    });
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick = {this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick = {this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};
```

</section>
