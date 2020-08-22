---
id: 5a24c314108439a4d403617c
title: Use the Lifecycle Method componentWillMount
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用生命周期方法componentWillMount
---

## Description
<section id="description"> React组件有几种特殊方法，可以在组件生命周期的特定点执行操作。这些称为生命周期方法或生命周期钩子，允许您在特定时间点捕获组件。这可以在渲染之前，更新之前，接收道具之前，卸载之前等等。以下是一些主要生命周期方法的列表： <code>componentWillMount()</code> <code>componentDidMount()</code> <code>componentWillReceiveProps()</code> <code>shouldComponentUpdate()</code> <code>componentWillUpdate()</code> <code>componentDidUpdate()</code> <code>componentWillUnmount()</code>接下来的几节课将介绍这些生命周期方法的一些基本用例。 </section>

## Instructions
<section id="instructions">在将组件装载到DOM时，在<code>render()</code>方法之前调用<code>componentWillMount()</code>方法。在<code>componentWillMount()</code>中将某些内容记录到控制台 - 您可能希望打开浏览器控制台以查看输出。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该呈现<code>div</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('div').length === 1; })());
  - text: 应该在<code>componentWillMount</code>调用<code>console.log</code> 。
    testString: assert((function() { const lifecycle = React.createElement(MyComponent).type.prototype.componentWillMount.toString().replace(/ /g,''); return lifecycle.includes('console.log('); })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // change code below this line

    // change code above this line
  }
  render() {
    return <div />
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
