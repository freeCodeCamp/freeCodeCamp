---
id: 5a24c314108439a4d4036171
title: أنتاج الحالة (State) في واجهة المستخدم (User Interface)
challengeType: 6
forumTopicId: 301409
dashedName: render-state-in-the-user-interface
---

# --description--

بمجرد تحديد الحالة الأولية للمكون (component's initial state)، يمكنك عرض أي جزء منه في واجهة المستخدم (UI) التي تنتجها. إذا أحتوى المكون على حالة، فسيكون لديه دائماً حق الوصول إلى البيانات في `state` بطريقته `render()`. يمكنك الوصول إلى البيانات باستخدام `this.state`.

إذا كنت ترغب في الوصول إلى قيمة الحالة (state) ضمن `return` من طريقة الإنتاج (render method)، يجب عليك إرفاق القيمة بأقواس منحنية (curly braces).

تكون `state` واحدة من أقوى خاصيات المكونات (components) في React. يتيح لك تتبع البيانات المهمة في التطبيق الخاص بك وتقديم واجهة المستخدم (UI) لاستجابه للتغييرات في هذه البيانات. إذا تغيرت بياناتك، سوف يتغير واجهة المستخدم (UI). يستخدم React ما يسمى "DOM" الافتراضي، لأتابع التغيرات خلف الكواليس. وعند تحديث بيانات الحالة (state), فإنها تؤدي إلى إعادة أنشاء المكونات (components) باستخدام تلك البيانات - بما في ذلك المكونات الفرعية (child components) التي تتلقى البيانات كمِيزة (prop). React يحدث DOM، ولكن فقط عند الضرورة. وهذا يعني أنه ليس عليك أن تقلق حول تغيير DOM. أنت ببساطة تعلن ما يجب أن تبدو عليه واجهة المستخدم (UI).

لاحظ أنه إذا إنشاءات مكون يحتوي على حالة، لا يوجد مكونات أخرى يدركوا `state` هذا المكون. تنعزل `state` الخاصة بها تماما، أو تكون محلية لذلك المكون (component)، إلا إذا أرسلت بيانات الحالة (state) إلى مكون الفرعي (child component) على هيئة `props`. مفهوم `state` المغلقة (encapsulated) مهم جدا لأنه يسمح لك بكتابة منطق معين، ثم احتواء هذا المنطق و عزله في مكان واحد في كودك.

# --instructions--

في محرر الكود، يحتوي `MyComponent` على حالة (state). حدد علامة `h1` في طريقة أنشاء المكون (component's render method) الذي تجعل قيمة `name` تُأخذ من حالة المكون (component's state).

**ملاحظة:** أن `h1` يأخذ القيمة من `state` ولا شيء آخر. في JSX، سيتم التعامل مع أي التعليمات البرمجية تكتبه بأقواس منحنية `{ }` على أنها JavaScript. إذاً للوصول إلى القيمة من `state` غلف المرجع (reference) في أقواس منحنية (curly braces).

# --hints--

يجب أن يكون لدي `MyComponent` هُوِيَّة (key) تسمى `name` بقيمة `freeCodeCamp` مخزنة في الحالة (state).

```js
assert(
  Enzyme.mount(React.createElement(MyComponent)).state('name') ===
    'freeCodeCamp'
);
```

`MyComponent` يجب أن يجعل عنصر `h1` عنوان مغلف في `div` واحد.

```js
assert(
  /<div><h1>.*<\/h1><\/div>/.test(
    Enzyme.mount(React.createElement(MyComponent)).html()
  )
);
```

يجب أن يحتوي عنصر العنوان `h1` المُنشئ على النص المنشئ من حالة المكون (component's state) فقط.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const first = () => {
    mockedComponent.setState({ name: 'TestName' });
    return waitForIt(() => mockedComponent.html());
  };
  const firstValue = await first();
  const getValue = firstValue.replace(/\s/g, '');
  assert(getValue === '<div><h1>TestName</h1></div>');
};
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
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }

        { /* Change code above this line */ }
      </div>
    );
  }
};
```

# --solutions--

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
```
