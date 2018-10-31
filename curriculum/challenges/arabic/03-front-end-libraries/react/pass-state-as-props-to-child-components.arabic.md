---
id: 5a24c314108439a4d403617a
title: Pass State as Props to Child Components
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> رأيت الكثير من الأمثلة التي مرت الدعائم لعناصر JSX الأطفال والمكونات React الأطفال في التحديات السابقة. قد تتساءل من أين تأتي تلك الدعائم. النمط الشائع هو أن يكون لديك مكونًا حاويًا يحتوي على <code>state</code> المهمة لتطبيقك ، والذي يجعل مكونات الطفل ثم. تريد هذه المكونات للوصول إلى بعض القطع من تلك <code>state</code> ، والتي يتم تمريرها في الدعائم. على سبيل المثال ، ربما يكون لديك مكون <code>App</code> يعرض شريط <code>Navbar</code> ، ضمن المكونات الأخرى. في <code>App</code> ، لديك <code>state</code> تحتوي على الكثير من معلومات المستخدم ، ولكن يحتاج شريط <code>Navbar</code> إلى الوصول إلى اسم المستخدم الخاص بالمستخدم فقط حتى يمكنه عرضه. يمكنك تمرير هذه <code>state</code> إلى مكون <code>Navbar</code> كدعم. يوضح هذا النمط بعض النماذج المهمة في React. الأول هو <em>تدفق البيانات أحادي الاتجاه</em> . تدفقات الحالة في اتجاه واحد أسفل شجرة مكونات التطبيق الخاص بك ، من المكون الرئيسي الحزينة إلى المكونات التابعة. المكونات التابعة فقط تتلقى بيانات الحالة التي يحتاجونها. والثاني هو أن التطبيقات الرسمية المعقدة يمكن تقسيمها إلى عدد قليل فقط ، أو ربما مكون واحد مؤكد. بقية المكونات الخاصة بك ببساطة تتلقى حالة من الوالد كما الدعائم ، وجعل واجهة المستخدم من تلك الحالة. ويبدأ في إنشاء فصل حيث يتم التعامل مع إدارة الولاية في جزء واحد من التعليمات البرمجية و UI تقديم في آخر. هذا المبدأ لفصل منطق الدولة من منطق واجهة المستخدم هو أحد المبادئ الرئيسية لـ React. عندما يتم استخدامه بشكل صحيح ، فإنه يجعل تصميم التطبيقات المعقدة والحافلة سهلة الإدارة. </section>

## Instructions
<section id="instructions"> مكون <code>MyApp</code> هو stateful ويعرض مكون <code>Navbar</code> كطفل. تمرير <code>name</code> الملكية في في <code>state</code> وصولا الى عنصر الطفل، ثم تظهر <code>name</code> في <code>h1</code> العلامة التي جزء من <code>Navbar</code> تقديم الأسلوب. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(MyApp)); return mockedComponent.find("MyApp").length === 1 && mockedComponent.find("Navbar").length === 1; })(), "The <code>MyApp</code> component should render with a <code>Navbar</code> component inside.");'
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const setState = () => { mockedComponent.setState({name: "TestName"}); return waitForIt(() => mockedComponent.find("Navbar").props() )}; const navProps = await setState(); assert(navProps.name === "TestName", "The <code>Navbar</code> component should receive the <code>MyApp</code> state property <code>name</code> as props."); }; '
  - text: ''
    testString: 'async () => { const waitForIt = (fn) => new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250)); const mockedComponent = Enzyme.mount(React.createElement(MyApp)); const navH1Before = mockedComponent.find("Navbar").find("h1").text(); const setState = () => { mockedComponent.setState({name: "TestName"}); return waitForIt(() => mockedComponent.find("Navbar").find("h1").text() )}; const navH1After = await setState(); assert(new RegExp("TestName").test(navH1After) && navH1After !== navH1Before, "The <code>h1</code> element in <code>Navbar</code> should render the <code>name</code> prop."); }; '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

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
         <Navbar /* your code here */ />
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
      <h1>Hello, my name is: /* your code here */ </h1>
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
