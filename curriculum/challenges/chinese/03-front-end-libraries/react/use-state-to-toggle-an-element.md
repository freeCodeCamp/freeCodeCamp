---
id: 5a24c314108439a4d4036176
challengeType: 6
forumTopicId: 301421
title: 使用 State 切换元素
---

## Description
<section id='description'>
有时可能在更新状态的时候想知道上一个状态是什么。但是状态更新是异步的，这意味着 React 可能会把多个 <code>setState()</code> 集中在一起批量更新。所以设置 <code>this.state</code> 或者 <code>this.props</code> 后值没有立即更新。所以最好不要写如下的代码：

```js
this.setState({
  counter: this.state.counter + this.props.increment
});
```

正确的做法是，给 <code>setState</code> 传入一个函数，这个函数可以访问 state 和 props。给 <code>setState</code> 传入函数可以返回赋值后的 state 和 props。代码可以重写为这样：

```js
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

如果只需要 `state`，那么用下面的格式也是可以的：

```js
this.setState(state => ({
  counter: state.counter + 1
}));
```

注意一定要把 object 放在括号里，否则 JavaScript 会认为这只是代码片段。
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
    testString: assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).find('div').find('button').length, 1);
  - text: <code>MyComponent</code>应该使用设置为<code>false</code>的<code>visibility</code>属性来初始化其 state。
    testString: assert.strictEqual(Enzyme.mount(React.createElement(MyComponent)).state('visibility'), false);
  - text: 单击按钮元素应在<code>true</code>和<code>false</code>之间切换<code>visibility</code>属性的状态。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ visibility: false }); return waitForIt(() => mockedComponent.state(''visibility'')); }; const second = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent.state(''visibility'')); }; const third = () => { mockedComponent.find(''button'').simulate(''click''); return waitForIt(() => mockedComponent.state(''visibility'')); }; const firstValue = await first(); const secondValue = await second(); const thirdValue = await third(); assert(!firstValue && secondValue && !thirdValue); }; '
  - text: 应该传入<code>setState</code> 一个匿名函数。
    testString: const paramRegex = '[a-zA-Z$_]\\w*(,[a-zA-Z$_]\\w*)?'; const noSpaces = code.replace(/\s/g, ''); assert(new RegExp('this\\.setState\\((function\\(' + paramRegex + '\\){|([a-zA-Z$_]\\w*|\\(' + paramRegex + '\\))=>)').test(noSpaces));
  - text: 不要在 <code>setState</code> 里面使用 <code>this</code>。
    testString: assert(!/this\.setState\([^}]*this/.test(code));

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
    this.setState(state => ({
      visibility: !state.visibility
    }));
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
