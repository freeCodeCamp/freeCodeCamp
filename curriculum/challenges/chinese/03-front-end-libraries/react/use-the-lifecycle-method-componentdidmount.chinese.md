---
id: 5a24c314108439a4d403617d
title: Use the Lifecycle Method componentDidMount
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用生命周期方法componentDidMount
---

## Description
<section id="description">大多数Web开发人员在某些时候需要调用API端点来检索数据。如果您正在使用React，那么知道执行此操作的位置非常重要。 React的最佳实践是在生命周期方法<code>componentDidMount()</code>中对服务器进行API调用或任何调用。将组件安装到DOM后调用此方法。此处对<code>setState()</code>任何调用都将触发组件的重新呈现。在此方法中调用API并使用API​​返回的数据设置状态时，一旦收到数据，它将自动触发更新。 </section>

## Instructions
<section id="instructions"> <code>componentDidMount()</code>有一个模拟API调用。它在2.5秒后设置状态以模拟调用服务器以检索数据。此示例请求站点的当前活动用户总数。在render方法中，在<code>h1</code>呈现<code>activeUsers</code>的值。观看预览中发生的事情，并随时更改超时以查看不同的效果。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>MyComponent</code>应该呈现一个包含<code>h1</code>标记的<code>div</code>元素。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return (mockedComponent.find('div').length === 1 && mockedComponent.find('h1').length === 1); })());
  - text: 应使用<code>componentDidMount</code>的超时函数更新组件状态。
    testString: assert((() => { const mockedComponent = Enzyme.mount(React.createElement(MyComponent)); return new RegExp('setTimeout(.|\n)+setState(.|\n)+activeUsers').test(String(mockedComponent.instance().componentDidMount)); })());
  - text: <code>h1</code>标记应该从<code>MyComponent</code>的状态呈现<code>activeUsers</code>值。
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
