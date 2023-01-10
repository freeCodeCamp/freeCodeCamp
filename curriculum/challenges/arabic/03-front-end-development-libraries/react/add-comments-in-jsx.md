---
id: 5a24bbe0dba28a8d3cbd4c5e
title: إضافة تعليقات في JSX
challengeType: 6
forumTopicId: 301376
dashedName: add-comments-in-jsx
---

# --description--

JSX هو بناء الجملة التي يتم تجميعها في JavaScript صالحة. في بعض الأحيان، للحصول على قراءة سلسة، قد تحتاج إلى إضافة تعليقات إلى الكود الخاص بك. مثل معظم لغات البرمجة، لدى JSX طريقتها الخاصة للقيام بذلك.

لوضع التعليقات داخل JSX، يمكنك استخدام بناء الجملة `{/* */}` حول نص التعليق.

# --instructions--

يحتوي محرر التعليمات البرمجية على عنصر JSX مماثل لما أنشأته في التحدي الأخير. أضف تعليق في مكان ما داخل عنصر `div` المقدم، دون تعديل العناصر `h1` أو `p` الموجودة.

# --hints--

يجب أن يُنتج `JSX` عنصر `div`.

```js
assert(JSX.type === 'div');
```

يجب أن يحتوي `div` على `h1` كالعنصر الأول.

```js
assert(JSX.props.children[0].type === 'h1');
```

يجب أن يحتوي `div` على `p` كالعنصر الثاني.

```js
assert(JSX.props.children[1].type === 'p');
```

يجب عدم تعديل العناصر `h1` و `p` الموجودة.

```js
assert(
  JSX.props.children[0].props.children === 'This is a block of JSX' &&
    JSX.props.children[1].props.children === "Here's a subtitle"
);
```

يجب أن يستخدم `JSX` لبناء تعليق صحيح.

```js
assert(/<div>[\s\S]*{\s*\/\*[\s\S]*\*\/\s*}[\s\S]*<\/div>/.test(code));
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(JSX, document.getElementById('root'))
```

## --seed-contents--

```jsx
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
```

# --solutions--

```jsx
const JSX = (
<div>
  <h1>This is a block of JSX</h1>
  { /* this is a JSX comment */ }
  <p>Here's a subtitle</p>
</div>);
```
