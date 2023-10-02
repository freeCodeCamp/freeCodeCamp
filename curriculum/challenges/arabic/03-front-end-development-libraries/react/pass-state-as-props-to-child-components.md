---
id: 5a24c314108439a4d403617a
title: تمرير الحالة (State) مثل عناصر فرعية (Child Components)
challengeType: 6
forumTopicId: 301403
dashedName: pass-state-as-props-to-child-components
---

# --description--

لقد رأيتم الكثير من الأمثلة التي انتقلت إلى عناصر JSX الفرعية ومكونات React الفرعية في التحديات السابقة. ربما تتساءل من أين تأتي تلك المِيزات (props). النمط الشائع هو أن يكون هناك مكون حالة (stateful component) يحتوي على `state` مهمة لتطبيقك، ثم ينتج مكونات فرعية (child components). تريد أن يكون لهذه المكونات (components) حق الوصول إلى بعض القطع من تلك `state`، التي تمرّ مِيزات (props).

على سبيل المثال، ربما لديك مكون `App` الذي ينتج `Navbar`, من بين مكونات أخرى. في `App` الخاص بك، لديك `state` تحتوي على الكثير من معلومات المستخدم، ولكن `Navbar` يحتاج فقط إلى الوصول إلى اسم المستخدم حتى يتمكن من عرضه. تمرير هذه القطعة من `state` إلى مكون (component) يسمى `Navbar` كمِيزة (prop).

ويوضح هذا النمط بعض الأنموذجات (paradigms) الهامة في React. الأول هو *تدفق البيانات الأحادية الاتجاه (unidirectional data flow)*. تتدفق الحالة (state) في اتجاه واحد لأسفل شجرة عناصر تطبيقك، من مكون الحالة الأساسي (stateful parent component) إلى مكونات الفرعية (child components). ولا تحصل مكونات الفرعية (child components) إلا على بيانات الحالة (state) التي تحتجاها. والثاني هو أن تطبيقات الحالة المعقدة (complex stateful apps) يمكن تقسيمها إلى مكونات قليلة أو ربما إلى مكون واحد (component) من مكونات الحالة (stateful component). بقية مكوناتك (components) تتلقى ببساطة الحالة (state) من الأصل كميزات (props)، وتنتج واجهة المستخدم (UI) من تلك الحالة (state). يبدأ في إنشاء فصل حيث يتم التعامل مع إدارة الحالة (state) في جزء واحد من الكود و واجهة المستخدم (UI) الذي يتم تقديمه في جزء آخر. هذا المبدأ لفصل منطق الحالة (state) عن منطق واجهة المستخدم (UI) هو أحد المبادئ React الرئيسية. عندما يتم استخدامها بشكل صحيح، فإنها تجعل تصميم التطبيقات المعقدة ذات الصَّلاحِيَة (stateful applications) أسهل بكثير لإدارتها.

# --instructions--

مكون `MyApp` هو مكون حالة (stateful component) ويجعل `Navbar` مكوناً فرعياً (child component). اجتياز خاصية (property) تسمى `name` في `state` خاصة بها لأسفل إلى مكون الفرعي (child component)، ثم إظهار `name` في العلامة `h1` التي هي جزء من طريقة (method) تقديم `Navbar`. `name` يجب أن يظهر بعد النص `Hello, my name is:`.

# --hints--

يجب أن يقدم مكون `MyApp` مع مكون `Navbar` داخله.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyApp));
    return (
      mockedComponent.find('MyApp').length === 1 &&
      mockedComponent.find('Navbar').length === 1
    );
  })()
);
```

يجب أن يتلقى مكون (component) مسمى `Navbar` إلى `MyApp` خاصية الحالة (state property) تسمى `name` كمِيزات (props).

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const setState = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.find('Navbar').props());
  };
  const navProps = await setState();
  assert(navProps.name === 'TestName');
};
```

عنصر `h1` في `Navbar` يجب أن ينتج مِيزة `name`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyApp));
  const navH1Before = mockedComponent.find('Navbar').find('h1').text();
  const setState = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.find('Navbar').find('h1').text());
  };
  const navH1After = await setState();
  assert(new RegExp('TestName').test(navH1After) && navH1After !== navH1Before);
};
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyApp />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/* Change code below this line */}
         <Navbar />
         {/* Change code above this line */}
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      {/* Change code below this line */}
      <h1>Hello, my name is: </h1>
      {/* Change code above this line */}
    </div>
    );
  }
};
```

# --solutions--

```jsx
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
```
