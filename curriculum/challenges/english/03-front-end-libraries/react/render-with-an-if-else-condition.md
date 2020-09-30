---
id: 5a24c314108439a4d4036184
title: Render with an If-Else Condition
challengeType: 6
forumTopicId: 301410
---

## Description
<section id='description'>
Another application of using JavaScript to control your rendered view is to tie the elements that are rendered to a condition. When the condition is true, one view renders. When it's false, it's a different view. You can do this with a standard <code>if/else</code> statement in the <code>render()</code> method of a React component.
</section>

## Instructions
<section id='instructions'>
MyComponent contains a <code>boolean</code> in its state which tracks whether you want to display some element in the UI or not. The <code>button</code> toggles the state of this value. Currently, it renders the same UI every time. Rewrite the <code>render()</code> method with an <code>if/else</code> statement so that if <code>display</code> is <code>true</code>, you return the current markup. Otherwise, return the markup without the <code>h1</code> element.
<strong>Note:</strong>&nbsp;You must write an <code>if/else</code> to pass the tests. Use of the ternary operator will not pass here.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code> should exist and render.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('MyComponent').length === 1; })());
  - text: When <code>display</code> is set to <code>true</code>, a <code>div</code>, <code>button</code>, and <code>h1</code> should render.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: true}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(mockedComponent.find(''div'').length === 1 && mockedComponent.find(''div'').children().length === 2 && mockedComponent.find(''button'').length === 1 && mockedComponent.find(''h1'').length === 1); }; '
  - text: When <code>display</code> is set to <code>false</code>, only a <code>div</code> and <code>button</code> should render.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: false}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(mockedComponent.find(''div'').length === 1 && mockedComponent.find(''div'').children().length === 1 && mockedComponent.find(''button'').length === 1 && mockedComponent.find(''h1'').length === 0); }; '
  - text: The render method should use an <code>if/else</code> statement to check the condition of <code>this.state.display</code>.
    testString: getUserInput => assert(getUserInput('index').includes('if') && getUserInput('index').includes('else'));

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
    this.setState((state) => ({
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
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    if (this.state.display) {
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           <h1>Displayed!</h1>
         </div>
      );
    } else {
      return (
        <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
         </div>
      );
    }
  }
};
```

</section>
