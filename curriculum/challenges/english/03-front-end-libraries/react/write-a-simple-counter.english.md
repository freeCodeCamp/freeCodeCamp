---
id: 5a24c314108439a4d4036177
title: Write a Simple Counter
challengeType: 6
isRequired: false
forumTopicId: 301425
---

## Description
<section id='description'>
You can design a more complex stateful component by combining the concepts covered so far. These include initializing <code>state</code>, writing methods that set <code>state</code>, and assigning click handlers to trigger these methods.
</section>

## Instructions
<section id='instructions'>
The <code>Counter</code> component keeps track of a <code>count</code> value in <code>state</code>. There are two buttons which call methods <code>increment()</code> and <code>decrement()</code>. Write these methods so the counter value is incremented or decremented by 1 when the appropriate button is clicked. Also, create a <code>reset()</code> method so when the reset button is clicked, the count is set to 0.
<strong>Note:</strong>&nbsp;Make sure you don't modify the <code>classNames</code> of the buttons. Also, remember to add the necessary bindings for the newly-created methods in the constructor.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Counter</code> should return a <code>div</code> element which contains three buttons with text content in this order <code>Increment!</code>, <code>Decrement!</code>, <code>Reset</code>.
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(Counter)); return (mockedComponent.find('.inc').text() === 'Increment!' && mockedComponent.find('.dec').text() === 'Decrement!' && mockedComponent.find('.reset').text() === 'Reset'); })());
  - text: The state of <code>Counter</code> should initialize with a <code>count</code> property set to <code>0</code>.
    testString: assert.strictEqual(Enzyme.mount(React.createElement(Counter)).state('count'), 0);
  - text: Clicking the increment button should increment the count by <code>1</code>.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Counter)); const first = () => { mockedComponent.setState({ count: 0 }); return waitForIt(() => mockedComponent.state(''count'')); }; const second = () => { mockedComponent.find(''.inc'').simulate(''click''); return waitForIt(() => mockedComponent.state(''count'')); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === 0 && secondValue === 1); }; '
  - text: Clicking the decrement button should decrement the count by <code>1</code>.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Counter)); const first = () => { mockedComponent.setState({ count: 0 }); return waitForIt(() => mockedComponent.state(''count'')); }; const second = () => { mockedComponent.find(''.dec'').simulate(''click''); return waitForIt(() => mockedComponent.state(''count'')); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === 0 && secondValue === -1); }; '
  - text: Clicking the reset button should reset the count to <code>0</code>.
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Counter)); const init = () => { mockedComponent.setState({ count: 0 }); return waitForIt(() => mockedComponent.state(''count'')); }; const increment = () => { mockedComponent.find(''.inc'').simulate(''click''); mockedComponent.find(''.inc'').simulate(''click''); mockedComponent.find(''.inc'').simulate(''click''); return waitForIt(() => mockedComponent.state(''count'')); }; const decrement = () => { mockedComponent.find(''.dec'').simulate(''click''); return waitForIt(() => mockedComponent.state(''count'')); }; const reset = () => { mockedComponent.find(''.reset'').simulate(''click''); return waitForIt(() => mockedComponent.state(''count'')); }; const firstValue = await init(); const secondValue = await increment(); const thirdValue = await decrement(); const fourthValue = await reset(); assert(firstValue === 0 && secondValue === 3 && thirdValue === 2 && fourthValue === 0); }; '

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
ReactDOM.render(<Counter />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  this.increment = this.increment.bind(this);
 this.decrement = this.decrement.bind(this);
 this.reset = this.reset.bind(this);
 }
  reset() {
    this.setState({
      count: 0
    });
  }
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }
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

</section>
