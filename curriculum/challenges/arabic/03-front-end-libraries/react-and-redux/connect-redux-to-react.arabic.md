---
id: 5a24c314108439a4d4036147
title: Connect Redux to React
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: قم بتوصيل Redux بالرد
---

## Description
<section id="description"> الآن بعد أن قمت بكتابة <code>mapStateToProps()</code> <code>mapDispatchToProps()</code> ، يمكنك استخدامها لتعيين <code>state</code> <code>dispatch</code> إلى <code>props</code> لأحد مكونات React الخاصة بك. يمكن لأسلوب <code>connect</code> من React Redux التعامل مع هذه المهمة. تأخذ هذه الطريقة الوسيطتين الاختياريتين ، <code>mapStateToProps()</code> و <code>mapDispatchToProps()</code> . وهي اختيارية لأنه قد يكون لديك مكون يحتاج فقط إلى الوصول إلى <code>state</code> ولكنه لا يحتاج إلى إرسال أي إجراءات أو العكس. لاستخدام هذه الطريقة ، قم بتمرير الدوال كوسائط ، واتصل على الفور بالمكون الخاص بك. بناء الجملة هذا غير معتاد قليلاً ويشبه: <code>connect(mapStateToProps, mapDispatchToProps)(MyComponent)</code> <strong>ملاحظة:</strong> إذا كنت ترغب في حذف إحدى الوسيطات لأسلوب <code>connect</code> ، فأنت تقوم <code>null</code> في مكانها. </section>

## Instructions
<section id="instructions"> يحتوي محرر التعليمات البرمجية على <code>mapStateToProps()</code> و <code>mapDispatchToProps()</code> جديد يسمى <code>Presentational</code> . قم بتوصيل هذا المكون بـ Redux باستخدام طريقة <code>connect</code> من الكائن العالمي <code>ReactRedux</code> ، وقم <code>ReactRedux</code> فورًا على مكون <code>Presentational</code> . تعيين النتيجة إلى <code>const</code> جديدة تسمى <code>ConnectedComponent</code> يمثل المكون المتصل. هذا كل شيء ، الآن أنت متصل بـ Redux! حاول تغيير أي من وسائط <code>connect</code> إلى <code>null</code> ولاحظ نتائج الاختبار. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب <code>Presentational</code> مكون <code>Presentational</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("Presentational").length === 1; })(), "The <code>Presentational</code> component should render.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const props = mockedComponent.find("Presentational").props(); return props.messages === "__INITIAL__STATE__"; })(), "The <code>Presentational</code> component should receive a prop <code>messages</code> via <code>connect</code>.");'
  - text: يجب أن يتلقى المكون <code>Presentational</code> a prop <code>submitNewMessage</code> عبر <code>connect</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); const props = mockedComponent.find("Presentational").props(); return typeof props.submitNewMessage === "function"; })(), "The <code>Presentational</code> component should receive a prop <code>submitNewMessage</code> via <code>connect</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// change code below this line

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
