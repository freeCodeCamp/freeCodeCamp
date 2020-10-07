---
id: 5a24c314108439a4d403617c
challengeType: 6
forumTopicId: 301423
title: 使用生命周期方法：componentWillMount
---

## Description

<section id='description'>

React 组件有几种特殊方法，可以在组件生命周期的特定点执行操作。这些称为生命周期方法或生命周期钩子，允许你在特定时间点捕获组件。这可以在渲染之前、更新之前、接收 props 之前、卸载之前等等。以下是一些主要生命周期方法的列表：
<code>componentWillMount()</code>
<code>componentDidMount()</code>
<code>shouldComponentUpdate()</code>
<code>componentDidUpdate()</code>
<code>componentWillUnmount()</code>
接下来的几节课将讲述这些生命周期方法的一些基本用例。

<strong>注意：</strong> `componentWillMount` 生命周期方法会在版本 16.X 废弃在版本 17 移除 [(Source)](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)
</section>

## Instructions
<section id='instructions'>

当组件被挂载到 DOM 时，<code>componentWillMount()</code>方法在<code>render()</code>方法之前被调用。在<code>componentWillMount()</code>中将一些内容记录到控制台--你需要打开浏览器控制台以查看输出。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该渲染一个<code>div</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return mockedComponent.find('div').length === 1; })());
  - text: 应该在<code>componentWillMount</code>中调用<code>console.log</code>。
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
  }
  componentWillMount() {
    // change code below this line
    console.log('Component is mounting...');
    // change code above this line
  }
  render() {
    return <div />
  }
};
```

</section>
