---
id: 5a24c314108439a4d4036181
title: تقديم التصميمات الداخلي (Inline Styles)
challengeType: 6
forumTopicId: 301395
dashedName: introducing-inline-styles
---

# --description--

هناك مفاهيم معقدة أخرى تضيف قدرات قوية إلى رمز React الخاص بك. لكنك قد تتساءل عن المشكلة البسيطة لكيفية تصميم عناصر JSX التي تنشئها في React. على الأرجح أنت تعلم أنه لن يكون نفس الطريقة مع HTML بالضبط بسبب أختلاف <a href="/learn/front-end-development-libraries/react/define-an-html-class-in-jsx" target="_blank" rel="noopener noreferrer nofollow">الطريقة التي تطبق بها الفئات على عناصر JSX</a>.

إذا استرد التصميمات من ورقة التصميم، فإنها ليست مختلفة على الإطلاق. يمكنك تطبيق فئة على عنصر JSX الخاص بك باستخدام السمة `className`، وتطبيق التصميمات على الفئات في ورقة التصميمات الخاصة بك. وثمة خِيار آخر يتمثل في تطبيق تصميمات داخلية (inline styles) شائعة جدا في تطوير ReactJS.

يمكنك تطبيق التصميمات الداخلية (inline styles) على عناصر JSX مشابهة في كيفية تطبيق HTML، ولكن مع بعض الاختلافات JSX. إليك مثال لتصميم داخلي (inline styles) في HTML:

```jsx
<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
```

تستخدم عناصر JSX سمة `style` ولكن بسبب طريقة نقل JSX، لا يمكنك تعيين قيمة إلى `string`. بدلاً من ذلك، عيّنه مساوياً `object` من JavaScript. على سبيل المثال:

```jsx
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
```

لاحظ كيف تجمِل (camelCase) خاصية `fontSize`؟ هذا لأن React لن تقبل الهُوِيَّات بشكل kebab-case في كائن التصميم. سيقوم React بتطبيق اسم الخاصية الصحيح لنا في HTML.

# --instructions--

أضف خاصية `style` إلى `div` في محرر التعليمات البرمجية لإعطاء النص لون أحمر (red) وحجم خط يبلغ `72px`.

لاحظ أنه يمكنك اختياريا تعيين حجم الخط ليكون رقما، حذف وحدات `px`، أو كتابتها مثل `72px`.
# --hints--

يجب أن يكون المكون عنصر `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().type() === 'div';
  })()
);
```

يجب أن يكون نص عنصر `div` بلون `red`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return mockedComponent.children().props().style.color === 'red';
  })()
);
```

يجب أن يكون حجم الخط عنصر `div` بقيمة `72px`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(Colorful));
    return (
      mockedComponent.children().props().style.fontSize === 72 ||
      mockedComponent.children().props().style.fontSize === '72' ||
      mockedComponent.children().props().style.fontSize === '72px'
    );
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<Colorful />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div>Big Red</div>
    );
  }
};
```

# --solutions--

```jsx
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};
```
