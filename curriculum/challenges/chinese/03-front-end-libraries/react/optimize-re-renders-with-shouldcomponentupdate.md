---
id: 5a24c314108439a4d4036180
challengeType: 6
forumTopicId: 301398
title: 使用 shouldComponentUpdate 优化重新渲染
---

## Description
<section id='description'>
到目前为止，如果任何组件接收到新的<code>state</code>或新的<code>props</code>，它会重新渲染自己及其所有子组件。这通常是好的。但是 React 提供了一种生命周期方法，当子组件接收到新的<code>state</code>或<code>props</code>时，你可以调用该方法，并特别声明组件是否应该更新。方法是<code>shouldComponentUpdate()</code>，它将<code>nextProps</code>和<code>nextState</code>作为参数。
这种方法是优化性能的有效方法。例如，默认行为是，当组件接收到新的<code>props</code>时，即使<code>props</code>没有改变，它也会重新渲染。你可以通过使用<code>shouldComponentUpdate()</code>比较<code>props</code>来防止这种情况。该方法必须返回一个布尔值，该值告诉 React 是否更新组件。你可以比较当前的 props（<code>this.props</code>）和下一个 props（<code>nextProps</code>），以确定你是否需要更新，并相应地返回<code>true</code>或<code>false</code>。
</section>

## Instructions
<section id='instructions'>
<code>shouldComponentUpdate()</code>方法添加到名为<code>OnlyEvens</code>的组件中。目前，该方法返回<code>true</code>，因此每次收到新的<code>props</code>时，<code>OnlyEvens</code>都会重新渲染。修改该方法，以便<code>OnlyEvens</code>仅在其新 props 的<code>value</code>为偶数时更新。单击<code>Add</code>按钮，在触发其他生命周期钩子时，在浏览器控制台中查看事件的顺序。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Controller</code>组件应该将<code>OnlyEvens</code>组件渲染为子组件。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(Controller)); return mockedComponent.find('Controller').length === 1 && mockedComponent.find('OnlyEvens').length === 1; })());
  - text: 应该在<code>OnlyEvens</code>组件上定义<code>shouldComponentUpdate</code>方法。
    testString: assert((() => { const child = React.createElement(OnlyEvens).type.prototype.shouldComponentUpdate.toString().replace(/s/g,''); return child !== 'undefined'; })());
  - text: <code>OnlyEvens</code>组件应该返回一个<code>h1</code>标签，该标签渲染<code>this.props.value</code>的值。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Controller)); const first = () => { mockedComponent.setState({ value: 1000 }); return waitForIt(() => mockedComponent.find(''h1'').html()); }; const second = () => { mockedComponent.setState({ value: 10 }); return waitForIt(() => mockedComponent.find(''h1'').html()); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === ''<h1>1000</h1>'' && secondValue === ''<h1>10</h1>''); }; '
  - text: 只有在<code>nextProps.value</code>为偶数时，<code>OnlyEvens</code>才会重新渲染。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Controller)); const first = () => { mockedComponent.setState({ value: 8 }); return waitForIt(() => mockedComponent.find(''h1'').text()); }; const second = () => { mockedComponent.setState({ value: 7 }); return waitForIt(() => mockedComponent.find(''h1'').text()); }; const third = () => { mockedComponent.setState({ value: 42 }); return waitForIt(() => mockedComponent.find(''h1'').text()); }; const firstValue = await first(); const secondValue = await second(); const thirdValue = await third(); assert(firstValue === ''8'' && secondValue === ''8'' && thirdValue === ''42''); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
     // change code below this line
    return true;
     // change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<Controller />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    // change code below this line
    return nextProps.value % 2 === 0;
    // change code above this line
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};
```

</section>
