---
id: 5a24c314108439a4d4036170
title: Create a Stateful Component
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: إنشاء مكون Stateful
---

## Description
<section id="description"> واحدة من أهم المواضيع في React هي <code>state</code> . تتكون الولاية من أي بيانات يحتاج معرفتك إلى معرفتها ، والتي يمكن أن تتغير بمرور الوقت. تريد أن تستجيب تطبيقاتك لتغييرات الحالة وأن تقدم واجهة مستخدم محدثة عند الضرورة. React يقدم حلا لطيفا لإدارة الدولة لتطبيقات الويب الحديثة. يمكنك إنشاء حالة في مكون React بواسطة تعريف خاصية <code>state</code> في فئة المكون في <code>constructor</code> . يقوم هذا بتهيئة المكون <code>state</code> عند إنشائه. يجب تعيين خاصية <code>state</code> إلى <code>object</code> JavaScript. الإعلان عن هذا الشكل: <blockquote style=";text-align:right;direction:rtl"> this.state = { <br> // وصف الولاية الخاصة بك هنا <br> } يمكنك الوصول إلى كائن <code>state</code> طوال عمر المكون الخاص بك. يمكنك تحديثه ، وجعله في واجهة المستخدم الخاصة بك ، وتمريره على شكل دعائم لمكونات الطفل. يمكن أن يكون كائن <code>state</code> معقدًا أو بسيطًا مثلما تحتاج إليه. لاحظ أنه يجب إنشاء مكون فئة بتوسيع <code>React.Component</code> لإنشاء <code>state</code> مثل هذا. </blockquote></section>

## Instructions
<section id="instructions"> هناك عنصر في محرر التعليمات البرمجية التي تحاول لتقديم <code>name</code> العقار من في <code>state</code> . ومع ذلك ، لا توجد <code>state</code> محددة. قم بتهيئة المكون <code>state</code> في <code>constructor</code> وتعيين اسمك إلى خاصية <code>name</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن توجد <code>StatefulComponent</code> ثم تقديم.
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); return mockedComponent.find("StatefulComponent").length === 1; })(), "<code>StatefulComponent</code> should exist and render.");'
  - text: يجب أن يقدم <code>StatefulComponent</code> <code>div</code> و عنصر <code>h1</code> .
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); return mockedComponent.find("div").length === 1 && mockedComponent.find("h1").length === 1; })(), "<code>StatefulComponent</code> should render a <code>div</code> and an <code>h1</code> element.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); const initialState = mockedComponent.state(); return ( typeof initialState === "object" && typeof initialState.name === "string"); })(), "The state of <code>StatefulComponent</code> should be initialized with a property <code>name</code> set to a string.");'
  - text: ''
    testString: 'assert((function() { const mockedComponent = Enzyme.mount(React.createElement(StatefulComponent)); const initialState = mockedComponent.state(); return mockedComponent.find("h1").text() === initialState.name; })(), "The property <code>name</code> in the state of <code>StatefulComponent</code> should render in the <code>h1</code> element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here

  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
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
