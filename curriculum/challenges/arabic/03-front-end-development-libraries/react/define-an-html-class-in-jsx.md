---
id: 5a24c314108439a4d4036160
title: تحديد فئة HTML في JSX
challengeType: 6
forumTopicId: 301393
dashedName: define-an-html-class-in-jsx
---

# --description--

الآن بعد أن أصبحت كتابة JSX مريحاً، قد تتساءل كيف تختلف عن HTML.

حتى الآن، قد يبدو أن HTML و JSX متماثلان تماما.

أحد الاختلافات الرئيسية في JSX هو أنه لم يعد بإمكانك استخدام كلمة `class` لتعريف فئات HTML. هذا لأن `class` هي كلمة محجوزة في JavaScript. بدلاً من ذلك، يستخدم JSX خاصية `className`.

في الواقع، اتفاقية تسمية جميع سمات HTML ومراجع الأحداث في JSX تصبح حالة جمال (camelCase). على سبيل المثال، حدث النقر في JSX هو `onClick` بدلاً من `onclick`. بالمثل، `onchange` يصبح `onChange`. وفي حين أن هذا فرق دقيق، فإن من المهم ألا يغيب عن بالك في المستقبل.

# --instructions--

أضف فئة `myDiv` ألى عنصر `div` المقدمة في كود JSX.

# --hints--

يجب أن يُنتج عنصر `div` من الثابت `JSX`.

```js
assert.strictEqual(JSX.type, 'div');
```

يجب أن يحتوي `div` على فئة من `myDiv`.

```js
assert.strictEqual(JSX.props.className, 'myDiv');
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
    <h1>Add a class to this div</h1>
  </div>
);
```

# --solutions--

```jsx
const JSX = (
<div className = 'myDiv'>
  <h1>Add a class to this div</h1>
</div>);
```
