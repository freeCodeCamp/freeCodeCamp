---
id: 5a24c314108439a4d403616e
title: Access Props Using this.props
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> غطت التحديات الأخيرة عدة الطرق الأساسية لتمرير الدعائم لمكونات الطفل. ولكن ماذا لو كان المكون الفرعي الذي تقوم بتمرير دعم له مكون فئة ES6 بدلاً من مكون وظيفي عديم الحالة؟ يستخدم مكون الفئة ES6 اصطلاحًا مختلفًا قليلاً للوصول إلى الدعائم. في أي وقت تشير إلى مكون فئة داخل نفسه ، يمكنك استخدام <code>this</code> الكلمة. للوصول إلى الدعائم داخل مكون فئة ، يمكنك تهيئة الرمز الذي تستخدمه للوصول إليه باستخدام <code>this</code> العنصر. على سبيل المثال ، إذا كان مكون فئة ES6 يحتوي على دعامة تسمى <code>data</code> ، <code>{this.props.data}</code> في <code>{this.props.data}</code> . </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.children().type() === "div"; })(), "The <code>ResetPassword</code> component should return a single <code>div</code> element.");'
  - text: الطفل الرابع من <code>ResetPassword</code> يجب أن يكون <code>ReturnTempPassword</code> المكون.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.children().childAt(3).name() === "ReturnTempPassword"; })(), "The fourth child of <code>ResetPassword</code> should be the <code>ReturnTempPassword</code> component.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.find("ReturnTempPassword").props().tempPassword; })(), "The <code>ReturnTempPassword</code> component should have a prop called <code>tempPassword</code>.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); const temp = mockedComponent.find("ReturnTempPassword").props().tempPassword; return typeof temp === "string" && temp.length >= 8; })(), "The <code>tempPassword</code> prop of <code>ReturnTempPassword</code> should be equal to a string of at least <code>8</code> characters.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(ResetPassword)); return mockedComponent.find("strong").text() === mockedComponent.find("ReturnTempPassword").props().tempPassword; })(), "The <code>ReturnTempPassword</code> component should display the password you create as the <code>tempPassword</code> prop within <code>strong</code> tags.");'

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
