---
id: 5a24c314108439a4d4036184
challengeType: 6
forumTopicId: 301410
title: 使用 If-Else 条件进行渲染
---

## Description
<section id='description'>
使用 JavaScript 控制渲染视图的另一个应用是将渲染的元素绑定到一个条件。当条件为真时，将呈现一个视图，反之，则呈现另一种视图。你可以在 React 组件的<code>render()</code>方法中使用的标准<code>if/else</code>语句来实现这一点。
</section>

## Instructions
<section id='instructions'>
MyComponent 的 state 中包含一个<code>布尔值</code>，用于跟踪是否要在 UI 中显示某个元素。<code>按钮</code>切换此值的状态。目前，它每次都呈现相同的 UI。用<code>if/else</code>语句重写<code>render()</code>方法，如果<code>display</code>为<code>true</code>则返回当前标记。否则，返回不带<code>h1</code>元素的标记。
<strong>注意：</strong>&nbsp;写<code>if/else</code>语句才能通过测试，使用三元运算符是不会通过的。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该存在并被渲染。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('MyComponent').length === 1; })());
  - text: 当<code>display</code>被设置为<code>true</code>时，<code>div</code>、<code>button</code>和<code>h1</code>标签应该被渲染。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: true}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(mockedComponent.find(''div'').length === 1 && mockedComponent.find(''div'').children().length === 2 && mockedComponent.find(''button'').length === 1 && mockedComponent.find(''h1'').length === 1); }; '
  - text: 当<code>display</code>被设置为<code>false</code>时，只有<code>div</code>和<code>button</code>应该被渲染。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: false}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(mockedComponent.find(''div'').length === 1 && mockedComponent.find(''div'').children().length === 1 && mockedComponent.find(''button'').length === 1 && mockedComponent.find(''h1'').length === 0); }; '
  - text: render 方法中应该使用<code>if/else</code>语句来检查<code>this.state.display</code>的条件。
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
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line

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
      display: true
    }
 this.toggleDisplay = this.toggleDisplay.bind(this);
 }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
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
