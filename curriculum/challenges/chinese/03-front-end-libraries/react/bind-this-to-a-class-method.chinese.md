---
id: 5a24c314108439a4d4036174
title: Bind 'this' to a Class Method
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 将'this'绑定到类方法
---

## Description
<section id="description">除了设置和更新<code>state</code> ，您还可以为组件类定义方法。类方法通常需要使用<code>this</code>关键字，以便它可以访问方法范围内的类（例如<code>state</code>和<code>props</code> ）上的属性。有几种方法可以让您的类方法访问<code>this</code> 。一个常用的方法是显式绑定<code>this</code>所以在构造<code>this</code>组件已初始化变为绑定到类方法。您可能已经注意到最后一个挑战使用<code>this.handleClick = this.handleClick.bind(this)</code>作为构造函数中的<code>handleClick</code>方法。然后，当您在类方法中调用类似<code>this.setState()</code>的函数时， <code>this</code>引用该类，并且不会被<code>undefined</code> 。 <strong>注意：</strong> <code>this</code>关键字是JavaScript中最令人困惑的方面之一，但它在React中起着重要作用。虽然这里的行为是完全正常的，但这些课程并不是<code>this</code>进行深入审查的地方，所以如果上述内容令人困惑，请参考其他课程！ </section>

## Instructions
<section id="instructions">代码编辑器具有与组件<code>state</code>保持跟踪的项目计数。它还有一个方法，允许您增加此项目计数。但是，该方法不起作用，因为它使用未定义的<code>this</code>关键字。通过明确地结合修复它<code>this</code>到<code>addItem()</code>在组件的构造方法。接下来，将单击处理程序添加到render方法中的<code>button</code>元素。当按钮收到click事件时，它应该触发<code>addItem()</code>方法。请记住，传递给<code>onClick</code>处理程序的方法需要花括号，因为它应该直接解释为JavaScript。完成上述步骤后，您应该可以单击按钮并查看HTML中的项目计数增量。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该返回一个<code>div</code>元素，它按顺序包装两个元素，一个按钮和一个<code>h1</code>元素。
    testString: assert(Enzyme.mount(React.createElement(MyComponent)).find('div').length === 1 && Enzyme.mount(React.createElement(MyComponent)).find('div').childAt(0).type() === 'button' && Enzyme.mount(React.createElement(MyComponent)).find('div').childAt(1).type() === 'h1');
  - text: '<code>MyComponent</code>的状态应使用键值对<code>{ itemCount: 0 }</code>初始化。'
    testString: 'assert(Enzyme.mount(React.createElement(MyComponent)).state(''text'') === ''Hello'');'
  - text: 单击<code>button</code>元素应该运行<code>addItem</code>方法并将状态<code>itemCount</code>递增<code>1</code> 。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ text: ''Hello'' }); return waitForIt(() => mockedComponent.state(''text'')); }; const second = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent.state(''text'')); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === ''Hello'' && secondValue === ''You clicked!''); };'

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
      itemCount: 0
    };
    // change code below this line

    // change code above this line
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button>Click Me</button>
        { /* change code above this line */ }
        <h1>Current Item Count: {this.state.itemCount}</h1>
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
