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
  - text: 測試文本
    testString: assert(true);

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
</section>
