---
id: 5a24c314108439a4d4036141
title: البدء مع React Redux
challengeType: 6
forumTopicId: 301430
dashedName: getting-started-with-react-redux
---

# --description--

هذه السلسلة من التحديات تعرض كيفية استخدام Redux مع React. أولا، هنا استعراض لبعض المبادئ الرئيسية لكل التقنية (technology). React هي مكتبة عرض تزويدها بالبيانات، ثم تنشئ العرض بطريقة فعالة وقابلة للتنبؤ. Redux هو framework إدارة الحالة (state management) التي يمكنك استخدامه لتبسيط إدارة حالة تطبيقك. عادة في تطبيق React يرتبط إلى Redux، أنشئ متجر واحد Redux الذي يدير حالة التطبيق بِرُمَّته. مكونات React الخاصة بك تشترك فقط في أجزاء من البيانات في المتجر ذات الصلة بدورها. ثم ارسل الإجراءات من مكونات React قاصدًا، التي تشن ذلك بتشغيل تحديثات المتجر.

مع أنّ عناصر React يمكن أن تدير حالتها المحلية، عندما يكون لديك تطبيق معقد، من الأفضل عموماً الحفاظ على حالة التطبيق في موقع واحد في Redux. وهناك استثناءات عندما تكون المكونات فرادية لها حالة محلية خاصة بهم فقط. أخيرا، لأن Redux غير مصمم للعمل مع React خارج المئلوف، تحتاج إلى استخدام حُزْمَة `react-redux`. يوفر لك طريقة لتمرير `state` و `dispatch` من Redux إلى مكونات React الخاصة بك على شكل `props`.

خلال التحديات القليلة التالية، أولاً، ستنشئ مكوناً React بسيطاً يسمح لك بإدخال رسائل نصية جديدة. هذه تضاف إلى قائمة تظهر في شاشة العرض. يجب أن يكون هذا استعراضا جميلا لما تعلمته من دروس React. بعد ذلك، ستنشئ متجر Redux والإجراءات التي تدير حالة قائمة الرسائل. وأخيرا، ستستخدم `react-redux` لتوصيل متجر Redux مع مكونك، وبذلك ستستخرج الحالة المحلية إلى متجر Redux.

# --instructions--

ابدأ بمكون `DisplayMessages`. أضف عامل بناء إلى هذا المكون وتهيئته مع حالة ذات خصيتين: `input`، تم تعيين هذا إلى string فارغ، و `messages`، التي تم تعيينها إلى قائمة فارغة.

# --hints--

يجب أن يجعل مكون `DisplayMessages` عنصر `div` فارغاً.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    return mockedComponent.find('div').text() === '';
  })()
);
```

يجب أن يتم استدعاء `DisplayMessages` يجب أن يتم استدعاء بشكل صحيح مع `super`، مرره إلى `props`.

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(getUserInput('index'));
      return (
        noWhiteSpace.includes('constructor(props)') &&
        noWhiteSpace.includes('super(props')
      );
    })()
  );
```

يجب أن يكون للمكون `DisplayMessages` حالة أولية تساوي `{input: "", messages: []}`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages));
    const initialState = mockedComponent.state();
    return (
      typeof initialState === 'object' &&
      initialState.input === '' &&
      Array.isArray(initialState.messages) &&
      initialState.messages.length === 0
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<DisplayMessages />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class DisplayMessages extends React.Component {
  // Change code below this line

  // Change code above this line
  render() {
    return <div />
  }
};
```

# --solutions--

```jsx
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  render() {
    return <div/>
  }
};
```
