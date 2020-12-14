---
id: 5a24c314108439a4d4036185
challengeType: 6
forumTopicId: 301413
title: 使用 && 获得更简洁的条件
---

## Description
<section id='description'>
if/else 语句在上一次挑战中是有效的，但是有一种更简洁的方法可以达到同样的结果。假设你正在跟踪组件中的几个条件，并且希望根据这些条件中的每一个来渲染不同的元素。如果你写了很多<code>else if</code>语句来返回稍微不同的 UI，你可能会写很多重复代码，这就留下了出错的空间。相反，你可以使用<code>&&</code>逻辑运算符以更简洁的方式执行条件逻辑。这是完全可行的，因为你希望检查条件是否为真，如果为真，则返回一些标记。这里有一个例子：
<code>{condition && &lt;p&gt;markup&lt;/p&gt;}</code>
如果<code>condition</code>为 true，则返回标记。如果 condition 为 false，操作将在判断<code>condition</code>后立即返回<code>false</code>，并且不返回任何内容。你可以将这些语句直接包含在 JSX 中，并通过在每个条件后面写<code>&&</code>来将多个条件串在一起。这允许你在<code>render()</code>方法中处理更复杂的条件逻辑，而无需重复大量代码。
</section>

## Instructions
<section id='instructions'>
再来看看前面的示例，<code>h1</code>还是在<code>display</code>为<code>true</code>时被渲染，但使用<code>&&</code>逻辑运算符代替<code>if/else</code>语句。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该存在并被渲染。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('MyComponent').length; })());
  - text: 当<code>display</code>被设置为<code>true</code>时，<code>div</code>、<code>button</code>和<code>h1</code>标签应该被渲染。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: true}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(updated.find(''div'').length === 1 && updated.find(''div'').children().length === 2 && updated.find(''button'').length === 1 && updated.find(''h1'').length === 1); }; '
  - text: 当<code>display</code>被设置为<code>false</code>时，只有<code>div</code>和<code>button</code>应该被渲染。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const state_1 = () => { mockedComponent.setState({display: false}); return waitForIt(() => mockedComponent )}; const updated = await state_1(); assert(updated.find(''div'').length === 1 && updated.find(''div'').children().length === 1 && updated.find(''button'').length === 1 && updated.find(''h1'').length === 0); }; '
  - text: render 方法应该使用<code>&&</code>逻辑运算符来检查<code>this.state.display</code>的条件。
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
    this.setState(state => ({
      display: !state.display
    }));
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
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    // change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};
```

</section>
