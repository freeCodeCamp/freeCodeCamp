---
id: 5a24c314108439a4d4036163
title: إنشاء مكون React
challengeType: 6
forumTopicId: 301386
dashedName: create-a-react-component
---

# --description--

الطريقة الأخرى لتعريف مكون React هي مع بناء `class` الجملة في ES6. في المثال التالي، `Kitten` يمد `React.Component`:

```jsx
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```

هذا ينشئ ES6 فئة `Kitten` التي توسع فئة `React.Component`. إذاً فئة `Kitten` لديها الآن إمكانية الوصول إلى العديد من ميزات React المفيدة، مثل حالة المحالية (local state) ودورة الحياة (lifecycle hooks). لا تقلق إذا لم تكن على دراية بهذه المصطلحات حتى الآن، فسيتم تغطيتها بمزيد من التفصيل في تحديات لاحقة. لاحظ أيضا أن فئة `Kitten` تحتوي على `constructor` معرف داخلها ويتصل بطريقة `super()`. إنها تستخدم `super()` للاتصال بمنشئ الفئة الأصلي، في هذه الحالة `React.Component`. الإنشاء هو طريقة خاصة تستخدم خلال تهيئة الكائنات التي يتم إنشاؤها باستخدام الكلمة الرئيسة `class`. من الأفضل استدعاء مكون `constructor` مع `super` ونقل `props` لكليهما. هذا يضمن أن يتم تهيئة المكون بشكل صحيح. في الوقت الحالي، أغرف أنه من المعيار أن يتم إدراج هذا التعليمات البرمجية (code). قريباً سترى استخدامات أخرى للبناء (constructor) وكذلك `props`.

# --instructions--

يعرف `MyComponent` في محرر التعليمات البرمجية (code editor) باستخدام بناء الفئة (class syntax). إنهاء كتابة طريقة `render` حتى ترجع عنصر `div` الذي يحتوي على `h1` بالنص `Hello React!`.

# --hints--

يجب أن ينتج مكون React عنصر `div`.

```js
assert(Enzyme.shallow(React.createElement(MyComponent)).type() === 'div');
```

يجب أن يوفر `div` عنصر `h1` العنوان داخله.

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.shallow(React.createElement(MyComponent)).html()
  )
);
```

عنصر العنوان `h1` يجب أن يحتوي على المقطع `Hello React!`.

```js
assert(
  Enzyme.shallow(React.createElement(MyComponent)).html() ===
    '<div><h1>Hello React!</h1></div>'
);
```

# --seed--

## --after-user-code--

```jsx
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```

## --seed-contents--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line



    // Change code above this line
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // Change code above this line
  }
};
```
