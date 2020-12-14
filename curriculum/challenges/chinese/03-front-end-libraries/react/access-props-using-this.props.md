---
id: 5a24c314108439a4d403616e
challengeType: 6
forumTopicId: 301375
title: 使用 this.props 访问 Props
---

## Description
<section id='description'>
前几项挑战涵盖了将 props 传递给子组件的基本方法。但是，倘若接收 prop 的子组件不是无状态函数组件，而是一个 ES6 类组件又当如何呢？ES6 类组件访问 props 的方法略有不同。
任何时候，只要引用类组件本身，就要使用<code>this</code>关键字。要访问类组件中的 props，你需要在在访问它的代码前面添加<code>this</code>。例如，如果 ES6 类组件有一个名为<code>data</code>的 prop，你可以在 JSX 中这样写：<code>{this.props.data}</code>。
</section>

## Instructions
<section id='instructions'>
在父组件<code>ResetPassword</code>中渲染<code>ReturnTempPassword</code>组件的一个实例。在这里，为<code>ReturnTempPassword</code>提供一个<code>tempPassword</code>prop，并赋值给 prop 一个长度至少为 8 个字符的字符串。在子组件<code>ReturnTempPassword</code>中，访问<code>strong</code>标签中的<code>tempPassword</code>prop，以确保用户看到临时密码。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ResetPassword</code>组件应该返回单个<code>div</code>元素。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.children().type() === 'div'; })());
  - text: <code>ResetPassword</code>的第四个子组件应该是<code>ReturnTempPassword</code>组件。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.children().childAt(3).name() === 'ReturnTempPassword'; })());
  - text: <code>ReturnTempPassword</code>组件应该有一个名为<code>tempPassword</code>的属性。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.find('ReturnTempPassword').props().tempPassword; })());
  - text: <code>ReturnTempPassword</code>组件的<code>tempPassword</code>prop 值应该是一个字符串，其长度至少为<code>8</code>。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); const temp = mockedComponent.find('ReturnTempPassword').props().tempPassword; return typeof temp === 'string' && temp.length >= 8; })());
  - text: <code>ReturnTempPassword</code>组件应该显示你作为<code>tempPassword</code>prop 创建的密码，并且密码显示在<code>strong</code>标签中。
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.find('strong').text() === mockedComponent.find('ReturnTempPassword').props().tempPassword; })());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* change code below this line */ }
            <p>Your temporary password is: <strong></strong></p>
            { /* change code above this line */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* change code below this line */ }

          { /* change code above this line */ }
        </div>
    );
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```js
ReactDOM.render(<ResetPassword />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```js
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* change code below this line */ }
          <ReturnTempPassword tempPassword="serrPbqrPnzc" />
          { /* change code above this line */ }
        </div>
    );
  }
};
```

</section>
