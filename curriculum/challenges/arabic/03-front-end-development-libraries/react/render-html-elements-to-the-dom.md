---
id: 5a24bbe0dba28a8d3cbd4c5f
title: أنتاج عناصر HTML في DOM
challengeType: 6
forumTopicId: 301406
dashedName: render-html-elements-to-the-dom
---

# --description--

حتى الآن، تعلمت أن JSX أداة مناسبة لكتابة HTML مقروءة داخل JavaScript. مع React، يمكننا تقديم JSX قاصدًا إلى HTML DOM باستخدام React الذي يقدم API المعروف باسم ReactDOM.

ReactDOM يوفر طريقة بسيطة لتقديم عناصر React إلى DOM التي تبدو مثل: `ReactDOM.render(componentToRender, targetNode)`, حيث الحَجَّة الأولى هي عنصر React أو المكون الذي تريد أن تنتجه، والحجة الثانية هي node DOM التي تريد تقديم المكون إليها.

كما تتوقع، `ReactDOM.render()` يجب أن يستدعى بعد إعلانات عناصر JSX، تماما مثل كيفية الإعلان عن المتغيرات قبل استخدامها.

# --instructions--

يحتوي محرر التعليمات البرمجية على مكون JSX بسيط. استخدم طريقة `ReactDOM.render()` لإضافة هذا المكون إلى الصفحة. يمكنك تمرير عناصر JSX المحددة قاصدًا كالحجة الأولى واستخدام `document.getElementById()` لتحديد DOM node لتقديمها إليها. هناك `div` مع `id='challenge-node'` متاح لك للاستخدام. تيقن من عدم تغيير ثابت `JSX`.

# --hints--

يجب أن يُنتج `JSX` عنصر `div`.

```js
assert(JSX.type === 'div');
```

يجب أن يحتوي `div` على علامة `h1` كالعنصر الأول.

```js
assert(JSX.props.children[0].type === 'h1');
```

يجب أن يحتوي `div` على `p` كالعنصر الثاني.

```js
assert(JSX.props.children[1].type === 'p');
```

يجب أن ينتج عنصر JSX المقدم إلى DOM node مع معرف `challenge-node`.

```js
assert(
  document.getElementById('challenge-node').childNodes[0].innerHTML ===
    '<h1>Hello World</h1><p>Lets render this to the DOM</p>'
);
```

# --seed--

## --seed-contents--

```jsx
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>Hello World</h1>
  <p>Lets render this to the DOM</p>
</div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));
```
