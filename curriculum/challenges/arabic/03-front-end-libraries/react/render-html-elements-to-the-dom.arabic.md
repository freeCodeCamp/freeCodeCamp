---
id: 5a24bbe0dba28a8d3cbd4c5f
title: Render HTML Elements to the DOM
challengeType: 6
videoUrl: ''
localeTitle: تقديم عناصر HTML إلى DOM
---

## Description
<section id="description"> حتى الآن ، تعلمت أن JSX هي أداة ملائمة لكتابة HTML قابل للقراءة في JavaScript. باستخدام React ، يمكننا تقديم JSX مباشرةً إلى HTML DOM باستخدام واجهة برمجة تطبيقات React التي تُعرف باسم ReactDOM. يقدم ReactDOM طريقة بسيطة لعرض عناصر <code>ReactDOM.render(componentToRender, targetNode)</code> DOM التي تبدو كما يلي: <code>ReactDOM.render(componentToRender, targetNode)</code> ، حيث تكون الوسيطة الأولى هي عنصر React أو المكون الذي تريد <code>ReactDOM.render(componentToRender, targetNode)</code> الثانية هي عقدة DOM التي تريد تقديم المكون إليها. كما هو متوقع ، يجب استدعاء <code>ReactDOM.render()</code> بعد تعريفات عناصر JSX ، تمامًا كما يجب أن تقوم بتعريف المتغيرات قبل استخدامها. </section>

## Instructions
<section id="instructions"> يحتوي محرر التعليمة البرمجية على مكون JSX بسيط. استخدم الأسلوب <code>ReactDOM.render()</code> لتقديم هذا المكون إلى الصفحة. يمكنك تمرير عناصر JSX المحددة مباشرة كوسيطة أولى واستخدام <code>document.getElementById()</code> لتحديد عقدة DOM لتقديمها. يوجد <code>div</code> به <code>id=&#39;challenge-node&#39;</code> متاح للاستخدام. تأكد من عدم تغيير ثابت <code>JSX</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب على <code>JSX</code> المستمر إرجاع عنصر <code>div</code> .
    testString: 'assert(JSX.type === "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: يجب أن يحتوي <code>div</code> على علامة <code>h1</code> باعتبارها العنصر الأول.
    testString: 'assert(JSX.props.children[0].type === "h1", "The <code>div</code> should contain an <code>h1</code> tag as the first element.");'
  - text: يجب أن يحتوي <code>div</code> على علامة <code>p</code> كعنصر ثانٍ.
    testString: 'assert(JSX.props.children[1].type === "p", "The <code>div</code> should contain a <code>p</code> tag as the second element.");'
  - text: يجب أن يتم تقديم عنصر JSX المقدم إلى عقدة DOM مع عقدة <code>challenge-node</code> الهوية.
    testString: 'assert(document.getElementById("challenge-node").childNodes[0].innerHTML === "<h1>Hello World</h1><p>Lets render this to the DOM</p>", "The provided JSX element should render to the DOM node with id <code>challenge-node</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
