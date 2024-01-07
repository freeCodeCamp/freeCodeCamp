---
id: 5a24c314108439a4d4036162
title: إنشاء مكون وظيفي عديم الحالة (Stateless Functional Component)
challengeType: 6
forumTopicId: 301392
dashedName: create-a-stateless-functional-component
---

# --description--

المكونات هي مركز React. كل شيء في React هو مكون وسوف تتعلم كيفية إنشاء مكون.

هناك طريقتان لإنشاء مكون React. الطريقة الأولى هي استخدام وظيفية JavaScript. تعريف المكون (component) بهذه الطريقة يخلق مكون *مكون وظيفي عديم الحالة (stateless functional component)*. وسيتم تناول مفهوم الحالة (state) في التطبيق في تحديات لاحقة. في الوقت الحاضر، فكر في المكون عديم الحالة (stateless component) كمكون يمكن أن يتلقى البيانات ويقدمها، ولكنه لا يدير أو يتتبع التغييرات في تلك البيانات. (سنقوم بتغطية الطريقة الثانية لإنشاء عنصر React في التحدي التالي.)

لإنشاء مكون مع وظيفة، يمكنك ببساطة كتابة دالة JavaScript التي تنتج إما JSX أو `null`. من الأمور المهمة التي نلاحظها أن React يتطلب اسم الوظيفية الخاص بك أن يبدأ بحرف كبير. إليك مثال لمكون وظيفي عديم الحالة (stateless functional component) يعيين فئة (class) من HTML في JSX:

```jsx
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

بعد أن يتم نقلها، سيحمل `<div>` فئة CSS من `customClass`.

لأن مكون JSX يمثل HTML، يمكنك وضع عدة مكونات معا لإنشاء صفحة HTML أكثر تعقيدا. وهذه واحدة من المزايا الرئيسية للهيكل المعماري للمكوّن (component architecture) الذي يوفره React. يسمح لك بتكوين واجهة المستخدم (UI) الخاصة بك من العديد من المكونات المنفصلة والمعزولة. وهذا يجعل من الأسهل بناء وصيانة واجهات المستخدم المعقدة (UI).

# --instructions--

يحتوي محرر التعليمات البرمجية على وظيفية تسمى `MyComponent`. أكمل هذه الوظيفة بحيث تنتج عنصر `div` واحد يحتوي على string من النص.

**ملاحظة:** يعدّ النص فرداً من عناصر `div`، لذلك لن تتمكن من استخدام علامة إغلاق ذاتي.

# --hints--

`MyComponent` يجب أن ينتج JSX.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.length === 1;
  })()
);
```

`MyComponent` يجب أن ينتج عنصر `div`.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.children().type() === 'div';
  })()
);
```

يجب أن يحتوي عنصر `div` على string من النص.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('div').text() !== '';
  })()
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
const MyComponent = function() {
  // Change code below this line



  // Change code above this line
}
```

# --solutions--

```jsx
const MyComponent = function() {
  // Change code below this line
  return (
    <div>
      Demo Solution
    </div>
  );
  // Change code above this line
}
```
