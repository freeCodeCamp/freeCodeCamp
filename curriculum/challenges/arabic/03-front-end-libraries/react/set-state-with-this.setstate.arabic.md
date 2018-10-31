---
id: 5a24c314108439a4d4036173
title: Set State with this.setState
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state("name") === "Initial State", "The state of <code>MyComponent</code> should initialize with the key value pair <code>{ name: Initial State }</code>.");'
  - text: يجب أن يقوم <code>MyComponent</code> بعرض رأس <code>h1</code> .
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).find("h1").length === 1, "<code>MyComponent</code> should render an <code>h1</code> header.");'
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: "TestName" }); return waitForIt(() => mockedComponent.html()); }; const firstValue = await first(); assert(/<h1>TestName<\/h1>/.test(firstValue), "The rendered <code>h1</code> header should contain text rendered from the component&apos;s state."); };'
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ name: "Before" }); return waitForIt(() => mockedComponent.state("name")); }; const second = () => { mockedComponent.instance().handleClick(); return waitForIt(() => mockedComponent.state("name")); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === "Before" && secondValue === "React Rocks!", "Calling the <code>handleClick</code> method on <code>MyComponent</code> should set the name property in state to equal <code>React Rocks!</code>."); };'

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
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // change code below this line

    // change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
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
</section>
