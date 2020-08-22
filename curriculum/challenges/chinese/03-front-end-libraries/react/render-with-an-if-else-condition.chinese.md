---
id: 5a24c314108439a4d4036184
title: Render with an If-Else Condition
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用If-Else条件渲染
---

## Description
<section id="description">使用JavaScript控制渲染视图的另一个应用是将呈现的元素绑定到条件。当条件为真时，一个视图呈现。当它是假的时，它是一个不同的观点。您可以使用React组件的<code>render()</code>方法中的标准<code>if/else</code>语句执行此操作。 </section>

## Instructions
<section id="instructions"> MyComponent在其状态中包含一个<code>boolean</code> ，用于跟踪是否要在UI中显示某个元素。该<code>button</code>切换此值的状态。目前，它每次都呈现相同的UI。使用<code>if/else</code>语句重写<code>render()</code>方法，以便如果<code>display</code>为<code>true</code> ，则返回当前标记。否则，返回没有<code>h1</code>元素的标记。 <strong>注意：</strong>您必须编写<code>if/else</code>以传递测试。使用三元运算符不会通过此处。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该存在并呈现。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('MyComponent').length === 1; })());
  - text: 当<code>display</code>设置为<code>true</code> ，应该渲染<code>div</code> ， <code>button</code>和<code>h1</code> 。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: true}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(mockedComponent.find(''div'').length === 1 && mockedComponent.find(''div'').children().length === 2 && mockedComponent.find(''button'').length === 1 && mockedComponent.find(''h1'').length === 1); }; '
  - text: 当<code>display</code>设置为<code>false</code> ，只应呈现<code>div</code>和<code>button</code> 。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: false}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(mockedComponent.find(''div'').length === 1 && mockedComponent.find(''div'').children().length === 1 && mockedComponent.find(''button'').length === 1 && mockedComponent.find(''h1'').length === 0); }; '
  - text: render方法应使用<code>if/else</code>语句来检查<code>this.state.display</code>的条件。
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
