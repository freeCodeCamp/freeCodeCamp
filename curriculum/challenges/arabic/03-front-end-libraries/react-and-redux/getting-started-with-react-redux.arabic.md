---
id: 5a24c314108439a4d4036141
title: Getting Started with React Redux
challengeType: 6
videoUrl: ''
localeTitle: الابتداء مع React Redux
---

## Description
<section id="description"> تقدم هذه السلسلة من التحديات كيفية استخدام Redux مع React. أولاً ، إليك مراجعة لبعض المبادئ الأساسية لكل تقنية. React هي مكتبة ملفات شخصية تقدمها مع البيانات ، ثم تعرض طريقة العرض بطريقة فعالة ويمكن التنبؤ بها. Redux هو إطار عمل لإدارة الولاية يمكنك استخدامه لتبسيط إدارة حالة التطبيق الخاص بك. عادةً ، في تطبيق React Redux ، يمكنك إنشاء متجر Redux واحد يدير حالة تطبيقك بالكامل. تشترك مكونات React الخاص بك في أجزاء البيانات الموجودة في المتجر ذات الصلة بدورها فقط. بعد ذلك ، يمكنك إرسال الإجراءات مباشرة من مكونات React ، والتي تؤدي بعد ذلك إلى تشغيل تحديثات المتجر. على الرغم من أن مكونات React تستطيع إدارة حالتها محليًا ، عندما يكون لديك تطبيق معقد ، فمن الأفضل بشكل عام الاحتفاظ بحالة التطبيق في موقع واحد باستخدام Redux. هناك استثناءات عندما تكون المكونات الفردية لها حالة محلية خاصة بها فقط. أخيرًا ، نظرًا لأن Redux غير مصمم للعمل مع React out of the box ، فأنت بحاجة إلى استخدام حزمة <code>react-redux</code> . وهو يوفر طريقة لتمرير مسترجع <code>state</code> و <code>dispatch</code> لديك رد فعل المكونات كما <code>props</code> . خلال التحديات القليلة التالية ، أولاً ، ستقوم بإنشاء مكون React بسيط يسمح لك بإدخال رسائل نصية جديدة. تتم إضافة هذه إلى صفيف معروض في طريقة العرض. هذا يجب أن يكون مراجعة لطيفة لما تعلمته في دروس React. بعد ذلك ، ستقوم بإنشاء مخزن وإجراءات Redux التي تدير حالة مصفوفة الرسائل. وأخيرًا ، ستستخدم <code>react-redux</code> لتوصيل مخزن Redux بالمكون الخاص بك ، وبالتالي استخراج الحالة المحلية في مخزن Redux. </section>

## Instructions
<section id="instructions"> ابدأ بمكون <code>DisplayMessages</code> . أضف مُنشئًا إلى هذا المكوّن وأعد تهيئة هذه الحالة بحالة تحتوي على خاصيتين: <code>input</code> ، يتم تعيينها على سلسلة فارغة ، <code>messages</code> ، يتم تعيينها على مصفوفة فارغة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يقوم مكون <code>DisplayMessages</code> بعرض عنصر <code>div</code> فارغ.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); return mockedComponent.find("div").text() === "" })(), "The <code>DisplayMessages</code> component should render an empty <code>div</code> element.");'
  - text: يجب استدعاء منشئ <code>DisplayMessages</code> بشكل صحيح مع <code>super</code> ، يمر في <code>props</code> .
    testString: 'getUserInput => assert((function() { const noWhiteSpace = getUserInput("index").replace(/\s/g,""); return noWhiteSpace.includes("constructor(props)") && noWhiteSpace.includes("super(props"); })(), "The <code>DisplayMessages</code> constructor should be called properly with <code>super</code>, passing in <code>props</code>.");'
  - text: 'يجب أن يكون لمكون <code>DisplayMessages</code> حالة أولية تساوي <code>{input: &quot;&quot;, messages: []}</code> .'
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(DisplayMessages)); const initialState = mockedComponent.state(); return typeof initialState === "object" && initialState.input === "" && Array.isArray(initialState.messages) && initialState.messages.length === 0; })(), "The <code>DisplayMessages</code> component should have an initial state equal to <code>{input: "", messages: []}</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class DisplayMessages extends React.Component {
  // change code below this line

  // change code above this line
  render() {
    return <div />
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
