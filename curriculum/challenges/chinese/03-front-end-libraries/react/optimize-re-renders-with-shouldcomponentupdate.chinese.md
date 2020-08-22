---
id: 5a24c314108439a4d4036180
title: Optimize Re-Renders with shouldComponentUpdate
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用shouldComponentUpdate优化重新渲染
---

## Description
<section id="description">到目前为止，如果任何组件接收到新的<code>state</code>或新的<code>props</code> ，它会重新呈现自己及其所有子项。这通常没问题。但是React提供了一个生命周期方法，您可以在子组件接收新<code>state</code>或<code>props</code>时调用它，并特别声明组件是否应该更新。方法是<code>shouldComponentUpdate()</code> ，它将<code>nextProps</code>和<code>nextState</code>作为参数。此方法是优化性能的有用方法。例如，默认行为是您的组件在收到新<code>props</code>时重新渲染，即使<code>props</code>未更改。您可以使用<code>shouldComponentUpdate()</code>通过比较<code>props</code>来防止这种情况。该方法必须返回一个<code>boolean</code>值，告诉React是否更新组件。您可以将当前道具（ <code>this.props</code> ）与下一个道具（ <code>nextProps</code> ）进行比较，以确定是否需要更新，并相应地返回<code>true</code>或<code>false</code> 。 </section>

## Instructions
<section id="instructions"> <code>shouldComponentUpdate()</code>方法添加到名为<code>OnlyEvens</code>的组件中。目前，此方法返回<code>true</code>因此每次收到新<code>props</code>时， <code>OnlyEvens</code>重新渲染。修改方法，以便<code>OnlyEvens</code>更新仅当<code>value</code>的新道具的是偶数。单击“ <code>Add</code>按钮，在触发其他生命周期挂钩时，在浏览器控制台中查看事件的顺序。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Controller</code>组件应将<code>OnlyEvens</code>组件呈现为<code>OnlyEvens</code>组件。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(Controller)); return mockedComponent.find('Controller').length === 1 && mockedComponent.find('OnlyEvens').length === 1; })());
  - text: 应该在<code>OnlyEvens</code>组件上定义<code>shouldComponentUpdate</code>方法。
    testString: assert((() => { const child = React.createElement(OnlyEvens).type.prototype.shouldComponentUpdate.toString().replace(/s/g,''); return child !== 'undefined'; })());
  - text: <code>OnlyEvens</code>组件应返回一个<code>h1</code>标记，该标记呈现<code>this.props.value</code>的值。
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(Controller)); const first = () => { mockedComponent.setState({ value: 1000 }); return waitForIt(() => mockedComponent.find(''h1'').html()); }; const second = () => { mockedComponent.setState({ value: 10 }); return waitForIt(() => mockedComponent.find(''h1'').html()); }; const firstValue = await first(); const secondValue = await second(); assert(firstValue === ''<h1>1000</h1>'' && secondValue === ''<h1>10</h1>''); }; '
  - text: <code>OnlyEvens</code>只有在<code>nextProps.value</code>为偶数<code>OnlyEvens</code>应该重新渲染。
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
  componentWillReceiveProps(nextProps) {
    console.log('Receiving new props...');
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
