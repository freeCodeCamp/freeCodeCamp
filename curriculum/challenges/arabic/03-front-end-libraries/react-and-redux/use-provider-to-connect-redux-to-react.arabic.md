---
id: 5a24c314108439a4d4036144
title: Use Provider to Connect Redux to React
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> في التحدي الأخير ، قمت بإنشاء مخزن Redux للتعامل مع صفيف الرسائل وقمت بإنشاء إجراء لإضافة رسائل جديدة. الخطوة التالية هي توفير إمكانية الوصول إلى متجر Redux والإجراءات التي يحتاجها لإرسال التحديثات. يقدم React Redux حزمة <code>react-redux</code> للمساعدة في إنجاز هذه المهام. يوفر React Redux واجهة برمجة تطبيقات صغيرة مع ميزتين رئيسيتين: <code>Provider</code> <code>connect</code> . تحد آخر يشمل <code>connect</code> . <code>Provider</code> عبارة عن مكون مجمّع من React Redux يلف تطبيق React. يتيح لك هذا المجمّع بعد ذلك الوصول إلى <code>store</code> Redux ووظائف <code>dispatch</code> عبر شجرة المكونات. يأخذ <code>Provider</code> اثنين من الأدوات الدعائية ، وهما متجر Redux والمكونات الفرعية لتطبيقك. قد يبدو تعريف <code>Provider</code> أحد مكونات التطبيق كما يلي: <blockquote style=";text-align:right;direction:rtl"> &lt;provider store = {store}&gt; <br> &lt;التطبيق /&gt; <br> &lt;/ مزود&gt; </blockquote></section>

## Instructions
<section id="instructions"> يعرض محرر الشفرة الآن جميع رموز Redux و React من التحديات العديدة الماضية. يتضمن مخزن Redux والإجراءات ومكون <code>DisplayMessages</code> . والجزء الجديد الوحيد هو مكون <code>AppWrapper</code> في الجزء السفلي. استخدم مكون المستوى الأعلى هذا لعرض <code>Provider</code> من <code>ReactRedux</code> ، وتمرير مخزن Redux كدعم. ثم عرض مكون <code>DisplayMessages</code> كطفل. بمجرد الانتهاء ، سترى مكون React الخاص بك مقدم إلى الصفحة. <strong>ملاحظة:</strong> React Redux متاح كمتغير شامل هنا ، حتى تتمكن من الوصول إلى مقدم الخدمة باستخدام ميزة التدوين النقطي. التعليمات البرمجية في المحرر الاستفادة من هذا وتعيينه إلى <code>Provider</code> ثابت لك لاستخدامه في طريقة تقديم <code>AppWrapper</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يتم عرض <code>AppWrapper</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("AppWrapper").length === 1; })(), "The <code>AppWrapper</code> should render.");'
  - text: يجب أن يكون مكون مجمّع <code>Provider</code> يحتوي على <code>store</code> دعامة تم تمريره إليه ، يساوي مخزن Redux.
    testString: 'getUserInput => assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return getUserInput("index").replace(/\s/g,"").includes("<Providerstore={store}>"); })(), "The <code>Provider</code> wrapper component should have a prop of <code>store</code> passed to it, equal to the Redux store.");'
  - text: يجب أن يتم عرض <code>DisplayMessages</code> كطفل من <code>AppWrapper</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("AppWrapper").find("DisplayMessages").length === 1; })(), "<code>DisplayMessages</code> should render as a child of <code>AppWrapper</code>.");'
  - text: يجب أن يقوم مكون <code>DisplayMessages</code> بعرض عنصر h2 و input و button و <code>ul</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(AppWrapper)); return mockedComponent.find("div").length === 1 && mockedComponent.find("h2").length === 1 && mockedComponent.find("button").length === 1 && mockedComponent.find("ul").length === 1; })(), "The <code>DisplayMessages</code> component should render an h2, input, button, and <code>ul</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// Redux Code:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React Code:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ",
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: ",
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // render the Provider here

  // change code above this line
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
