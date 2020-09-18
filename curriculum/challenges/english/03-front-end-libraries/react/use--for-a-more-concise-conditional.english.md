---
id: 5a24c314108439a4d4036185
title: Use && for a More Concise Conditional
challengeType: 6
forumTopicId: 301413
---

## Description
<section id='description'>
The if/else statements worked in the last challenge, but there's a more concise way to achieve the same result. Imagine that you are tracking several conditions in a component and you want different elements to render depending on each of these conditions. If you write a lot of <code>else if</code> statements to return slightly different UIs, you may repeat code which leaves room for error. Instead, you can use the <code>&&</code> logical operator to perform conditional logic in a more concise way. This is possible because you want to check if a condition is <code>true</code>, and if it is, return some markup. Here's an example:
<code>{condition && &lt;p&gt;markup&lt;/p&gt;}</code>
If the <code>condition</code> is <code>true</code>, the markup will be returned. If the condition is <code>false</code>, the operation will immediately return <code>false</code> after evaluating the <code>condition</code> and return nothing. You can include these statements directly in your JSX and string multiple conditions together by writing <code>&&</code> after each one. This allows you to handle more complex conditional logic in your <code>render()</code> method without repeating a lot of code.
</section>

## Instructions
<section id='instructions'>
Solve the previous example again, so the <code>h1</code> only renders if <code>display</code> is <code>true</code>, but use the <code>&&</code> logical operator instead of an <code>if/else</code> statement.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should exist and render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('MyComponent').length; })());
  - text: When <code>display</code> is set to <code>true</code>, a <code>div</code>, <code>button</code>, and <code>h1</code> should render.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: true}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(updated.find(''div'').length === 1 && updated.find(''div'').children().length === 2 && updated.find(''button'').length === 1 && updated.find(''h1'').length === 1); }; '
  - text: When <code>display</code> is set to <code>false</code>, only a <code>div</code> and <code>button</code> should render.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: false}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(updated.find(''div'').length === 1 && updated.find(''div'').children().length === 1 && updated.find(''button'').length === 1 && updated.find(''h1'').length === 0); }; '
  - text: The render method should use the && logical operator to check the condition of this.state.display.
    testString: getUserInput => assert(getUserInput('index').includes('&&'));

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
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
       </div>
    );
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
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
      display: true
    }
 this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```

</section>
