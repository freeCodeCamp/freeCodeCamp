---
id: 5a24c314108439a4d4036177
title: Write a Simple Counter
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Write a Simple Counter
---

## Description
<section id='description'>
你可以结合目前为止所涵盖的概念来设计更复杂的有状态组件。这包括初始化<code>state</code>，编写设置<code>state</code>的方法，以及指定单击处理程序来触发这些方法。
</section>

## Instructions
<section id='instructions'>
<code>Counter</code>组件跟踪<code>state</code>中的<code>count</code>值。有两个按钮分别调用<code>increment()</code>和<code>decrement()</code>方法。编写这些方法，使计数器值在单击相应按钮时增加或减少 1。另外，创建一个<code>reset()</code>方法，当单击 reset 按钮时，把计数设置为 0。
<strong>注意：</strong>&nbsp;确保你没有修改按钮的<code>classNames</code>。另外，请记住在构造函数中为新创建的方法添加必要的绑定。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Counter</code>应该返回一个<code>div</code>元素，它包含三个按钮，按钮内容依次是<code>Increment!</code>、<code>Decrement!</code>、<code>Reset</code>。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(Counter)); return (mockedComponent.find('.inc').text() === 'Increment!' && mockedComponent.find('.dec').text() === 'Decrement!' && mockedComponent.find('.reset').text() === 'Reset'); })(), '<code>Counter</code>应该返回一个<code>div</code>元素，它包含三个按钮，按钮内容依次是<code>Increment!</code>、<code>Decrement!</code>、<code>Reset</code>。');
  - text: <code>Counter</code>应该使用设置为<code>0</code>的<code>count</code>属性初始化 state。
    testString: assert.strictEqual(Enzyme.mount(React.createElement(Counter)).state('count'), 0, '<code>Counter</code>应该使用设置为<code>0</code>的<code>count</code>属性初始化 state。');
  - text: 单击 increment 按钮应将计数增加<code>1</code>。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Counter)); const first = () => { mockedComponent.setState({ count: 0 }); return waitForIt(() => mockedComponent.state("count")); }; const second = () => { mockedComponent.find(".inc").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === 0 && secondValue === 1, "单击 increment 按钮应将计数增加<code>1</code>。"); }; '
  - text: 单击 decrement 按钮应将计数减少<code>1</code>。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Counter)); const first = () => { mockedComponent.setState({ count: 0 }); return waitForIt(() => mockedComponent.state("count")); }; const second = () => { mockedComponent.find(".dec").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === 0 && secondValue === -1, "单击 decrement 按钮应将计数减少<code>1</code>。"); }; '
  - text: 单击 reset 按钮应将计数重置为<code>0</code>。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Counter)); const init = () => { mockedComponent.setState({ count: 0 }); return waitForIt(() => mockedComponent.state("count")); }; const increment = () => { mockedComponent.find(".inc").simulate("click"); mockedComponent.find(".inc").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const decrement = () => { mockedComponent.find(".dec").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const reset = () => { mockedComponent.find(".reset").simulate("click"); return waitForIt(() => mockedComponent.state("count")); }; const firstValue = await init(); const secondValue = await increment(); const thirdValue = await decrement(); const fourthValue = await reset(); assert(firstValue === 0 && secondValue === 2 && thirdValue === 1 && fourthValue === 0, "单击 reset 按钮应将计数重置为<code>0</code>。"); }; '

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

```jsx
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
    this.setState({
      count: this.state.count + 1
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
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
              