---
id: 5a24c314108439a4d4036177
title: Write a Simple Counter
challengeType: 6
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
    testString: 'assert((() => { const mockedComponent = Enzyme.mount(React.createElement(Counter)); return (mockedComponent.find(".inc").text() === "Increment!" && mockedComponent.find(".dec").text() === "Decrement!" && mockedComponent.find(".reset").text() === "Reset"); })(), "<code>Counter</code> should return a <code>div</code> element which contains three buttons with text content in this order <code>Increment!</code>, <code>Decrement!</code>, <code>Reset</code>.");'
  - text: ''
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(Counter)).state("count"), 0, "The state of <code>Counter</code> should initialize with a <code>count</code> property set to <code>0</code>.");'
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Counter)); const first = () => { mockedComponent.setState({ count: 0 }); return waitForIt(() => mockedComponent.state("count")); }; const second = () => { mockedComponent.find(".inc").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === 0 && secondValue === 1, "Clicking the increment button should increment the count by <code>1</code>."); }; '
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Counter)); const first = () => { mockedComponent.setState({ count: 0 }); return waitForIt(() => mockedComponent.state("count")); }; const second = () => { mockedComponent.find(".dec").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === 0 && secondValue === -1, "Clicking the decrement button should decrement the count by <code>1</code>."); }; '
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Counter)); const init = () => { mockedComponent.setState({ count: 0 }); return waitForIt(() => mockedComponent.state("count")); }; const increment = () => { mockedComponent.find(".inc").simulate("click"); mockedComponent.find(".inc").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const decrement = () => { mockedComponent.find(".dec").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const reset = () => { mockedComponent.find(".reset").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const firstValue = await init(); const secondValue = await increment(); const thirdValue = await decrement(); const fourthValue = await reset(); assert(firstValue === 0 && secondValue === 2 && thirdValue === 1 && fourthValue === 0, "Clicking the reset button should reset the count to <code>0</code>."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line

    // change code above this line
  }
  // change code below this line

  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
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
