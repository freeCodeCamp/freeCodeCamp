---
id: 5a24c314108439a4d403616e
title: Access Props Using this.props
challengeType: 6
isRequired: false
forumTopicId: 301375
localeTitle: Доступ к реквизитам с помощью this.props
---

## Description
<section id='description'>
Последние несколько проблем касались основных способов передачи реквизита дочерним компонентам. Но что, если дочерний компонент, которому вы передаете реквизит, является компонентом класса ES6, а не функциональным компонентом без состояния? Компонент класса ES6 использует несколько другое соглашение для доступа к реквизитам. Каждый раз, когда вы ссылаетесь на компонент класса внутри себя, вы используете ключевое слово <code>this</code> . Чтобы получить доступ к реквизиту в компоненте класса, вы начинаете код, используемый для доступа к нему с <code>this</code> . Например, если компонент класса ES6 имеет ревизит под названием <code>data</code> , вы пишете <code>{this.props.data}</code> в JSX.
</section>

## Instructions
<section id='instructions'>
Визуализируйте инстанцию компонента <code>ReturnTempPassword</code> в родительском компоненте <code>ResetPassword</code> . Здесь дайте <code>ReturnTempPassword</code> реквизит от <code>tempPassword</code> и присвойте ему значение строки длиной не менее 8 символов. Внутри дочернего елемента <code>ReturnTempPassword</code> , обратитесь к реквизиту <code>tempPassword</code> в тегах <code>strong</code> , чтобы убедиться, что пользователь видит временный пароль.
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

### After Tests
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
          { /* change code below this line */ }
          <ReturnTempPassword tempPassword="serrPbqrPnzc" />
          { /* change code above this line */ }
        </div>
    );
  }
};
```

</section>
