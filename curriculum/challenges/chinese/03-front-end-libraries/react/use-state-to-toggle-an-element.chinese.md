---
id: 5a24c314108439a4d4036176
title: Use State to Toggle an Element
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Use State to Toggle an Element
---

## Description
<section id='description'>
你可以用比你目前所见的更复杂的方式在 React 应用程序中使用<code>state</code>。例如，监视值的状态，然后根据此值有条件地渲染 UI。有几种不同的方法可以实现这一点，代码编辑器展示了其中一种。
</section>

## Instructions
<section id='instructions'>
<code>MyComponent</code>有一个初始值为<code>false</code>的<code>visibility</code>属性。如果<code>visibility</code>的值为 true，render 方法返回一个视图，如果为 false，返回另一个视图。
目前，无法更新组件的<code>state</code>中的<code>visibility</code>属性，该值应在 true 和 false 之间来回切换。按钮上有一个单击处理程序，它触发一个名为<code>toggleVisibility()</code>的类方法。定义此方法，以便<code>visibility</code>的<code>state</code>在调用方法时切换到相反的值。如果<code>visibility</code>是<code>false</code>，则该方法将其设置为<code>true</code>，反之亦然。
最后，单击按钮以查看基于其<code>state</code>的组件的条件渲染。
<strong>提示：</strong>&nbsp;不要忘记将<code>this</code>关键字绑定到构造函数中的方法上！
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该返回一个<code>div</code>元素，其中包含一个<code>button</code>元素。
    testString: assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).find('div').find('button').length, 1, '<code>MyComponent</code>应该返回一个<code>div</code>元素，其中包含一个<code>button</code>元素。');
  - text: <code>MyComponent</code>应该使用设置为<code>false</code>的<code>visibility</code>属性来初始化其 state。
    testString: assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).state('visibility'), false, '<code>MyComponent</code>应该使用设置为<code>false</code>的<code>visibility</code>属性来初始化其 state。');
  - text: 单击按钮元素应在<code>true</code>和<code>false</code>之间切换<code>visibility</code>属性的状态。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ visibility: false }); return waitForIt(() => mockedComponent.state("visibility")); }; const second = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("visibility")); }; const third = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("visibility")); }; const firstValue = await first(); const secondValue = await second(); const thirdValue = await third(); assert(!firstValue && secondValue && !thirdValue, "单击按钮元素应在<code>true</code>和<code>false</code>之间切换<code>visibility</code>属性的状态。"); }; '

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

```jsx
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
              