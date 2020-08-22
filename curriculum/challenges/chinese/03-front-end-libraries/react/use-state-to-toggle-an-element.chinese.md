---
id: 5a24c314108439a4d4036176
title: Use State to Toggle an Element
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用State切换元素
---

## Description
<section id="description">您可以以比您目前所见的更复杂的方式在React应用程序中使用<code>state</code> 。一个示例是监视值的状态，然后根据此值有条件地呈现UI。有几种不同的方法可以实现这一点，代码编辑器显示了一种方法。 </section>

## Instructions
<section id="instructions"> <code>MyComponent</code>有一个<code>visibility</code>属性，初始化为<code>false</code> 。如果<code>visibility</code>值为true，则render方法返回一个视图;如果为false，则返回不同的视图。目前，无法更新组件<code>state</code>的<code>visibility</code>属性。该值应在true和false之间来回切换。按钮上有一个单击处理程序，它触发一个名为<code>toggleVisibility()</code>的类方法。定义此方法，以便在调用方法时， <code>visibility</code> <code>state</code>切换为相反的值。如果<code>visibility</code>是<code>false</code> ，该方法将其设置为<code>true</code> ，反之亦然。最后，单击按钮以根据其<code>state</code>查看组件的条件呈现。 <strong>提示：</strong>不要忘记将<code>this</code>关键字绑定到构造函数中的方法！ </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该返回一个包含<code>button</code>的<code>div</code>元素。
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).find("div").find("button").length, 1, "<code>MyComponent</code> should return a <code>div</code> element which contains a <code>button</code>.");'
  - text: <code>MyComponent</code>的状态应该初始化，并将<code>visibility</code>属性设置为<code>false</code> 。
    testString: 'assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).state("visibility"), false, "The state of <code>MyComponent</code> should initialize with a <code>visibility</code> property set to <code>false</code>.");'
  - text: 单击按钮元素应该在<code>true</code>和<code>false</code>之间切换状态的<code>visibility</code>属性。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ visibility: false }); return waitForIt(() => mockedComponent.state("visibility")); }; const second = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("visibility")); }; const third = () => { mockedComponent.find("button").simulate("click"); return waitForIt(() => mockedComponent.state("visibility")); }; const firstValue = await first(); const secondValue = await second(); const thirdValue = await third(); assert(!firstValue && secondValue && !thirdValue, "Clicking the button element should toggle the <code>visibility</code> property in state between <code>true</code> and <code>false</code>."); }; '

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
