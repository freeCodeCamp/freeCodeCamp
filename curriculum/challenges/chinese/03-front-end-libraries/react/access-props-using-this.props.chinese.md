---
id: 5a24c314108439a4d403616e
title: Access Props Using this.props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: 使用this.props访问道具
---

## Description
<section id="description">最后几个挑战涵盖了将道具传递给子组件的基本方法。但是，如果你传递道具的子组件是ES6类组件，而不是无状态功能组件呢？ ES6类组件使用稍微不同的约定来访问props。无论何时在您自己引用类组件时，都使用<code>this</code>关键字。一类组件中访问的道具，你前言您使用与访问它的代码<code>this</code> 。例如，如果ES6类组件具有名为<code>data</code>的prop，则在JSX中编写<code>{this.props.data}</code> 。 </section>

## Instructions
<section id="instructions">在父组件<code>ResetPassword</code>呈现<code>ReturnTempPassword</code>组件的实例。在这里，给<code>ReturnTempPassword</code>一个<code>tempPassword</code>的prop，并为它<code>tempPassword</code>一个至少8个字符长的字符串的值。在子项<code>ReturnTempPassword</code> ，访问<code>strong</code>标记内的<code>tempPassword</code> prop，以确保用户看到临时密码。 </section>

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
