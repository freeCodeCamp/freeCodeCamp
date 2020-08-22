---
id: 5a24c314108439a4d4036177
title: Write a Simple Counter
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 写一个简单的计数器
---

## Description
<section id="description">您可以通过结合到目前为止所涵盖的概念来设计更复杂的有状态组件。这些包括初始化<code>state</code> ，编写设置<code>state</code>方法，以及分配单击处理程序以触发这些方法。 </section>

## Instructions
<section id="instructions">该<code>Counter</code>组件跟踪一个的<code>count</code>的价值<code>state</code> 。有两个按钮调用方法<code>increment()</code>和<code>decrement()</code> 。编写这些方法，以便在单击相应按钮时计数器值递增或递减1。此外，创建一个<code>reset()</code>方法，以便在单击重置按钮时，计数设置为0. <strong>注意：</strong>确保不要修改按钮的<code>classNames</code> 。另外，请记住在构造函数中为新创建的方法添加必要的绑定。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Counter</code>应返回一个<code>div</code>元素，其中包含三个按钮，文本内容按此顺序<code>Increment!</code> ， <code>Decrement!</code> ， <code>Reset</code> 。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(Counter)); return (mockedComponent.find('.inc').text() === 'Increment!' && mockedComponent.find('.dec').text() === 'Decrement!' && mockedComponent.find('.reset').text() === 'Reset'); })());
  - text: <code>Counter</code>的状态应该在<code>count</code>属性设置为<code>0</code>的情况下初始化。
    testString: 'const mockedComponent = Enzyme.mount(React.createElement(Counter)); assert(mockedComponent.find("h1").text() === "Current Count: 0")'
  - text: 单击增量按钮应将计数增加<code>1</code> 。
    testString: 'const mockedComponent = Enzyme.mount(React.createElement(Counter)); mockedComponent.find(".inc").simulate("click"); assert(mockedComponent.find("h1").text() === "Current Count: 1")'
  - text: 单击减量按钮应将计数减<code>1</code> 。
    testString: 'const mockedComponent = Enzyme.mount(React.createElement(Counter)); mockedComponent.find(".dec").simulate("click"); assert(mockedComponent.find("h1").text() === "Current Count: -1")'
  - text: 单击重置按钮应将计数重置为<code>0</code> 。
    testString: 'const mockedComponent = Enzyme.mount(React.createElement(Counter)); mockedComponent.setState({ count: 5 }); const currentCountElement = mockedComponent.find("h1"); assert(currentCountElement.text() === "Current Count: 5"); mockedComponent.find(".reset").simulate("click"); assert(currentCountElement.text() === "Current Count: 0");'

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

/section>
