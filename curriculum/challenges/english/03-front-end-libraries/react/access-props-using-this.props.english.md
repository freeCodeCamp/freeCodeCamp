---
id: 5a24c314108439a4d403616e
title: Access Props Using this.props
challengeType: 6
forumTopicId: 301375
---

## Description
<section id='description'>
The last several challenges covered the basic ways to pass props to child components. But what if the child component that you're passing a prop to is an ES6 class component, rather than a stateless functional component? The ES6 class component uses a slightly different convention to access props.
Anytime you refer to a class component within itself, you use the <code>this</code> keyword. To access props within a class component, you preface the code that you use to access it with <code>this</code>. For example, if an ES6 class component has a prop called <code>data</code>, you write <code>{this.props.data}</code> in JSX.
</section>

## Instructions
<section id='instructions'>
Render an instance of the <code>ReturnTempPassword</code> component in the parent component <code>ResetPassword</code>. Here, give <code>ReturnTempPassword</code> a prop of <code>tempPassword</code> and assign it a value of a string that is at least 8 characters long. Within the child, <code>ReturnTempPassword</code>, access the <code>tempPassword</code> prop within the <code>strong</code> tags to make sure the user sees the temporary password.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>ResetPassword</code> component should return a single <code>div</code> element.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.children().type() === 'div'; })());
  - text: The fourth child of <code>ResetPassword</code> should be the <code>ReturnTempPassword</code> component.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.children().childAt(3).name() === 'ReturnTempPassword'; })());
  - text: The <code>ReturnTempPassword</code> component should have a prop called <code>tempPassword</code>.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.find('ReturnTempPassword').props().tempPassword; })());
  - text: The <code>tempPassword</code> prop of <code>ReturnTempPassword</code> should be equal to a string of at least <code>8</code> characters.
    testString: assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); const temp = mockedComponent.find('ReturnTempPassword').props().tempPassword; return typeof temp === 'string' && temp.length >= 8; })());
  - text: The <code>ReturnTempPassword</code> component should display the password you create as the <code>tempPassword</code> prop within <code>strong</code> tags.
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
            { /* Change code below this line */ }
            <p>Your temporary password is: <strong></strong></p>
            { /* Change code above this line */ }
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
          { /* Change code below this line */ }

          { /* Change code above this line */ }
        </div>
    );
  }
};
```

</div>


### After Test
<div id='jsx-teardown'>

```jsx
ReactDOM.render(<ResetPassword />, document.getElementById('root'))
```

</div>

</section>

## Solution
<section id='solution'>


```jsx
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
          { /* Change code below this line */ }
          <ReturnTempPassword tempPassword="serrPbqrPnzc" />
          { /* Change code above this line */ }
        </div>
    );
  }
};
```

</section>
