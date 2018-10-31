---
id: 5a24c314108439a4d403618d
title: Render React on the Server with renderToString
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: تجعل رد فعل على الخادم مع renderToString
---

## Description
<section id="description"> حتى الآن ، لقد تم تقديم مكونات React على العميل. عادة ، هذا ما ستفعله دائمًا. ومع ذلك ، هناك بعض حالات الاستخدام حيث يكون من المنطقي تقديم مكون React على الخادم. نظرًا لأن React عبارة عن مكتبة عرض جافا سكريبت ، ويمكنك تشغيل جافا سكريبت على الخادم باستخدام عقدة ، فهذا ممكن. في الواقع ، يوفر <code>renderToString()</code> طريقة <code>renderToString()</code> التي يمكنك استخدامها لهذا الغرض. هناك سببان رئيسيان لماذا يمكن استخدام التقديم على الخادم في تطبيق عالمي حقيقي. أولاً ، بدون إجراء ذلك ، ستتألف تطبيقات React من ملف HTML فارغ نسبيًا ومجموعة كبيرة من جافا سكريبت عندما يتم تحميله في البداية على المتصفح. قد لا يكون ذلك مثاليًا لمحركات البحث التي تحاول فهرسة محتوى صفحاتك حتى يتمكن الأشخاص من العثور عليك. إذا عرضت ترميز HTML الأولي على الخادم وأرسلته إلى العميل ، فسيحتوي تحميل الصفحة الأولي على كل ترميز الصفحة الذي يمكن الزحف إليه بواسطة محركات البحث. ثانيًا ، يؤدي هذا إلى إنشاء تجربة تحميل أولية أسرع للصفحات ؛ نظرًا لأن شفرة HTML المقدمة أصغر من شفرة جافا سكريبت للتطبيق بالكامل. سيظل رد الفعل قادرًا على التعرف على تطبيقك وإدارته بعد التحميل الأولي. </section>

## Instructions
<section id="instructions"> يتم توفير الأسلوب <code>renderToString()</code> على <code>ReactDOMServer</code> ، والذي يتوفر هنا ككائن عام. تأخذ الطريقة وسيطة واحدة وهي عنصر React. استخدم هذا لتقديم <code>App</code> إلى سلسلة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب تقديم مكون <code>App</code> إلى سلسلة باستخدام <code>ReactDOMServer.renderToString</code> .
    testString: 'getUserInput => assert(getUserInput("index").replace(/ /g,"").includes("ReactDOMServer.renderToString(<App/>)") && Enzyme.mount(React.createElement(App)).children().name() === "div", "The <code>App</code> component should render to a string using <code>ReactDOMServer.renderToString</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// change code below this line

```

</div>

### Before Test
<div id='jsx-setup'>

```jsx
var ReactDOMServer = { renderToString(x) { return null; } };

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
