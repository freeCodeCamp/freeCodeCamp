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
  - text: 測試文本
    testString: assert(true);

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
</section>
