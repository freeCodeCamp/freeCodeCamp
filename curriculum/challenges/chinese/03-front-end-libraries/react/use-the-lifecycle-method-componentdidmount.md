---
id: 5a24c314108439a4d403617d
challengeType: 6
forumTopicId: 301422
title: 使用生命周期方法：componentDidMount
---

## Description
<section id='description'>
某些时候，大多数 web 开发人员需要调用 API 端点来检索数据。如果你正在使用 React，知道在哪里执行这个动作是很重要的。
React 的最佳实践是在生命周期方法<code>componentDidMount()</code>中对服务器进行 API 调用或任何其他调用。将组件装载到 DOM 后会调用此方法。此处对<code>setState()</code>的任何调用都将触发组件的重新渲染。在此方法中调用 API 并使用 API​​ 返回的数据设置 state 时，一旦收到数据，它将自动触发更新。
</section>

## Instructions
<section id='instructions'>
<code>componentDidMount()</code>中有一个模拟 API 调用。它在 2.5 秒后设置 state，以模拟调用服务器检索数据。本示例请求站点的当前活动用户总数。在 render 方法中，把<code>activeUsers</code>渲染到<code>h1</code>标签中。观看预览中发生的事情，随意更改超时时间以查看不同的效果。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该渲染一个包含<code>h1</code>标签的<code>div</code>元素。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return (mockedComponent.find('div').length === 1 && mockedComponent.find('h1').length === 1); })());
  - text: 组件 state 应该用<code>componentDidMount</code>中的延时函数来更新。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return new RegExp('setTimeout(.|\n)+setState(.|\n)+activeUsers').test(String(mockedComponent.instance().componentDidMount)); })());
  - text: <code>h1</code>标签应该从<code>MyComponent</code>的 state 渲染<code>activeUsers</code>值。
    testString: 'async () => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); const first = () => { mockedComponent.setState({ activeUsers: 1237 }); return mockedComponent.find(''h1'').text(); }; const second = () => { mockedComponent.setState({ activeUsers: 1000 }); return mockedComponent.find(''h1'').text(); }; assert(new RegExp(''1237'').test(first()) && new RegExp(''1000'').test(second())); }; '

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
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: { /* change code here */ }</h1>
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
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
};
```

</section>
