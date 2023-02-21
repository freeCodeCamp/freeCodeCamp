---
id: 5a24c314108439a4d403616f
title: مراجعة باستخدام Props مع المكونات الوظيفية عديمة الحالة (Stateless Functional Components)
challengeType: 6
forumTopicId: 301411
dashedName: review-using-props-with-stateless-functional-components
---

# --description--

باستثناء التحدي الأخير، كنت تمرير المِيزات (props) إلى مكونات وظيفية عديمة الجنسية (stateless functional components). هذه المكونات تعمل مثل وظائف خالصة (pure functions). فهم يقبلون الميزات مثل مدخلات وينتجون نفس النظرة في كل مرة تمرر فيها نفس الميزات. قد تتساءل ما هي الحالة (state)، التحدي التالي سيغطيها بمزيد من التفصيل. وقبل ذلك، هنا استعراض لمصطلحات المكونات.

أن *مكون وظيفي عديم الحالة (stateless functional component)* وظيفية تكتبها تقبل الميزات (props) و تنتج JSX. *مكون عديم الحالة (stateless component)*، من ناحية أخرى، هو فئة تمدد `React.Component`، ولكنه لا يستخدم الحالة الداخلية (internal state) (المشمولة في التحدي التالي). وأخيرا، فإن *مكون حالة (stateful component)* هو مكون فئة (class component) يحتفظ بحالته (state) الداخلية. قد ترى المكونات الحالة (stateful components) المشار إليها ببساطة مثل مكونات أو مكونات React.

ومن الأنماط الشائعة محاولة التقليل إلى أدنى حد من الوضع الحالة (statefulness) واستحداث عناصر وظيفية عديمة الحالة (stateless functional components) كلما أمكن ذلك. هذا يساعدك في احتواء إدارة حالتك (state) إلى منطقة معينة في تطبيقك. يؤدي هذا بدوره إلى تحسين تطوير وصيانة تطبيقك, عن طريق تيسير متابعة كيفية تأثير التغييرات في الحالة (state) على سلوكها.

# --instructions--

يحتوي محرر التعليمات البرمجية على مكون `CampSite` الذي يجعل مكون `Camper` فرعي. حدد مكون `Camper` وعيّن ميزته الافتراضية إلى `{ name: 'CamperBot' }`. داخل مكون `Camper`، قدم أي تعليمات برمجية تريده، ولكن تيقن من وجود عنصر `p` الذي يتضمن القيمة `name` فقط الذي يتم تمريرها على شكل `prop`. أخيراً, حدد `propTypes` على مكون `Camper` لطلب `name` أن يتم توفيره كميزة وتحقق أنه من نوع `string`.

# --hints--

يجب أن يقدم مكون `CampSite`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('CampSite').length === 1;
  })()
);
```

يجب أن يقدم مكون `Camper`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return mockedComponent.find('Camper').length === 1;
  })()
);
```

يجب أن يتضمن مكون `Camper` الميزات الافتراضية التي تعين string بقيمة `CamperBot` إلى اسم هُوِيَّة `name`.

```js
assert(
  /Camper.defaultProps={name:(['"`])CamperBot\1,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

يجب أن يتضمن مكون `Camper` أنواع المِيزة التي تحتاج مِيزة `name` أن يكون من نوع `string`.

```js
assert(
  /Camper.propTypes={name:PropTypes.string.isRequired,?}/.test(
    __helpers.removeWhiteSpace(code)
  )
);
```

يجب أن يحتوي مكون `Camper` على عنصر `p` مع النص فقط من مِيزة `name`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(CampSite));
    return (
      mockedComponent.find('p').text() ===
      mockedComponent.find('Camper').props().name
    );
  })()
);
```

# --seed--

## --before-user-code--

```jsx
var PropTypes = {
   string: { isRequired: true }
};
```

## --after-user-code--

```jsx
ReactDOM.render(<CampSite />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line
```

# --solutions--

```jsx
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper/>
      </div>
    );
  }
};
// Change code below this line

const Camper = (props) => {
   return (
     <div>
       <p>{props.name}</p>
     </div>
   );
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

Camper.defaultProps = {
  name: 'CamperBot'
};
```
