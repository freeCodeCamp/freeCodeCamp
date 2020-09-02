---
id: 5a24c314108439a4d4036185
title: Use && for a More Concise Conditional
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用&&获得更简洁的条件
---

## Description
<section id="description"> if / else语句在最后一次挑战中起作用，但是有一种更简洁的方法来实现相同的结果。想象一下，您正在跟踪组件中的多个条件，并且您希望根据这些条件中的每个条件呈现不同的元素。如果你写了很多<code>else if</code>语句来返回略有不同的UI，你可能会重复代码，这会留下错误的余地。相反，您可以使用<code>&amp;&amp;</code> logical运算符以更简洁的方式执行条件逻辑。这是可能的，因为您要检查条件是否为<code>true</code> ，如果是，则返回一些标记。下面是一个示例： <code>{condition &amp;&amp; &lt;p&gt;markup&lt;/p&gt;}</code>如果<code>condition</code>为<code>true</code> ，则返回标记。如果条件为<code>false</code> ，则在评估<code>condition</code>后操作将立即返回<code>false</code>并且不返回任何内容。您可以直接在JSX中包含这些语句，并在每个语句之后写入<code>&amp;&amp;</code>多个条件串在一起。这允许您在<code>render()</code>方法中处理更复杂的条件逻辑，而无需重复大量代码。 </section>

## Instructions
<section id="instructions">再次解决前面的示例，因此<code>h1</code>仅在<code>display</code>为<code>true</code>呈现，但使用<code>&amp;&amp;</code> logical运算符而不是<code>if/else</code>语句。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该存在并呈现。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('MyComponent').length; })());
  - text: 当<code>display</code>设置为<code>true</code> ，应该渲染<code>div</code> ， <code>button</code>和<code>h1</code> 。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: true}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(updated.find(''div'').length === 1 && updated.find(''div'').children().length === 2 && updated.find(''button'').length === 1 && updated.find(''h1'').length === 1); }; '
  - text: 当<code>display</code>设置为<code>false</code> ，只应呈现<code>div</code>和<code>button</code> 。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: false}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(updated.find(''div'').length === 1 && updated.find(''div'').children().length === 1 && updated.find(''button'').length === 1 && updated.find(''h1'').length === 0); }; '
  - text: render方法应该使用&& logical运算符来检查this.state.display的条件。
    testString: getUserInput => assert(getUserInput('index').includes('&&'));

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
