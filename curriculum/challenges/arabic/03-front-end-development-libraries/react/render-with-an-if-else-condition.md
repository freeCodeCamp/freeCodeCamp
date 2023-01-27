---
id: 5a24c314108439a4d4036184
title: أنتاج باستخدام شرط If-Else
challengeType: 6
forumTopicId: 301410
dashedName: render-with-an-if-else-condition
---

# --description--

طريقة أخرة لاستخدام JavaScript للتحكم في طريقة العرض المنشئة هو ربط العناصر التي تم إنتاجها بشرط. عندما يكون الشرط صحيحا (true)، يُعرض مكون. عندما تكون خاطئة (false)، إنها وجهة نظر مختلفة. يمكنك فعل ذلك باستخدام الشرط المعتادة `if/else` في طريقة `render()` لمكون React.

# --instructions--

يحتوي MyComponent على `boolean` في الحالة, التي تتتبع ما إذا كنت تريد عرض بعض العناصر في واجهة المستخدم (UI) أم لا. `button` يبدل حالة هذه القيمة. حالياً، ينتج نفس واجهة المستخدم (UI) في كل مرة. أعد كتابة طريقة `render()` مع بيان `if/else` بحيث إذا كان `display` هو `true`، أنشئ العلامة الحالية (current markup). خلاف ذلك، إرجاع العلامة دون عنصر `h1`.

**ملاحظة:** يجب أن تكتب `if/else` لتجتاز الاختبارات. ولن يمر استخدام ternary operator هنا.

# --hints--

`MyComponent` يجب أن يكون موجودا وينتج.

```js
assert(
  (function () {
    const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
    return mockedComponent.find('MyComponent').length === 1;
  })()
);
```

عندما يتم تعيين `display` إلى `true`، و سوف ينتج `div`، و`button`, و `h1`.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: true });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    mockedComponent.find('div').length === 1 &&
      mockedComponent.find('div').children().length === 2 &&
      mockedComponent.find('button').length === 1 &&
      mockedComponent.find('h1').length === 1
  );
};
```

عندما يتم تعيين `display` إلى `false`، يتم إنتاج `div` و `button` فقط.

```js
async () => {
  const waitForIt = (fn) =>
    new Promise((resolve, reject) => setTimeout(() => resolve(fn()), 250));
  const mockedComponent = Enzyme.mount(React.createElement(MyComponent));
  const state_1 = () => {
    mockedComponent.setState({ display: false });
    return waitForIt(() => mockedComponent);
  };
  const updated = await state_1();
  assert(
    mockedComponent.find('div').length === 1 &&
      mockedComponent.find('div').children().length === 1 &&
      mockedComponent.find('button').length === 1 &&
      mockedComponent.find('h1').length === 0
  );
};
```

يجب أن تستخدم طريقة العرض بيان `if/else` للتحقق من شرط `this.state.display`.

```js
(getUserInput) =>
  assert(
    getUserInput('index').includes('if') &&
      getUserInput('index').includes('else')
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
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line

    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         <h1>Displayed!</h1>
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
      display: true
    }
 this.toggleDisplay = this.toggleDisplay.bind(this);
 }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    // Change code below this line
    if (this.state.display) {
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           <h1>Displayed!</h1>
         </div>
      );
    } else {
      return (
        <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
         </div>
      );
    }
  }
};
```
